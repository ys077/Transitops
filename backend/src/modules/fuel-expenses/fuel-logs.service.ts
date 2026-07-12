export function createFuelLogsService(prismaClient: any) {
  return {
    async createFuelLog(payload: {
      vehicleId: string;
      tripId?: string;
      liters: number;
      cost: number;
      date: string | Date;
    }) {
      const { vehicleId, tripId, liters, cost, date } = payload;

      if (!vehicleId || typeof vehicleId !== 'string') {
        throw new Error('vehicleId is required');
      }
      if (typeof liters !== 'number' || Number.isNaN(liters) || liters <= 0) {
        throw new Error('liters must be a positive number');
      }
      if (typeof cost !== 'number' || Number.isNaN(cost) || cost < 0) {
        throw new Error('cost must be a non-negative number');
      }
      const parsedDate = new Date(date);
      if (Number.isNaN(parsedDate.getTime())) {
        throw new Error('date must be a valid date');
      }

      const vehicle = await prismaClient.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) {
        throw new Error(`Vehicle ${vehicleId} not found`);
      }

      if (tripId !== undefined && tripId !== null) {
        const trip = await prismaClient.trip.findUnique({ where: { id: tripId } });
        if (!trip) {
          throw new Error(`Trip ${tripId} not found`);
        }
        if (trip.vehicleId !== vehicleId) {
          throw new Error('Trip vehicleId does not match the provided vehicleId');
        }
      }

      return prismaClient.fuelLog.create({
        data: {
          vehicleId,
          tripId: tripId || null,
          liters,
          cost,
          date: parsedDate,
        },
      });
    },

    async getFuelLogsByVehicle(vehicleId: string) {
      if (!vehicleId || typeof vehicleId !== 'string') {
        throw new Error('vehicleId is required');
      }

      const vehicle = await prismaClient.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) {
        throw new Error(`Vehicle ${vehicleId} not found`);
      }

      return prismaClient.fuelLog.findMany({
        where: { vehicleId },
        orderBy: { date: 'desc' },
      });
    },
  };
}

export type FuelLogsService = ReturnType<typeof createFuelLogsService>;
