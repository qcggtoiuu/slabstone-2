import fs from "fs";
import path from "path";

export interface ProductCSV {
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
  applications?: string;
  collection?: string;
  catalogueUrl?: string;
  description?: string;
  images: string[];
  url: string;
}

export function parseCSV(filePath: string): ProductCSV[] {
  try {
    const csvContent = fs.readFileSync(
      path.join(process.cwd(), filePath),
      "utf8",
    );
    const lines = csvContent.split("\n");
    const headers = lines[0].split(",");

    const products: ProductCSV[] = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      const values = lines[i].split(",");
      const product: any = {};

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

      products.push(product as ProductCSV);
    }

    return products;
  } catch (error) {
    console.error("Error parsing CSV:", error);
    return [];
  }
}

export function convertCSVToProductData(csvProducts: ProductCSV[]) {
  return csvProducts.map((csvProduct, index) => {
    const applications = csvProduct.applications
      ? csvProduct.applications.split(",").map((app) => app.trim())
      : undefined;

    return {
      id: (index + 1).toString(),
      name: csvProduct.name,
      slug: csvProduct.slug,
      subtitle: csvProduct.subtitle,
      code: csvProduct.code,
      price: csvProduct.price,
      surface: csvProduct.surface,
      thickness: csvProduct.thickness,
      size: csvProduct.size,
      finish: csvProduct.finish,
      color: csvProduct.color,
      applications: applications,
      collection: csvProduct.collection,
      catalogueUrl: csvProduct.catalogueUrl,
      description: csvProduct.description,
      images: csvProduct.images || [],
      url: csvProduct.url,
    };
  });
}

// Example usage
// const csvProducts = parseCSV('src/lib/slab.csv');
// const products = convertCSVToProductData(csvProducts);
