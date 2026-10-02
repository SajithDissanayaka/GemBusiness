export default function StoreSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Visit Our Store
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Experience Our Gemstones in Person
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Visit our physical store to explore our gemstone collection,
            discuss your requirements, and speak with our team directly.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Store Location
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Sri Lanka
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Customer Support
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Contact us for store hours and availability.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-background">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Physical Store
            </p>

            <p className="mt-2 text-2xl font-semibold text-foreground">
              Visit Us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}