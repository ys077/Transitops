import { describe, expect, test } from 'vitest';
import { createExpensesService } from './expenses.service';

describe('ExpensesService', () => {
  test('valid Expense succeeds', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      trip: { findUnique: async () => ({ id: 't1', vehicleId: 'v1' }) },
      expense: { create: async ({ data }: any) => ({ id: 'e1', ...data }) },
    };
    const svc = createExpensesService(prisma as any);

    const result = await svc.createExpense({ vehicleId: 'v1', tripId: 't1', category: 'Tolls', amount: 20, date: '2026-07-12', notes: 'Bridge toll' });

    expect(result.id).toBe('e1');
    expect(result.amount).toBe(20);
  });

  test('rejects invalid amount', async () => {
    const prisma = {};
    const svc = createExpensesService(prisma as any);

    await expect(svc.createExpense({ category: 'Supplies', amount: -5, date: '2026-07-12' })).rejects.toThrow('amount must be a non-negative number');
  });

  test('rejects empty category', async () => {
    const prisma = {};
    const svc = createExpensesService(prisma as any);

    await expect(svc.createExpense({ category: '', amount: 5, date: '2026-07-12' })).rejects.toThrow('category is required');
  });

  test('rejects missing Vehicle', async () => {
    const prisma = {
      vehicle: { findUnique: async () => null },
      trip: { findUnique: async () => ({ id: 't1', vehicleId: 'v1' }) },
    };
    const svc = createExpensesService(prisma as any);

    await expect(svc.createExpense({ vehicleId: 'v1', category: 'Parking', amount: 10, date: '2026-07-12' })).rejects.toThrow('Vehicle v1 not found');
  });

  test('rejects missing Trip when tripId supplied', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      trip: { findUnique: async () => null },
    };
    const svc = createExpensesService(prisma as any);

    await expect(svc.createExpense({ vehicleId: 'v1', tripId: 't1', category: 'Parking', amount: 10, date: '2026-07-12' })).rejects.toThrow('Trip t1 not found');
  });

  test('rejects Expense Trip/Vehicle mismatch', async () => {
    const prisma = {
      vehicle: { findUnique: async () => ({ id: 'v1' }) },
      trip: { findUnique: async () => ({ id: 't1', vehicleId: 'v2' }) },
    };
    const svc = createExpensesService(prisma as any);

    await expect(svc.createExpense({ vehicleId: 'v1', tripId: 't1', category: 'Parking', amount: 10, date: '2026-07-12' })).rejects.toThrow('Trip vehicleId does not match the provided vehicleId');
  });

  test('getExpensesByTrip returns expenses for the trip', async () => {
    const prisma = {
      trip: { findUnique: async () => ({ id: 't1' }) },
      expense: { findMany: async () => [{ id: 'e1', tripId: 't1', amount: 20 }] },
    };
    const svc = createExpensesService(prisma as any);

    const result = await svc.getExpensesByTrip('t1');

    expect(result).toEqual([{ id: 'e1', tripId: 't1', amount: 20 }]);
  });
});
