import { PrismaClient } from '@prisma/client';

// Provisional Prisma client shim used by services. In production this file
// should export a single PrismaClient instance connected to your database.
export const prisma = new PrismaClient();
