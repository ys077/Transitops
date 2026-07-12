import express from 'express';
import { reportsController } from './reports.controller';
import { intelligenceController } from './intelligence.controller';

const router = express.Router();

// ── Existing report endpoints ─────────────────────────────────────────────
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

// ── Operations Intelligence (Step 1) ──────────────────────────────────────
// GET /api/reports/kpis
router.get('/kpis', intelligenceController.kpis);
// GET /api/reports/attention
router.get('/attention', intelligenceController.attention);
// GET /api/reports/operations-health
router.get('/operations-health', intelligenceController.operationsHealth);
// GET /api/reports/recommendations
router.get('/recommendations', intelligenceController.recommendations);

// ── Digital Twin (Step 2) ─────────────────────────────────────────────────
// GET /api/reports/digital-twins
router.get('/digital-twins', intelligenceController.digitalTwins);
// GET /api/reports/digital-twins/:vehicleId
router.get('/digital-twins/:vehicleId', intelligenceController.digitalTwinByVehicleId);

// ── Predictive Risk Engine (Step 3) ───────────────────────────────────────
// GET /api/reports/risks
router.get('/risks', intelligenceController.risks);

// ── Dispatcher Context (Step 4) ───────────────────────────────────────────
// GET /api/reports/dispatcher-context
router.get('/dispatcher-context', intelligenceController.dispatcherContext);

// ── Sustainability (Step 5) ───────────────────────────────────────────────
// GET /api/reports/sustainability
router.get('/sustainability', intelligenceController.sustainability);

// ── Safe Action (Step 6) ──────────────────────────────────────────────────
// POST /api/reports/recommendations/:type/acknowledge
router.post('/recommendations/:type/acknowledge', intelligenceController.acknowledgeRecommendation);

export default router;
