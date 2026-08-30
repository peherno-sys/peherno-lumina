import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getBestSellers, getNewArrivals, IS_MOCK_DATA } from "@/lib/commerce";

import hero from "@/assets/hero.jpg";
import catDresses from "@/assets/cat-dresses.jpg";
import catCoords from "@/assets/cat-coords.jpg";
import catTops from "@/assets/cat-tops.jpg";
import catBottoms from "@/assets/cat-bottoms.jpg";
import gulzar from "@/assets/gulzar.jpg";
import craftBlocks from "@/assets/craft-blocks.jpg";
import craftPigments from "@/assets/craft-pigments.jpg";
import craftStamping from "@/assets/craft-stamping.jpg";
import founder from "@/assets/founder.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

const TITLE = "Peherno — Hand Block Printed Clothing, Crafted in Jaipur";
const DESCRIPTION =
  "Contemporary silhouettes brought to life through the timeless art of hand block printing. Small-batch dresses, co-ord sets and separates made in Jaipur.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Peherno",
              description:
                "Contemporary women's western wear made using hand block printing in Jaipur, India.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.instagram.com/peherno/",
                "https://www.facebook.com/profile.php?id=61578594683340",
                "https://in.pinterest.com/peherno/",
              ],
            },
            { "@type": "WebSite", name: "Peherno", description: DESCRIPTION },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Dresses", image: catDresses, href: "/shop/" },
  { name: "Co-ord Sets", image: catCoords, href: "/shop/" },
  { name: "Tops & Shirts", image: catTops, href: "/shop/" },
  { name: "Bottoms", image: catBottoms, href: "/shop/" },
];

/**
 * Craft copy is intentionally descriptive only. No claims about wood species,
 * dyes, pigments, artisan lineage or sustainability until Peherno supplies them.
 */
const craft = [
  {
    title: "Carved Wooden Blocks",
    body: "Every print begins with a wooden block, carved by hand before it ever meets cloth.",
    image: craftBlocks,
    alt: "Carved wooden printing blocks used for Peherno prints",
  },
  {
    title: "Hand Block Printing",
    body: "Colour is laid down block by block, repeat by repeat, across the length of the fabric.",
    image: craftPigments,
    alt: "Hand block printing in progress on cotton fabric",
  },
  {
    title: "Artisan Craftsmanship",
    body: "Each piece passes through the hands of printers and tailors in Jaipur before it reaches you.",
    image: craftStamping,
    alt: "Artisan aligning a printing block on fabric in a Jaipur workshop",
  },
];

const lookbook = [ig1, ig2, ig3, ig4, ig5, ig6];

