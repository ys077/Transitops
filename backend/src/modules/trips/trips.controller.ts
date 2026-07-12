import { createTripsService } from './trips.service';
import { prisma } from '../../prisma/client';
import { AuthRequest } from '../../middleware/auth';

const tripsService = createTripsService(prisma);

export function createTripsController(service = tripsService) {
  return {
    async create(req: AuthRequest, res: any, next: any) {
      try {
        const { source, destination, cargoWeightKg, plannedDistanceKm, vehicleId, driverId } = req.body;
        const createdBy = req.user?.userId || '00000000-0000-0000-0000-000000000000';
        const trip = await service.createTrip({
          source,
          destination,
          cargoWeightKg: Number(cargoWeightKg),
          plannedDistanceKm: Number(plannedDistanceKm),
          vehicleId,
          driverId,
          createdBy,
        });
        res.status(201).json(trip);
      } catch (err) {
        next(err);
      }
    },

    async list(req: any, res: any, next: any) {
      try {
        const { status } = req.query;
        const trips = await service.getTrips(status as string);
        res.status(200).json(trips);
      } catch (err) {
        next(err);
      }
    },

    async getById(req: any, res: any, next: any) {
      try {
        const { id } = req.params;
        const trip = await service.getTripById(id);
        res.status(200).json(trip);
      } catch (err) {
        next(err);
      }
    },

    async dispatch(req: AuthRequest, res: any, next: any) {
      try {
        const { id } = req.params;
        const performedById = req.user?.userId || '00000000-0000-0000-0000-000000000000';
        const updated = await service.dispatchTrip(id, performedById);
        res.status(200).json(updated);
      } catch (err) {
        next(err);
      }
    },
    async complete(req: AuthRequest, res: any, next: any) {
      try {
        const { id } = req.params;
        const { actualDistanceKm, fuelConsumedLiters } = req.body;
        const actualKm = Number(actualDistanceKm);
        if (Number.isNaN(actualKm)) throw new Error('actualDistanceKm must be a number');
        if (fuelConsumedLiters !== undefined && (typeof fuelConsumedLiters !== 'number' || fuelConsumedLiters < 0)) {
          throw new Error('fuelConsumedLiters must be a non-negative number when provided');
        }
        const performedById = req.user?.userId || '00000000-0000-0000-0000-000000000000';

        const result = await service.completeTrip(id, actualKm, performedById, fuelConsumedLiters);
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },
    async cancel(req: AuthRequest, res: any, next: any) {
      try {
        const { id } = req.params;
        const performedById = req.user?.userId || '00000000-0000-0000-0000-000000000000';
        const updated = await service.cancelTrip(id, performedById);
        res.status(200).json(updated);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const tripsController = createTripsController();
