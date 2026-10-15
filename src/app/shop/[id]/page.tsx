import { notFound } from "next/navigation";

import { gems } from "@/src/data/gems";
import ProductActions from "@/src/components/ProductActions";

type GemDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GemDetailsPage({
  params,
}: GemDetailsPageProps) {
  // 1. Get the dynamic product ID from the URL
  const { id } = await params;

  // 2. URL values are strings, so convert the ID to a number
  const gemId = Number(id);

  // 3. Find the gemstone that matches the URL ID
  const gem = gems.find((gem) => gem.id === gemId);

  // 4. If no gemstone exists with this ID, show the 404 page
  if (!gem) {
    notFound();
  }

  // 5. WhatsApp inquiry information
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

  // 6. Convert the message into a safe URL format
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    inquiryMessage
  )}`;

  return (
    <main className="bg-background">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gem Media */}
            <div className="flex min-h-[500px] items-center justify-center rounded-2xl bg-secondary">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Gemstone Image
                </p>

                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {gem.name}
                </p>
              </div>
            </div>

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
                          gem.availability === "Available"
                            ? "bg-secondary text-foreground"
                            : gem.availability === "Reserved"
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

                  {/* Certificate - only show if available */}
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