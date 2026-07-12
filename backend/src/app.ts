import express from 'express';
import tripsRouter from './modules/trips/trips.routes';
import maintenanceRouter from './modules/maintenance/maintenance.routes';
import fuelLogsRouter from './modules/fuel-expenses/fuel-logs.routes';
import expensesRouter from './modules/fuel-expenses/expenses.routes';
import reportsRouter from './modules/reports/reports.routes';

const app = express();
app.use(express.json());

// Register trips router under /api/trips
app.use('/api/trips', tripsRouter);
// Register maintenance router under /api/maintenance
app.use('/api/maintenance', maintenanceRouter);
// Register fuel logs router under /api/fuel-logs
app.use('/api/fuel-logs', fuelLogsRouter);
// Register expenses router under /api/expenses
app.use('/api/expenses', expensesRouter);
// Register reports router under /api/reports
app.use('/api/reports', reportsRouter);

export default app;
