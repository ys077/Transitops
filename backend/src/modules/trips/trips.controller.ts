import { createTripsService } from './trips.service';
import { prisma } from '../../prisma/client';

const tripsService = createTripsService(prisma);

export function createTripsController(service = tripsService) {
  return {
    async create(req: any, res: any, next: any) {
      try {
        const { cargoWeightKg, vehicleId, driverId } = req.body;
        const trip = await service.createTrip({
          cargoWeightKg: Number(cargoWeightKg),
          vehicleId,
          driverId,
        });
        res.status(201).json(trip);
      } catch (err) {
        next(err);
      }
    },

    async list(req: any, res: any, next: any) {
      try {
        const trips = await service.getTrips();
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

    async dispatch(req: any, res: any, next: any) {
      try {
        const { id } = req.params;
        const updated = await service.dispatchTrip(id);
        res.status(200).json(updated);
      } catch (err) {
        next(err);
      }
    },
    async complete(req: any, res: any, next: any) {
      try {
        const { id } = req.params;
        const { finalOdometerKm, fuelConsumedLiters } = req.body;
        const finalKm = Number(finalOdometerKm);
        if (Number.isNaN(finalKm)) throw new Error('finalOdometerKm must be a number');
        if (fuelConsumedLiters !== undefined && (typeof fuelConsumedLiters !== 'number' || fuelConsumedLiters < 0)) {
          throw new Error('fuelConsumedLiters must be a non-negative number when provided');
        }

        const result = await service.completeTrip(id, finalKm, fuelConsumedLiters);
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },
    async cancel(req: any, res: any, next: any) {
      try {
        const { id } = req.params;
        const updated = await service.cancelTrip(id);
        res.status(200).json(updated);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const tripsController = createTripsController();
