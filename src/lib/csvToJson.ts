/**
 * Utility function to convert CSV data to JSON format
 *
 * This can be used in the browser environment where fs module is not available
 */

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
}

export function csvToJson(csvText: string): ProductCSV[] {
  const lines = csvText.split("\n");
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
        header === "Image1" ||
        header === "Ảnh 2" ||
        header === "Image2" ||
        header === "Ảnh 3" ||
        header === "Image3" ||
        header === "Ảnh 4" ||
        header === "Image4" ||
        header === "Ảnh 5" ||
        header === "Image5" ||
        header === "Ảnh 6" ||
        header === "Image6" ||
        header === "Ảnh 7" ||
        header === "Image7" ||
        header === "Image" ||
        header === "product.images" ||
        header === "images" ||
        header === "image" ||
        header === "L"
      ) {
        if (!product.images) product.images = [];
        if (values[index]?.trim()) {
          product.images.push(values[index].trim());
        }
      } else if (header === "ProductName" || header === "Tên sản phẩm") {
        product.name = values[index]?.trim() || "";
      } else if (header === "Slug") {
        product.slug = values[index]?.trim() || "";
      } else if (header === "Tiêu đề phụ") {
        product.subtitle = values[index]?.trim() || "";
      } else if (header === "ProductCode" || header === "Mã sản phẩm") {
        product.code = values[index]?.trim() || "";
      } else if (header === "Price" || header === "Giá sản phẩm") {
        product.price = values[index]?.trim() || "";
      } else if (header === "Surface" || header === "Bề mặt") {
        product.surface = values[index]?.trim() || "";
      } else if (header === "Thickness" || header === "Độ dày") {
        product.thickness = values[index]?.trim() || "";
      } else if (header === "Dimensions" || header === "Kích thước") {
        product.size = values[index]?.trim() || "";
      } else if (header === "Finish" || header === "Hoàn thiện") {
        product.finish = values[index]?.trim() || "";
      } else if (header === "Color" || header === "Màu sắc") {
        product.color = values[index]?.trim() || "";
      } else if (header === "Ứng dụng") {
        product.applications = values[index]?.trim() || "";
      } else if (header === "Bộ sưu tập") {
        product.collection = values[index]?.trim() || "";
      } else if (header === "CatalogueDownload" || header === "Tải catalogue") {
        product.catalogueUrl = values[index]?.trim() || "";
      } else if (header === "Description" || header === "Mô tả") {
        // Đảm bảo mô tả không bị nhầm lẫn với các trường khác
        if (values[index] && values[index].trim().length > 0) {
          product.description = values[index].trim();
        }
      } else if (header === "Image" || header === "Ảnh") {
        if (!product.images) product.images = [];
        if (values[index]?.trim()) {
          product.images.push(values[index].trim());
        }
      }
    });

    products.push(product as ProductCSV);
  }

  return products;
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
    };
  });
}
