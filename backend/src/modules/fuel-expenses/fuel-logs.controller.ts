import { createFuelLogsService } from './fuel-logs.service';
import { prisma } from '../../prisma/client';

const fuelLogsService = createFuelLogsService(prisma);

export function createFuelLogsController(service = fuelLogsService) {
  return {
    async create(req: any, res: any, next: any) {
      try {
        const { vehicleId, tripId, liters, cost, date } = req.body;
        const fuelLog = await service.createFuelLog({ vehicleId, tripId, liters: Number(liters), cost: Number(cost), date });
        res.status(201).json(fuelLog);
      } catch (err) {
        next(err);
      }
    },

    async getByVehicle(req: any, res: any, next: any) {
      try {
        const { vehicleId } = req.params;
        const fuelLogs = await service.getFuelLogsByVehicle(vehicleId);
        res.status(200).json(fuelLogs);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const fuelLogsController = createFuelLogsController();
