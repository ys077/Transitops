import { describe, expect, test, vi } from 'vitest';
import { createTripsService } from './trips.service';

// Unit tests use mocked prisma client with vitest spies
function makeMockPrisma(overrides: any = {}) {
  const baseTrip = {
    id: 't1',
    status: 'dispatched',
    cargoWeightKg: 100,
    vehicleId: 'v1',
    driverId: 'd1',
    dispatchedAt: new Date(),
    vehicle: { id: 'v1', status: 'on_trip', odometerKm: 100, maxLoadCapacityKg: 1000 },
    driver: { id: 'd1', status: 'on_trip', licenseExpiryDate: new Date('2099-01-01') },
  };

  const tx = {
    trip: { findUnique: vi.fn().mockResolvedValue(overrides.tripInside ?? baseTrip), update: vi.fn().mockResolvedValue({ ...baseTrip, status: 'completed' }) },
    vehicle: { updateMany: vi.fn().mockResolvedValue({ count: 1 }) },
    driver: { updateMany: vi.fn().mockResolvedValue({ count: 1 }) },
    auditLog: { create: vi.fn().mockResolvedValue({}) },
  };

  return { trip: { findUnique: vi.fn().mockResolvedValue(overrides.initialTrip ?? baseTrip) }, $transaction: vi.fn().mockImplementation(async (cb: any) => cb(tx)), __tx: tx };
}

describe('completeTrip unit', () => {
  test('persists completion data and restores resources', async () => {
    const mock = makeMockPrisma();
    const svc = createTripsService(mock as any);

    const res = await svc.completeTrip('t1', 50, 'user-1', 12.5);

    expect(mock.$transaction).toHaveBeenCalled();
    expect(mock.__tx.vehicle.updateMany).toHaveBeenCalled();
    expect(mock.__tx.driver.updateMany).toHaveBeenCalled();
    expect(mock.__tx.trip.update).toHaveBeenCalled();
    expect(mock.__tx.auditLog.create).toHaveBeenCalled();
    expect(res.actualDistanceKm).toBe(50);
    expect(res.fuelConsumedLiters).toBe(12.5);
    expect(res.trip.status).toBe('completed');
  });
});
