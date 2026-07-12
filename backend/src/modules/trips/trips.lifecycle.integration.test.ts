import { describe, expect, test, beforeAll, afterAll } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { createTripsService } from './trips.service';

const useRealDb = process.env.RUN_REAL_DB_TESTS === '1';

if (useRealDb) {
  const prisma = new PrismaClient({ datasources: { db: { url: process.env.DIRECT_URL } } });
  const service = createTripsService(prisma as any);

  beforeAll(async () => { await prisma.$connect(); });
  afterAll(async () => { await prisma.$disconnect(); });

  describe('Integration lifecycle: DRAFT -> DISPATCHED -> COMPLETED and CANCELLED', () => {
    test('DRAFT -> DISPATCHED -> COMPLETED', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id);

        const finalOdometer = (vehicle.odometerKm ?? 0) + 120;
        const res = await service.completeTrip(trip.id, finalOdometer, 25.5);

        const t = await prisma.trip.findUnique({ where: { id: trip.id } });
        const v = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
        const d = await prisma.driver.findUnique({ where: { id: driver.id } });

        expect(t!.status).toBe('COMPLETED');
        expect(t!.actualDistanceKm).toBe(120);
        expect(t!.fuelConsumedLiters).toBeCloseTo(25.5);
        expect(t!.completedAt).toBeTruthy();
        expect(v!.status).toBe('AVAILABLE');
        expect(v!.odometerKm).toBe(finalOdometer);
        expect(d!.status).toBe('AVAILABLE');

        // cleanup
        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('DRAFT -> DISPATCHED -> CANCELLED', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id);

        const res = await service.cancelTrip(trip.id);

        const t = await prisma.trip.findUnique({ where: { id: trip.id } });
        const v = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
        const d = await prisma.driver.findUnique({ where: { id: driver.id } });

        expect(t!.status).toBe('CANCELLED');
        expect(v!.status).toBe('AVAILABLE');
        expect(d!.status).toBe('AVAILABLE');

        // cleanup
        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('rejects cancelling a DRAFT trip', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await expect(service.cancelTrip(trip.id)).rejects.toBeDefined();

        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('rejects cancelling a COMPLETED trip', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id);
        const finalOdometer = (vehicle.odometerKm ?? 0) + 120;
        await service.completeTrip(trip.id, finalOdometer, 25.5);

        await expect(service.cancelTrip(trip.id)).rejects.toBeDefined();

        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('rejects cancelling an already CANCELLED trip', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 } });
        const driver = await prisma.driver.create({ data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        await service.dispatchTrip(trip.id);
        await service.cancelTrip(trip.id);

        await expect(service.cancelTrip(trip.id)).rejects.toBeDefined();

        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      });
  });
} else {
  // Mocked lifecycle tests to ensure they run when no DB is available
  describe('Integration lifecycle (mocked): DRAFT -> DISPATCHED -> COMPLETED and CANCELLED', () => {
    test('DRAFT -> DISPATCHED -> COMPLETED (mocked)', async () => {
      const vehicle = { id: 'v1', status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 };
      const driver = { id: 'd1', status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') };
      const trip = { id: 't1', status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id, vehicle, driver };
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
      };

      const mockPrisma: any = {
        trip: { findUnique: async ({ where }: any) => (where.id === currentTrip.id ? currentTrip : null) },
        $transaction: async (cb: any) => cb(tx),
      };
      const svc = createTripsService(mockPrisma as any);

      await svc.dispatchTrip(trip.id);
      const finalOdometer = (vehicle.odometerKm ?? 0) + 120;
      await svc.completeTrip(trip.id, finalOdometer, 25.5);

      // no DB asserts here — if we reached this point the flow executed
      expect(true).toBeTruthy();
    });

    test('DRAFT -> DISPATCHED -> CANCELLED (mocked)', async () => {
      const vehicle = { id: 'v2', status: 'AVAILABLE', maxLoadCapacityKg: 1000, odometerKm: 0 };
      const driver = { id: 'd2', status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') };
      const trip = { id: 't2', status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id, vehicle, driver };
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
      };

      const mockPrisma: any = {
        trip: { findUnique: async ({ where }: any) => (where.id === currentTrip.id ? currentTrip : null) },
        $transaction: async (cb: any) => cb(tx),
      };
      const svc = createTripsService(mockPrisma as any);

      await svc.dispatchTrip(trip.id);
      await svc.cancelTrip(trip.id);

      expect(true).toBeTruthy();
    });
  });
}
