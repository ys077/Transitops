import { describe, expect, test, vi } from 'vitest';
import { createTripsService } from './trips.service';
import { InvalidTripTransitionError, ResourceUnavailableError } from './trips.errors';

function makeMockPrisma(overrides: any = {}) {
  const baseDraft = { id: 't1', status: 'DRAFT', vehicleId: 'v1', driverId: 'd1' };
  const baseDispatched = { id: 't2', status: 'DISPATCHED', vehicleId: 'v2', driverId: 'd2', vehicle: { id: 'v2', status: 'ON_TRIP' }, driver: { id: 'd2', status: 'ON_TRIP' } };

  const tx = {
    trip: { findUnique: vi.fn().mockResolvedValue(overrides.tripInside ?? baseDispatched), update: vi.fn().mockResolvedValue({ ...baseDispatched, status: 'CANCELLED' }) },
    vehicle: { updateMany: vi.fn().mockResolvedValue({ count: 1 }) },
    driver: { updateMany: vi.fn().mockResolvedValue({ count: 1 }) },
  };

  return { trip: { findUnique: vi.fn().mockResolvedValue(overrides.initialTrip ?? baseDraft) }, $transaction: vi.fn().mockImplementation(async (cb: any) => cb(tx)), __tx: tx };
}

describe('cancelTrip unit', () => {
  test('rejects cancelling a DRAFT trip', async () => {
    const mock = makeMockPrisma({ initialTrip: { id: 't1', status: 'DRAFT', vehicleId: 'v1', driverId: 'd1' } });
    const svc = createTripsService(mock as any);

    await expect(svc.cancelTrip('t1')).rejects.toBeInstanceOf(InvalidTripTransitionError);
  });

  test('cancels a DISPATCHED trip and reverts resources', async () => {
    const mock = makeMockPrisma({ initialTrip: { id: 't2', status: 'DISPATCHED', vehicleId: 'v2', driverId: 'd2' }, tripInside: { id: 't2', status: 'DISPATCHED', vehicle: { id: 'v2', status: 'ON_TRIP' }, driver: { id: 'd2', status: 'ON_TRIP' } } });
    const svc = createTripsService(mock as any);

    const res = await svc.cancelTrip('t2');
    expect(mock.$transaction).toHaveBeenCalled();
    expect(mock.__tx.vehicle.updateMany).toHaveBeenCalled();
    expect(mock.__tx.driver.updateMany).toHaveBeenCalled();
    expect(mock.__tx.trip.update).toHaveBeenCalled();
    expect(res.status).toBe('CANCELLED');
  });

  test('rejects cancel when trip is COMPLETED', async () => {
    const mock = makeMockPrisma({ initialTrip: { id: 't3', status: 'COMPLETED', vehicleId: 'v3', driverId: 'd3' } });
    const svc = createTripsService(mock as any);

    await expect(svc.cancelTrip('t3')).rejects.toBeInstanceOf(InvalidTripTransitionError);
  });

  test('rejects cancel when trip is already CANCELLED', async () => {
    const mock = makeMockPrisma({ initialTrip: { id: 't5', status: 'CANCELLED', vehicleId: 'v5', driverId: 'd5' } });
    const svc = createTripsService(mock as any);

    await expect(svc.cancelTrip('t5')).rejects.toBeInstanceOf(InvalidTripTransitionError);
  });

  test('transaction rolls back when vehicle guarded update fails', async () => {
    const mock = makeMockPrisma({ initialTrip: { id: 't4', status: 'DISPATCHED', vehicleId: 'v4', driverId: 'd4' }, tripInside: { id: 't4', status: 'DISPATCHED', vehicle: { id: 'v4', status: 'ON_TRIP' }, driver: { id: 'd4', status: 'ON_TRIP' } } });
    mock.$transaction = vi.fn().mockImplementation(async (cb: any) => cb({ ...mock.__tx, vehicle: { updateMany: vi.fn().mockResolvedValue({ count: 0 }) } }));
    const svc = createTripsService(mock as any);

    await expect(svc.cancelTrip('t4')).rejects.toBeInstanceOf(ResourceUnavailableError);
  });

  test('transaction rolls back when driver guarded update fails', async () => {
    const mock = makeMockPrisma({ initialTrip: { id: 't6', status: 'DISPATCHED', vehicleId: 'v6', driverId: 'd6' }, tripInside: { id: 't6', status: 'DISPATCHED', vehicle: { id: 'v6', status: 'ON_TRIP' }, driver: { id: 'd6', status: 'ON_TRIP' } } });
    mock.$transaction = vi.fn().mockImplementation(async (cb: any) => cb({ ...mock.__tx, driver: { updateMany: vi.fn().mockResolvedValue({ count: 0 }) } }));
    const svc = createTripsService(mock as any);

    await expect(svc.cancelTrip('t6')).rejects.toBeInstanceOf(ResourceUnavailableError);
  });
});
