/**
 * Operations Intelligence Service
 *
 * Deterministic, rule-based intelligence layer for TransitOps.
 * All risk scores and recommendations are hackathon heuristic estimates, not ML.
 * Reuses existing Prisma models; no new DB tables required.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AttentionIssue {
  type: string;
  severity: 'CRITICAL' | 'WARNING';
  message: string;
  recommendation: string;
  entityType: 'VEHICLE' | 'DRIVER' | 'TRIP' | 'MAINTENANCE';
  entityId: string;
}

export interface OperationsHealth {
  score: number;
  status: 'HEALTHY' | 'ATTENTION_REQUIRED' | 'CRITICAL';
  criticalCount: number;
  warningCount: number;
}

export interface Recommendation {
  priority: number;
  action: string;
  reason: string;
  severity: 'CRITICAL' | 'WARNING';
  entityType: string;
  entityId: string;
  issueType: string;
}

export interface DigitalTwin {
  vehicleId: string;
  healthScore: number;
  healthStatus: 'GREEN' | 'YELLOW' | 'RED';
  issues: AttentionIssue[];
}

export interface Risk {
  category: string;
  entityType: string;
  entityId: string;
  riskScore: number;
  probability: number;
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  description: string;
  factors: string[];
  disclaimer: string;
}

export interface SustainabilityReport {
  totalFuelConsumedLiters: number;
  totalDistanceKm: number;
  fleetFuelEfficiencyKmPerLiter: number;
  inefficientVehicles: Array<{ vehicleId: string; efficiencyKmPerLiter: number }>;
  potentialFuelSavingsLiters: number;
  summary: string;
}

// ─── Service ─────────────────────────────────────────────────────────────────

export function createIntelligenceService(prismaClient: any) {
  // ── shared data fetchers (cached per request via closure) ──────────────

  async function fetchAllData() {
    const [vehicles, drivers, trips, maintenanceLogs] = await Promise.all([
      prismaClient.vehicle.findMany(),
      prismaClient.driver.findMany(),
      prismaClient.trip.findMany({ include: { vehicle: true, driver: true } }),
      prismaClient.maintenanceLog.findMany({ include: { vehicle: true } }),
    ]);
    return { vehicles, drivers, trips, maintenanceLogs };
  }

  // ── fuel efficiency helper (reuses existing report logic) ─────────────

  function computeVehicleFuelEfficiency(trips: any[]): Map<string, { totalDistanceKm: number; totalFuelLiters: number; efficiencyKmPerLiter: number }> {
    const map = new Map<string, { totalDistanceKm: number; totalFuelLiters: number; efficiencyKmPerLiter: number }>();
    for (const trip of trips) {
      if (trip.status !== 'COMPLETED') continue;
      const dist = trip.actualDistanceKm ?? 0;
      const fuel = trip.fuelConsumedLiters ?? 0;
      if (fuel <= 0) continue;
      const existing = map.get(trip.vehicleId) ?? { totalDistanceKm: 0, totalFuelLiters: 0, efficiencyKmPerLiter: 0 };
      existing.totalDistanceKm += dist;
      existing.totalFuelLiters += fuel;
      existing.efficiencyKmPerLiter = existing.totalFuelLiters > 0 ? existing.totalDistanceKm / existing.totalFuelLiters : 0;
      map.set(trip.vehicleId, existing);
    }
    return map;
  }

  // ── attention issues (deterministic rules) ────────────────────────────

  function computeAttentionIssues(data: { vehicles: any[]; drivers: any[]; trips: any[]; maintenanceLogs: any[] }): AttentionIssue[] {
    const issues: AttentionIssue[] = [];
    const now = new Date();

    // Vehicle rules
    for (const v of data.vehicles) {
      if (v.status === 'IN_SHOP') {
        issues.push({
          type: 'VEHICLE_IN_SHOP',
          severity: 'WARNING',
          message: `Vehicle ${v.id} is currently in the shop.`,
          recommendation: `Review maintenance status for vehicle ${v.id} and expedite repairs if possible.`,
          entityType: 'VEHICLE',
          entityId: v.id,
        });
      }
    }

    // Maintenance rules
    for (const m of data.maintenanceLogs) {
      if (m.status === 'ACTIVE') {
        issues.push({
          type: 'ACTIVE_MAINTENANCE',
          severity: 'WARNING',
          message: `Vehicle ${m.vehicleId} has active maintenance (${m.type}).`,
          recommendation: `Follow up on maintenance ${m.id} for vehicle ${m.vehicleId}.`,
          entityType: 'MAINTENANCE',
          entityId: m.id,
        });
      }
    }

    // Driver rules
    for (const d of data.drivers) {
      if (new Date(d.licenseExpiryDate) < now) {
        issues.push({
          type: 'DRIVER_LICENSE_EXPIRED',
          severity: 'CRITICAL',
          message: `Driver ${d.id} has an expired license (expired ${new Date(d.licenseExpiryDate).toISOString().split('T')[0]}).`,
          recommendation: `Immediately remove driver ${d.id} from active duty and require license renewal.`,
          entityType: 'DRIVER',
          entityId: d.id,
        });
      }
    }

    // Fuel efficiency rules
    const efficiencyMap = computeVehicleFuelEfficiency(data.trips);
    for (const [vehicleId, eff] of efficiencyMap) {
      if (eff.efficiencyKmPerLiter < 5) {
        issues.push({
          type: 'LOW_FUEL_EFFICIENCY',
          severity: 'WARNING',
          message: `Vehicle ${vehicleId} has low fuel efficiency (${eff.efficiencyKmPerLiter.toFixed(2)} km/L).`,
          recommendation: `Investigate vehicle ${vehicleId} for mechanical issues or driver behavior contributing to poor fuel efficiency.`,
          entityType: 'VEHICLE',
          entityId: vehicleId,
        });
      }
    }

    // Long-running trip rules
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
    for (const t of data.trips) {
      if (t.status === 'DISPATCHED' && t.dispatchedAt) {
        const elapsed = now.getTime() - new Date(t.dispatchedAt).getTime();
        if (elapsed > TWENTY_FOUR_HOURS) {
          issues.push({
            type: 'LONG_RUNNING_TRIP',
            severity: 'WARNING',
            message: `Trip ${t.id} has been dispatched for over 24 hours.`,
            recommendation: `Check on trip ${t.id} status and contact the driver for an update.`,
            entityType: 'TRIP',
            entityId: t.id,
          });
        }
      }
    }

    return issues;
  }

  // ── per-vehicle attention (for digital twin) ──────────────────────────

  function computeVehicleAttentionIssues(vehicleId: string, data: { vehicles: any[]; drivers: any[]; trips: any[]; maintenanceLogs: any[] }): AttentionIssue[] {
    const vehicleData = {
      vehicles: data.vehicles.filter((v: any) => v.id === vehicleId),
      drivers: data.drivers,
      trips: data.trips.filter((t: any) => t.vehicleId === vehicleId),
      maintenanceLogs: data.maintenanceLogs.filter((m: any) => m.vehicleId === vehicleId),
    };
    return computeAttentionIssues(vehicleData);
  }

  return {
    // ── STEP 1: KPIs ──────────────────────────────────────────────────────

    async getKpis() {
      const data = await fetchAllData();

      const totalVehicles = data.vehicles.length;
      const availableVehicles = data.vehicles.filter((v: any) => v.status === 'AVAILABLE').length;
      const vehiclesOnTrip = data.vehicles.filter((v: any) => v.status === 'ON_TRIP').length;
      const vehiclesInShop = data.vehicles.filter((v: any) => v.status === 'IN_SHOP').length;
      const activeTrips = data.trips.filter((t: any) => t.status === 'DISPATCHED').length;
      const completedTrips = data.trips.filter((t: any) => t.status === 'COMPLETED').length;
      const activeMaintenance = data.maintenanceLogs.filter((m: any) => m.status === 'ACTIVE').length;

      const nonRetired = data.vehicles.filter((v: any) => v.status !== 'RETIRED').length;
      const fleetUtilizationPercentage = nonRetired === 0 ? 0 : (vehiclesOnTrip / nonRetired) * 100;

      // Total operational cost reuse: fuel log costs + maintenance costs
      const [fuelAgg, maintAgg] = await Promise.all([
        prismaClient.fuelLog.aggregate({ _sum: { cost: true } }),
        prismaClient.maintenanceLog.aggregate({ _sum: { cost: true } }),
      ]);
      const totalOperationalCost = (fuelAgg._sum.cost ?? 0) + Number(maintAgg._sum.cost ?? 0);

      return {
        totalVehicles,
        availableVehicles,
        vehiclesOnTrip,
        vehiclesInShop,
        activeTrips,
        completedTrips,
        activeMaintenance,
        fleetUtilizationPercentage: Math.round(fleetUtilizationPercentage * 100) / 100,
        totalOperationalCost,
      };
    },

    // ── STEP 1: Attention ─────────────────────────────────────────────────

    async getAttentionIssues(): Promise<AttentionIssue[]> {
      const data = await fetchAllData();
      return computeAttentionIssues(data);
    },

    // ── STEP 1: Operations Health ─────────────────────────────────────────

    async getOperationsHealth(): Promise<OperationsHealth> {
      const data = await fetchAllData();
      const issues = computeAttentionIssues(data);

      const criticalCount = issues.filter(i => i.severity === 'CRITICAL').length;
      const warningCount = issues.filter(i => i.severity === 'WARNING').length;

      let score = 100 - (criticalCount * 15) - (warningCount * 5);
      score = Math.max(0, Math.min(100, score));

      let status: OperationsHealth['status'];
      if (score >= 80) status = 'HEALTHY';
      else if (score >= 50) status = 'ATTENTION_REQUIRED';
      else status = 'CRITICAL';

      return { score, status, criticalCount, warningCount };
    },

    // ── STEP 1: Recommendations ───────────────────────────────────────────

    async getRecommendations(): Promise<Recommendation[]> {
      const data = await fetchAllData();
      const issues = computeAttentionIssues(data);

      // Sort: CRITICAL first, then WARNING
      const sorted = [...issues].sort((a, b) => {
        if (a.severity === 'CRITICAL' && b.severity !== 'CRITICAL') return -1;
        if (a.severity !== 'CRITICAL' && b.severity === 'CRITICAL') return 1;
        return 0;
      });

      return sorted.slice(0, 5).map((issue, i) => ({
        priority: i + 1,
        action: issue.recommendation,
        reason: issue.message,
        severity: issue.severity,
        entityType: issue.entityType,
        entityId: issue.entityId,
        issueType: issue.type,
      }));
    },

    // ── STEP 2: Digital Twins ─────────────────────────────────────────────

    async getDigitalTwins(): Promise<DigitalTwin[]> {
      const data = await fetchAllData();
      return data.vehicles.map((v: any) => computeDigitalTwin(v, data));
    },

    async getDigitalTwinByVehicleId(vehicleId: string): Promise<DigitalTwin> {
      const data = await fetchAllData();
      const vehicle = data.vehicles.find((v: any) => v.id === vehicleId);
      if (!vehicle) {
        throw new Error(`Vehicle ${vehicleId} not found`);
      }
      return computeDigitalTwin(vehicle, data);
    },

    // ── STEP 3: Predictive Risk Engine ────────────────────────────────────

    async getRisks(): Promise<Risk[]> {
      const data = await fetchAllData();
      const risks: Risk[] = [];
      const disclaimer = 'Hackathon heuristic risk estimate — not a machine-learning prediction.';
      const now = new Date();
      const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

      const efficiencyMap = computeVehicleFuelEfficiency(data.trips);

      // MAINTENANCE_RISK per vehicle
      for (const v of data.vehicles) {
        let riskScore = 0;
        const factors: string[] = [];

        if (v.status === 'IN_SHOP') { riskScore += 50; factors.push('Vehicle is currently IN_SHOP'); }
        const activeMaint = data.maintenanceLogs.filter((m: any) => m.vehicleId === v.id && m.status === 'ACTIVE');
        if (activeMaint.length > 0) { riskScore += 35; factors.push('Vehicle has active maintenance'); }
        const eff = efficiencyMap.get(v.id);
        if (eff && eff.efficiencyKmPerLiter < 5) { riskScore += 20; factors.push(`Low fuel efficiency: ${eff.efficiencyKmPerLiter.toFixed(2)} km/L`); }

        if (riskScore > 0) {
          riskScore = Math.min(100, riskScore);
          risks.push({
            category: 'MAINTENANCE_RISK',
            entityType: 'VEHICLE',
            entityId: v.id,
            riskScore,
            probability: riskScore,
            severity: riskScore >= 70 ? 'HIGH' : riskScore >= 30 ? 'MEDIUM' : 'LOW',
            description: `Maintenance risk for vehicle ${v.id}`,
            factors,
            disclaimer,
          });
        }
      }

      // DRIVER_ELIGIBILITY_RISK per driver
      for (const d of data.drivers) {
        let riskScore = 0;
        const factors: string[] = [];

        if (new Date(d.licenseExpiryDate) < now) { riskScore += 100; factors.push('License expired'); }
        if (d.status === 'SUSPENDED') { riskScore += 100; factors.push('Driver suspended'); }

        if (riskScore > 0) {
          riskScore = Math.min(100, riskScore);
          risks.push({
            category: 'DRIVER_ELIGIBILITY_RISK',
            entityType: 'DRIVER',
            entityId: d.id,
            riskScore,
            probability: riskScore,
            severity: riskScore >= 70 ? 'HIGH' : riskScore >= 30 ? 'MEDIUM' : 'LOW',
            description: `Driver eligibility risk for driver ${d.id}`,
            factors,
            disclaimer,
          });
        }
      }

      // TRIP_DELAY_RISK per dispatched trip
      for (const t of data.trips) {
        if (t.status !== 'DISPATCHED') continue;
        let riskScore = 0;
        const factors: string[] = [];

        if (t.dispatchedAt) {
          const elapsed = now.getTime() - new Date(t.dispatchedAt).getTime();
          if (elapsed > TWENTY_FOUR_HOURS) { riskScore += 60; factors.push('Trip dispatched > 24 hours ago'); }
        }

        // Check vehicle warning
        const vehicleIssues = computeVehicleAttentionIssues(t.vehicleId, data);
        const vehicleWarnings = vehicleIssues.filter(i => i.severity === 'WARNING');
        if (vehicleWarnings.length > 0) { riskScore += 20; factors.push('Assigned vehicle has warnings'); }

        // Check driver critical
        const driverCritical = data.drivers.find((d: any) => d.id === t.driverId);
        if (driverCritical && new Date(driverCritical.licenseExpiryDate) < now) {
          riskScore += 30; factors.push('Assigned driver has critical issues');
        }

        if (riskScore > 0) {
          riskScore = Math.min(100, riskScore);
          risks.push({
            category: 'TRIP_DELAY_RISK',
            entityType: 'TRIP',
            entityId: t.id,
            riskScore,
            probability: riskScore,
            severity: riskScore >= 70 ? 'HIGH' : riskScore >= 30 ? 'MEDIUM' : 'LOW',
            description: `Trip delay risk for trip ${t.id}`,
            factors,
            disclaimer,
          });
        }
      }

      // FUEL_EFFICIENCY_RISK per vehicle
      for (const [vehicleId, eff] of efficiencyMap) {
        let riskScore = 0;
        const factors: string[] = [];

        if (eff.efficiencyKmPerLiter < 5) { riskScore += 70; factors.push(`Very low efficiency: ${eff.efficiencyKmPerLiter.toFixed(2)} km/L`); }
        else if (eff.efficiencyKmPerLiter < 7) { riskScore += 30; factors.push(`Below-average efficiency: ${eff.efficiencyKmPerLiter.toFixed(2)} km/L`); }

        if (riskScore > 0) {
          riskScore = Math.min(100, riskScore);
          risks.push({
            category: 'FUEL_EFFICIENCY_RISK',
            entityType: 'VEHICLE',
            entityId: vehicleId,
            riskScore,
            probability: riskScore,
            severity: riskScore >= 70 ? 'HIGH' : riskScore >= 30 ? 'MEDIUM' : 'LOW',
            description: `Fuel efficiency risk for vehicle ${vehicleId}`,
            factors,
            disclaimer,
          });
        }
      }

      // Sort highest risk first
      risks.sort((a, b) => b.riskScore - a.riskScore);
      return risks;
    },

    // ── STEP 4: Dispatcher Context ────────────────────────────────────────

    async getDispatcherContext() {
      const [operationsHealth, kpis, issues, risks, recommendations] = await Promise.all([
        this.getOperationsHealth(),
        this.getKpis(),
        this.getAttentionIssues(),
        this.getRisks(),
        this.getRecommendations(),
      ]);

      const criticalIssues = issues.filter(i => i.severity === 'CRITICAL');
      const topRisks = risks.slice(0, 5);
      const recommendedActions = recommendations;

      // Critical vehicles: those with at least one critical issue
      const criticalVehicleIds = new Set(
        criticalIssues.filter(i => i.entityType === 'VEHICLE').map(i => i.entityId)
      );
      const criticalVehicles = Array.from(criticalVehicleIds);

      return {
        operationsHealth,
        kpis,
        criticalIssues,
        topRisks,
        recommendedActions,
        criticalVehicles,
      };
    },

    // ── STEP 5: Sustainability ────────────────────────────────────────────

    async getSustainabilityReport(): Promise<SustainabilityReport> {
      const data = await fetchAllData();
      const efficiencyMap = computeVehicleFuelEfficiency(data.trips);

      let totalFuelConsumedLiters = 0;
      let totalDistanceKm = 0;

      for (const [, eff] of efficiencyMap) {
        totalFuelConsumedLiters += eff.totalFuelLiters;
        totalDistanceKm += eff.totalDistanceKm;
      }

      const fleetFuelEfficiencyKmPerLiter = totalFuelConsumedLiters > 0
        ? totalDistanceKm / totalFuelConsumedLiters
        : 0;

      const TARGET_EFFICIENCY = 5; // km/L
      const inefficientVehicles: Array<{ vehicleId: string; efficiencyKmPerLiter: number }> = [];
      let potentialFuelSavingsLiters = 0;

      for (const [vehicleId, eff] of efficiencyMap) {
        if (eff.efficiencyKmPerLiter < TARGET_EFFICIENCY) {
          inefficientVehicles.push({
            vehicleId,
            efficiencyKmPerLiter: Math.round(eff.efficiencyKmPerLiter * 100) / 100,
          });
          // Fuel that *would have been used* at target vs actual
          const fuelAtTarget = eff.totalDistanceKm / TARGET_EFFICIENCY;
          const savings = eff.totalFuelLiters - fuelAtTarget;
          if (savings > 0) potentialFuelSavingsLiters += savings;
        }
      }

      const summary = inefficientVehicles.length === 0
        ? `Fleet fuel efficiency is ${fleetFuelEfficiencyKmPerLiter.toFixed(2)} km/L. All vehicles meet the ${TARGET_EFFICIENCY} km/L target.`
        : `Fleet fuel efficiency is ${fleetFuelEfficiencyKmPerLiter.toFixed(2)} km/L. ${inefficientVehicles.length} vehicle(s) are below the ${TARGET_EFFICIENCY} km/L target. Potential fuel savings: ${potentialFuelSavingsLiters.toFixed(2)} liters.`;

      return {
        totalFuelConsumedLiters: Math.round(totalFuelConsumedLiters * 100) / 100,
        totalDistanceKm: Math.round(totalDistanceKm * 100) / 100,
        fleetFuelEfficiencyKmPerLiter: Math.round(fleetFuelEfficiencyKmPerLiter * 100) / 100,
        inefficientVehicles,
        potentialFuelSavingsLiters: Math.round(potentialFuelSavingsLiters * 100) / 100,
        summary,
      };
    },

    // ── STEP 6: Safe Action (demo stub) ───────────────────────────────────

    async acknowledgeRecommendation(type: string) {
      return {
        acknowledged: true,
        type,
        message: `Recommendation of type "${type}" has been acknowledged. (Demo stub — no persistence.)`,
        timestamp: new Date().toISOString(),
      };
    },
  };

  // ── Digital Twin helper ─────────────────────────────────────────────────

  function computeDigitalTwin(vehicle: any, data: any): DigitalTwin {
    const issues = computeVehicleAttentionIssues(vehicle.id, data);

    let healthScore = 100;

    // RETIRED → score 0
    if (vehicle.status === 'RETIRED') {
      return { vehicleId: vehicle.id, healthScore: 0, healthStatus: 'RED', issues };
    }

    // Track deductions to avoid double-counting
    const appliedDeductions = new Set<string>();

    for (const issue of issues) {
      const key = `${issue.type}:${issue.entityId}`;
      if (appliedDeductions.has(key)) continue;
      appliedDeductions.add(key);

      if (issue.severity === 'CRITICAL') {
        healthScore -= 30;
      } else {
        healthScore -= 10;
      }
    }

    // Additional deductions for active maintenance and IN_SHOP
    const activeMaint = data.maintenanceLogs.filter((m: any) => m.vehicleId === vehicle.id && m.status === 'ACTIVE');
    if (activeMaint.length > 0 && !appliedDeductions.has(`ACTIVE_MAINT_DEDUCTION:${vehicle.id}`)) {
      healthScore -= 20;
      appliedDeductions.add(`ACTIVE_MAINT_DEDUCTION:${vehicle.id}`);
    }
    if (vehicle.status === 'IN_SHOP' && !appliedDeductions.has(`IN_SHOP_DEDUCTION:${vehicle.id}`)) {
      healthScore -= 15;
      appliedDeductions.add(`IN_SHOP_DEDUCTION:${vehicle.id}`);
    }

    healthScore = Math.max(0, Math.min(100, healthScore));

    let healthStatus: DigitalTwin['healthStatus'];
    if (healthScore >= 80) healthStatus = 'GREEN';
    else if (healthScore >= 50) healthStatus = 'YELLOW';
    else healthStatus = 'RED';

    return { vehicleId: vehicle.id, healthScore, healthStatus, issues };
  }
}

export type IntelligenceService = ReturnType<typeof createIntelligenceService>;