function SectionHeading({
  title,
  subtitle,
  id,
  headingId,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  headingId?: string;
}) {
  return (
    <div id={id} className="scroll-mt-32 text-center">
      <h2 id={headingId} className="display-caps text-xl md:text-2xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-20 hairline" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function ProductRail({ items }: { items: ReturnType<typeof getNewArrivals> }) {
  return (
    <>
      <div className="mt-12 hidden gap-8 md:grid md:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:hidden">
        {items.map((p) => (
          <div key={p.id} className="w-[62vw] shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </>
  );
}

function HawaMahalLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <path d="M200 190V96a48 48 0 0 1 96 0v94" />
      <path d="M200 190V96a48 48 0 0 0-96 0v94" />
      <path d="M200 190v-64a24 24 0 0 1 48 0v64" />
      <path d="M200 190v-64a24 24 0 0 0-48 0v64" />
      <path d="M40 190V120a40 40 0 0 1 80 0v70" />
      <path d="M360 190v-70a40 40 0 0 0-80 0v70" />
      <path d="M20 190h360" />
    </svg>
  );
}

function Index() {
  const newArrivals = getNewArrivals(4);
  const bestSellers = getBestSellers(4);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="relative" aria-label="Peherno campaign">
          <img
            src={hero}
            alt="Peherno campaign — hand block printed co-ord set photographed in a Jaipur courtyard"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="h-[68vh] min-h-[440px] w-full object-cover md:h-[82vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent md:via-background/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8">
              <div className="max-w-xl animate-rise-in">
                <p className="eyebrow">Jaipur · Small Batch · Hand Block</p>
                <h1 className="mt-5 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                  For Women Who Design Their Own Power
                </h1>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  Crafted in Jaipur. Contemporary silhouettes brought to life through the
                  timeless art of hand block printing.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#new-arrivals"
                    className="bg-primary px-8 py-4 text-center text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    Shop New Arrivals
                  </a>
                  <a
                    href="#the-craft"
                    className="border border-gold px-8 py-4 text-center text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-gold-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    Explore the Craft
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New arrivals */}
        <section
          aria-labelledby="new-arrivals-heading"
          className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28"
        >
          <SectionHeading
            id="new-arrivals"
            headingId="new-arrivals-heading"
            title="New Arrivals"
            subtitle="Small-batch pieces stamped by hand this season."
          />
          <ProductRail items={newArrivals} />
        </section>

        {/* Shop by category */}
        <section
          aria-labelledby="category-heading"
          className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8 md:pb-28"
        >
          <SectionHeading headingId="category-heading" title="Shop by Category" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {categories.map((c) => (
              <a
                key={c.name}
                href={c.href}
                className="group block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={`Peherno ${c.name.toLowerCase()}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
                </div>
                <h3 className="display-caps mt-4 text-center text-xs transition-colors group-hover:text-gold">
                  {c.name}
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Gulzar spotlight */}
        <section
          id="gulzar"
          aria-labelledby="gulzar-heading"
          className="scroll-mt-24 border-y border-border bg-card"
        >
          <div className="mx-auto grid max-w-[1400px] items-stretch md:grid-cols-2">
            <img
              src={gulzar}
              alt="Gulzar collection campaign portrait photographed in Jaipur"
              loading="lazy"
              width={1008}
              height={1264}
              className="h-full max-h-[760px] w-full object-cover"
            />
            <div className="flex items-center px-6 py-16 md:px-14 md:py-20">
              <div className="max-w-md">
                <p className="eyebrow">Featured Collection</p>
                <h2 id="gulzar-heading" className="display-caps mt-4 text-2xl md:text-3xl">
                  Gulzar Collection
                </h2>
                <div className="mt-5 h-px w-20 hairline" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  A celebration of color, craft, and contemporary femininity.
                </p>
                <a
                  href="/gulzar/"
                  className="mt-9 inline-block border border-foreground px-9 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Explore the Collection
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The craft */}
        <section
          id="the-craft"
          aria-labelledby="craft-heading"
          className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              headingId="craft-heading"
              title="The Craft"
              subtitle="Where centuries-old craftsmanship meets contemporary fashion."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
              {craft.map((c) => (
                <article key={c.title} className="text-center">
                  <div className="overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      width={900}
                      height={1100}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-105"
                    />
                  </div>
                  <h3 className="display-caps mt-6 text-xs">{c.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rooted in Jaipur */}
        <section
          id="jaipur"
          aria-labelledby="jaipur-heading"
          className="relative scroll-mt-24 overflow-hidden border-y border-border bg-card px-4 py-24 md:px-8 md:py-32"
        >
          <HawaMahalLines className="pointer-events-none absolute left-1/2 top-6 h-44 w-[560px] -translate-x-1/2 text-gold opacity-25" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="eyebrow">Rajasthan, India</p>
            <h2 id="jaipur-heading" className="display-caps mt-4 text-xl md:text-2xl">
              Rooted in Jaipur
            </h2>
            <div className="mx-auto mt-5 h-px w-20 hairline" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              Where centuries-old craftsmanship meets contemporary fashion. Peherno is
              designed and made in Jaipur, the city where our prints are stamped by hand.
            </p>
          </div>
        </section>

        {/* Best sellers */}
        <section
          id="best-sellers"
          aria-labelledby="best-sellers-heading"
          className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
        >
          <SectionHeading
            headingId="best-sellers-heading"
            title="Best Sellers"
            subtitle="A selected edit of pieces from the current season."
          />
          {IS_MOCK_DATA && (
            <p className="mx-auto mt-4 max-w-lg text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Development selection — real ranking will come from WooCommerce sales data.
            </p>
          )}
          <ProductRail items={bestSellers} />
        </section>

        {/* Founder */}
        <section id="about" aria-labelledby="founder-heading" className="relative scroll-mt-24">
          <img
            src={founder}
            alt="Portrait of the founder of Peherno in the Jaipur studio"
            loading="lazy"
            width={1400}
            height={900}
            className="h-[520px] w-full object-cover md:h-[600px]"
          />
          <div className="absolute inset-0 bg-background/70 md:bg-gradient-to-r md:from-background/92 md:via-background/70 md:to-background/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8">
              <div className="max-w-xl">
                <h2 id="founder-heading" className="display-caps text-xl md:text-2xl">
                  Meet the Woman Behind Peherno
                </h2>
                <div className="mt-5 h-px w-20 hairline" />
                <blockquote className="mt-6 font-display text-xl font-light leading-relaxed md:text-2xl">
                  “The name Peherno, drawn from the words Paridhan and Pehnava, reflects our
                  belief that what we wear is more than just fabric—it’s a voice, a feeling,
                  and a connection to something deeper.”
                </blockquote>
                <a
                  href="#about"
                  className="mt-9 inline-block border border-foreground px-9 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Discover Our Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial lookbook */}
        <section
          id="lookbook"
          aria-labelledby="lookbook-heading"
          className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              headingId="lookbook-heading"
              title="The Lookbook"
              subtitle="Campaign frames, fabric details and print close-ups from the season."
            />
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              <img
                src={ig2}
                alt="Peherno hand block print detail"
                loading="lazy"
                width={900}
                height={1200}
                className="aspect-[3/4] w-full object-cover md:col-span-1"
              />
              <img
                src={ig4}
                alt="Peherno campaign styling in Jaipur"
                loading="lazy"
                width={1200}
                height={1200}
                className="aspect-[3/4] w-full object-cover md:col-span-2"
              />
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section
          id="instagram"
          aria-labelledby="instagram-heading"
          className="scroll-mt-24 px-4 pb-20 md:px-8 md:pb-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              headingId="instagram-heading"
              title="@Peherno — Follow the Journey"
            />
            <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
              {lookbook.map((img, i) => (
                <a
                  key={img}
                  href="https://www.instagram.com/peherno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <img
                    src={img}
                    alt={`Peherno on Instagram — image ${i + 1}`}
                    loading="lazy"
                    width={700}
                    height={700}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
