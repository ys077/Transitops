import { PrismaClient } from '../generated/prisma/index.js';

// Provisional Prisma client shim used by services. In production this file
// should export a single PrismaClient instance connected to your database.
export const prisma = new PrismaClient();
