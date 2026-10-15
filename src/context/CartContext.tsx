"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Gem } from "@/src/types/gem";

type CartContextType = {
  cartItems: Gem[];
  addToCart: (gem: Gem) => void;
  removeFromCart: (gemId: number) => void;
};

const CartContext =
  createContext<CartContextType | undefined>(
    undefined
  );

type CartProviderProps = {
  children: ReactNode;
};

const CART_STORAGE_KEY = "gem-business-cart";

export function CartProvider({
  children,
}: CartProviderProps) {
  const [cartItems, setCartItems] =
    useState<Gem[]>([]);

  const [isCartLoaded, setIsCartLoaded] =
    useState(false);

  // Load saved cart from localStorage
  useEffect(() => {
    const savedCart =
      localStorage.getItem(CART_STORAGE_KEY);

    if (savedCart) {
      try {
        const parsedCart =
          JSON.parse(savedCart) as Gem[];

        setCartItems(parsedCart);
      } catch (error) {
        console.error(
          "Failed to load cart from localStorage:",
          error
        );
      }
    }

    setIsCartLoaded(true);
  }, []);

  // Save cart whenever cartItems changes
  useEffect(() => {
    if (!isCartLoaded) {
      return;
    }

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems, isCartLoaded]);

  function addToCart(gem: Gem) {
    setCartItems((currentItems) => {
      const alreadyExists =
        currentItems.some(
          (item) => item.id === gem.id
        );

      if (alreadyExists) {
        return currentItems;
      }

      return [
        ...currentItems,
        gem,
      ];
    });
  }

  function removeFromCart(gemId: number) {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== gemId
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}