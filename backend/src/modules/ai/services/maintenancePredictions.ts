import { prisma } from '../../../lib/prisma.js';

// Configurable service interval defaults
const DEFAULT_SERVICE_INTERVAL_KM = 5000;
const DEFAULT_SERVICE_INTERVAL_DAYS = 90;

export interface MaintenancePrediction {
  vehicleId: string;
  registrationNumber: string;
  nameModel: string | null;
  type: string | null;
  currentOdometerKm: number;
  lastServiceOdometerKm: number | null;
  lastServiceDate: Date | null;
  kmSinceLastService: number;
  daysSinceLastService: number | null;
  serviceIntervalKm: number;
  serviceIntervalDays: number;
  kmRemaining: number;
  daysRemaining: number | null;
  riskBadge: 'green' | 'amber' | 'red';
}

/**
 * Predictive Maintenance Engine (Blueprint §4.2)
 *
 * For each non-retired vehicle:
 *  1. Find the most recent *closed* maintenance record.
 *  2. Compute km driven since that service (current odometer − odometer at service).
 *  3. Compare against a configurable service interval (default 5 000 km / 90 days).
 *  4. Derive km remaining and estimated days remaining (based on daily km rate).
 *  5. Assign a risk badge:
 *       green  → ≥ 40 % of interval remaining
 *       amber  → 10–40 % remaining
 *       red    → < 10 % remaining OR already overdue
 */
export async function getMaintenancePredictions(
  serviceIntervalKm = DEFAULT_SERVICE_INTERVAL_KM,
  serviceIntervalDays = DEFAULT_SERVICE_INTERVAL_DAYS,
): Promise<MaintenancePrediction[]> {
  // Fetch all non-retired vehicles
  const vehicles = await prisma.vehicle.findMany({
    where: { status: { not: 'retired' } },
    select: {
      id: true,
      registrationNumber: true,
      nameModel: true,
      type: true,
      odometerKm: true,
    },
  });

  // Batch-fetch the most recent *closed* maintenance log per vehicle
  // (Prisma doesn't support DISTINCT ON natively, so we fetch all closed logs
  //  ordered by closedDate DESC and pick the first per vehicle in memory.)
  const closedLogs = await prisma.maintenanceLog.findMany({
    where: {
      status: 'closed',
      vehicleId: { in: vehicles.map((v) => v.id) },
    },
    orderBy: { closedDate: 'desc' },
    select: {
      vehicleId: true,
      odometerAtService: true,
      closedDate: true,
    },
  });

  // Build a map: vehicleId → most recent closed log
  const lastServiceByVehicle = new Map<
    string,
    { odometerAtService: number | null; closedDate: Date | null }
  >();
  for (const log of closedLogs) {
    if (!lastServiceByVehicle.has(log.vehicleId)) {
      lastServiceByVehicle.set(log.vehicleId, {
        odometerAtService: log.odometerAtService
          ? Number(log.odometerAtService)
          : null,
        closedDate: log.closedDate,
      });
    }
  }

  const now = new Date();

  return vehicles.map((vehicle) => {
    const currentKm = Number(vehicle.odometerKm ?? 0);
    const lastService = lastServiceByVehicle.get(vehicle.id);

    const lastServiceKm = lastService?.odometerAtService ?? 0;
    const lastServiceDate = lastService?.closedDate ?? null;

    const kmSinceLastService = currentKm - lastServiceKm;

    // Days since last service
    let daysSinceLastService: number | null = null;
    if (lastServiceDate) {
      daysSinceLastService = Math.floor(
        (now.getTime() - new Date(lastServiceDate).getTime()) /
          (1000 * 60 * 60 * 24),
      );
    }

    // Remaining budget
    const kmRemaining = Math.max(0, serviceIntervalKm - kmSinceLastService);

    // Estimate days remaining from daily km rate (if we have history)
    let daysRemaining: number | null = null;
    if (daysSinceLastService && daysSinceLastService > 0) {
      const dailyKmRate = kmSinceLastService / daysSinceLastService;
      if (dailyKmRate > 0) {
        daysRemaining = Math.max(0, Math.round(kmRemaining / dailyKmRate));
      }
    }
    // Also cap by day-based interval
    if (daysSinceLastService !== null) {
      const daysRemainingByInterval = Math.max(
        0,
        serviceIntervalDays - daysSinceLastService,
      );
      if (daysRemaining === null) {
        daysRemaining = daysRemainingByInterval;
      } else {
        daysRemaining = Math.min(daysRemaining, daysRemainingByInterval);
      }
    }

    // Risk badge
    const kmFraction = kmRemaining / serviceIntervalKm;
    let riskBadge: 'green' | 'amber' | 'red';
    if (kmFraction <= 0 || (daysRemaining !== null && daysRemaining <= 0)) {
      riskBadge = 'red'; // overdue
    } else if (kmFraction < 0.1) {
      riskBadge = 'red';
    } else if (kmFraction < 0.4) {
      riskBadge = 'amber';
    } else {
      riskBadge = 'green';
    }

    return {
      vehicleId: vehicle.id,
      registrationNumber: vehicle.registrationNumber,
      nameModel: vehicle.nameModel ?? null,
      type: vehicle.type ?? null,
      currentOdometerKm: currentKm,
      lastServiceOdometerKm: lastServiceKm,
      lastServiceDate,
      kmSinceLastService,
      daysSinceLastService,
      serviceIntervalKm,
      serviceIntervalDays,
      kmRemaining,
      daysRemaining,
      riskBadge,
    };
  });
}
