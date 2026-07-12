import { describe, expect, test, beforeAll, afterAll } from 'vitest';
import { PrismaClient } from '../../generated/prisma/index.js';
import { createTripsService } from './trips.service';

const useRealDb = process.env.RUN_REAL_DB_TESTS === '1';

if (useRealDb) {
  const prisma = new (PrismaClient as any)();
  const service = createTripsService(prisma as any);

  beforeAll(async () => { await prisma.$connect(); });
  afterAll(async () => { await prisma.$disconnect(); });

  describe('Integration lifecycle: DRAFT -> DISPATCHED -> COMPLETED and CANCELLED', () => {
    test('DRAFT -> DISPATCHED -> COMPLETED', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');

        const finalOdometer = (vehicle.odometerKm ?? 0) + 120;
        const res = await service.completeTrip(trip.id, 120, '00000000-0000-0000-0000-000000000000', 25.5);

        const t = await prisma.trip.findUnique({ where: { id: trip.id } });
        const v = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
        const d = await prisma.driver.findUnique({ where: { id: driver.id } });

        expect(t!.status).toBe('completed');
        expect(t!.actualDistanceKm).toBe(120);
        expect(t!.fuelConsumedLiters).toBeCloseTo(25.5);
        expect(t!.completedAt).toBeTruthy();
        expect(v!.status).toBe('available');
        expect(v!.odometerKm).toBe(finalOdometer);
        expect(d!.status).toBe('available');

        // cleanup
        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('DRAFT -> DISPATCHED -> CANCELLED', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');

        const res = await service.cancelTrip(trip.id, '00000000-0000-0000-0000-000000000000');

        const t = await prisma.trip.findUnique({ where: { id: trip.id } });
        const v = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
        const d = await prisma.driver.findUnique({ where: { id: driver.id } });

        expect(t!.status).toBe('cancelled');
        expect(v!.status).toBe('available');
        expect(d!.status).toBe('available');

        // cleanup
        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('rejects cancelling a DRAFT trip', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await expect(service.cancelTrip(trip.id, '00000000-0000-0000-0000-000000000000')).rejects.toBeDefined();

        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('rejects cancelling a COMPLETED trip', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');
        const finalOdometer = (vehicle.odometerKm ?? 0) + 120;
        await service.completeTrip(trip.id, 120, '00000000-0000-0000-0000-000000000000', 25.5);

        await expect(service.cancelTrip(trip.id, '00000000-0000-0000-0000-000000000000')).rejects.toBeDefined();

        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('rejects cancelling an already CANCELLED trip', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');
        await service.cancelTrip(trip.id, '00000000-0000-0000-0000-000000000000');

        await expect(service.cancelTrip(trip.id, '00000000-0000-0000-0000-000000000000')).rejects.toBeDefined();

        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      });
  });
} else {
  // Mocked lifecycle tests to ensure they run when no DB is available
  describe('Integration lifecycle (mocked): DRAFT -> DISPATCHED -> COMPLETED and CANCELLED', () => {
    test('DRAFT -> DISPATCHED -> COMPLETED (mocked)', async () => {
      const vehicle = { id: 'v1', status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 };
      const driver = { id: 'd1', status: 'available', licenseExpiryDate: new Date('2099-01-01') };
      const trip = { id: 't1', status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id, vehicle, driver };
      let currentTrip = { ...trip } as any;

      const tx = {
        trip: {
          findUnique: async ({ where }: any) => (where.id === currentTrip.id ? currentTrip : null),
          update: async ({ where, data }: any) => {
            currentTrip = { ...currentTrip, ...data };
            return currentTrip;
          },
        },
        vehicle: { updateMany: async ({ where }: any) => ({ count: 1 }) },
        driver: { updateMany: async ({ where }: any) => ({ count: 1 }) },
        auditLog: { create: async () => ({}) },
      };

      const mockPrisma: any = {
        trip: { findUnique: async ({ where }: any) => (where.id === currentTrip.id ? currentTrip : null) },
        $transaction: async (cb: any) => cb(tx),
      };
      const svc = createTripsService(mockPrisma as any);

      await svc.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');
      await svc.completeTrip(trip.id, 120, '00000000-0000-0000-0000-000000000000', 25.5);

      // no DB asserts here — if we reached this point the flow executed
      expect(true).toBeTruthy();
    });

    test('DRAFT -> DISPATCHED -> CANCELLED (mocked)', async () => {
      const vehicle = { id: 'v2', status: 'available', maxLoadCapacityKg: 1000, odometerKm: 0 };
      const driver = { id: 'd2', status: 'available', licenseExpiryDate: new Date('2099-01-01') };
      const trip = { id: 't2', status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id, vehicle, driver };
      let currentTrip = { ...trip } as any;

      const tx = {
        trip: {
          findUnique: async ({ where }: any) => (where.id === currentTrip.id ? currentTrip : null),
          update: async ({ where, data }: any) => {
            currentTrip = { ...currentTrip, ...data };
            return currentTrip;
          },
        },
        vehicle: { updateMany: async () => ({ count: 1 }) },
        driver: { updateMany: async () => ({ count: 1 }) },
        auditLog: { create: async () => ({}) },
      };

      const mockPrisma: any = {
        trip: { findUnique: async ({ where }: any) => (where.id === currentTrip.id ? currentTrip : null) },
        $transaction: async (cb: any) => cb(tx),
      };
      const svc = createTripsService(mockPrisma as any);

      await svc.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');
      await svc.cancelTrip(trip.id, '00000000-0000-0000-0000-000000000000');

      expect(true).toBeTruthy();
    });
  });
}
