"use client";

import Link from "next/link";

import { useCart } from "@/src/context/CartContext";

export default function CartIndicator() {
  const { cartItems } = useCart();

  return (
    <Link
      href="/cart"
      className="font-medium text-foreground transition hover:text-primary"
    >
      Cart ({cartItems.length})
    </Link>
  );
}