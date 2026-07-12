export function createExpensesService(prismaClient: any) {
  return {
    async createExpense(payload: {
      vehicleId?: string;
      tripId?: string;
      category: string;
      amount: number;
      date: string | Date;
      notes?: string;
    }) {
      const { vehicleId, tripId, category, amount, date, notes } = payload;

      if (!category || typeof category !== 'string' || !category.trim()) {
        throw new Error('category is required');
      }
      if (typeof amount !== 'number' || Number.isNaN(amount) || amount < 0) {
        throw new Error('amount must be a non-negative number');
      }
      const parsedDate = new Date(date);
      if (Number.isNaN(parsedDate.getTime())) {
        throw new Error('date must be a valid date');
      }

      let vehicle = null;
      let trip = null;

      if (vehicleId !== undefined && vehicleId !== null) {
        if (typeof vehicleId !== 'string' || !vehicleId.trim()) {
          throw new Error('vehicleId must be a string when provided');
        }
        vehicle = await prismaClient.vehicle.findUnique({ where: { id: vehicleId } });
        if (!vehicle) {
          throw new Error(`Vehicle ${vehicleId} not found`);
        }
      }

      if (tripId !== undefined && tripId !== null) {
        if (typeof tripId !== 'string' || !tripId.trim()) {
          throw new Error('tripId must be a string when provided');
        }
        trip = await prismaClient.trip.findUnique({ where: { id: tripId } });
        if (!trip) {
          throw new Error(`Trip ${tripId} not found`);
        }
      }

      if (vehicle && trip && trip.vehicleId !== vehicle.id) {
        throw new Error('Trip vehicleId does not match the provided vehicleId');
      }

      return prismaClient.expense.create({
        data: {
          vehicleId: vehicleId || null,
          tripId: tripId || null,
          category: category.trim(),
          amount,
          date: parsedDate,
          notes: notes?.trim() || null,
        },
      });
    },

    async getExpensesByVehicle(vehicleId: string) {
      if (!vehicleId || typeof vehicleId !== 'string') {
        throw new Error('vehicleId is required');
      }

      const vehicle = await prismaClient.vehicle.findUnique({ where: { id: vehicleId } });
      if (!vehicle) {
        throw new Error(`Vehicle ${vehicleId} not found`);
      }

      return prismaClient.expense.findMany({
        where: { vehicleId },
        orderBy: { date: 'desc' },
      });
    },

    async getExpensesByTrip(tripId: string) {
      if (!tripId || typeof tripId !== 'string') {
        throw new Error('tripId is required');
      }

      const trip = await prismaClient.trip.findUnique({ where: { id: tripId } });
      if (!trip) {
        throw new Error(`Trip ${tripId} not found`);
      }

      return prismaClient.expense.findMany({
        where: { tripId },
        orderBy: { date: 'desc' },
      });
    },
  };
}

export type ExpensesService = ReturnType<typeof createExpensesService>;
