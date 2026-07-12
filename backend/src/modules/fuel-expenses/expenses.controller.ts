import { createExpensesService } from './expenses.service';
import { prisma } from '../../prisma/client';

const expensesService = createExpensesService(prisma);

export function createExpensesController(service = expensesService) {
  return {
    async create(req: any, res: any, next: any) {
      try {
        const { vehicleId, tripId, category, amount, date, notes } = req.body;
        const expense = await service.createExpense({
          vehicleId,
          tripId,
          category,
          amount: Number(amount),
          date,
          notes,
        });
        res.status(201).json(expense);
      } catch (err) {
        next(err);
      }
    },

    async getByVehicle(req: any, res: any, next: any) {
      try {
        const { vehicleId } = req.params;
        const expenses = await service.getExpensesByVehicle(vehicleId);
        res.status(200).json(expenses);
      } catch (err) {
        next(err);
      }
    },

    async getByTrip(req: any, res: any, next: any) {
      try {
        const { tripId } = req.params;
        const expenses = await service.getExpensesByTrip(tripId);
        res.status(200).json(expenses);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const expensesController = createExpensesController();
