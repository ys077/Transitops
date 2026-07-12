import prisma from '../../lib/prisma.js';
import { callLLM } from './llmClient.js';

export async function askTransitOps(query: string) {
  // 1. Gather basic live context
  const vehicleCount = await prisma.vehicle.count();
  const availableVehicles = await prisma.vehicle.count({ where: { status: 'available' } });
  const inShopVehicles = await prisma.vehicle.count({ where: { status: 'in_shop' } });
  
  const driverCount = await prisma.driver.count();
  const availableDrivers = await prisma.driver.count({ where: { status: 'available' } });
  
  const activeTrips = await prisma.trip.count({ where: { status: 'dispatched' } });
  const pendingMaintenance = await prisma.maintenanceLog.count({ where: { status: 'active' } });

  const systemPrompt = `You are "Ask TransitOps", an AI assistant for a fleet management operations dashboard.
You have access to the following real-time data about the fleet:
- Total Vehicles: ${vehicleCount} (${availableVehicles} available, ${inShopVehicles} in shop)
- Total Drivers: ${driverCount} (${availableDrivers} available)
- Active Trips: ${activeTrips}
- Pending Maintenance tasks: ${pendingMaintenance}

Answer the user's question concisely and professionally in 2-3 sentences. Be data-driven. Do not hallucinate metrics that are not provided in this context. If you don't know the exact answer, just say you only have high-level visibility at the moment.`;

  return await callLLM(query, systemPrompt);
}
