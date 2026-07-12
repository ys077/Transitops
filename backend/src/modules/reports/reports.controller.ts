import { createReportsService } from './reports.service';
import { createIntelligenceService } from './intelligence.service';
import { prisma } from '../../prisma/client';

const reportsService = createReportsService(prisma);
const intelligenceService = createIntelligenceService(prisma);

export function createReportsController(service = reportsService, intel = intelligenceService) {
  return {
    async fuelEfficiency(req: any, res: any, next: any) {
      try {
        const report = await service.getFuelEfficiencyReport();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async fleetUtilization(req: any, res: any, next: any) {
      try {
        const report = await service.getFleetUtilizationReport();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async operationalCost(req: any, res: any, next: any) {
      try {
        const report = await service.getOperationalCostReport();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async roi(req: any, res: any, next: any) {
      try {
        const report = await service.getRoiReport();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async exportCsv(req: any, res: any, next: any) {
      try {
        const kpis = await intel.getKpis();
        const headers = Object.keys(kpis).join(',');
        const values = Object.values(kpis).join(',');
        const csv = `${headers}\r\n${values}`;
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="transitops-kpis.csv"');
        res.status(200).send(csv);
      } catch (err) {
        next(err);
      }
    },

    // ── Operations Intelligence Layer ──────────────────────────────

    async kpis(req: any, res: any, next: any) {
      try {
        const report = await intel.getKpis();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async attention(req: any, res: any, next: any) {
      try {
        const report = await intel.buildOperationsAttentionReport();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async operationsHealth(req: any, res: any, next: any) {
      try {
        const report = await intel.getOperationsHealth();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },

    async recommendations(req: any, res: any, next: any) {
      try {
        const report = await intel.getRecommendations();
        res.status(200).json(report);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const reportsController = createReportsController();

