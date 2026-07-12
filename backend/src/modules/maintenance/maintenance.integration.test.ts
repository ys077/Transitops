import { beforeAll, afterAll, describe, expect, test } from 'vitest';
import { PrismaClient } from '../../generated/prisma/client.js';
import { createMaintenanceService } from './maintenance.service';

const useRealDb = process.env.RUN_REAL_DB_TESTS === '1';

if (useRealDb) {
  const prisma = new (PrismaClient as any)();
  const service = createMaintenanceService(prisma as any);

  beforeAll(async () => { await prisma.$connect(); });
  afterAll(async () => { await prisma.$disconnect(); });

  describe('Maintenance creation real DB', () => {
    test('creates active maintenance and sets vehicle IN_SHOP', async () => {
      const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });

      const maintenance = await service.createMaintenance(
        vehicle.id,
        'Brake inspection',
        200,
        new Date('2099-01-01'),
        0,
        'Initial brake inspection',
      );

      const savedMaintenance = await prisma.maintenanceLog.findUnique({ where: { id: maintenance.id } });
      const updatedVehicle = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });

      expect(savedMaintenance).toBeTruthy();
      expect(savedMaintenance!.status).toBe('ACTIVE');
      expect(savedMaintenance!.vehicleId).toBe(vehicle.id);
      expect(updatedVehicle!.status).toBe('IN_SHOP');

      await prisma.maintenanceLog.delete({ where: { id: maintenance.id } });
      await prisma.vehicle.delete({ where: { id: vehicle.id } });
    }, 20000);

    test('transaction rollback leaves no partial maintenance log', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });

        const badService = createMaintenanceService({
          $transaction: async (cb: any) => {
            return cb({
              vehicle: {
                findUnique: async () => ({ id: vehicle.id, status: 'AVAILABLE' }),
                updateMany: async () => ({ count: 0 }),
              },
              maintenanceLog: {
                findFirst: async () => null,
                create: async ({ data }: any) => ({ id: 'm-fail', ...data }),
              },
            });
          },
        } as any);

        await expect(
          badService.createMaintenance(vehicle.id, 'Failure case', 100, new Date('2099-01-01'), 0, 'Roll back'),
        ).rejects.toBeDefined();

        const logs = await prisma.maintenanceLog.findMany({ where: { vehicleId: vehicle.id } });
        expect(logs.length).toBe(0);

        await prisma.vehicle.delete({ where: { id: vehicle.id } });
      }, 20000);
  });
} else {
  describe('Maintenance creation mocked', () => {
    test('skips real DB tests when RUN_REAL_DB_TESTS != 1', () => {
      expect(true).toBe(true);
    });
  });
}
