import prisma from '../../../lib/prisma.js';

export async function getDispatchRecommendations(
  cargoWeightKg: number,
  plannedDistanceKm: number
) {
  // 1. Fetch available vehicles with enough capacity
  const vehicles = await prisma.vehicle.findMany({
    where: {
      status: 'available',
      maxLoadCapacityKg: { gte: cargoWeightKg },
    },
  });

  // 2. Fetch available drivers
  // Ensure license is not expired
  const now = new Date();
  const drivers = await prisma.driver.findMany({
    where: {
      status: 'available',
      licenseExpiryDate: { gt: now },
    },
  });

  if (vehicles.length === 0 || drivers.length === 0) {
    return [];
  }

  // 3. Score pairings
  // Higher score is better
  const pairings = [];

  for (const v of vehicles) {
    for (const d of drivers) {
      let score = 100;

      // Penalize vehicles that are WAY too big for the load (inefficient)
      const capacityDiff = Number(v.maxLoadCapacityKg) - cargoWeightKg;
      score -= (capacityDiff / 100); // Small penalty for unused capacity

      // Reward high safety score drivers
      score += (d.safetyScore * 2);

      pairings.push({
        vehicle: v,
        driver: d,
        score,
        explanation: `Driver ${d.name} (Safety Score: ${d.safetyScore}) paired with ${v.nameModel || v.registrationNumber} (Load Match: ${cargoWeightKg}kg / ${v.maxLoadCapacityKg}kg capacity).`,
      });
    }
  }

  // Sort by score descending and return top 5
  return pairings
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(p => ({
      vehicleId: p.vehicle.id,
      driverId: p.driver.id,
      vehicleDetails: p.vehicle,
      driverDetails: p.driver,
      score: Math.round(p.score),
      explanation: p.explanation,
    }));
}
