import express from 'express';
import { maintenanceController } from './maintenance.controller';
import { verifyToken } from '../../middleware/auth';

const router = express.Router();

router.use(verifyToken);
router.get('/', maintenanceController.list);
router.post('/', maintenanceController.create);
router.patch('/:id/close', maintenanceController.close);

export default router;
