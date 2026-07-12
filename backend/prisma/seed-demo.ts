/**
 * TransitOps Demo Seed
 *
 * Standalone, idempotent seed script for demo scenarios.
 * Creates uniquely prefixed records that never conflict with existing data.
 * Does NOT delete existing data.
 *
 * Usage: npx tsx backend/prisma/seed-demo.ts
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Unique prefix to ensure idempotency
const DEMO_PREFIX = 'demo-sprint-';

async function main() {
  console.log('🚀 TransitOps Demo Seed — starting...');

  // ── 1. Healthy AVAILABLE vehicle → GREEN digital twin ───────────────
  const healthyVehicleId = `${DEMO_PREFIX}vehicle-healthy`;
  const existingHealthy = await prisma.vehicle.findUnique({ where: { id: healthyVehicleId } });
  if (!existingHealthy) {
    await prisma.vehicle.create({
      data: {
        id: healthyVehicleId,
        status: 'AVAILABLE',
        maxLoadCapacityKg: 8000,
        odometerKm: 50000,
      },
    });
    console.log('✅ Created healthy AVAILABLE vehicle:', healthyVehicleId);
  } else {
    console.log('⏭️  Healthy vehicle already exists:', healthyVehicleId);
  }

  // ── 2. IN_SHOP vehicle + ACTIVE maintenance → YELLOW/RED twin ──────
  const shopVehicleId = `${DEMO_PREFIX}vehicle-in-shop`;
  const existingShop = await prisma.vehicle.findUnique({ where: { id: shopVehicleId } });
  if (!existingShop) {
    await prisma.vehicle.create({
      data: {
        id: shopVehicleId,
        status: 'IN_SHOP',
        maxLoadCapacityKg: 6000,
        odometerKm: 120000,
      },
    });
    console.log('✅ Created IN_SHOP vehicle:', shopVehicleId);
  } else {
    console.log('⏭️  IN_SHOP vehicle already exists:', shopVehicleId);
  }

  const maintId = `${DEMO_PREFIX}maint-active`;
  const existingMaint = await prisma.maintenanceLog.findUnique({ where: { id: maintId } });
  if (!existingMaint) {
    await prisma.maintenanceLog.create({
      data: {
        id: maintId,
        vehicleId: shopVehicleId,
        type: 'ENGINE_OVERHAUL',
        description: 'Major engine overhaul — demo scenario',
        cost: 2500,
        status: 'ACTIVE',
        scheduledDate: new Date(),
        odometerAtService: 120000,
      },
    });
    console.log('✅ Created ACTIVE maintenance:', maintId);
  } else {
    console.log('⏭️  Active maintenance already exists:', maintId);
  }

  // ── 3. Driver with expired license → CRITICAL ──────────────────────
  const expiredDriverId = `${DEMO_PREFIX}driver-expired`;
  const existingExpiredDriver = await prisma.driver.findUnique({ where: { id: expiredDriverId } });
  if (!existingExpiredDriver) {
    await prisma.driver.create({
      data: {
        id: expiredDriverId,
        status: 'AVAILABLE',
        licenseExpiryDate: new Date('2024-01-15'), // Well in the past
      },
    });
    console.log('✅ Created driver with expired license:', expiredDriverId);
  } else {
    console.log('⏭️  Expired-license driver already exists:', expiredDriverId);
  }

  // ── 4. COMPLETED trip at 100km/25L (4 km/L) → LOW_FUEL_EFFICIENCY ──
  const validDriverId = `${DEMO_PREFIX}driver-valid`;
  const existingValidDriver = await prisma.driver.findUnique({ where: { id: validDriverId } });
  if (!existingValidDriver) {
    await prisma.driver.create({
      data: {
        id: validDriverId,
        status: 'AVAILABLE',
        licenseExpiryDate: new Date('2030-12-31'),
      },
    });
    console.log('✅ Created valid driver:', validDriverId);
  } else {
    console.log('⏭️  Valid driver already exists:', validDriverId);
  }

  const inefficientTripId = `${DEMO_PREFIX}trip-inefficient`;
  const existingIneffTrip = await prisma.trip.findUnique({ where: { id: inefficientTripId } });
  if (!existingIneffTrip) {
    await prisma.trip.create({
      data: {
        id: inefficientTripId,
        status: 'COMPLETED',
        cargoWeightKg: 3000,
        vehicleId: healthyVehicleId,
        driverId: validDriverId,
        dispatchedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
        completedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        actualDistanceKm: 100,
        fuelConsumedLiters: 25, // 4 km/L — below 5 km/L threshold
      },
    });
    console.log('✅ Created inefficient COMPLETED trip:', inefficientTripId);
  } else {
    console.log('⏭️  Inefficient trip already exists:', inefficientTripId);
  }

  // ── 5. DISPATCHED trip >24h ago → LONG_RUNNING_TRIP + TRIP_DELAY_RISK
  // Need an ON_TRIP vehicle for this
  const longTripVehicleId = `${DEMO_PREFIX}vehicle-on-trip`;
  const existingLongV = await prisma.vehicle.findUnique({ where: { id: longTripVehicleId } });
  if (!existingLongV) {
    await prisma.vehicle.create({
      data: {
        id: longTripVehicleId,
        status: 'ON_TRIP',
        maxLoadCapacityKg: 7000,
        odometerKm: 85000,
      },
    });
    console.log('✅ Created ON_TRIP vehicle:', longTripVehicleId);
  } else {
    console.log('⏭️  ON_TRIP vehicle already exists:', longTripVehicleId);
  }

  const longTripId = `${DEMO_PREFIX}trip-long-running`;
  const existingLongTrip = await prisma.trip.findUnique({ where: { id: longTripId } });
  if (!existingLongTrip) {
    await prisma.trip.create({
      data: {
        id: longTripId,
        status: 'DISPATCHED',
        cargoWeightKg: 4500,
        vehicleId: longTripVehicleId,
        driverId: validDriverId,
        dispatchedAt: new Date(Date.now() - 30 * 60 * 60 * 1000), // 30 hours ago
      },
    });
    console.log('✅ Created long-running DISPATCHED trip:', longTripId);
  } else {
    console.log('⏭️  Long-running trip already exists:', longTripId);
  }

  console.log('\n🎉 TransitOps Demo Seed — complete!');
  console.log('Demo records are prefixed with:', DEMO_PREFIX);
}

main()
  .catch((e) => {
    console.error('❌ Demo seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
