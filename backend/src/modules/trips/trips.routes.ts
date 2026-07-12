import express from 'express';
import { tripsController } from './trips.controller';
import { verifyToken } from '../../middleware/auth';

const router = express.Router();

router.use(verifyToken);

// POST /api/trips
router.post('/', tripsController.create);
// GET /api/trips
router.get('/', tripsController.list);
// GET /api/trips/:id
router.get('/:id', tripsController.getById);
// POST /api/trips/:id/dispatch
router.post('/:id/dispatch', tripsController.dispatch);
// POST /api/trips/:id/complete
router.post('/:id/complete', tripsController.complete);
// POST /api/trips/:id/cancel
router.post('/:id/cancel', tripsController.cancel);

export default router;
