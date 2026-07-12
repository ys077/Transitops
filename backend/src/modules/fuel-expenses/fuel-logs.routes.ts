import express from 'express';
import { fuelLogsController } from './fuel-logs.controller';

const router = express.Router();

// POST /api/fuel-logs
router.post('/', fuelLogsController.create);
// GET /api/fuel-logs/vehicle/:vehicleId
router.get('/vehicle/:vehicleId', fuelLogsController.getByVehicle);

export default router;
