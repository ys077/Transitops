import { describe, expect, test } from 'vitest';
import { createIntelligenceService } from './intelligence.service';

// ── Test helpers ──────────────────────────────────────────────────────────

function createMockPrisma(overrides: any = {}) {
  const now = new Date();
  const past = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000); // 1 year ago
  const future = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year from now
  const yesterday = new Date(now.getTime() - 30 * 60 * 60 * 1000); // 30 hours ago

  const defaults = {
    vehicles: [
      { id: 'v-healthy', status: 'available', maxLoadCapacityKg: 5000, odometerKm: 100 },
      { id: 'v-shop', status: 'in_shop', maxLoadCapacityKg: 5000, odometerKm: 200 },
    ],
    drivers: [
      { id: 'd-valid', status: 'available', licenseExpiryDate: future },
      { id: 'd-expired', status: 'available', licenseExpiryDate: past },
    ],
    trips: [
      {
        id: 't-completed', status: 'completed', vehicleId: 'v-healthy', driverId: 'd-valid',
        actualDistanceKm: 100, fuelConsumedLiters: 25, dispatchedAt: past, completedAt: now,
        vehicle: { id: 'v-healthy', status: 'available' },
        driver: { id: 'd-valid', status: 'available', licenseExpiryDate: future },
      },
      {
        id: 't-long', status: 'dispatched', vehicleId: 'v-healthy', driverId: 'd-valid',
        actualDistanceKm: null, fuelConsumedLiters: null, dispatchedAt: yesterday, completedAt: null,
        vehicle: { id: 'v-healthy', status: 'on_trip' },
        driver: { id: 'd-valid', status: 'on_trip', licenseExpiryDate: future },
      },
    ],
    maintenanceLogs: [
      { id: 'm-active', vehicleId: 'v-shop', type: 'OIL_CHANGE', status: 'active', vehicle: { id: 'v-shop', status: 'in_shop' } },
    ],
    fuelAgg: { _sum: { cost: 500 } },
    maintAgg: { _sum: { cost: 200 } },
  };

  const data = { ...defaults, ...overrides };

  return {
    vehicle: { findMany: async () => data.vehicles },
    driver: { findMany: async () => data.drivers },
    trip: { findMany: async () => data.trips },
    maintenanceLog: {
      findMany: async () => data.maintenanceLogs,
    },
    fuelLog: { aggregate: async () => data.fuelAgg },
    maintenanceLog_aggregate: data.maintAgg,
    // Prisma aggregate workaround – we redirect via a getter
  } as any;
}

// Override the prisma mock to support maintenanceLog.aggregate
function createFullMockPrisma(overrides: any = {}) {
  const base = createMockPrisma(overrides);
  const maintAgg = overrides.maintAgg ?? { _sum: { cost: 200 } };
  base.maintenanceLog = {
    ...base.maintenanceLog,
    aggregate: async () => maintAgg,
  };
  return base;
}

// ── Tests ─────────────────────────────────────────────────────────────────

