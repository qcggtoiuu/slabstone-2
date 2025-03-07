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

  const handleImport = async () => {
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

      // Save to localStorage for backup
      localStorage.setItem(
        "importedProducts",
        JSON.stringify(importedProducts),
      );

      // Send to API endpoint to save to file
      const response = await fetch("/api/save-product-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: importedProducts }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          success: true,
          message: `Đã nhập thành công ${importedProducts.length} sản phẩm. Dữ liệu đã được lưu vào file productData.ts.`,
        });
      } else {
        throw new Error(result.message || "Lỗi khi lưu dữ liệu");
      }
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
            <div className="mb-4">
              <label
                htmlFor="csv-file"
                className="block text-sm font-medium mb-2"
              >
                Tải file CSV từ máy tính
              </label>
              <input
                id="csv-file"
                type="file"
                accept=".csv"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-stone-800 file:text-white
                  hover:file:bg-stone-700"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const text = event.target?.result;
                      if (typeof text === "string") {
                        setCsvData(text);
                      }
                    };
                    reader.readAsText(file);
                  }
                }}
              />
            </div>
            <div className="mb-2 text-sm text-gray-500">
              Hoặc dán dữ liệu CSV vào đây:
            </div>
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
              <li>Hệ thống sẽ xử lý dữ liệu và lưu vào file productData.ts</li>
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
