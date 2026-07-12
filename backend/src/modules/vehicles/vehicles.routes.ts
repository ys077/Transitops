import { Router } from 'express';
import { getVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle } from './vehicles.controller.js';
import { verifyToken } from '../../middleware/auth.js';
import { requireRole } from '../../middleware/rbac.js';
import { UserRole } from '../../generated/prisma/index.js';

export const vehiclesRouter = Router();

// Apply auth middleware to all vehicle routes
vehiclesRouter.use(verifyToken);

vehiclesRouter.get('/', getVehicles);
vehiclesRouter.get('/:id', getVehicleById);

// Only managers can modify vehicles
vehiclesRouter.post('/', requireRole([UserRole.fleet_manager]), createVehicle);
vehiclesRouter.patch('/:id', requireRole([UserRole.fleet_manager]), updateVehicle);
vehiclesRouter.delete('/:id', requireRole([UserRole.fleet_manager]), deleteVehicle);
