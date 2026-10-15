import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Reading gems from PostgreSQL...");

  const gems = await prisma.gem.findMany();

  console.log(`Found ${gems.length} gems.`);

  console.table(
    gems.map((gem) => ({
      id: gem.id,
      name: gem.name,
      type: gem.type,
      carat: gem.carat,
      price: gem.price,
      availability: gem.availability,
    }))
  );
}

main()
  .catch((error) => {
    console.error("Failed to read gems:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });