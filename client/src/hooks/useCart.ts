import { useEffect, useMemo, useState } from "react";
import type { MenuItem } from "@/data/menu";

export type CartItem = MenuItem & {
  quantity: number;
};

const CART_STORAGE_KEY = "cafeteria-raizes:cart";
const VALID_CATEGORIES = new Set<MenuItem["category"]>([
  "bebidas",
  "quitandas",
]);

function isValidCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item = value as Partial<CartItem>;

  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.desc === "string" &&
    typeof item.price === "string" &&
    typeof item.priceCents === "number" &&
    Number.isFinite(item.priceCents) &&
    item.priceCents >= 0 &&
    typeof item.image === "string" &&
    typeof item.category === "string" &&
    VALID_CATEGORIES.has(item.category as MenuItem["category"]) &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart.filter(isValidCartItem) : [];
  } catch {
    return [];
  }
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart());

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(item: MenuItem) {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        cartItem => cartItem.id === item.id
      );

      if (!existingItem) {
        return [...currentItems, { ...item, quantity: 1 }];
      }

      return currentItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    });
  }

  function increaseQuantity(itemId: string) {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(itemId: string) {
    setItems(currentItems =>
      currentItems
        .map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  function removeItem(itemId: string) {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce((total, item) => total + item.priceCents * item.quantity, 0),
    [items]
  );

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  };
}
