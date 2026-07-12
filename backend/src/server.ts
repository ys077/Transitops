import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { aiRouter } from './modules/ai/routes/aiRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { authRouter } from './modules/auth/auth.routes.js';
import { vehiclesRouter } from './modules/vehicles/vehicles.routes.js';
import { driversRouter } from './modules/drivers/drivers.routes.js';

// --- Mount Routers ---
app.use('/api/auth', authRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/drivers', driversRouter);
// app.use('/api/trips', tripsRouter);       // TODO: Mount when ready
// app.use('/api/maintenance', maintenanceRouter); // TODO: Mount when ready
// app.use('/api/reports', reportsRouter);   // TODO: Mount when ready
// app.use('/api/expenses', expensesRouter); // TODO: Mount when ready

app.use('/api/ai', aiRouter); // Your AI router is mounted!

// Health Check Endpoint (useful for Render deployment)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Start Server
app.listen(env.PORT, () => {
  console.log(`🚀 TransitOps API running at http://localhost:${env.PORT}`);
});
