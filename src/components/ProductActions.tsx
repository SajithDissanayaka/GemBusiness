"use client";

import type { Gem } from "@/src/types/gem";
import { useCart } from "@/src/context/CartContext";

type ProductActionsProps = {
  gem: Gem;
  whatsappUrl: string;
};

export default function ProductActions({
  gem,
  whatsappUrl,
}: ProductActionsProps) {
  const { cartItems, addToCart } = useCart();

  const canAddToCart =
    gem.availability === "Available";

  const isInCart = cartItems.some(
    (item) => item.id === gem.id
  );

  function handleAddToCart() {
    if (!canAddToCart || isInCart) {
      return;
    }

    addToCart(gem);
  }

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!canAddToCart || isInCart}
        className={`px-6 py-3 text-sm font-semibold transition ${
          canAddToCart && !isInCart
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "cursor-not-allowed bg-muted text-muted-foreground"
        }`}
      >
        {!canAddToCart
          ? gem.availability
          : isInCart
          ? "Added to Cart"
          : "Add to Cart"}
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
      >
        Inquire on WhatsApp
      </a>
    </div>
  );
}