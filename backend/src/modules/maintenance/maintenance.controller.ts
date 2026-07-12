import { createMaintenanceService } from './maintenance.service';
import { prisma } from '../../prisma/client';

const maintenanceService = createMaintenanceService(prisma);

export function createMaintenanceController(service = maintenanceService) {
  return {
    async create(req: any, res: any, next: any) {
      try {
        const { vehicleId, type, cost, scheduledDate, odometerAtService, description } = req.body;
        const maintenanceLog = await service.createMaintenance(
          vehicleId,
          type,
          Number(cost),
          scheduledDate,
          Number(odometerAtService),
          description,
        );
        res.status(201).json(maintenanceLog);
      } catch (err) {
        next(err);
      }
    },
    async close(req: any, res: any, next: any) {
      try {
        const id = req.params.id as string;
        const maintenanceLog = await service.closeMaintenance(id);
        res.status(200).json(maintenanceLog);
      } catch (err) {
        next(err);
      }
    },
    async list(req: any, res: any, next: any) {
      try {
        const logs = await prisma.maintenanceLog.findMany({
          include: { vehicle: true },
          orderBy: { createdAt: 'desc' }
        });
        res.status(200).json(logs);
      } catch (err) {
        next(err);
      }
    }
  };
}

export const maintenanceController = createMaintenanceController();
