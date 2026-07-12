import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
(async () => {
  try {
    const count = await prisma.maintenanceLog.count();
    console.log('COUNT', count);
    const sample = await prisma.maintenanceLog.findFirst();
    console.log('SAMPLE', sample);
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
})();
