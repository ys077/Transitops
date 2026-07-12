import { createIntelligenceService } from './intelligence.service';
import { prisma } from '../../prisma/client';

const intelligenceService = createIntelligenceService(prisma);

export function createIntelligenceController(service = intelligenceService) {
  return {
    // STEP 1: KPIs
    async kpis(req: any, res: any, next: any) {
      try {
        const result = await service.getKpis();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 1: Attention Issues
    async attention(req: any, res: any, next: any) {
      try {
        const result = await service.getAttentionIssues();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 1: Operations Health
    async operationsHealth(req: any, res: any, next: any) {
      try {
        const result = await service.getOperationsHealth();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 1: Recommendations
    async recommendations(req: any, res: any, next: any) {
      try {
        const result = await service.getRecommendations();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 2: Digital Twins
    async digitalTwins(req: any, res: any, next: any) {
      try {
        const result = await service.getDigitalTwins();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    async digitalTwinByVehicleId(req: any, res: any, next: any) {
      try {
        const { vehicleId } = req.params;
        const result = await service.getDigitalTwinByVehicleId(vehicleId);
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 3: Predictive Risk Engine
    async risks(req: any, res: any, next: any) {
      try {
        const result = await service.getRisks();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 4: Dispatcher Context
    async dispatcherContext(req: any, res: any, next: any) {
      try {
        const result = await service.getDispatcherContext();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 5: Sustainability
    async sustainability(req: any, res: any, next: any) {
      try {
        const result = await service.getSustainabilityReport();
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    // STEP 6: Acknowledge Recommendation (demo stub)
    async acknowledgeRecommendation(req: any, res: any, next: any) {
      try {
        const { type } = req.params;
        const result = await service.acknowledgeRecommendation(type);
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const intelligenceController = createIntelligenceController();
