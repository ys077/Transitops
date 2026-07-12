import express from 'express';
import { expensesController } from './expenses.controller';

const router = express.Router();

// POST /api/expenses
router.post('/', expensesController.create);
// GET /api/expenses/vehicle/:vehicleId
router.get('/vehicle/:vehicleId', expensesController.getByVehicle);
// GET /api/expenses/trip/:tripId
router.get('/trip/:tripId', expensesController.getByTrip);

export default router;
