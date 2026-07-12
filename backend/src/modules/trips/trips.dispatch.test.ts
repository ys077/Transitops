import { describe, expect, test, vi } from 'vitest';
import { createTripsService } from './trips.service';
import {
  TripRuleViolationError,
  InvalidTripTransitionError,
  ResourceUnavailableError,
  TripNotFoundError,
} from './trips.errors';

const baseTrip = {
  id: 'trip-1',
  status: 'DRAFT',
  cargoWeightKg: 500,
  vehicleId: 'veh-1',
  driverId: 'drv-1',
  dispatchedAt: null,
  vehicle: { id: 'veh-1', status: 'AVAILABLE', maxLoadCapacityKg: 1000 },
  driver: { id: 'drv-1', status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') },
};

function makeMockPrisma(overrides: any = {}) {
  const mockTx: any = {
    trip: {
      findUnique: vi.fn().mockResolvedValue(overrides.tripInside ?? baseTrip),
      update: vi.fn().mockImplementation((args: any) => Promise.resolve({ ...baseTrip, status: 'DISPATCHED', dispatchedAt: new Date() })),
    },
    vehicle: { updateMany: vi.fn().mockResolvedValue({ count: 1 }) },
    driver: { updateMany: vi.fn().mockResolvedValue({ count: 1 }) },
  };

  const mockPrisma: any = {
    trip: { findUnique: vi.fn().mockResolvedValue(overrides.initialTrip ?? baseTrip) },
    $transaction: vi.fn().mockImplementation(async (cb: any) => cb(mockTx)),
    // allow tests to inspect the tx mock
    __mockTx: mockTx,
  };

  return mockPrisma;
}

describe('Atomic dispatch', () => {
  test('successful dispatch updates vehicle, driver and trip', async () => {
    const mockPrisma = makeMockPrisma();
    const svc = createTripsService(mockPrisma as any);

    const res = await svc.dispatchTrip('trip-1');

    expect(mockPrisma.$transaction).toHaveBeenCalled();
    expect(mockPrisma.__mockTx.vehicle.updateMany).toHaveBeenCalled();
    expect(mockPrisma.__mockTx.driver.updateMany).toHaveBeenCalled();
    expect(mockPrisma.__mockTx.trip.update).toHaveBeenCalled();
    expect(res.status).toBe('DISPATCHED');
  });

  test('rejects non-DRAFT trip', async () => {
    const mockPrisma = makeMockPrisma({ initialTrip: { ...baseTrip, status: 'DISPATCHED' } });
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(InvalidTripTransitionError);
    expect(mockPrisma.$transaction).not.toHaveBeenCalled();
  });

  test("vehicle no longer AVAILABLE causes conflict", async () => {
    const mockTxOverrides: any = { vehicle: { updateMany: vi.fn().mockResolvedValue({ count: 0 }) } };
    const mockPrisma = makeMockPrisma({});
    mockPrisma.$transaction = vi.fn().mockImplementation(async (cb: any) => cb({ ...mockPrisma.__mockTx, vehicle: mockTxOverrides.vehicle }));
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(ResourceUnavailableError);
    expect(mockPrisma.__mockTx.trip.update).not.toHaveBeenCalled();
  });

  test("driver no longer AVAILABLE causes conflict", async () => {
    const mockPrisma = makeMockPrisma({});
    mockPrisma.$transaction = vi.fn().mockImplementation(async (cb: any) => cb({
      ...mockPrisma.__mockTx,
      driver: { updateMany: vi.fn().mockResolvedValue({ count: 0 }) },
    }));
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(ResourceUnavailableError);
    expect(mockPrisma.__mockTx.trip.update).not.toHaveBeenCalled();
  });

  test('expired driver licence is rejected by rule engine', async () => {
    const expiredTrip = { ...baseTrip, driver: { ...baseTrip.driver, licenseExpiryDate: new Date('2000-01-01') } };
    const mockPrisma = makeMockPrisma({ initialTrip: expiredTrip, tripInside: expiredTrip });
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(TripRuleViolationError);
    expect(mockPrisma.$transaction).not.toHaveBeenCalled();
  });

  test('cargo exceeding vehicle capacity is rejected by rule engine', async () => {
    const badTrip = { ...baseTrip, cargoWeightKg: 2000 };
    const mockPrisma = makeMockPrisma({ initialTrip: badTrip, tripInside: badTrip });
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(TripRuleViolationError);
    expect(mockPrisma.$transaction).not.toHaveBeenCalled();
  });

  test('transaction rolls back when guarded update fails (vehicle)', async () => {
    const mockPrisma = makeMockPrisma({});
    mockPrisma.$transaction = vi.fn().mockImplementation(async (cb: any) => cb({
      ...mockPrisma.__mockTx,
      vehicle: { updateMany: vi.fn().mockResolvedValue({ count: 0 }) },
    }));
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(ResourceUnavailableError);
    expect(mockPrisma.__mockTx.trip.update).not.toHaveBeenCalled();
  });

  test('transaction rolls back when guarded update fails (driver)', async () => {
    const mockPrisma = makeMockPrisma({});
    mockPrisma.$transaction = vi.fn().mockImplementation(async (cb: any) => cb({
      ...mockPrisma.__mockTx,
      driver: { updateMany: vi.fn().mockResolvedValue({ count: 0 }) },
    }));
    const svc = createTripsService(mockPrisma as any);

    await expect(svc.dispatchTrip('trip-1')).rejects.toBeInstanceOf(ResourceUnavailableError);
    expect(mockPrisma.__mockTx.trip.update).not.toHaveBeenCalled();
  });
});
