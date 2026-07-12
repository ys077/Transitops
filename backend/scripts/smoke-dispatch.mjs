import { PrismaClient } from '@prisma/client';

// Use direct connection for transactions to avoid pooled connection issues
// when using Supabase's pgbouncer. The DIRECT_URL is set in .env.
const prisma = new PrismaClient({ datasources: { db: { url: process.env.DIRECT_URL } } });

function nowDateOnly() {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

async function runSuccessCase() {
  console.log('--- Success case: creating available vehicle/driver/trip');
  const vehicle = await prisma.vehicle.create({
    data: { status: 'AVAILABLE', maxLoadCapacityKg: 1000 },
  });

  const driver = await prisma.driver.create({
    data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') },
  });

  const trip = await prisma.trip.create({
    data: { status: 'DRAFT', cargoWeightKg: 500, vehicleId: vehicle.id, driverId: driver.id },
  });

  // Perform atomic dispatch (replicating service logic)
  const result = await prisma.$transaction(async (tx) => {
    const tripInside = await tx.trip.findUnique({ where: { id: trip.id }, include: { vehicle: true, driver: true } });
    if (!tripInside) throw new Error('Trip not found');

    // simple rule checks
    if (tripInside.cargoWeightKg > tripInside.vehicle.maxLoadCapacityKg) throw new Error('CARGO_EXCEEDS_CAPACITY');
    if (tripInside.vehicle.status !== 'AVAILABLE') throw new Error('VEHICLE_NOT_AVAILABLE');
    if (tripInside.driver.status !== 'AVAILABLE') throw new Error('DRIVER_NOT_AVAILABLE');
    if (new Date(tripInside.driver.licenseExpiryDate) < nowDateOnly()) throw new Error('DRIVER_LICENSE_EXPIRED');

    const v = await tx.vehicle.updateMany({ where: { id: tripInside.vehicle.id, status: 'AVAILABLE' }, data: { status: 'ON_TRIP' } });
    if (v.count !== 1) throw new Error('VEHICLE_CLAIM_FAILED');

    const d = await tx.driver.updateMany({ where: { id: tripInside.driver.id, status: 'AVAILABLE' }, data: { status: 'ON_TRIP' } });
    if (d.count !== 1) throw new Error('DRIVER_CLAIM_FAILED');

    const updated = await tx.trip.update({ where: { id: trip.id }, data: { status: 'DISPATCHED', dispatchedAt: new Date() } });
    return updated;
  });

  console.log('Dispatch result:', result.id, result.status);

  const vAfter = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
  const dAfter = await prisma.driver.findUnique({ where: { id: driver.id } });
  const tAfter = await prisma.trip.findUnique({ where: { id: trip.id } });

  console.log('Vehicle after:', vAfter.status);
  console.log('Driver after:', dAfter.status);
  console.log('Trip after:', tAfter.status);

  // cleanup
  await prisma.trip.delete({ where: { id: trip.id } });
  await prisma.vehicle.delete({ where: { id: vehicle.id } });
  await prisma.driver.delete({ where: { id: driver.id } });

  console.log('Success case passed');
}

async function runFailureCase() {
  console.log('--- Failure case: vehicle unavailable');
  const vehicle = await prisma.vehicle.create({ data: { status: 'ON_TRIP', maxLoadCapacityKg: 1000 } });
  const driver = await prisma.driver.create({ data: { status: 'AVAILABLE', licenseExpiryDate: new Date('2099-01-01') } });
  const trip = await prisma.trip.create({ data: { status: 'DRAFT', cargoWeightKg: 100, vehicleId: vehicle.id, driverId: driver.id } });

  let caught = false;
  try {
    await prisma.$transaction(async (tx) => {
      const tripInside = await tx.trip.findUnique({ where: { id: trip.id }, include: { vehicle: true, driver: true } });
      const v = await tx.vehicle.updateMany({ where: { id: tripInside.vehicle.id, status: 'AVAILABLE' }, data: { status: 'ON_TRIP' } });
      if (v.count !== 1) throw new Error('VEHICLE_CLAIM_FAILED');
      const d = await tx.driver.updateMany({ where: { id: tripInside.driver.id, status: 'AVAILABLE' }, data: { status: 'ON_TRIP' } });
    });
  } catch (err) {
    console.log('Expected failure:', err.message);
    caught = true;
  }

  const vAfter = await prisma.vehicle.findUnique({ where: { id: vehicle.id } });
  const dAfter = await prisma.driver.findUnique({ where: { id: driver.id } });
  const tAfter = await prisma.trip.findUnique({ where: { id: trip.id } });

  console.log('Vehicle after:', vAfter.status);
  console.log('Driver after:', dAfter.status);
  console.log('Trip after:', tAfter.status);

  // cleanup
  await prisma.trip.delete({ where: { id: trip.id } });
  await prisma.vehicle.delete({ where: { id: vehicle.id } });
  await prisma.driver.delete({ where: { id: driver.id } });

  if (!caught) throw new Error('Failure case did not fail as expected');
  console.log('Failure case passed');
}

async function main() {
  try {
    await runSuccessCase();
    await runFailureCase();
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
