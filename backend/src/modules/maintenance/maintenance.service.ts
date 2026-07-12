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
      performedBy: string,
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

        if (vehicle.status === 'on_trip') {
          throw new MaintenanceValidationError('Cannot create maintenance for a vehicle that is on trip.');
        }

        if (vehicle.status === 'retired') {
          throw new MaintenanceValidationError('Cannot create maintenance for a retired vehicle.');
        }

        const activeMaintenance = await tx.maintenanceLog.findFirst({
          where: { vehicleId, status: 'active' },
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
            status: 'active',
          },
        });

        const vehicleUpdate = await tx.vehicle.updateMany({
          where: { id: vehicleId, status: 'available' },
          data: { status: 'in_shop' },
        });

        if (vehicleUpdate.count !== 1) {
          throw new MaintenanceValidationError('Vehicle status could not be updated to IN_SHOP.');
        }

        await tx.auditLog.create({
          data: {
            entityType: 'Vehicle',
            entityId: vehicleId,
            action: 'MAINTENANCE_STARTED',
            oldValue: { status: vehicle.status },
            newValue: { status: 'in_shop' },
            performedBy,
          },
        });

        return maintenanceLog;
      });
    },

    async closeMaintenance(id: string, performedBy: string) {
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

        if (maintenance.status !== 'active') {
          throw new InvalidMaintenanceTransitionError('Only ACTIVE maintenance can be closed.');
        }

        const otherActive = await tx.maintenanceLog.findFirst({
          where: {
            vehicleId: maintenance.vehicleId,
            status: 'active',
            NOT: { id },
          },
        });

        const closedMaintenance = await tx.maintenanceLog.update({
          where: { id },
          data: {
            status: 'closed',
            closedDate: new Date(),
          },
        });

        if (maintenance.vehicle.status !== 'retired') {
          const targetStatus = otherActive ? 'in_shop' : 'available';
          if (maintenance.vehicle.status !== targetStatus) {
            await tx.vehicle.update({
              where: { id: maintenance.vehicleId },
              data: { status: targetStatus },
            });

            await tx.auditLog.create({
              data: {
                entityType: 'Vehicle',
                entityId: maintenance.vehicleId,
                action: 'MAINTENANCE_CLOSED',
                oldValue: { status: maintenance.vehicle.status },
                newValue: { status: targetStatus },
                performedBy,
              },
            });
          }
        }

        return closedMaintenance;
      });
    },
  };
}

export type MaintenanceService = ReturnType<typeof createMaintenanceService>;
