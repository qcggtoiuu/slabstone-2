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

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQCuIg5-tgYQZBbIWKfllFa6M7hz-8VYwKBJLrhlvNW8FTmeODqLSsAEDm6kGbKjWVDiWBJw_fgRMZN/pub?output=csv",
    );
    const csvText = await response.text();

    // Parse CSV
    const lines = csvText.split("\n");
    const headers = lines[0].split(",");

    const products: Product[] = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      const values = lines[i].split(",");
      const product: any = {};

      headers.forEach((header, index) => {
        product[header.trim()] = values[index]?.trim() || "";
      });

      products.push({
        id: product.id || String(i),
        name: product.name || "",
        image:
          product.image ||
          "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
        category: product.category || "",
        color: product.color?.toLowerCase() || "",
        pattern: product.pattern?.toLowerCase() || "",
        finish: product.finish?.toLowerCase() || "",
        size: product.size || "",
      });
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
