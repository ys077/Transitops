import { Request, Response } from 'express';
import { getMaintenancePredictions } from '../services/maintenancePredictions.js';
import { getComplianceRisks } from '../services/complianceRisks.js';
import { getDispatchRecommendations } from '../services/dispatchCopilot.js';
import { askTransitOps } from '../services/askTransitOps.js';
import { generateExecutiveSummary } from '../services/executiveSummary.js';

/**
 * GET /api/ai/maintenance-predictions
 */
export async function maintenancePredictionsHandler(req: Request, res: Response): Promise<void> {
  try {
    const serviceIntervalKm = req.query.serviceIntervalKm ? Number(req.query.serviceIntervalKm) : undefined;
    const serviceIntervalDays = req.query.serviceIntervalDays ? Number(req.query.serviceIntervalDays) : undefined;
    const predictions = await getMaintenancePredictions(serviceIntervalKm, serviceIntervalDays);
    res.json({ success: true, count: predictions.length, data: predictions });
  } catch (error) {
    console.error('Error in maintenance-predictions:', error);
    res.status(500).json({ success: false, error: 'Failed to compute maintenance predictions' });
  }
}

/**
 * GET /api/ai/compliance-risks
 */
export async function complianceRisksHandler(_req: Request, res: Response): Promise<void> {
  try {
    const risks = await getComplianceRisks();
    res.json({ success: true, count: risks.length, data: risks });
  } catch (error) {
    console.error('Error in compliance-risks:', error);
    res.status(500).json({ success: false, error: 'Failed to compute compliance risks' });
  }
}

/**
 * POST /api/ai/dispatch-recommendation
 */
export async function dispatchRecommendationHandler(req: Request, res: Response): Promise<void> {
  try {
    const { cargoWeightKg = 0, plannedDistanceKm = 0 } = req.body;
    const recommendations = await getDispatchRecommendations(Number(cargoWeightKg), Number(plannedDistanceKm));
    res.json({ success: true, data: recommendations });
  } catch (error) {
    console.error('Error in dispatch-recommendation:', error);
    res.status(500).json({ success: false, error: 'Failed to generate dispatch recommendations' });
  }
}

/**
 * POST /api/ai/ask
 */
export async function askHandler(req: Request, res: Response): Promise<void> {
  try {
    const { query } = req.body;
    if (!query) {
      res.status(400).json({ success: false, error: 'Missing query parameter' });
      return;
    }
    const answer = await askTransitOps(query);
    res.json({ success: true, data: { answer } });
  } catch (error) {
    console.error('Error in ask:', error);
    res.status(500).json({ success: false, error: 'Failed to answer query' });
  }
}

/**
 * GET /api/ai/executive-summary
 */
export async function executiveSummaryHandler(_req: Request, res: Response): Promise<void> {
  try {
    const summary = await generateExecutiveSummary();
    res.json({ success: true, data: { summary } });
  } catch (error) {
    console.error('Error in executive-summary:', error);
    res.status(500).json({ success: false, error: 'Failed to generate executive summary' });
  }
}
