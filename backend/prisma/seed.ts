import { PrismaClient, UserRole, VehicleStatus, DriverStatus, TripStatus, MaintenanceStatus } from '../src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');
  const passwordHash = await bcrypt.hash('password123', 10);

  // 1. Create Users (RBAC)
  const fleetManager = await prisma.user.upsert({
    where: { email: 'manager@transitops.com' },
    update: {},
    create: {
      name: 'Alice Fleet',
      email: 'manager@transitops.com',
      passwordHash,
      role: UserRole.fleet_manager,
    },
  });

  const safetyOfficer = await prisma.user.upsert({
    where: { email: 'safety@transitops.com' },
    update: {},
    create: {
      name: 'Bob Safety',
      email: 'safety@transitops.com',
      passwordHash,
      role: UserRole.safety_officer,
    },
  });

  // 2. Create Vehicles
  const vehicle1 = await prisma.vehicle.upsert({
    where: { registrationNumber: 'TRK-001' },
    update: {},
    create: {
      registrationNumber: 'TRK-001',
      nameModel: 'Volvo FH16',
      type: 'truck',
      maxLoadCapacityKg: 20000,
      odometerKm: 150000,
      acquisitionCost: 120000,
      status: VehicleStatus.available,
      region: 'North',
    },
  });

  const vehicle2 = await prisma.vehicle.upsert({
    where: { registrationNumber: 'VAN-002' },
    update: {},
    create: {
      registrationNumber: 'VAN-002',
      nameModel: 'Mercedes Sprinter',
      type: 'van',
      maxLoadCapacityKg: 2500,
      odometerKm: 45000,
      acquisitionCost: 45000,
      status: VehicleStatus.available,
      region: 'South',
    },
  });

  // 3. Create Drivers (Include one with a near-expiry license for AI testing)
  const now = new Date();
  const expirySoon = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days from now

  const driver1 = await prisma.driver.upsert({
    where: { licenseNumber: 'DL-A-123' },
    update: {},
    create: {
      name: 'Charlie Driver',
      licenseNumber: 'DL-A-123',
      licenseCategory: 'Heavy',
      licenseExpiryDate: new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000), // 1 year
      contactNumber: '555-0100',
      safetyScore: 95,
      status: DriverStatus.available,
    },
  });

  const driver2 = await prisma.driver.upsert({
    where: { licenseNumber: 'DL-B-456' },
    update: {},
    create: {
      name: 'Dave Danger',
      licenseNumber: 'DL-B-456',
      licenseCategory: 'Light',
      licenseExpiryDate: expirySoon, // Expires in 10 days!
      contactNumber: '555-0101',
      safetyScore: 60, // Low score!
      status: DriverStatus.available,
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
