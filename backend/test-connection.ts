import { PrismaClient } from './src/generated/prisma/client.ts'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database!')
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log('Query result:', result)
  } catch (error) {
    console.error('Failed to connect to the database:')
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
