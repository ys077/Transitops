import { describe, expect, test, vi } from 'vitest';
import { createMaintenanceService } from './maintenance.service';

function makeMockPrisma(overrides: any = {}) {
  const vehicle = overrides.vehicle ?? { id: 'v1', status: 'available' };
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
    auditLog: {
      create: async () => ({}),
    }
  };

  return { $transaction: async (cb: any) => cb(tx) };
}

describe('maintenance creation', () => {
  test('creates active maintenance and sets vehicle in shop', async () => {
    const tx = {
      vehicle: {
        findUnique: async ({ where }: any) => (where.id === 'v1' ? { id: 'v1', status: 'available' } : null),
        updateMany: async ({ where }: any) => ({ count: 1 }),
      },
      maintenanceLog: {
        findFirst: async () => null,
        create: async ({ data }: any) => ({ id: 'm1', ...data }),
      },
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    const result = await svc.createMaintenance('v1', 'Engine check', 250, new Date('2099-01-01'), 5000, 'admin1', 'Check brakes');

    expect(result.status).toBe('active');
    expect(result.vehicleId).toBe('v1');
    expect(result.type).toBe('Engine check');
    expect(result.cost).toBe('250');
    expect(result.odometerAtService).toBe(5000);
    expect(result.description).toBe('Check brakes');
  });

  test('rejects creation for ON_TRIP vehicle', async () => {
    const prisma = makeMockPrisma({ vehicle: { id: 'v2', status: 'on_trip' } });
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v2', 'Oil change', 100, new Date('2099-01-01'), 5000, 'admin1')).rejects.toBeInstanceOf(Error);
  });

  test('rejects creation for RETIRED vehicle', async () => {
    const prisma = makeMockPrisma({ vehicle: { id: 'v3', status: 'retired' } });
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v3', 'Full inspection', 100, new Date('2099-01-01'), 5000, 'admin1')).rejects.toBeInstanceOf(Error);
  });

  test('rejects creation when an active maintenance already exists', async () => {
    const prisma = makeMockPrisma({
      vehicle: { id: 'v4', status: 'available' },
      maintenanceLog: { id: 'm-existing', vehicleId: 'v4', status: 'active', description: 'Existing' },
    });
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v4', 'Brake check', 150, new Date('2099-01-01'), 5000, 'admin1')).rejects.toBeInstanceOf(Error);
  });

  test('rolls back when vehicle update is not applied', async () => {
    const vehicle = { id: 'v5', status: 'available' };
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
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.createMaintenance('v5', 'Faulty update', 100, new Date('2099-01-01'), 5000, 'admin1')).rejects.toBeInstanceOf(Error);
    expect(createSpy).toHaveBeenCalled();
  });
  test('closes active maintenance and restores vehicle when no other active exists', async () => {
    const maintenance = { id: 'm1', vehicleId: 'v1', status: 'active', vehicle: { id: 'v1', status: 'in_shop' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm1' ? maintenance : null),
        findFirst: async () => null,
        update: async ({ where, data }: any) => ({ ...maintenance, ...data }),
      },
      vehicle: {
        update: async ({ where, data }: any) => ({ id: 'v1', ...data }),
      },
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    const result = await svc.closeMaintenance('m1', 'admin1');

    expect(result.status).toBe('closed');
    expect(result.closedDate).toBeTruthy();
  });

  test('rejects closing already CLOSED maintenance', async () => {
    const maintenance = { id: 'm2', vehicleId: 'v2', status: 'closed', vehicle: { id: 'v2', status: 'available' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm2' ? maintenance : null),
      },
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.closeMaintenance('m2', 'admin1')).rejects.toBeInstanceOf(Error);
  });

  test('rejects closing missing maintenance', async () => {
    const tx = {
      maintenanceLog: {
        findUnique: async () => null,
      },
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.closeMaintenance('missing', 'admin1')).rejects.toBeInstanceOf(Error);
  });

  test('keeps vehicle IN_SHOP when another active maintenance exists', async () => {
    const maintenance = { id: 'm3', vehicleId: 'v3', status: 'active', vehicle: { id: 'v3', status: 'in_shop' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm3' ? maintenance : null),
        findFirst: async () => ({ id: 'm4', vehicleId: 'v3', status: 'active' }),
        update: async ({ where, data }: any) => ({ ...maintenance, ...data }),
      },
      vehicle: {
        update: async ({ where, data }: any) => ({ id: 'v3', ...data }),
      },
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    const result = await svc.closeMaintenance('m3', 'admin1');
    expect(result.status).toBe('closed');
  });

  test('transaction rollback on closure failure', async () => {
    const maintenance = { id: 'm4', vehicleId: 'v4', status: 'active', vehicle: { id: 'v4', status: 'in_shop' } };
    const tx = {
      maintenanceLog: {
        findUnique: async ({ where }: any) => (where.id === 'm4' ? maintenance : null),
        findFirst: async () => null,
        update: async () => ({ id: 'm4', status: 'closed', closedDate: new Date() }),
      },
      vehicle: {
        update: async () => { throw new Error('Vehicle update failed'); },
      },
      auditLog: {
        create: async () => ({}),
      }
    };
    const prisma = { $transaction: async (cb: any) => cb(tx) };
    const svc = createMaintenanceService(prisma as any);

    await expect(svc.closeMaintenance('m4', 'admin1')).rejects.toBeInstanceOf(Error);
  });
});
