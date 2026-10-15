import { PrismaClient } from "@/src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Store Prisma Client globally during development
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

// Create a new Prisma Client
function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  return new PrismaClient({
    adapter,
  });
}

// Reuse existing client or create a new one
export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

// Save client globally in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}