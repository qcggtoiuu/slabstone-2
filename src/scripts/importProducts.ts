import fs from "fs";
import path from "path";
import { parseCSV, convertCSVToProductData } from "../lib/parseCSV";

// Parse the CSV file
const csvProducts = parseCSV("src/lib/slab.csv");

// Convert to product data format
const products = convertCSVToProductData(csvProducts);

// Create the product data file content
const productDataContent = `export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  code: string;
  price?: string;
  surface: string;
  thickness: string;
  size: string;
  finish: string;
  color: string;
  applications?: string[];
  collection?: string;
  catalogueUrl?: string;
  description?: string;
  images: string[];
  url: string;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.surface === category);
}

export function getProductsByColor(color: string): Product[] {
  return products.filter(product => product.color.includes(color));
}

export function getProductsByFinish(finish: string): Product[] {
  return products.filter(product => product.finish.includes(finish));
}
`;

// Write to productData.ts
fs.writeFileSync(
  path.join(process.cwd(), "src/lib/productData.ts"),
  productDataContent,
  "utf8",
);

console.log(`Successfully imported ${products.length} products from CSV.`);
