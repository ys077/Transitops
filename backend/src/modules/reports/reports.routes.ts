import express from 'express';
import { reportsController } from './reports.controller';

const router = express.Router();

// GET /api/reports/fuel-efficiency
router.get('/fuel-efficiency', reportsController.fuelEfficiency);
// GET /api/reports/fleet-utilization
router.get('/fleet-utilization', reportsController.fleetUtilization);
// GET /api/reports/operational-cost
router.get('/operational-cost', reportsController.operationalCost);
// GET /api/reports/roi
router.get('/roi', reportsController.roi);
// GET /api/reports/export.csv
router.get('/export.csv', reportsController.exportCsv);

export default router;
