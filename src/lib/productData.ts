export interface Product {
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

export const products: Product[] = [];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.surface === category);
}

export function getProductsByColor(color: string): Product[] {
  return products.filter((product) => product.color.includes(color));
}

export function getProductsByFinish(finish: string): Product[] {
  return products.filter((product) => product.finish.includes(finish));
}
