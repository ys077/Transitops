import { Router } from 'express';
import {
  maintenancePredictionsHandler,
  complianceRisksHandler,
  dispatchRecommendationHandler,
  askHandler,
  executiveSummaryHandler,
} from '../controllers/aiController.js';

const aiRouter = Router();

aiRouter.get('/maintenance-predictions', maintenancePredictionsHandler);
aiRouter.get('/compliance-risks', complianceRisksHandler);

aiRouter.post('/dispatch-recommendation', dispatchRecommendationHandler);
aiRouter.post('/ask', askHandler);
aiRouter.get('/executive-summary', executiveSummaryHandler);

export { aiRouter };
