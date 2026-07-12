import {
  TripRuleViolationError,
  InvalidTripTransitionError,
  ResourceUnavailableError,
  TripNotFoundError,
} from './trips.errors';
import { evaluateTripCreationRules } from './trips.rule-engine';

// Note: the Prisma client must be provided explicitly. This avoids importing
// the real Prisma client at module load time so unit tests can pass a mock.
export function createTripsService(prismaClient: any) {
  return {
    async dispatchTrip(id: string) {
      const trip = await prismaClient.trip.findUnique({
        where: { id },
        include: { vehicle: true, driver: true },
      });

      if (!trip) throw new TripNotFoundError(id);
      if (trip.status !== 'DRAFT') {
        throw new InvalidTripTransitionError('Only DRAFT trips can be dispatched.');
      }

      // Re-run business rules before dispatch
      const violations = evaluateTripCreationRules({
        cargoWeightKg: trip.cargoWeightKg ?? 0,
        vehicle: {
          status: trip.vehicle.status as any,
          maxLoadCapacityKg: trip.vehicle.maxLoadCapacityKg,
        },
        driver: {
          status: trip.driver.status as any,
          licenseExpiryDate: trip.driver.licenseExpiryDate,
        },
        referenceDate: new Date(),
      });

      if (violations.length) {
        throw new TripRuleViolationError(violations);
      }

      // Atomic resource claim + trip update inside a transaction
      const result = await prismaClient.$transaction(async (tx: any) => {
        const tripInside = await tx.trip.findUnique({
          where: { id },
          include: { vehicle: true, driver: true },
        });

        if (!tripInside) throw new TripNotFoundError(id);

        const vehicleUpdate = await tx.vehicle.updateMany({
          where: { id: tripInside.vehicle.id, status: 'AVAILABLE' },
          data: { status: 'ON_TRIP' },
        });

        if (vehicleUpdate.count !== 1) {
          throw new ResourceUnavailableError('Vehicle not available for dispatch.');
        }

        const driverUpdate = await tx.driver.updateMany({
          where: { id: tripInside.driver.id, status: 'AVAILABLE' },
          data: { status: 'ON_TRIP' },
        });

        if (driverUpdate.count !== 1) {
          throw new ResourceUnavailableError('Driver not available for dispatch.');
        }

        const updatedTrip = await tx.trip.update({
          where: { id },
          data: { status: 'DISPATCHED', dispatchedAt: new Date() },
          include: { vehicle: true, driver: true },
        });

        return updatedTrip;
      });

      return result;
    },
    async completeTrip(id: string, finalOdometerKm: number, fuelConsumedLiters?: number) {
      // Validate inputs
      if (typeof finalOdometerKm !== 'number' || Number.isNaN(finalOdometerKm)) {
        throw new Error('finalOdometerKm must be a valid number');
      }

      const result = await prismaClient.$transaction(async (tx: any) => {
        const tripInside = await tx.trip.findUnique({ where: { id }, include: { vehicle: true, driver: true } });
        if (!tripInside) throw new TripNotFoundError(id);

        if (tripInside.status !== 'DISPATCHED') {
          throw new InvalidTripTransitionError('Only DISPATCHED trips can be completed.');
        }

        const vehicleOdometer = tripInside.vehicle.odometerKm ?? 0;
        if (finalOdometerKm < vehicleOdometer) {
          throw new Error('finalOdometerKm must be greater than or equal to vehicle.odometerKm');
        }

        // Guarded update: vehicle must be ON_TRIP
        const vehicleUpdate = await tx.vehicle.updateMany({
          where: { id: tripInside.vehicle.id, status: 'ON_TRIP' },
          data: { status: 'AVAILABLE', odometerKm: finalOdometerKm },
        });
        if (vehicleUpdate.count !== 1) {
          throw new ResourceUnavailableError('Vehicle not available to complete trip.');
        }

        // Guarded update: driver must be ON_TRIP
        const driverUpdate = await tx.driver.updateMany({
          where: { id: tripInside.driver.id, status: 'ON_TRIP' },
          data: { status: 'AVAILABLE' },
        });
        if (driverUpdate.count !== 1) {
          throw new ResourceUnavailableError('Driver not available to complete trip.');
        }

        // Update trip status to COMPLETED and persist completion data
        const actualDistanceKm = finalOdometerKm - vehicleOdometer;
        const updatedTrip = await tx.trip.update({
          where: { id },
          data: {
            status: 'COMPLETED',
            actualDistanceKm,
            fuelConsumedLiters: fuelConsumedLiters ?? null,
            completedAt: new Date(),
          },
          include: { vehicle: true, driver: true },
        });

        return { trip: updatedTrip, actualDistanceKm, fuelConsumedLiters: fuelConsumedLiters ?? null };
      });

      return result;
    },

    async createTrip(payload: {
      cargoWeightKg: number;
      vehicleId: string;
      driverId: string;
    }) {
      const { cargoWeightKg, vehicleId, driverId } = payload;

      if (typeof cargoWeightKg !== 'number' || Number.isNaN(cargoWeightKg) || cargoWeightKg < 0) {
        throw new Error('cargoWeightKg must be a non-negative number');
      }
      if (!vehicleId || typeof vehicleId !== 'string') {
        throw new Error('vehicleId is required');
      }
      if (!driverId || typeof driverId !== 'string') {
        throw new Error('driverId is required');
      }

      const vehicle = await prismaClient.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) {
        throw new Error(`Vehicle ${vehicleId} not found`);
      }

      const driver = await prismaClient.driver.findUnique({ where: { id: driverId } });
      if (!driver) {
        throw new Error(`Driver ${driverId} not found`);
      }

      return prismaClient.trip.create({
        data: {
          cargoWeightKg,
          vehicleId,
          driverId,
        },
      });
    },

    async getTrips() {
      return prismaClient.trip.findMany();
    },

    async getTripById(id: string) {
      if (!id || typeof id !== 'string') {
        throw new Error('id is required');
      }

      const trip = await prismaClient.trip.findUnique({ where: { id } });
      if (!trip) {
        throw new TripNotFoundError(id);
      }

      return trip;
    },

    async cancelTrip(id: string) {
      const trip = await prismaClient.trip.findUnique({ where: { id }, include: { vehicle: true, driver: true } });
      if (!trip) throw new TripNotFoundError(id);

      // Only allow cancelling DISPATCHED trips. All other statuses are invalid.
      if (trip.status !== 'DISPATCHED') {
        throw new InvalidTripTransitionError('Only DISPATCHED trips can be cancelled.');
      }

      // For DISPATCHED trips, atomically revert vehicle and driver to AVAILABLE
      const result = await prismaClient.$transaction(async (tx: any) => {
        const tripInside = await tx.trip.findUnique({ where: { id }, include: { vehicle: true, driver: true } });
        if (!tripInside) throw new TripNotFoundError(id);

        const vehicleUpdate = await tx.vehicle.updateMany({ where: { id: tripInside.vehicle.id, status: 'ON_TRIP' }, data: { status: 'AVAILABLE' } });
        if (vehicleUpdate.count !== 1) {
          throw new ResourceUnavailableError('Vehicle not available to cancel trip.');
        }

        const driverUpdate = await tx.driver.updateMany({ where: { id: tripInside.driver.id, status: 'ON_TRIP' }, data: { status: 'AVAILABLE' } });
        if (driverUpdate.count !== 1) {
          throw new ResourceUnavailableError('Driver not available to cancel trip.');
        }

        const updatedTrip = await tx.trip.update({ where: { id }, data: { status: 'CANCELLED' }, include: { vehicle: true, driver: true } });
        return updatedTrip;
      });

      return result;
    },
  };
}

export type TripsService = ReturnType<typeof createTripsService>;
