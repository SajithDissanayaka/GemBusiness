import { prisma } from "@/src/lib/prisma";
import ShopClient from "@/src/components/ShopClient";

import type {
  Gem,
  GemAvailability,
} from "@/src/types/gem";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mapAvailability(
  availability: string
): GemAvailability {
  if (availability === "AVAILABLE") {
    return "Available";
  }

  if (availability === "RESERVED") {
    return "Reserved";
  }

  return "Sold";
}

export default async function ShopPage() {
  const databaseGems = await prisma.gem.findMany({
    orderBy: {
      id: "asc",
    },
    include : {
      images : {
        where : {
          isPrimary : true,
        },
        orderBy : {
          sortOrder : "asc"
        },
        take : 1,
      }
    }
  });

  const gems: Gem[] = databaseGems.map((gem) => ({
    id: gem.id,
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

    availability: mapAvailability(
      gem.availability
    ),

    certificateNumber:
      gem.certificateNumber ?? undefined,

      imageUrl : gem.images[0]?.imageUrl,
  }));

  return <ShopClient gems={gems} />;
}