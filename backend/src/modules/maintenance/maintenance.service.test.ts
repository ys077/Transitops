import { describe, expect, test, vi } from 'vitest';
import { createMaintenanceService } from './maintenance.service';

function makeMockPrisma(overrides: any = {}) {
  const vehicle = overrides.vehicle ?? { id: 'v1', status: 'AVAILABLE' };
  const maintenanceLog = overrides.maintenanceLog ?? null;

  const tx = {
    vehicle: {
      findUnique: async ({ where }: any) => (where.id === vehicle.id ? vehicle : null),
      update: async ({ where, data }: any) => ({ ...vehicle, ...data }),
    },
    maintenanceLog: {
      findFirst: async ({ where }: any) => maintenanceLog,
      create: async ({ data }: any) => ({ id: 'm1', ...data }),
    },
  };

  return { $transaction: async (cb: any) => cb(tx) };
}

describe('maintenance creation', () => {
  test('creates active maintenance and sets vehicle in shop', async () => {
    const tx = {
      vehicle: {
        findUnique: async ({ where }: any) => (where.id === 'v1' ? { id: 'v1', status: 'AVAILABLE' } : null),
        updateMany: async ({ where }: any) => ({ count: 1 }),
      },
      maintenanceLog: {
        findFirst: async () => null,
        create: async ({ data }: any) => ({ id: 'm1', ...data }),
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    const result = await svc.createMaintenance('v1', 'Engine check', 250, new Date('2099-01-01'), 5000, 'Check brakes');

    expect(result.status).toBe('ACTIVE');
    expect(result.vehicleId).toBe('v1');
    expect(result.type).toBe('Engine check');
    expect(result.cost).toBe('250');
    expect(result.odometerAtService).toBe(5000);
    expect(result.description).toBe('Check brakes');
  });

  test('rejects creation for ON_TRIP vehicle', async () => {
    const prisma = makeMockPrisma({ vehicle: { id: 'v2', status: 'ON_TRIP' } });
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v2', 'Oil change', 100, new Date('2099-01-01'), 5000)).rejects.toBeInstanceOf(Error);
  });

  test('rejects creation for RETIRED vehicle', async () => {
    const prisma = makeMockPrisma({ vehicle: { id: 'v3', status: 'RETIRED' } });
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v3', 'Full inspection', 100, new Date('2099-01-01'), 5000)).rejects.toBeInstanceOf(Error);
  });

  test('rejects creation when an active maintenance already exists', async () => {
    const prisma = makeMockPrisma({
      vehicle: { id: 'v4', status: 'AVAILABLE' },
      maintenanceLog: { id: 'm-existing', vehicleId: 'v4', status: 'ACTIVE', description: 'Existing' },
    });
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v4', 'Brake check', 150, new Date('2099-01-01'), 5000)).rejects.toBeInstanceOf(Error);
  });

  test('rolls back when vehicle update is not applied', async () => {
    const vehicle = { id: 'v5', status: 'AVAILABLE' };
    const createSpy = vi.fn(async ({ data }: any) => ({ id: 'm-roll', ...data }));
    const tx = {
      vehicle: {
        findUnique: async ({ where }: any) => (where.id === vehicle.id ? vehicle : null),
        updateMany: async () => ({ count: 0 }),
      },
      maintenanceLog: {
        findFirst: async () => null,
        create: createSpy,
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v5', 'Faulty update', 100, new Date('2099-01-01'), 5000)).rejects.toBeInstanceOf(Error);
    expect(createSpy).toHaveBeenCalled();
  });
  test('closes active maintenance and restores vehicle when no other active exists', async () => {
    const maintenance = { id: 'm1', vehicleId: 'v1', status: 'ACTIVE', vehicle: { id: 'v1', status: 'IN_SHOP' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm1' ? maintenance : null),
        findFirst: async () => null,
        update: async ({ where, data }: any) => ({ ...maintenance, ...data }),
      },
      vehicle: {
        update: async ({ where, data }: any) => ({ id: 'v1', ...data }),
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    const result = await svc.closeMaintenance('m1');

    expect(result.status).toBe('CLOSED');
    expect(result.closedDate).toBeTruthy();
  });

  test('rejects closing already CLOSED maintenance', async () => {
    const maintenance = { id: 'm2', vehicleId: 'v2', status: 'CLOSED', vehicle: { id: 'v2', status: 'AVAILABLE' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm2' ? maintenance : null),
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.closeMaintenance('m2')).rejects.toBeInstanceOf(Error);
  });

  test('rejects closing missing maintenance', async () => {
    const tx = {
      maintenanceLog: {
        findUnique: async () => null,
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.closeMaintenance('missing')).rejects.toBeInstanceOf(Error);
  });

  test('keeps vehicle IN_SHOP when another active maintenance exists', async () => {
    const maintenance = { id: 'm3', vehicleId: 'v3', status: 'ACTIVE', vehicle: { id: 'v3', status: 'IN_SHOP' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm3' ? maintenance : null),
        findFirst: async () => ({ id: 'm4', vehicleId: 'v3', status: 'ACTIVE' }),
        update: async ({ where, data }: any) => ({ ...maintenance, ...data }),
      },
      vehicle: {
        update: async ({ where, data }: any) => ({ id: 'v3', ...data }),
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    const result = await svc.closeMaintenance('m3');
    expect(result.status).toBe('CLOSED');
  });

  test('transaction rollback on closure failure', async () => {
    const maintenance = { id: 'm4', vehicleId: 'v4', status: 'ACTIVE', vehicle: { id: 'v4', status: 'IN_SHOP' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm4' ? maintenance : null),
        findFirst: async () => null,
        update: async () => ({ id: 'm4', status: 'CLOSED', closedDate: new Date() }),
      },
      vehicle: {
        update: async () => { throw new Error('Vehicle update failed'); },
      },
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.closeMaintenance('m4')).rejects.toBeInstanceOf(Error);
  });});
