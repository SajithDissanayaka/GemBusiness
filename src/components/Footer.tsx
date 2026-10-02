export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              GEM Business
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Discover quality gemstones and professional cut & polish
              services from our physical and online store.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a
                href="/"
                className="block transition hover:text-primary"
              >
                Home
              </a>

              <a
                href="/shop"
                className="block transition hover:text-primary"
              >
                Shop
              </a>

              <a
                href="/cut-and-polish"
                className="block transition hover:text-primary"
              >
                Cut & Polish
              </a>

              <a
                href="/about"
                className="block transition hover:text-primary"
              >
                About
              </a>

              <a
                href="/contact"
                className="block transition hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Customer
            </h3>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a
                href="/account"
                className="block transition hover:text-primary"
              >
                My Account
              </a>

              <a
                href="/orders"
                className="block transition hover:text-primary"
              >
                Orders
              </a>

              <a
                href="/wishlist"
                className="block transition hover:text-primary"
              >
                Wishlist
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>WhatsApp</p>
              <p>Physical Store</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 GEM Business. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}