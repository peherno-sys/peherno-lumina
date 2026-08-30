/**
 * Commerce data layer.
 *
 * This is the ONLY place the UI reads commerce data from. Today it returns
 * clearly-labelled development data from `src/data/catalog.ts`.
 *
 * When the WooCommerce Store API / headless integration is configured, replace
 * the bodies of these functions with real fetches (server functions calling the
 * Woo REST API). The return shapes are intentionally Woo-shaped so that the
 * components do not need to change.
 *
 * NOTE: WooCommerce remains the source of truth for price, sale price, stock,
 * variations, images and descriptions. Nothing here should be treated as
 * production catalog data.
 */
import { products, type Product } from "@/data/catalog";

export const COMMERCE_SOURCE: "mock" | "woocommerce" = "mock";
export const IS_MOCK_DATA = COMMERCE_SOURCE === "mock";

export function getNewArrivals(limit = 4): Product[] {
  return products.slice(0, limit);
}

/**
 * Best sellers require real WooCommerce sales data. Until that is connected
 * this returns a manually selected set and `IS_MOCK_DATA` stays true so the UI
 * can label the section as development data.
 */
export function getBestSellers(limit = 4): Product[] {
  return products.slice(2, 2 + limit);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection.startsWith(collection));
}

export function getAllProducts(): Product[] {
  return products;
}

export type { Product };
