import { prisma } from '../../../lib/prisma.js';

export interface DriverComplianceRisk {
  driverId: string;
  name: string;
  licenseNumber: string;
  licenseExpiryDate: Date;
  safetyScore: number;
  daysUntilExpiry: number;
  expiryRisk: 'none' | 'low' | 'medium' | 'high';
  driverRiskIndex: number; // 0–100, higher = riskier
  riskBadge: 'green' | 'amber' | 'red';
}

/**
 * Compliance Guardian — Driver Risk Radar (Blueprint §4.3)
 *
 * For each active (non-suspended) driver:
 *  1. Compute days until license expiry.
 *  2. Assign expiry risk:  > 30 days → none, 14–30 → low, 7–14 → medium, ≤ 7 → high
 *  3. Combine with safety score into a single Driver Risk Index (0–100):
 *       riskIndex = (expiryComponent × 0.5) + (safetyComponent × 0.5)
 *     where:
 *       expiryComponent  = scaled 0–100 based on proximity to expiry
 *       safetyComponent  = 100 − safetyScore  (lower safety score ⇒ higher risk)
 *  4. Assign overall risk badge from the combined index.
 */
export async function getComplianceRisks(): Promise<DriverComplianceRisk[]> {
  const drivers = await prisma.driver.findMany({
    where: { status: { not: 'suspended' } },
    select: {
      id: true,
      name: true,
      licenseNumber: true,
      licenseExpiryDate: true,
      safetyScore: true,
    },
  });

  const now = new Date();

  return drivers.map((driver) => {
    const expiryDate = new Date(driver.licenseExpiryDate);
    const daysUntilExpiry = Math.floor(
      (expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    );

    // --- Expiry risk tier ---
    let expiryRisk: 'none' | 'low' | 'medium' | 'high';
    if (daysUntilExpiry <= 7) {
      expiryRisk = 'high';
    } else if (daysUntilExpiry <= 14) {
      expiryRisk = 'medium';
    } else if (daysUntilExpiry <= 30) {
      expiryRisk = 'low';
    } else {
      expiryRisk = 'none';
    }

    // --- Expiry component (0–100) ---
    // Already expired or ≤ 0 days → 100 (max risk)
    // 30+ days out → 0 (no risk)
    // Linear interpolation in between
    let expiryComponent: number;
    if (daysUntilExpiry <= 0) {
      expiryComponent = 100;
    } else if (daysUntilExpiry >= 30) {
      expiryComponent = 0;
    } else {
      expiryComponent = Math.round(((30 - daysUntilExpiry) / 30) * 100);
    }

    // --- Safety component (0–100) ---
    // safetyScore is 0–100 where 100 = safest, so invert it
    const safetyScore = Number(driver.safetyScore ?? 100);
    const safetyComponent = 100 - Math.max(0, Math.min(100, safetyScore));

    // --- Driver Risk Index (0–100, weighted average) ---
    const driverRiskIndex = Math.round(
      expiryComponent * 0.5 + safetyComponent * 0.5,
    );

    // --- Overall risk badge ---
    let riskBadge: 'green' | 'amber' | 'red';
    if (driverRiskIndex >= 60 || expiryRisk === 'high') {
      riskBadge = 'red';
    } else if (driverRiskIndex >= 30 || expiryRisk === 'medium') {
      riskBadge = 'amber';
    } else {
      riskBadge = 'green';
    }

    return {
      driverId: driver.id,
      name: driver.name,
      licenseNumber: driver.licenseNumber,
      licenseExpiryDate: expiryDate,
      safetyScore,
      daysUntilExpiry,
      expiryRisk,
      driverRiskIndex,
      riskBadge,
    };
  });
}
