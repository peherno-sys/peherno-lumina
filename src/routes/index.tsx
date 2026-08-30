import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/catalog";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Dresses", image: catDresses },
  { name: "Co-ord Sets", image: catCoords },
  { name: "Tops & Shirts", image: catTops },
  { name: "Bottoms", image: catBottoms },
];

const craft = [
  {
    title: "Carved Teak Blocks",
    body: "Hand-chiselled into seasoned teak by carvers who have kept the craft alive for generations.",
    image: craftBlocks,
  },
  {
    title: "Hand-Mixed Organic Pigments",
    body: "Indigo, madder root, and pomegranate rind mixed fresh daily in earthen bowls.",
    image: craftPigments,
  },
  {
    title: "Master Artisan Stamping",
    body: "Cloth meets rhythmic alignment—every repeat aligned by eye, never by machine.",
    image: craftStamping,
  },
];

const lookbook = [ig1, ig2, ig3, ig4, ig5, ig6];

function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-32 text-center">
      <h2 className="display-caps text-xl md:text-2xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-20 hairline" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative">
          <img
            src={hero}
            alt="Peherno campaign — hand block printed co-ord set in a Jaipur courtyard"
            width={1920}
            height={1088}
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
                    className="bg-primary px-8 py-4 text-center text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Shop New Arrivals
                  </a>
                  <a
                    href="#the-craft"
                    className="border border-gold px-8 py-4 text-center text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-gold-soft"
                  >
                    Explore the Craft
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New arrivals */}
        <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
          <SectionHeading
            id="new-arrivals"
            title="New Arrivals"
            subtitle="Small-batch pieces stamped by hand this season."
          />
          <div className="mt-12 hidden gap-8 md:grid md:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:hidden">
            {products.map((p) => (
              <div key={p.id} className="w-[62vw] shrink-0 snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Shop by category */}
        <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8 md:pb-28">
          <SectionHeading title="Shop by Category" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {categories.map((c) => (
              <a key={c.name} href="#new-arrivals" className="group block overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="display-caps mt-4 text-center text-xs transition-colors group-hover:text-gold">
                  {c.name}
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Gulzar spotlight */}
        <section id="gulzar" className="scroll-mt-24 border-y border-border bg-card">
          <div className="mx-auto grid max-w-[1400px] items-stretch md:grid-cols-2">
            <img
              src={gulzar}
              alt="Gulzar collection campaign portrait in Jaipur"
              loading="lazy"
              width={1008}
              height={1264}
              className="h-full max-h-[760px] w-full object-cover"
            />
            <div className="flex items-center px-6 py-16 md:px-14 md:py-20">
              <div className="max-w-md">
                <p className="eyebrow">Featured Collection</p>
                <h2 className="display-caps mt-4 text-2xl md:text-3xl">Gulzar Collection</h2>
                <div className="mt-5 h-px w-20 hairline" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  A celebration of color, craft, and contemporary femininity. Designed in
                  flowy silhouettes hand-stamped with natural artisan dyes.
                </p>
                <a
                  href="#new-arrivals"
                  className="mt-9 inline-block border border-foreground px-9 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-gold hover:text-gold"
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
          className="relative scroll-mt-24 overflow-hidden px-4 py-20 md:px-8 md:py-28"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 400 200"
            className="pointer-events-none absolute left-1/2 top-8 h-40 w-[520px] -translate-x-1/2 text-gold opacity-25"
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

          <div className="relative mx-auto max-w-[1400px]">
            <SectionHeading
              title="Rooted in Jaipur"
              subtitle="Where centuries-old craftsmanship meets contemporary fashion."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
              {craft.map((c) => (
                <article key={c.title} className="text-center">
                  <div className="overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
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

        {/* Founder */}
        <section id="about" className="relative scroll-mt-24">
          <img
            src={founder}
            alt="The founder of Peherno in her Jaipur studio"
            loading="lazy"
            width={1400}
            height={900}
            className="h-[520px] w-full object-cover md:h-[600px]"
          />
          <div className="absolute inset-0 bg-background/70 md:bg-gradient-to-r md:from-background/92 md:via-background/70 md:to-background/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1400px] px-6 md:px-8">
              <div className="max-w-xl">
                <h2 className="display-caps text-xl md:text-2xl">
                  Meet the Woman Behind Peherno
                </h2>
                <div className="mt-5 h-px w-20 hairline" />
                <blockquote className="mt-6 font-display text-xl font-light leading-relaxed md:text-2xl">
                  “The name Peherno, drawn from the words Paridhan and Pehnava, reflects our
                  belief that what we wear is more than just fabric—it’s a voice, a feeling,
                  and a connection to something deeper.”
                </blockquote>
                <a
                  href="#journal"
                  className="mt-9 inline-block border border-foreground px-9 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-gold hover:text-gold"
                >
                  Discover Our Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lookbook */}
        <section id="journal" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading title="@Peherno — Follow the Journey" />
            <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
              {lookbook.map((img, i) => (
                <a key={img} href="#" className="group block overflow-hidden">
                  <img
                    src={img}
                    alt={`Peherno lookbook image ${i + 1}`}
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