describe('IntelligenceService', () => {
  test('getKpis returns correct counts', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const kpis = await svc.getKpis();

    expect(kpis.totalVehicles).toBe(2);
    expect(kpis.availableVehicles).toBe(1);
    expect(kpis.vehiclesInShop).toBe(1);
    expect(kpis.totalOperationalCost).toBe(700); // 500 fuel + 200 maint
  });

  test('getAttentionIssues detects IN_SHOP, expired license, low efficiency, long trip, active maint', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const issues = await svc.getAttentionIssues();
    const types = issues.map((i: any) => i.type);

    expect(types).toContain('VEHICLE_IN_SHOP');
    expect(types).toContain('ACTIVE_MAINTENANCE');
    expect(types).toContain('DRIVER_LICENSE_EXPIRED');
    expect(types).toContain('LOW_FUEL_EFFICIENCY'); // 100km / 25L = 4 km/L
    expect(types).toContain('LONG_RUNNING_TRIP'); // dispatched 30h ago
  });

  test('getOperationsHealth score decreases with issues', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const health = await svc.getOperationsHealth();

    expect(health.score).toBeLessThan(100);
    expect(health.criticalCount).toBeGreaterThan(0);
    expect(health.warningCount).toBeGreaterThan(0);
    expect(['HEALTHY', 'ATTENTION_REQUIRED', 'CRITICAL']).toContain(health.status);
  });

  test('getRecommendations returns max 5, CRITICAL first', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const recs = await svc.getRecommendations();

    expect(recs.length).toBeLessThanOrEqual(5);
    // First recommendation should be CRITICAL if any exist
    if (recs.length > 0 && recs.some((r: any) => r.severity === 'CRITICAL')) {
      expect(recs[0].severity).toBe('CRITICAL');
    }
    // Priority should be 1-5
    for (let i = 0; i < recs.length; i++) {
      expect(recs[i].priority).toBe(i + 1);
    }
  });

  test('getDigitalTwins returns correct health statuses', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const twins = await svc.getDigitalTwins();

    expect(twins.length).toBe(2);
    const shopVehicle = twins.find((t: any) => t.vehicleId === 'v-shop');
    expect(shopVehicle).toBeDefined();
    // IN_SHOP vehicle with active maintenance should have lower score
    expect(shopVehicle!.healthScore).toBeLessThan(100);
  });

  test('getDigitalTwinByVehicleId throws for unknown vehicle', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    await expect(svc.getDigitalTwinByVehicleId('nonexistent')).rejects.toThrow('not found');
  });

  test('getRisks returns sorted risks with disclaimers', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const risks = await svc.getRisks();

    expect(risks.length).toBeGreaterThan(0);
    // Should be sorted highest first
    for (let i = 1; i < risks.length; i++) {
      expect(risks[i - 1].riskScore).toBeGreaterThanOrEqual(risks[i].riskScore);
    }
    // All should have disclaimers
    for (const r of risks) {
      expect(r.disclaimer).toContain('heuristic');
    }
  });

  test('getDispatcherContext composes from other endpoints', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const ctx = await svc.getDispatcherContext();

    expect(ctx.operationsHealth).toBeDefined();
    expect(ctx.kpis).toBeDefined();
    expect(ctx.criticalIssues).toBeDefined();
    expect(ctx.topRisks).toBeDefined();
    expect(ctx.recommendedActions).toBeDefined();
    expect(ctx.criticalVehicles).toBeDefined();
  });

  test('getSustainabilityReport with inefficient vehicle', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const report = await svc.getSustainabilityReport();

    expect(report.totalFuelConsumedLiters).toBe(25);
    expect(report.totalDistanceKm).toBe(100);
    expect(report.fleetFuelEfficiencyKmPerLiter).toBe(4); // 100/25
    expect(report.inefficientVehicles.length).toBe(1);
    expect(report.potentialFuelSavingsLiters).toBeGreaterThan(0);
    expect(report.summary).toContain('below');
  });

  test('getSustainabilityReport with no trips returns zeros safely', async () => {
    const prisma = createFullMockPrisma({
      trips: [],
      vehicles: [],
      drivers: [],
      maintenanceLogs: [],
    });
    const svc = createIntelligenceService(prisma);

    const report = await svc.getSustainabilityReport();

    expect(report.totalFuelConsumedLiters).toBe(0);
    expect(report.fleetFuelEfficiencyKmPerLiter).toBe(0);
    expect(report.inefficientVehicles.length).toBe(0);
    expect(report.potentialFuelSavingsLiters).toBe(0);
  });

  test('acknowledgeRecommendation returns demo stub', async () => {
    const prisma = createFullMockPrisma();
    const svc = createIntelligenceService(prisma);

    const result = await svc.acknowledgeRecommendation('CANCEL_TRIP');

    expect(result.acknowledged).toBe(true);
    expect(result.type).toBe('CANCEL_TRIP');
    expect(result.message).toContain('Demo stub');
  });

  test('healthy fleet returns HEALTHY operations health', async () => {
    const future = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const prisma = createFullMockPrisma({
      vehicles: [{ id: 'v1', status: 'available', maxLoadCapacityKg: 5000, odometerKm: 100 }],
      drivers: [{ id: 'd1', status: 'available', licenseExpiryDate: future }],
      trips: [],
      maintenanceLogs: [],
    });
    const svc = createIntelligenceService(prisma);

    const health = await svc.getOperationsHealth();

    expect(health.score).toBe(100);
    expect(health.status).toBe('HEALTHY');
  });
});
