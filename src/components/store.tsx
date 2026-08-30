import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/catalog";

export type CartLine = {
  key: string;
  product: Product;
  size: string;
  qty: number;
};

type Currency = "INR" | "USD";

type StoreValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (inr: number) => string;
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product, size: string) => void;
  removeLine: (key: string) => void;
  wishlist: string[];
  wishlistCount: number;
  toggleWishlist: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

const USD_RATE = 0.012;

export function StoreProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const format = useCallback(
    (inr: number) =>
      currency === "INR"
        ? `₹${inr.toLocaleString("en-IN")}`
        : `$${Math.round(inr * USD_RATE).toLocaleString("en-US")}`,
    [currency],
  );

  const addToCart = useCallback((product: Product, size: string) => {
    const key = `${product.id}-${size}`;
    setCart((prev) => {
      const found = prev.find((l) => l.key === key);
      if (found) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { key, product, size, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeLine = useCallback((key: string) => {
    setCart((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id],
    );
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      currency,
      setCurrency,
      format,
      cart,
      cartCount: cart.reduce((n, l) => n + l.qty, 0),
      cartTotal: cart.reduce((n, l) => n + l.qty * l.product.price, 0),
      addToCart,
      removeLine,
      wishlist,
      wishlistCount: wishlist.length,
      toggleWishlist,
      cartOpen,
      setCartOpen,
    }),
    [currency, format, cart, addToCart, removeLine, wishlist, toggleWishlist, cartOpen],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
