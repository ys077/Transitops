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
    async dispatchTrip(id: string, performedById: string) {
      const trip = await prismaClient.trip.findUnique({
        where: { id },
        include: { vehicle: true, driver: true },
      });

      if (!trip) throw new TripNotFoundError(id);
      if (trip.status !== 'draft') {
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
          where: { id: tripInside.vehicle.id, status: 'available' },
          data: { status: 'on_trip' },
        });

        if (vehicleUpdate.count !== 1) {
          throw new ResourceUnavailableError('Vehicle not available for dispatch.');
        }

        const driverUpdate = await tx.driver.updateMany({
          where: { id: tripInside.driver.id, status: 'available' },
          data: { status: 'on_trip' },
        });

        if (driverUpdate.count !== 1) {
          throw new ResourceUnavailableError('Driver not available for dispatch.');
        }

        const updatedTrip = await tx.trip.update({
          where: { id },
          data: { status: 'dispatched', dispatchedAt: new Date() },
          include: { vehicle: true, driver: true },
        });

        await tx.auditLog.create({
          data: {
            entityType: 'TRIP',
            entityId: updatedTrip.id,
            action: 'DISPATCH',
            oldValue: { status: 'draft' },
            newValue: { status: 'dispatched' },
            performedBy: performedById,
          },
        });

        return updatedTrip;
      });

      return result;
    },
    async completeTrip(id: string, actualDistanceKm: number, performedById: string, fuelConsumedLiters?: number) {
      // Validate inputs
      if (typeof actualDistanceKm !== 'number' || Number.isNaN(actualDistanceKm) || actualDistanceKm < 0) {
        throw new Error('actualDistanceKm must be a non-negative number');
      }

      const result = await prismaClient.$transaction(async (tx: any) => {
        const tripInside = await tx.trip.findUnique({ where: { id }, include: { vehicle: true, driver: true } });
        if (!tripInside) throw new TripNotFoundError(id);

        if (tripInside.status !== 'dispatched') {
          throw new InvalidTripTransitionError('Only DISPATCHED trips can be completed.');
        }

        // Guarded update: vehicle must be ON_TRIP
        const vehicleUpdate = await tx.vehicle.updateMany({
          where: { id: tripInside.vehicle.id, status: 'on_trip' },
          data: { status: 'available', odometerKm: { increment: actualDistanceKm } },
        });
        if (vehicleUpdate.count !== 1) {
          throw new ResourceUnavailableError('Vehicle not available to complete trip.');
        }

        // Guarded update: driver must be ON_TRIP
        const driverUpdate = await tx.driver.updateMany({
          where: { id: tripInside.driver.id, status: 'on_trip' },
          data: { status: 'available' },
        });
        if (driverUpdate.count !== 1) {
          throw new ResourceUnavailableError('Driver not available to complete trip.');
        }

        // Update trip status to COMPLETED and persist completion data
        const updatedTrip = await tx.trip.update({
          where: { id },
          data: {
            status: 'completed',
            actualDistanceKm,
            fuelConsumedLiters: fuelConsumedLiters ?? null,
            completedAt: new Date(),
          },
          include: { vehicle: true, driver: true },
        });

        await tx.auditLog.create({
          data: {
            entityType: 'TRIP',
            entityId: updatedTrip.id,
            action: 'COMPLETE',
            oldValue: { status: 'dispatched' },
            newValue: { status: 'completed', actualDistanceKm, fuelConsumedLiters: fuelConsumedLiters ?? null },
            performedBy: performedById,
          },
        });

        return { trip: updatedTrip, actualDistanceKm, fuelConsumedLiters: fuelConsumedLiters ?? null };
      });

      return result;
    },

    async createTrip(payload: {
      source: string;
      destination: string;
      cargoWeightKg: number;
      plannedDistanceKm: number;
      vehicleId: string;
      driverId: string;
      createdBy: string;
    }) {
      const { source, destination, cargoWeightKg, plannedDistanceKm, vehicleId, driverId, createdBy } = payload;

      if (!source || typeof source !== 'string' || !source.trim()) {
        throw new Error('source is required');
      }
      if (!destination || typeof destination !== 'string' || !destination.trim()) {
        throw new Error('destination is required');
      }
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

      // Check rules
      const violations = evaluateTripCreationRules({
        cargoWeightKg,
        vehicle: {
          status: vehicle.status as any,
          maxLoadCapacityKg: vehicle.maxLoadCapacityKg,
        },
        driver: {
          status: driver.status as any,
          licenseExpiryDate: driver.licenseExpiryDate,
        },
        referenceDate: new Date(),
      });

      if (violations.length) {
        throw new TripRuleViolationError(violations);
      }

      return prismaClient.trip.create({
        data: {
          source,
          destination,
          cargoWeightKg,
          plannedDistanceKm,
          vehicleId,
          driverId,
          createdBy,
          status: 'draft',
        },
      });
    },

    async getTrips(status?: string) {
      return prismaClient.trip.findMany({
        where: status ? { status: status as any } : undefined,
        include: { vehicle: true, driver: true },
      });
    },

    async getTripById(id: string) {
      if (!id || typeof id !== 'string') {
        throw new Error('id is required');
      }

      const trip = await prismaClient.trip.findUnique({ 
        where: { id },
        include: { vehicle: true, driver: true },
      });
      if (!trip) {
        throw new TripNotFoundError(id);
      }

      return trip;
    },

    async cancelTrip(id: string, performedById: string) {
      const trip = await prismaClient.trip.findUnique({ where: { id }, include: { vehicle: true, driver: true } });
      if (!trip) throw new TripNotFoundError(id);

      // Only allow cancelling DISPATCHED trips. All other statuses are invalid.
      if (trip.status !== 'dispatched') {
        throw new InvalidTripTransitionError('Only DISPATCHED trips can be cancelled.');
      }

      // For DISPATCHED trips, atomically revert vehicle and driver to AVAILABLE
      const result = await prismaClient.$transaction(async (tx: any) => {
        const tripInside = await tx.trip.findUnique({ where: { id }, include: { vehicle: true, driver: true } });
        if (!tripInside) throw new TripNotFoundError(id);

        const vehicleUpdate = await tx.vehicle.updateMany({ where: { id: tripInside.vehicle.id, status: 'on_trip' }, data: { status: 'available' } });
        if (vehicleUpdate.count !== 1) {
          throw new ResourceUnavailableError('Vehicle not available to cancel trip.');
        }

        const driverUpdate = await tx.driver.updateMany({ where: { id: tripInside.driver.id, status: 'on_trip' }, data: { status: 'available' } });
        if (driverUpdate.count !== 1) {
          throw new ResourceUnavailableError('Driver not available to cancel trip.');
        }

        const updatedTrip = await tx.trip.update({ where: { id }, data: { status: 'cancelled' }, include: { vehicle: true, driver: true } });

        await tx.auditLog.create({
          data: {
            entityType: 'TRIP',
            entityId: updatedTrip.id,
            action: 'CANCEL',
            oldValue: { status: 'dispatched' },
            newValue: { status: 'cancelled' },
            performedBy: performedById,
          },
        });

        return updatedTrip;
      });

      return result;
    },
  };
}

export type TripsService = ReturnType<typeof createTripsService>;
