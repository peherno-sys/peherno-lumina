import { useState } from "react";
import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useStore } from "@/components/store";
import { SIZES, sizeGuide, type Product } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { format, addToCart, wishlist, toggleWishlist } = useStore();
  const [size, setSize] = useState<string>("M");
  const [quickView, setQuickView] = useState(false);
  const [zoom, setZoom] = useState(product.image);
  const liked = wishlist.includes(product.id);

  return (
    <>
      <article className="group relative border border-transparent bg-card transition-all duration-500 hover:-translate-y-1 hover:border-border hover:shadow-luxe">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name}${product.colour ? ` in ${product.colour}` : ""}`}
            loading="lazy"
            width={768}
            height={1024}
            className="aspect-[3/4] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={1024}
            className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />

          <span className="absolute left-3 top-3 bg-background/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-sm">
            {product.tag}
          </span>

          <button
            type="button"
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => toggleWishlist(product.id)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/85 backdrop-blur-sm transition-colors hover:bg-background"
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                liked ? "animate-heart-pop fill-gold text-gold" : "text-foreground/70",
              )}
            />
          </button>

          {/* Hover action bar */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-background/92 p-3 backdrop-blur-md transition-transform duration-400 group-hover:pointer-events-auto group-hover:translate-y-0 max-md:pointer-events-auto max-md:translate-y-0 max-md:bg-background">
            <button
              type="button"
              onClick={() => setQuickView(true)}
              className="w-full border border-input py-2 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
            >
              Quick View
            </button>
            <div className="mt-2 flex flex-wrap justify-center gap-1">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={cn(
                    "h-7 min-w-8 border px-1.5 text-[10px] tracking-widest transition-colors",
                    size === s
                      ? "border-foreground bg-primary text-primary-foreground"
                      : "border-input text-muted-foreground hover:border-gold hover:text-gold",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addToCart(product, size)}
              className="mt-2 w-full bg-primary py-2.5 text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Add to Bag
            </button>
          </div>
        </div>

        <div className="px-1 py-4 text-center">
          <p className="eyebrow">{product.collection}</p>
          <h3 className="mt-1.5 font-display text-lg leading-snug">
            {product.name}
            {product.colour ? ` – ${product.colour}` : ""}
          </h3>
          <p className="mt-1.5 flex items-center justify-center gap-2 text-sm">
            <span>{format(product.price)}</span>
            {product.compareAt && (
              <span className="text-xs text-muted-foreground line-through">
                {format(product.compareAt)}
              </span>
            )}
          </p>
        </div>
      </article>

      <Dialog open={quickView} onOpenChange={setQuickView}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto rounded-none border-border bg-card p-0">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="bg-muted p-4">
              <img
                src={zoom}
                alt={product.name}
                loading="lazy"
                width={768}
                height={1024}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="mt-3 flex gap-3">
                {[product.image, product.hoverImage].map((img) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setZoom(img)}
                    className={cn(
                      "h-20 w-16 overflow-hidden border",
                      zoom === img ? "border-gold" : "border-transparent",
                    )}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      width={768}
                      height={1024}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="eyebrow">{product.collection}</p>
              <DialogTitle className="mt-2 font-display text-2xl font-light leading-tight">
                {product.name}
                {product.colour ? ` – ${product.colour}` : ""}
              </DialogTitle>
              <p className="mt-3 flex items-center gap-3">
                <span className="font-display text-xl">{format(product.price)}</span>
                {product.compareAt && (
                  <span className="text-sm text-muted-foreground line-through">
                    {format(product.compareAt)}
                  </span>
                )}
              </p>
              <div className="mt-5 h-px hairline" />

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {product.fabric}
              </p>

              <p className="mt-6 eyebrow">Select size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "h-9 min-w-10 border px-2 text-xs tracking-widest transition-colors",
                      size === s
                        ? "border-foreground bg-primary text-primary-foreground"
                        : "border-input text-muted-foreground hover:border-gold",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  addToCart(product, size);
                  setQuickView(false);
                }}
                className="mt-5 w-full bg-primary py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add to Bag
              </button>

              <div className="mt-8">
                <p className="eyebrow">Size guide (inches)</p>
                <table className="mt-3 w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground">
                      <th className="py-2 font-normal">Size</th>
                      <th className="py-2 font-normal">Bust</th>
                      <th className="py-2 font-normal">Waist</th>
                      <th className="py-2 font-normal">Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeGuide.map((r) => (
                      <tr key={r.size} className="border-b border-border/60">
                        <td className="py-1.5">{r.size}</td>
                        <td className="py-1.5 text-muted-foreground">{r.bust}</td>
                        <td className="py-1.5 text-muted-foreground">{r.waist}</td>
                        <td className="py-1.5 text-muted-foreground">{r.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                <span className="text-foreground">Care · </span>
                {product.care}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
