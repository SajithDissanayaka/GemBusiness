export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <span className="text-xl font-semibold tracking-wide text-foreground">
            GEM Business
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Home
          </a>

          <a
            href="/shop"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Shop
          </a>

          <a
            href="/cut-and-polish"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Cut & Polish
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Search
          </button>

          <button
            type="button"
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}