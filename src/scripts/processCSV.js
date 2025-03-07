const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvContent = fs.readFileSync(path.join(__dirname, '../lib/slab.csv'), 'utf8');
const lines = csvContent.split('\n');
const headers = lines[0].split(',');

const products = [];

// Process each line of the CSV
for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;

  const values = lines[i].split(',');
  const product = {};

  // Process each column
  headers.forEach((header, index) => {
    if (
      header === "Ảnh 1" ||
      header === "Ảnh 2" ||
      header === "Ảnh 3" ||
      header === "Ảnh 4" ||
      header === "Ảnh 5" ||
      header === "Ảnh 6" ||
      header === "Ảnh 7"
    ) {
      if (!product.images) product.images = [];
      if (values[index]?.trim()) {
        product.images.push(values[index].trim());
      }
    } else if (header === "Tên sản phẩm") {
      product.name = values[index]?.trim() || "";
    } else if (header === "Slug") {
      product.slug = values[index]?.trim() || "";
    } else if (header === "Tiêu đề phụ") {
      product.subtitle = values[index]?.trim() || "";
    } else if (header === "Mã sản phẩm") {
      product.code = values[index]?.trim() || "";
    } else if (header === "Giá sản phẩm") {
      product.price = values[index]?.trim() || "";
    } else if (header === "Bề mặt") {
      product.surface = values[index]?.trim() || "";
    } else if (header === "Độ dày") {
      product.thickness = values[index]?.trim() || "";
    } else if (header === "Kích thước") {
      product.size = values[index]?.trim() || "";
    } else if (header === "Hoàn thiện") {
      product.finish = values[index]?.trim() || "";
    } else if (header === "Màu sắc") {
      product.color = values[index]?.trim() || "";
    } else if (header === "Ứng dụng") {
      product.applications = values[index]?.trim() || "";
    } else if (header === "Bộ sưu tập") {
      product.collection = values[index]?.trim() || "";
    } else if (header === "Tải catalogue") {
      product.catalogueUrl = values[index]?.trim() || "";
    } else if (header === "Mô tả") {
      product.description = values[index]?.trim() || "";
    } else if (header === "URL") {
      product.url = values[index]?.trim() || "";
    }
  });

  // Convert applications to array if it exists
  if (product.applications) {
    product.applications = product.applications.split(',').map(app => app.trim());
  }

  // Add ID if not present
  if (!product.id) {
    product.id = (i).toString();
  }

  products.push(product);
}

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
  path.join(__dirname, '../lib/productData.ts'),
  productDataContent,
  'utf8'
);

console.log(`Successfully imported ${products.length} products from CSV.`);
