import {
  MaintenanceValidationError,
  ActiveMaintenanceExistsError,
  MaintenanceNotFoundError,
  InvalidMaintenanceTransitionError,
} from './maintenance.errors';

export function createMaintenanceService(prismaClient: any) {
  return {
    async createMaintenance(
      vehicleId: string,
      type: string,
      cost: number,
      scheduledDate: Date | string,
      odometerAtService: number,
      description?: string,
    ) {
      if (!vehicleId) {
        throw new MaintenanceValidationError('vehicleId is required');
      }
      if (!type || typeof type !== 'string' || !type.trim()) {
        throw new MaintenanceValidationError('type is required');
      }
      if (typeof cost !== 'number' || Number.isNaN(cost)) {
        throw new MaintenanceValidationError('cost is required and must be a valid number');
      }
      const scheduled = new Date(scheduledDate);
      if (Number.isNaN(scheduled.getTime())) {
        throw new MaintenanceValidationError('scheduledDate is required and must be a valid date');
      }
      if (!Number.isInteger(odometerAtService) || odometerAtService < 0) {
        throw new MaintenanceValidationError('odometerAtService is required and must be a non-negative integer');
      }
      if (description !== undefined && typeof description !== 'string') {
        throw new MaintenanceValidationError('description must be a string when provided');
      }

      return prismaClient.$transaction(async (tx: any) => {
        const vehicle = await tx.vehicle.findUnique({ where: { id: vehicleId } });
        if (!vehicle) {
          throw new MaintenanceValidationError(`Vehicle ${vehicleId} not found`);
        }

        if (vehicle.status === 'ON_TRIP') {
          throw new MaintenanceValidationError('Cannot create maintenance for a vehicle that is on trip.');
        }

        if (vehicle.status === 'RETIRED') {
          throw new MaintenanceValidationError('Cannot create maintenance for a retired vehicle.');
        }

        const activeMaintenance = await tx.maintenanceLog.findFirst({
          where: { vehicleId, status: 'ACTIVE' },
        });

        if (activeMaintenance) {
          throw new ActiveMaintenanceExistsError('An active maintenance log already exists for this vehicle.');
        }

        const maintenanceLog = await tx.maintenanceLog.create({
          data: {
            vehicleId,
            type: type.trim(),
            description: description?.trim() || null,
            cost: cost.toString(),
            scheduledDate: scheduled,
            odometerAtService,
            status: 'ACTIVE',
          },
        });

        const vehicleUpdate = await tx.vehicle.updateMany({
          where: { id: vehicleId, status: 'AVAILABLE' },
          data: { status: 'IN_SHOP' },
        });

        if (vehicleUpdate.count !== 1) {
          throw new MaintenanceValidationError('Vehicle status could not be updated to IN_SHOP.');
        }

        return maintenanceLog;
      });
    },

    async closeMaintenance(id: string) {
      if (!id) {
        throw new MaintenanceValidationError('Maintenance id is required');
      }

      return prismaClient.$transaction(async (tx: any) => {
        const maintenance = await tx.maintenanceLog.findUnique({
          where: { id },
          include: { vehicle: true },
        });

        if (!maintenance) {
          throw new MaintenanceNotFoundError(`Maintenance ${id} not found`);
        }

        if (maintenance.status !== 'ACTIVE') {
          throw new InvalidMaintenanceTransitionError('Only ACTIVE maintenance can be closed.');
        }

        const otherActive = await tx.maintenanceLog.findFirst({
          where: {
            vehicleId: maintenance.vehicleId,
            status: 'ACTIVE',
            NOT: { id },
          },
        });

        const closedMaintenance = await tx.maintenanceLog.update({
          where: { id },
          data: {
            status: 'CLOSED',
            closedDate: new Date(),
          },
        });

        if (maintenance.vehicle.status !== 'RETIRED') {
          const targetStatus = otherActive ? 'IN_SHOP' : 'AVAILABLE';
          await tx.vehicle.update({
            where: { id: maintenance.vehicleId },
            data: { status: targetStatus },
          });
        }

        return closedMaintenance;
      });
    },
  };
}

export type MaintenanceService = ReturnType<typeof createMaintenanceService>;
