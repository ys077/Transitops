import { Router } from 'express';
import { getDrivers, getDriverById, createDriver, updateDriver, deleteDriver } from './drivers.controller.js';
import { verifyToken } from '../../middleware/auth.js';
import { requireRole } from '../../middleware/rbac.js';
import { UserRole } from '../../generated/prisma/index.js';

export const driversRouter = Router();

// Apply auth middleware to all driver routes
driversRouter.use(verifyToken);

driversRouter.get('/', getDrivers);
driversRouter.get('/:id', getDriverById);

// Only managers can modify drivers
driversRouter.post('/', requireRole([UserRole.fleet_manager]), createDriver);
driversRouter.patch('/:id', requireRole([UserRole.fleet_manager]), updateDriver);
driversRouter.delete('/:id', requireRole([UserRole.fleet_manager]), deleteDriver);
