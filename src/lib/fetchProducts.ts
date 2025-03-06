export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  color: string;
  pattern: string;
  finish: string;
  size: string;
}

import { products } from "./productData";

export async function fetchProducts(): Promise<Product[]> {
  try {
    // Return the local product data instead of fetching from external source
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      image:
        product.images[0] ||
        "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
      category: product.collection || "",
      color: product.color?.toLowerCase() || "",
      pattern: product.surface?.toLowerCase() || "",
      finish: product.finish?.toLowerCase() || "",
      size: product.size || "",
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
