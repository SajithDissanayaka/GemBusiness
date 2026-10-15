"use client";

import Link from "next/link";

import { useCart } from "@/src/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="bg-background">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-secondary px-6 py-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Your Cart
              </p>

              <h1 className="mt-3 text-3xl font-semibold text-foreground">
                Your cart is empty
              </h1>

              <p className="mt-4 text-muted-foreground">
                Explore our gemstone collection and add a gemstone to your
                cart.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Shopping Cart
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Your Cart
          </h1>

          <p className="mt-4 text-muted-foreground">
            Review the gemstones you have selected.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-6 rounded-2xl border border-border p-5 sm:grid-cols-[160px_1fr]"
                >
                  <div className="flex aspect-square items-center justify-center rounded-xl bg-secondary">
                    <span className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                      Gemstone Image
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.type}
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-foreground">
                        {item.name}
                      </h2>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{item.carat} ct</span>
                        <span>{item.shape}</span>
                        <span>{item.availability}</span>
                      </div>

                      <p className="mt-4 text-lg font-semibold text-foreground">
                        LKR {item.price.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside>
              <div className="rounded-2xl border border-border bg-secondary p-6 lg:sticky lg:top-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Items
                    </span>

                    <span className="font-medium text-foreground">
                      {cartItems.length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-foreground">
                      Total
                    </span>

                    <span className="text-xl font-semibold text-foreground">
                      LKR {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 w-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/shop"
                  className="mt-3 inline-flex w-full items-center justify-center border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  Continue Shopping
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}