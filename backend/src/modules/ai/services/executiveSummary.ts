import prisma from '../../../lib/prisma.js';
import { callLLM } from './llmClient.js';

export async function generateExecutiveSummary() {
  const vehicleCount = await prisma.vehicle.count();
  const availableVehicles = await prisma.vehicle.count({ where: { status: 'available' } });
  
  const activeTrips = await prisma.trip.count({ where: { status: 'dispatched' } });
  
  const pendingMaintenance = await prisma.maintenanceLog.findMany({
    where: { status: 'active' },
    include: { vehicle: true },
  });
  
  const now = new Date();
  const next30Days = new Date();
  next30Days.setDate(now.getDate() + 30);
  
  const driversExpiringSoon = await prisma.driver.findMany({
    where: {
      licenseExpiryDate: { gt: now, lte: next30Days },
    }
  });

  const prompt = `Please generate a 2-paragraph executive summary for the fleet operations team.

Current Fleet Status:
- ${vehicleCount} total vehicles, ${availableVehicles} available for dispatch.
- ${activeTrips} active trips currently on the road.

Risks & Alerts:
- ${pendingMaintenance.length} pending maintenance tasks (including vehicles: ${pendingMaintenance.map(m => m.vehicle.registrationNumber).join(', ') || 'None'}).
- ${driversExpiringSoon.length} drivers have licenses expiring in the next 30 days.

Write a concise, professional summary highlighting the operational readiness and any immediate actions required by the team. Use bold text to emphasize critical numbers or risks.`;

  return await callLLM(prompt);
}
