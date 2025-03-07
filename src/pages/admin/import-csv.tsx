"use client";

import React, { useState } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { csvToJson, convertCSVToProductData } from "@/lib/csvToJson";

export default function ImportCSVPage() {
  const [csvData, setCsvData] = useState("");
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImport = () => {
    if (!csvData.trim()) {
      setStatus({ success: false, message: "Vui lòng nhập dữ liệu CSV" });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      // Parse CSV data
      const csvProducts = csvToJson(csvData);
      const importedProducts = convertCSVToProductData(csvProducts);

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

export const products: Product[] = ${JSON.stringify(importedProducts, null, 2)};

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

      // In a real app, you would send this to an API endpoint
      console.log("Imported products:", importedProducts);
      localStorage.setItem("productDataContent", productDataContent);
      localStorage.setItem(
        "importedProducts",
        JSON.stringify(importedProducts),
      );

      setStatus({
        success: true,
        message: `Đã nhập thành công ${importedProducts.length} sản phẩm. Dữ liệu đã được lưu vào localStorage.`,
      });
    } catch (error) {
      setStatus({
        success: false,
        message: `Lỗi: ${error instanceof Error ? error.message : String(error)}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Nhập sản phẩm từ CSV</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Nhập dữ liệu CSV</h2>
            <Textarea
              value={csvData}
              onChange={(e) => setCsvData(e.target.value)}
              className="min-h-[300px]"
              placeholder="Dán dữ liệu CSV vào đây..."
            />
            <Button
              onClick={handleImport}
              disabled={isLoading}
              className="bg-stone-800 hover:bg-stone-900"
            >
              {isLoading ? "Đang nhập..." : "Nhập sản phẩm"}
            </Button>

            {status && (
              <div
                className={`p-4 rounded-md ${status.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
              >
                {status.message}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Hướng dẫn</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>
                Chuẩn bị dữ liệu CSV với các cột: Tên sản phẩm, Slug, Mã sản
                phẩm, Giá sản phẩm, Bề mặt, Độ dày, Kích thước, Hoàn thiện, Màu
                sắc, Tải catalogue, Mô tả, Ảnh 1-7, URL
              </li>
              <li>Sao chép và dán dữ liệu CSV vào ô văn bản bên trái</li>
              <li>Nhấn nút "Nhập sản phẩm"</li>
              <li>Hệ thống sẽ xử lý dữ liệu và lưu vào localStorage</li>
            </ol>

            <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-md">
              <h3 className="font-medium mb-2">Định dạng CSV</h3>
              <p className="text-sm">
                Dòng đầu tiên phải chứa tiêu đề các cột:
                <br />
                <code>
                  Tên sản phẩm,Slug,Tiêu đề phụ,Mã sản phẩm,Giá sản phẩm,Bề
                  mặt,Độ dày,Kích thước,Hoàn thiện,Màu sắc,Ứng dụng,Bộ sưu
                  tập,Tải catalogue,Mô tả,Ảnh 1,Ảnh 2,Ảnh 3,Ảnh 4,Ảnh 5,Ảnh
                  6,Ảnh 7,URL
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
