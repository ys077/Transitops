import express from 'express';
import cors from 'cors';
import tripsRouter from './modules/trips/trips.routes.js';
import maintenanceRouter from './modules/maintenance/maintenance.routes.js';
import fuelLogsRouter from './modules/fuel-expenses/fuel-logs.routes.js';
import expensesRouter from './modules/fuel-expenses/expenses.routes.js';
import reportsRouter from './modules/reports/reports.routes.js';
import { authRouter } from './modules/auth/auth.routes.js';
import { vehiclesRouter } from './modules/vehicles/vehicles.routes.js';
import { driversRouter } from './modules/drivers/drivers.routes.js';
import { aiRouter } from './modules/ai/routes/aiRoutes.js';

const app = express();
app.use(express.json());
// Enable CORS for frontend integration
app.use(cors());

// Mount Surya's core routes
app.use('/api/auth', authRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/drivers', driversRouter);

// Mount Ashwin's operations routes
app.use('/api/trips', tripsRouter);
app.use('/api/maintenance', maintenanceRouter);
app.use('/api/fuel-logs', fuelLogsRouter);
app.use('/api/expenses', expensesRouter);
app.use('/api/reports', reportsRouter);

// Mount Yuvan's AI routes
app.use('/api/ai', aiRouter);

export default app;

// ------ Global JSON error handler ------
// Express recognises a 4-argument middleware as an error handler.
// This catches anything thrown / passed to `next(err)` and replies with JSON
// instead of the default HTML error page.
app.use((err: any, _req: any, res: any, _next: any) => {
  const status = typeof err.statusCode === 'number' ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';
  const payload: Record<string, any> = { success: false, error: message };

  // If the error carries structured violation details, include them
  if (err.violations) {
    payload.violations = err.violations;
  }

  console.error(`[${status}]`, message);
  res.status(status).json(payload);
});
