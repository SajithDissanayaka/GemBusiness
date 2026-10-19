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
  console.log("Finding Blue Sapphire...");

  const gem = await prisma.gem.findUnique({
    where: {
      certificateNumber: "DEMO-BS-001",
    },
  });

  if (!gem) {
    throw new Error(
      "Blue Sapphire was not found in the database."
    );
  }

  console.log(`Gem found: ${gem.name}`);
  console.log(`Gem ID: ${gem.id}`);

  const imageUrl =
    "https://res.cloudinary.com/rbmxnu9z/image/upload/v1792413088/images_10.jpg";

  const existingImage =
    await prisma.gemImage.findFirst({
      where: {
        gemId: gem.id,
        imageUrl: imageUrl,
      },
    });

  if (existingImage) {
    console.log(
      "This image is already connected to the gem."
    );
    return;
  }

  const gemImage =
    await prisma.gemImage.create({
      data: {
        imageUrl: imageUrl,
        altText: `${gem.name} secondary view`,
        sortOrder: 2,
        isPrimary: false,
        gemId: gem.id,
      },
    });

  console.log(
    "Secondary image successfully connected."
  );

  console.table([
    {
      imageId: gemImage.id,
      gemId: gemImage.gemId,
      gemName: gem.name,
      isPrimary: gemImage.isPrimary,
      sortOrder: gemImage.sortOrder,
    },
  ]);
}

main()
  .catch((error) => {
    console.error(
      "Failed to add secondary image:",
      error
    );

    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });