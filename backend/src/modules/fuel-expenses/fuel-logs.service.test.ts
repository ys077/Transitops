import { describe, expect, test } from 'vitest';
import { createFuelLogsService } from './fuel-logs.service';

describe('FuelLogsService', () => {
  test('valid FuelLog succeeds', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      trip: { findUnique: async () => ({ id: 't1', vehicleId: 'v1' }) },
      fuelLog: { create: async ({ data }: any) => ({ id: 'f1', ...data }) },
    };
    const svc = createFuelLogsService(prisma as any);

    const result = await svc.createFuelLog({ vehicleId: 'v1', tripId: 't1', liters: 10, cost: 50, date: '2026-07-12' });

    expect(result.id).toBe('f1');
    expect(result.liters).toBe(10);
  });

  test('rejects liters <= 0', async () => {
    const prisma = { vehicle: { findUnique: async () => ({ id: 'v1' }) } };
    const svc = createFuelLogsService(prisma as any);

    await expect(svc.createFuelLog({ vehicleId: 'v1', liters: 0, cost: 50, date: '2026-07-12' })).rejects.toThrow('liters must be a positive number');
  });

  test('rejects negative cost', async () => {
    const prisma = { vehicle: { findUnique: async () => ({ id: 'v1' }) } };
    const svc = createFuelLogsService(prisma as any);

    await expect(svc.createFuelLog({ vehicleId: 'v1', liters: 10, cost: -1, date: '2026-07-12' })).rejects.toThrow('cost must be a non-negative number');
  });

  test('rejects missing Vehicle', async () => {
    const prisma = { vehicle: { findUnique: async () => null } };
    const svc = createFuelLogsService(prisma as any);

    await expect(svc.createFuelLog({ vehicleId: 'v1', liters: 10, cost: 50, date: '2026-07-12' })).rejects.toThrow('Vehicle v1 not found');
  });

  test('rejects missing Trip when tripId supplied', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      trip: { findUnique: async () => null },
    };
    const svc = createFuelLogsService(prisma as any);

    await expect(svc.createFuelLog({ vehicleId: 'v1', tripId: 't1', liters: 10, cost: 50, date: '2026-07-12' })).rejects.toThrow('Trip t1 not found');
  });

  test('rejects Trip/Vehicle mismatch', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      trip: { findUnique: async () => ({ id: 't1', vehicleId: 'v2' }) },
    };
    const svc = createFuelLogsService(prisma as any);

    await expect(svc.createFuelLog({ vehicleId: 'v1', tripId: 't1', liters: 10, cost: 50, date: '2026-07-12' })).rejects.toThrow('Trip vehicleId does not match the provided vehicleId');
  });

  test('getFuelLogsByVehicle returns fuel logs for the vehicle', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      fuelLog: {
        findMany: async () => [
          { id: 'f2', vehicleId: 'v1', date: new Date('2026-07-13') },
          { id: 'f1', vehicleId: 'v1', date: new Date('2026-07-12') },
        ],
      },
    };
    const svc = createFuelLogsService(prisma as any);

    const result = await svc.getFuelLogsByVehicle('v1');

    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('f2');
  });
});
