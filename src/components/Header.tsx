import Link from "next/link";

import CartIndicator from "@/src/components/CartIndicator";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo / Business Name */}
        <div>
          <Link
            href="/"
            className="text-xl font-semibold tracking-wide text-foreground"
          >
            GEM Business
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Shop
          </Link>

          <Link
            href="/cut-and-polish"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Cut & Polish
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-sm font-medium text-foreground transition hover:text-primary"
          >
            Search
          </button>

          <CartIndicator />
        </div>
      </div>
    </header>
  );
}