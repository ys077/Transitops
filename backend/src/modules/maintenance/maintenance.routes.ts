import express from 'express';
import { maintenanceController } from './maintenance.controller';

const router = express.Router();

router.get('/', maintenanceController.list);
router.post('/', maintenanceController.create);
router.patch('/:id/close', maintenanceController.close);

export default router;
