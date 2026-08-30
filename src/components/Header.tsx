import { useEffect, useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Minus,
  ChevronDown,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useStore } from "@/components/store";
import { shopLinks } from "@/data/catalog";
import { cn } from "@/lib/utils";

const primaryLinks = ["New Arrivals", "The Craft", "About", "Journal"];

function IconButton({
  label,
  count,
  onClick,
  children,
}: {
  label: string;
  count?: number;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative p-2 text-foreground/80 transition-colors hover:text-gold"
    >
      {children}
      {count !== undefined && count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold leading-none text-gold-foreground">
          {count}
        </span>
      )}
    </button>
  );
}

export function Header() {
  const {
    currency,
    setCurrency,
    wishlistCount,
    cartCount,
    cart,
    cartTotal,
    removeLine,
    format,
    cartOpen,
    setCartOpen,
  } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<"shop" | "collections" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileShop, setMobileShop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 md:px-8">
          <span className="hidden w-24 md:block" />
          <p className="flex-1 text-center text-[10px] uppercase tracking-[0.22em] md:text-[11px]">
            Complimentary Worldwide Express Shipping on Orders Above ₹15,000
          </p>
          <div className="flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.18em] md:w-24 md:justify-end">
            {(["INR", "USD"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={cn(
                  "px-1.5 py-0.5 transition-opacity",
                  currency === c ? "text-gold" : "opacity-60 hover:opacity-100",
                )}
              >
                {c === "INR" ? "INR ₹" : "USD $"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-shadow",
          scrolled && "shadow-card",
        )}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="mx-auto flex max-w-[1400px] items-center px-4 py-4 md:px-8">
          <nav className="hidden flex-1 items-center gap-7 lg:flex">
            <a
              href="#new-arrivals"
              className="text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
            >
              New Arrivals
            </a>
            <button
              type="button"
              onMouseEnter={() => setOpenMega("shop")}
              onFocus={() => setOpenMega("shop")}
              className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
            >
              Shop <ChevronDown className="h-3 w-3" />
            </button>
            <button
              type="button"
              onMouseEnter={() => setOpenMega("collections")}
              onFocus={() => setOpenMega("collections")}
              className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
            >
              Collections <ChevronDown className="h-3 w-3" />
            </button>
            {["The Craft", "About", "Journal"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                onMouseEnter={() => setOpenMega(null)}
                className="text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
              >
                {l}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="p-2 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <a
            href="/"
            className="display-caps flex-1 text-center text-xl leading-none md:text-2xl lg:text-[28px]"
          >
            Peherno
          </a>

          <div className="flex flex-1 items-center justify-end gap-0.5 md:gap-1">
            <IconButton label="Search" onClick={() => setSearchOpen(true)}>
              <Search className="h-[18px] w-[18px]" />
            </IconButton>
            <IconButton label="Wishlist" count={wishlistCount}>
              <Heart className="h-[18px] w-[18px]" />
            </IconButton>
            <span className="hidden md:inline-flex">
              <IconButton label="Account">
                <User className="h-[18px] w-[18px]" />
              </IconButton>
            </span>
            <IconButton
              label="Cart"
              count={cartCount}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
            </IconButton>
          </div>
        </div>

        {openMega && (
          <div
            className="absolute inset-x-0 top-full hidden border-b border-border bg-card lg:block"
            onMouseEnter={() => setOpenMega(openMega)}
          >
            <div className="mx-auto max-w-[1400px] px-8 py-10">
              {openMega === "shop" ? (
                <div className="grid grid-cols-4 gap-x-10 gap-y-3">
                  {shopLinks.map((l) => (
                    <a
                      key={l}
                      href="#new-arrivals"
                      className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold"
                    >
                      {l}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex gap-14">
                  {[
                    { name: "Gulzar", note: "Colour, craft, contemporary femininity" },
                    { name: "Eka", note: "Statement silhouettes, one block at a time" },
                  ].map((c) => (
                    <a key={c.name} href="#gulzar" className="group block">
                      <span className="display-caps text-lg group-hover:text-gold">
                        {c.name}
                      </span>
                      <p className="mt-1 max-w-56 text-xs text-muted-foreground">
                        {c.note}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Search modal */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="top-24 max-w-2xl translate-y-0 rounded-none border-border bg-card p-8">
          <DialogTitle className="eyebrow">Search Peherno</DialogTitle>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center gap-3 border-b border-input pb-3"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              placeholder="Search dresses, co-ord sets, collections…"
              className="w-full bg-transparent font-display text-xl outline-none placeholder:text-muted-foreground/70"
            />
          </form>
          <div className="mt-6">
            <p className="eyebrow">Popular searches</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Iris Corset Dress", "Camellia Co-ord", "Gulzar", "Eka", "Limited Edition"].map(
                (s) => (
                  <span
                    key={s}
                    className="border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile nav */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-[86vw] max-w-sm bg-background p-0">
          <SheetTitle className="display-caps border-b border-border px-6 py-5 text-base">
            Peherno
          </SheetTitle>
          <nav className="flex flex-col px-6 py-4">
            <a
              href="#new-arrivals"
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-4 text-sm uppercase tracking-[0.18em]"
            >
              New Arrivals
            </a>
            <button
              type="button"
              onClick={() => setMobileShop((v) => !v)}
              className="flex items-center justify-between border-b border-border py-4 text-sm uppercase tracking-[0.18em]"
            >
              Shop
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", mobileShop && "rotate-180")}
              />
            </button>
            {mobileShop && (
              <div className="flex flex-col gap-3 border-b border-border py-4 pl-3">
                {shopLinks.map((l) => (
                  <a
                    key={l}
                    href="#new-arrivals"
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {l}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#gulzar"
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-4 text-sm uppercase tracking-[0.18em]"
            >
              Collections
            </a>
            {primaryLinks.slice(1).map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 text-sm uppercase tracking-[0.18em]"
              >
                {l}
              </a>
            ))}
            <a href="#" className="py-4 text-sm uppercase tracking-[0.18em]">
              Account
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Cart drawer */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent side="right" className="flex w-[92vw] max-w-md flex-col bg-background p-0">
          <SheetTitle className="display-caps flex items-center justify-between border-b border-border px-6 py-5 text-sm">
            Your Bag ({cartCount})
          </SheetTitle>

          <div className="flex-1 overflow-y-auto px-6">
            {cart.length === 0 ? (
              <p className="py-16 text-center text-sm text-muted-foreground">
                Your bag is empty. Begin with our new arrivals.
              </p>
            ) : (
              <ul className="divide-y divide-border">
                {cart.map((line) => (
                  <li key={line.key} className="flex gap-4 py-5">
                    <img
                      src={line.product.image}
                      alt={line.product.name}
                      loading="lazy"
                      width={768}
                      height={1024}
                      className="h-28 w-20 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-display text-base leading-snug">
                        {line.product.name}
                        {line.product.colour ? ` – ${line.product.colour}` : ""}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Size {line.size} · Qty {line.qty}
                      </p>
                      <p className="mt-2 text-sm">{format(line.product.price * line.qty)}</p>
                    </div>
                    <button
                      type="button"
                      aria-label="Remove"
                      onClick={() => removeLine(line.key)}
                      className="self-start p-1 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="eyebrow">Subtotal</span>
              <span className="font-display text-xl">{format(cartTotal)}</span>
            </div>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <Minus className="h-3 w-3 text-gold" /> Taxes and shipping calculated at checkout
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-primary py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
