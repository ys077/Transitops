export function createReportsService(prismaClient: any) {
  return {
    async getFuelEfficiencyReport() {
      const trips = await prismaClient.trip.findMany({
        where: {
          status: 'COMPLETED',
          actualDistanceKm: { not: null },
          fuelConsumedLiters: { not: null },
        },
        select: {
          vehicleId: true,
          actualDistanceKm: true,
          fuelConsumedLiters: true,
        },
      });

      const totalsByVehicle: Record<string, { totalDistanceKm: number; totalFuelConsumedLiters: number }> = {};

      for (const trip of trips) {
        const distance = trip.actualDistanceKm ?? 0;
        const fuel = trip.fuelConsumedLiters ?? 0;
        if (fuel <= 0) continue;
        const existing = totalsByVehicle[trip.vehicleId] ?? { totalDistanceKm: 0, totalFuelConsumedLiters: 0 };
        existing.totalDistanceKm += distance;
        existing.totalFuelConsumedLiters += fuel;
        totalsByVehicle[trip.vehicleId] = existing;
      }

      return Object.entries(totalsByVehicle).map(([vehicleId, totals]) => ({
        vehicleId,
        totalDistanceKm: totals.totalDistanceKm,
        totalFuelConsumedLiters: totals.totalFuelConsumedLiters,
        fuelEfficiencyKmPerLiter: totals.totalFuelConsumedLiters > 0
          ? totals.totalDistanceKm / totals.totalFuelConsumedLiters
          : 0,
      }));
    },

    async getFleetUtilizationReport() {
      const activeVehicles = await prismaClient.vehicle.findMany({
        where: { status: { not: 'RETIRED' } },
        select: { id: true },
      });
      const totalActiveVehicles = activeVehicles.length;

      const usedVehicleIds = await prismaClient.trip.findMany({
        where: {
          status: { not: 'DRAFT' },
          vehicleId: { in: activeVehicles.map((v: any) => v.id) },
        },
        distinct: ['vehicleId'],
        select: { vehicleId: true },
      });

      const usedVehicles = usedVehicleIds.length;
      const utilizationPercentage = totalActiveVehicles === 0 ? 0 : (usedVehicles / totalActiveVehicles) * 100;

      return {
        totalActiveVehicles,
        usedVehicles,
        utilizationPercentage,
      };
    },

    async getOperationalCostReport() {
      const vehicles = await prismaClient.vehicle.findMany({ select: { id: true } });

      const fuelLogs = await prismaClient.fuelLog.groupBy({
        by: ['vehicleId'],
        _sum: { cost: true },
      });
      const maints = await prismaClient.maintenanceLog.groupBy({
        by: ['vehicleId'],
        _sum: { cost: true },
      });

      const fuelByVehicle = fuelLogs.reduce((acc: Record<string, number>, entry: any) => {
        acc[entry.vehicleId] = entry._sum.cost ?? 0;
        return acc;
      }, {} as Record<string, number>);

      const maintByVehicle = maints.reduce((acc: Record<string, number>, entry: any) => {
        acc[entry.vehicleId] = Number(entry._sum.cost ?? 0);
        return acc;
      }, {} as Record<string, number>);

      const vehiclesReport = vehicles.map((vehicle: any) => {
        const fuelCost = fuelByVehicle[vehicle.id] ?? 0;
        const maintenanceCost = maintByVehicle[vehicle.id] ?? 0;
        return {
          vehicleId: vehicle.id,
          fuelCost,
          maintenanceCost,
          operationalCost: fuelCost + maintenanceCost,
        };
      });

      const totalFuelCost = vehiclesReport.reduce((sum: number, row: { fuelCost: number }) => sum + row.fuelCost, 0);
      const totalMaintenanceCost = vehiclesReport.reduce((sum: number, row: { maintenanceCost: number }) => sum + row.maintenanceCost, 0);
      const totalOperationalCost = vehiclesReport.reduce((sum: number, row: { operationalCost: number }) => sum + row.operationalCost, 0);

      return {
        vehicles: vehiclesReport,
        fleet: {
          totalFuelCost,
          totalMaintenanceCost,
          totalOperationalCost,
        },
      };
    },

    async getRoiReport() {
      return {
        available: false,
        message: 'ROI is unavailable because return or revenue data is not available in the current operational schema.',
      };
    },

    async getOperationalCostCsv() {
      const report = await this.getOperationalCostReport();
      const escapeValue = (value: string | number) => {
        const text = String(value);
        if (/[",\r\n]/.test(text)) {
          return `"${text.replace(/"/g, '""')}"`;
        }
        return text;
      };

      const lines = ['vehicleId,fuelCost,maintenanceCost,operationalCost'];
      for (const vehicle of report.vehicles) {
        lines.push([
          escapeValue(vehicle.vehicleId),
          escapeValue(vehicle.fuelCost),
          escapeValue(vehicle.maintenanceCost),
          escapeValue(vehicle.operationalCost),
        ].join(','));
      }
      return lines.join('\r\n');
    },
  };
}

export type ReportsService = ReturnType<typeof createReportsService>;
