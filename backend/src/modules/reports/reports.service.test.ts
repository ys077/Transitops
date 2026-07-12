import { describe, expect, test } from 'vitest';
import { createReportsService } from './reports.service';

describe('ReportsService', () => {
  test('fuel efficiency calculation', async () => {
    const prisma = {
      trip: {
        findMany: async () => [
          { vehicleId: 'v1', actualDistanceKm: 100, fuelConsumedLiters: 10 },
          { vehicleId: 'v1', actualDistanceKm: 200, fuelConsumedLiters: 20 },
          { vehicleId: 'v2', actualDistanceKm: 50, fuelConsumedLiters: 5 },
        ],
      },
      vehicle: { findMany: async () => [] },
      fuelLog: { groupBy: async () => [] },
      maintenanceLog: { groupBy: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const result = await svc.getFuelEfficiencyReport();

    expect(result).toEqual([
      { vehicleId: 'v1', totalDistanceKm: 300, totalFuelConsumedLiters: 30, fuelEfficiencyKmPerLiter: 10 },
      { vehicleId: 'v2', totalDistanceKm: 50, totalFuelConsumedLiters: 5, fuelEfficiencyKmPerLiter: 10 },
    ]);
  });

  test('zero fuel is ignored safely', async () => {
    const prisma = {
      trip: {
        findMany: async () => [
          { vehicleId: 'v1', actualDistanceKm: 100, fuelConsumedLiters: 0 },
        ],
      },
      vehicle: { findMany: async () => [] },
      fuelLog: { groupBy: async () => [] },
      maintenanceLog: { groupBy: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const result = await svc.getFuelEfficiencyReport();

    expect(result).toEqual([]);
  });

  test('fleet utilisation calculation', async () => {
    const prisma = {
      vehicle: { findMany: async () => [{ id: 'v1' }, { id: 'v2' }, { id: 'v3' }] },
      trip: {
        findMany: async ({ where }: any) => [{ vehicleId: 'v1' }, { vehicleId: 'v2' }],
      },
      fuelLog: { groupBy: async () => [] },
      maintenanceLog: { groupBy: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const result = await svc.getFleetUtilizationReport();

    expect(result).toEqual({ totalActiveVehicles: 3, usedVehicles: 2, utilizationPercentage: (2 / 3) * 100 });
  });

  test('zero active Vehicles returns 0%', async () => {
    const prisma = {
      vehicle: { findMany: async () => [] },
      trip: { findMany: async () => [] },
      fuelLog: { groupBy: async () => [] },
      maintenanceLog: { groupBy: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const result = await svc.getFleetUtilizationReport();

    expect(result).toEqual({ totalActiveVehicles: 0, usedVehicles: 0, utilizationPercentage: 0 });
  });

  test('operational cost = Fuel + Maintenance', async () => {
    const prisma = {
      vehicle: { findMany: async () => [{ id: 'v1' }] },
      fuelLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 100 } }] },
      maintenanceLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 50 } }] },
      trip: { findMany: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const result = await svc.getOperationalCostReport();

    expect(result).toEqual({
      vehicles: [{ vehicleId: 'v1', fuelCost: 100, maintenanceCost: 50, operationalCost: 150 }],
      fleet: { totalFuelCost: 100, totalMaintenanceCost: 50, totalOperationalCost: 150 },
    });
  });

  test('Expense is not included in operational cost', async () => {
    const prisma = {
      vehicle: { findMany: async () => [{ id: 'v1' }] },
      fuelLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 100 } }] },
      maintenanceLog: { groupBy: async () => [] },
      trip: { findMany: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const result = await svc.getOperationalCostReport();

    expect(result.vehicles[0].operationalCost).toBe(100);
  });

  test('ROI returns calculated ROI', async () => {
    const tx = {
      vehicle: { findMany: async () => [{ id: 'v1', acquisitionCost: 100000 }] },
      fuelLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 5000 } }] },
      maintenanceLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 10000 } }] },
    };
    const prisma = { ...tx };
    const svc = createReportsService(prisma as any);

    const result = await svc.getRoiReport();

    expect(result.available).toBe(true);
    expect(result.roiPerVehicle).toHaveLength(1);
    expect(result.roiPerVehicle[0].roiPercentage).toBe(35); // (50000 - 15000) / 100000 * 100
  });

  test('CSV contains expected header and values', async () => {
    const prisma = {
      vehicle: { findMany: async () => [{ id: 'v1' }] },
      fuelLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 100 } }] },
      maintenanceLog: { groupBy: async () => [{ vehicleId: 'v1', _sum: { cost: 50 } }] },
      trip: { findMany: async () => [] },
    };
    const svc = createReportsService(prisma as any);

    const csv = await svc.getOperationalCostCsv();

    expect(csv).toContain('vehicleId,fuelCost,maintenanceCost,operationalCost');
    expect(csv).toContain('v1,100,50,150');
  });
});
