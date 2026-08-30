import irisEspresso1 from "@/assets/iris-espresso-1.jpg";
import irisEspresso2 from "@/assets/iris-espresso-2.jpg";
import irisSand1 from "@/assets/iris-sand-1.jpg";
import irisSand2 from "@/assets/iris-sand-2.jpg";
import camelliaSand1 from "@/assets/camellia-sand-1.jpg";
import camelliaSand2 from "@/assets/camellia-sand-2.jpg";
import camelliaEspresso1 from "@/assets/camellia-espresso-1.jpg";
import camelliaEspresso2 from "@/assets/camellia-espresso-2.jpg";
import ekaOne1 from "@/assets/eka-oneshoulder-1.jpg";
import ekaOne2 from "@/assets/eka-oneshoulder-2.jpg";
import ekaCrimson1 from "@/assets/eka-crimson-1.jpg";
import ekaCrimson2 from "@/assets/eka-crimson-2.jpg";

export type Product = {
  id: string;
  name: string;
  colour?: string;
  collection: string;
  price: number;
  compareAt?: number;
  tag: string;
  fabric: string;
  care: string;
  image: string;
  hoverImage: string;
};

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export const products: Product[] = [
  {
    id: "iris-espresso",
    name: "Iris Corset Dress",
    colour: "Espresso",
    collection: "Gulzar Collection",
    price: 2899,
    compareAt: 3815,
    tag: "100% Pure Hand-Block Cotton",
    fabric:
      "Pure cotton, hand-block printed in Jaipur with natural pigments. Structured corset bodice with a gathered midi skirt and concealed back zip.",
    care: "Gentle cold hand wash separately. Dry in shade. Warm iron on reverse.",
    image: irisEspresso1,
    hoverImage: irisEspresso2,
  },
  {
    id: "iris-sand",
    name: "Iris Corset Dress",
    colour: "Sand",
    collection: "Gulzar Collection",
    price: 2899,
    compareAt: 3815,
    tag: "100% Pure Hand-Block Cotton",
    fabric:
      "Pure cotton, hand-block printed in Jaipur with natural pigments. Structured corset bodice with a gathered midi skirt and concealed back zip.",
    care: "Gentle cold hand wash separately. Dry in shade. Warm iron on reverse.",
    image: irisSand1,
    hoverImage: irisSand2,
  },
  {
    id: "camellia-sand",
    name: "Camellia Co-ord Set",
    colour: "Sand",
    collection: "Gulzar Collection",
    price: 3699,
    compareAt: 4215,
    tag: "100% Cotton Artisan Set",
    fabric:
      "Two-piece artisan set in breathable cotton. Relaxed top with placket detail, paired with wide-leg trousers and side pockets.",
    care: "Gentle cold hand wash separately. Dry in shade. Warm iron on reverse.",
    image: camelliaSand1,
    hoverImage: camelliaSand2,
  },
  {
    id: "camellia-espresso",
    name: "Camellia Co-ord Set",
    colour: "Espresso",
    collection: "Gulzar Collection",
    price: 3699,
    compareAt: 4215,
    tag: "100% Cotton Artisan Set",
    fabric:
      "Two-piece artisan set in breathable cotton. Relaxed top with placket detail, paired with wide-leg trousers and side pockets.",
    care: "Gentle cold hand wash separately. Dry in shade. Warm iron on reverse.",
    image: camelliaEspresso1,
    hoverImage: camelliaEspresso2,
  },
  {
    id: "eka-one-shoulder",
    name: "Eka One-Shoulder Statement Co-ord Set",
    collection: "Eka Collection",
    price: 2689,
    tag: "Contemporary Hand-Block",
    fabric:
      "Asymmetric one-shoulder top in hand-block printed cotton with a draped overlay, worn with matching straight-fit trousers.",
    care: "Gentle cold hand wash separately. Dry in shade. Warm iron on reverse.",
    image: ekaOne1,
    hoverImage: ekaOne2,
  },
  {
    id: "eka-crimson",
    name: "Eka Crimson Kurti-Style Co-ord Set",
    collection: "Eka Collection",
    price: 2689,
    tag: "Contemporary Hand-Block",
    fabric:
      "Long kurti silhouette with flared sleeves in crimson hand-block cotton, paired with coordinated straight trousers.",
    care: "Gentle cold hand wash separately. Dry in shade. Warm iron on reverse.",
    image: ekaCrimson1,
    hoverImage: ekaCrimson2,
  },
];

export const sizeGuide = [
  { size: "XS", bust: 32, waist: 26, hip: 35 },
  { size: "S", bust: 34, waist: 28, hip: 37 },
  { size: "M", bust: 36, waist: 30, hip: 39 },
  { size: "L", bust: 38, waist: 32, hip: 41 },
  { size: "XL", bust: 40, waist: 34, hip: 43 },
  { size: "XXL", bust: 42, waist: 36, hip: 45 },
];

export const shopLinks = [
  "Shop All",
  "Dresses",
  "Co-ord Sets",
  "Tops",
  "Skirts",
  "Shirts",
  "Bottoms",
  "Limited Edition",
];
