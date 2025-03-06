import React, { useState } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { csvToJson, convertCSVToProductData } from "@/lib/csvToJson";

export default function ImportProductsPage() {
  const [csvData, setCsvData] = useState("");
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImport = async () => {
    if (!csvData.trim()) {
      setStatus({ success: false, message: "Please enter CSV data" });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      // Parse CSV data
      const csvProducts = csvToJson(csvData);
      const products = convertCSVToProductData(csvProducts);

      // Send to API endpoint
      const response = await fetch("/api/import-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          success: true,
          message: `Successfully imported ${result.count} products`,
        });
      } else {
        setStatus({
          success: false,
          message: result.message || "Failed to import products",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : String(error)}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Import Products from CSV</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Paste CSV Data
          </label>
          <Textarea
            value={csvData}
            onChange={(e) => setCsvData(e.target.value)}
            className="min-h-[300px]"
            placeholder="Paste CSV data here..."
          />
        </div>

        <Button
          onClick={handleImport}
          disabled={isLoading}
          className="bg-stone-800 hover:bg-stone-900"
        >
          {isLoading ? "Importing..." : "Import Products"}
        </Button>

        {status && (
          <div
            className={`mt-4 p-4 rounded-md ${
              status.success
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Prepare your CSV data with the following headers: Tên sản phẩm,
              Slug, Tiêu đề phụ, Mã sản phẩm, Giá sản phẩm, Bề mặt, Độ dày, Kích
              thước, Hoàn thiện, Màu sắc, Ứng dụng, Bộ sưu tập, Tải catalogue,
              Mô tả, Ảnh 1-7, URL
            </li>
            <li>Copy and paste the CSV data into the text area above</li>
            <li>Click the "Import Products" button</li>
            <li>
              The system will process the data and update the product database
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </main>
  );
}
