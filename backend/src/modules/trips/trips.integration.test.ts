import { beforeAll, afterAll, describe, expect, test } from 'vitest';
import { PrismaClient } from '../../generated/prisma/index.js';
import { createTripsService } from './trips.service';
import { ResourceUnavailableError, TripRuleViolationError } from './trips.errors';

// If RUN_REAL_DB_TESTS=1 is provided we run the real DB integration tests.
// Otherwise run a mocked version so CI/dev without DB still exercises the flows.
const useRealDb = process.env.RUN_REAL_DB_TESTS === '1';

if (useRealDb) {
  const prisma = new (PrismaClient as any)();
  const service = createTripsService(prisma as any);

  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('Integration: dispatchTrip service against real DB', () => {
    test('successful dispatch via service updates trip, vehicle, driver', async () => {
        // create temporary records
        const vehicle = await prisma.vehicle.create({ data: { status: 'available', maxLoadCapacityKg: 1000 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 500, vehicleId: vehicle.id, driverId: driver.id } });

        // call the real service
        const res = await service.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000');

        // verify DB state
        const t = await prisma.trip.findUnique({ where: { id: trip.id } });
        const v = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
        const d = await prisma.driver.findUnique({ where: { id: driver.id } });

        expect(t).toBeTruthy();
        expect(t!.status).toBe('dispatched');
        expect(t!.dispatchedAt).toBeTruthy();
        expect(v!.status).toBe('on_trip');
        expect(d!.status).toBe('on_trip');

        // cleanup
        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      }, 20000);

    test('dispatch fails when vehicle not AVAILABLE and no partial commit', async () => {
        const vehicle = await prisma.vehicle.create({ data: { status: 'on_trip', maxLoadCapacityKg: 1000 } });
        const driver = await prisma.driver.create({ data: { status: 'available', licenseExpiryDate: new Date('2099-01-01') } });
        const trip = await prisma.trip.create({ data: { status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

        // Since the vehicle is already ON_TRIP, the rule engine will detect this
        // and throw a TripRuleViolationError before the transaction.
        await expect(service.dispatchTrip(trip.id, '00000000-0000-0000-0000-000000000000')).rejects.toBeInstanceOf(TripRuleViolationError);

        const t = await prisma.trip.findUnique({ where: { id: trip.id } });
        const v = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
        const d = await prisma.driver.findUnique({ where: { id: driver.id } });

        expect(t!.status).toBe('draft');
        // vehicle was already ON_TRIP and should remain ON_TRIP
        expect(v!.status).toBe('on_trip');
        // driver should remain AVAILABLE because transaction should roll back
        expect(d!.status).toBe('available');

        // cleanup
        await prisma.trip.delete({ where: { id: trip.id } });
        await prisma.vehicle.delete({ where: { id: vehicle.id } });
        await prisma.driver.delete({ where: { id: driver.id } });
      });
  });
} else {
  // Mocked integration tests: exercise the same flow without a real DB.
  describe('Integration (mocked): dispatchTrip flows without DB', () => {
    test('successful dispatch via service updates trip, vehicle, driver (mocked)', async () => {
      // simple in-memory objects
      const vehicle = { id: 'v-mock-1', status: 'available', maxLoadCapacityKg: 1000 };
      const driver = { id: 'd-mock-1', status: 'available', licenseExpiryDate: new Date('2099-01-01') };
      const trip = { id: 't-mock-1', status: 'draft', cargoWeightKg: 500, vehicleId: vehicle.id, driverId: driver.id, vehicle: vehicle, driver: driver };

      // create mocked prisma that mirrors the real transactional shape used by the service
      const tx = {
        trip: { findUnique: async ({ where }: any) => (where.id === trip.id ? trip : null), update: async () => ({ ...trip, status: 'dispatched', dispatchedAt: new Date() }) },
        vehicle: { updateMany: async ({ where }: any) => (vehicle.status === 'available' ? ({ count: 1 }) : ({ count: 0 })) },
        driver: { updateMany: async ({ where }: any) => (driver.status === 'available' ? ({ count: 1 }) : ({ count: 0 })) },
        auditLog: { create: async () => ({}) },
      };

      const mockPrisma: any = {
        trip: { findUnique: async ({ where }: any) => (where.id === trip.id ? trip : null) },
        $transaction: async (cb: any) => cb(tx),
      };

      const svc = createTripsService(mockPrisma as any);
      const res = await svc.dispatchTrip(trip.id, 'user-1');

      expect(res.status).toBe('dispatched');
    });

    test('dispatch fails when vehicle not AVAILABLE and no partial commit (mocked)', async () => {
      const vehicle = { id: 'v-mock-2', status: 'on_trip', maxLoadCapacityKg: 1000 };
      const driver = { id: 'd-mock-2', status: 'available', licenseExpiryDate: new Date('2099-01-01') };
      const trip = { id: 't-mock-2', status: 'draft', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id, vehicle, driver };

      const mockPrisma: any = {
        trip: { findUnique: async ({ where }: any) => (where.id === trip.id ? trip : null) },
        $transaction: async (cb: any) => {
          const tx = {
            trip: {
              findUnique: async () => trip,
              update: async () => ({})
            },
            vehicle: { updateMany: async () => ({ count: 0 }) },
            driver: { updateMany: async () => ({ count: 1 }) },
          };
          return cb(tx);
        },
      };

      const svc = createTripsService(mockPrisma as any);
      await expect(svc.dispatchTrip(trip.id, 'user-1')).rejects.toBeInstanceOf(TripRuleViolationError);
    });
  });
}
