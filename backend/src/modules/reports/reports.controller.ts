import { createReportsService } from './reports.service';
import { prisma } from '../../prisma/client';

const reportsService = createReportsService(prisma);

export function createReportsController(service = reportsService) {
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
        const csv = await service.getOperationalCostCsv();
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="transitops-operational-cost.csv"');
        res.status(200).send(csv);
      } catch (err) {
        next(err);
      }
    },
  };
}

export const reportsController = createReportsController();
