import { Facebook, Instagram, Twitter } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      "Shop All",
      "Dresses",
      "Co-ord Sets",
      "Tops & Shirts",
      "Bottoms",
      "Limited Edition",
      "New Arrivals",
      "Best Sellers",
    ],
  },
  {
    title: "Discover",
    links: [
      "The Craft",
      "Gulzar Collection",
      "Eka Collection",
      "About Peherno",
      "Journal",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "Size Guide",
      "Shipping & Delivery",
      "Returns & Exchanges",
      "FAQ",
      "Care Instructions",
      "Contact Us",
    ],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Sitemap"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="display-caps text-xl md:text-2xl">Stay Close to the Craft</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Early access to small-batch drops, artisan stories, and studio notes from Jaipur.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold"
            />
            <button
              type="submit"
              className="bg-primary px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="display-caps text-xs">{col.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground transition-colors hover:text-gold"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              {col.title === "Legal" && (
                <div className="mt-6 flex gap-3">
                  {[
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Facebook, label: "Facebook" },
                    { Icon: Twitter, label: "Pinterest" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            © 2026 Peherno. All rights reserved. Made in Jaipur, Rajasthan.
          </p>
        </div>
      </div>
    </footer>
  );
}
