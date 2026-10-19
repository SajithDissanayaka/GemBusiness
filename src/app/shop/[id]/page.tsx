import { notFound } from "next/navigation";

import { prisma } from "@/src/lib/prisma";
import ProductActions from "@/src/components/ProductActions";
import GemGallery from "@/src/components/GemGallery";

import type {
  Gem,
  GemAvailability,
} from "@/src/types/gem";
import { SortOrder } from "@/src/generated/prisma/internal/prismaNamespace";

type GemDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// ------------------------------------
// DATABASE → FRONTEND AVAILABILITY MAP
// ------------------------------------

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

export default async function GemDetailsPage({
  params,
}: GemDetailsPageProps) {
  // ------------------------------------
  // 1. GET ID FROM URL
  // ------------------------------------

  const { id } = await params;

  // URL params are strings
  const gemId = Number(id);

  // Reject invalid IDs such as:
  // /shop/abc
  // /shop/-1
  // /shop/1.5

  if (
    !Number.isInteger(gemId) ||
    gemId <= 0
  ) {
    notFound();
  }

  // ------------------------------------
  // 2. FIND GEM FROM POSTGRESQL
  // ------------------------------------

  const databaseGem =
    await prisma.gem.findUnique({
      where: {
        id: gemId,
      },
       include : {
          images : {
            orderBy : {
              sortOrder: "asc",
          },
        
      }
    }
    });

   

  // ------------------------------------
  // 3. HANDLE MISSING GEM
  // ------------------------------------

  if (!databaseGem) {
    notFound();
  }

  // ------------------------------------
  // 4. MAP DATABASE MODEL
  //    TO FRONTEND GEM MODEL
  // ------------------------------------

  const gem: Gem = {
    id: databaseGem.id,
    name: databaseGem.name,
    type: databaseGem.type,
    carat: databaseGem.carat,
    price: databaseGem.price,
    shape: databaseGem.shape,

    description: databaseGem.description,
    color: databaseGem.color,
    clarity: databaseGem.clarity,
    origin: databaseGem.origin,
    treatment: databaseGem.treatment,

    availability: mapAvailability(
      databaseGem.availability
    ),

    certificateNumber:
      databaseGem.certificateNumber ??
      undefined,

      imageUrl : databaseGem.images[0]?.imageUrl,
  };

  const galleryImages = databaseGem.images.map(
  (image) => ({
    id: image.id,
    imageUrl: image.imageUrl,
    altText:
      image.altText ?? undefined,
  })
);

  // ------------------------------------
  // 5. WHATSAPP INQUIRY
  // ------------------------------------

  const whatsappNumber = "9472764124";

  const inquiryMessage = `
Hello, I am interested in this gemstone.

Gem: ${gem.name}
Product ID: ${gem.id}
Carat: ${gem.carat} ct
Shape: ${gem.shape}
Price: LKR ${gem.price.toLocaleString()}

Can you provide more details about this gemstone?
`;

  // ------------------------------------
  // 6. CREATE SAFE WHATSAPP URL
  // ------------------------------------

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      inquiryMessage
    )}`;

  // ------------------------------------
  // 7. UI
  // ------------------------------------

  return (
    <main className="bg-background">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Gem Media */}
              <GemGallery
                gemName={gem.name}
                images={galleryImages}
              />

            {/* Gem Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {gem.type}
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {gem.name}
              </h1>

              <p className="mt-6 text-2xl font-semibold text-foreground">
                LKR {gem.price.toLocaleString()}
              </p>

              <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
                {gem.description}
              </p>

              {/* Gem Details */}
              <div className="mt-8 border-y border-border py-6">
                <dl className="grid gap-5 sm:grid-cols-2">

                  {/* Carat */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Carat
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      {gem.carat} ct
                    </dd>
                  </div>

                  {/* Shape */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Shape
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      {gem.shape}
                    </dd>
                  </div>

                  {/* Color */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Color
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      {gem.color}
                    </dd>
                  </div>

                  {/* Clarity */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Clarity
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      {gem.clarity}
                    </dd>
                  </div>

                  {/* Origin */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Origin
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      {gem.origin}
                    </dd>
                  </div>

                  {/* Treatment */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Treatment
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      {gem.treatment}
                    </dd>
                  </div>

                  {/* Availability */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Availability
                    </dt>

                    <dd className="mt-2">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          gem.availability ===
                          "Available"
                            ? "bg-secondary text-foreground"
                            : gem.availability ===
                              "Reserved"
                            ? "bg-muted text-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {gem.availability}
                      </span>
                    </dd>
                  </div>

                  {/* Product ID */}
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Product ID
                    </dt>

                    <dd className="mt-1 font-semibold text-foreground">
                      #{gem.id}
                    </dd>
                  </div>

                  {/* Certificate */}
                  {gem.certificateNumber && (
                    <div>
                      <dt className="text-sm text-muted-foreground">
                        Certificate
                      </dt>

                      <dd className="mt-1 font-semibold text-foreground">
                        {gem.certificateNumber}
                      </dd>
                    </div>
                  )}

                </dl>
              </div>

              {/* Interactive Product Actions */}
              <ProductActions
                gem={gem}
                whatsappUrl={whatsappUrl}
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}