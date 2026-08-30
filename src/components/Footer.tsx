import { Facebook, Instagram } from "lucide-react";

type Col = { title: string; links: { label: string; href: string }[] };

const columns: Col[] = [
  {
    title: "Shop",
    links: [
      { label: "Shop All", href: "/shop/" },
      { label: "Dresses", href: "/shop/" },
      { label: "Co-ord Sets", href: "/shop/" },
      { label: "Tops & Shirts", href: "/shop/" },
      { label: "Bottoms", href: "/shop/" },
      { label: "Limited Edition", href: "/shop/" },
      { label: "New Arrivals", href: "#new-arrivals" },
      { label: "Best Sellers", href: "#best-sellers" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "The Craft", href: "#the-craft" },
      { label: "Gulzar", href: "/gulzar/" },
      { label: "Eka", href: "/shop/" },
      { label: "About Peherno", href: "#about" },
      { label: "About the Founder", href: "#about" },
      { label: "Journal", href: "/category/blog/" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Size Guide", href: "#new-arrivals" },
      { label: "Shipping & Delivery", href: "/policies/" },
      { label: "Returns & Exchanges", href: "/policies/" },
      { label: "FAQ", href: "/policies/" },
      { label: "Care Instructions", href: "/policies/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/policies/" },
      { label: "Terms & Conditions", href: "/policies/" },
      { label: "Refund Policy", href: "/policies/" },
      { label: "HTML Sitemap", href: "/policies/" },
    ],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/peherno/" },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578594683340",
  },
];

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 20c-.4-1.6.1-3.4.5-5 .4-1.5.9-3.3.9-3.3a2.9 2.9 0 0 1-.2-1.2c0-1.2.7-2 1.6-2 .7 0 1.1.5 1.1 1.2 0 .8-.5 1.9-.7 3-.2.9.4 1.6 1.3 1.6 1.6 0 2.7-2 2.7-4.3 0-1.8-1.2-3.1-3.4-3.1-2.5 0-4 1.8-4 3.8 0 .7.2 1.2.5 1.6.2.2.2.3.1.5l-.2.7c0 .2-.2.3-.4.2-1.1-.5-1.7-1.8-1.7-3.3 0-2.5 2.1-5.4 6-5.4 3.2 0 5.3 2.3 5.3 4.7 0 3.2-1.8 5.6-4.4 5.6-.9 0-1.7-.5-2-1" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <section aria-labelledby="newsletter-heading" className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 id="newsletter-heading" className="display-caps text-xl md:text-2xl">
            Stay Close to the Craft
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Early access to small-batch drops and studio notes from Jaipur.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="Your email address"
              className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-ring/40"
            />
            <button
              type="submit"
              className="bg-primary px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Join
            </button>
          </form>
          <p className="mt-3 text-[11px] text-muted-foreground">
            Sign-up connects to Peherno&rsquo;s existing email platform once integrated.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="display-caps text-xs">{col.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {col.title === "Legal" && (
                <div className="mt-6 flex gap-3">
                  {socials.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Peherno on ${label}`}
                      className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                  <a
                    href="https://in.pinterest.com/peherno/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Peherno on Pinterest"
                    className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
                  >
                    <PinterestIcon className="h-4 w-4" />
                  </a>
                </div>
              )}
            </nav>
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
