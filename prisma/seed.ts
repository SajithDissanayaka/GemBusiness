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

const gems = [
  {
    name: "Blue Sapphire",
    type: "Sapphire",
    carat: 2.5,
    price: 150000,
    shape: "Oval",
    description:
      "A carefully selected blue sapphire with a rich blue appearance and elegant oval shape.",
    color: "Blue",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Unheated",
    availability: "AVAILABLE" as const,
    certificateNumber: "DEMO-BS-001",
  },

  {
    name: "Natural Ruby",
    type: "Ruby",
    carat: 1.8,
    price: 125000,
    shape: "Round",
    description:
      "A beautiful natural ruby with a rich red appearance and classic round shape.",
    color: "Red",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Heated",
    availability: "AVAILABLE" as const,
    certificateNumber: "DEMO-RB-001",
  },

  {
    name: "Yellow Sapphire",
    type: "Sapphire",
    carat: 3.2,
    price: 175000,
    shape: "Cushion",
    description:
      "An elegant yellow sapphire featuring a bright yellow tone and cushion shape.",
    color: "Yellow",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Heated",
    availability: "RESERVED" as const,
    certificateNumber: "DEMO-YS-001",
  },

  {
    name: "Amethyst",
    type: "Amethyst",
    carat: 4.1,
    price: 85000,
    shape: "Oval",
    description:
      "A vibrant amethyst with a purple appearance and polished oval shape.",
    color: "Purple",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Unheated",
    availability: "AVAILABLE" as const,
    certificateNumber: "DEMO-AM-001",
  },

  {
    name: "Pink Sapphire",
    type: "Sapphire",
    carat: 2.1,
    price: 140000,
    shape: "Pear",
    description:
      "A refined pink sapphire featuring an attractive pink tone and elegant pear shape.",
    color: "Pink",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Heated",
    availability: "AVAILABLE" as const,
    certificateNumber: "DEMO-PS-001",
  },

  {
    name: "Green Tourmaline",
    type: "Tourmaline",
    carat: 3.6,
    price: 110000,
    shape: "Emerald",
    description:
      "A distinctive green tourmaline with a deep green appearance and emerald shape.",
    color: "Green",
    clarity: "Eye Clean",
    origin: "Sri Lanka",
    treatment: "Unheated",
    availability: "SOLD" as const,
    certificateNumber: "DEMO-GT-001",
  },
];

async function main() {
  console.log("Seed script started...");

  const seededGems = await Promise.all(
    gems.map((gem) =>
      prisma.gem.upsert({
        where: {
          certificateNumber: gem.certificateNumber,
        },

        update: {
          name: gem.name,
          type: gem.type,
          carat: gem.carat,
          price: gem.price,
          shape: gem.shape,
          description: gem.description,
          color: gem.color,
          clarity: gem.clarity,
          origin: gem.origin,
          treatment: gem.treatment,
          availability: gem.availability,
        },

        create: gem,
      })
    )
  );

  console.log(`Successfully seeded ${seededGems.length} gems.`);

  console.table(
    seededGems.map((gem) => ({
      id: gem.id,
      name: gem.name,
      carat: gem.carat,
      price: gem.price,
      availability: gem.availability,
    }))
  );
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });