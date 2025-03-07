"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { products as productData } from "../lib/productData";

interface ProductCatalogProps {
  className?: string;
}

interface Product {
  id: string;
  name: string;
  images: string[];
  surface: string;
  thickness: string[] | string;
  size: string[] | string;
  color?: string;
  description?: string;
  applications?: string[];
}

const ProductCatalog = ({ className = "" }: ProductCatalogProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Filter states
  const [colorFilter, setColorFilter] = useState("all");
  const [finishFilter, setFinishFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");

  // Transform product data to the format needed for the component
  const products = productData.map((product) => ({
    id: product.id,
    name: product.name,
    image: product.images[0] || "https://via.placeholder.com/800",
    finish: product.surface,
    thickness: product.thickness,
    size: product.size,
    color: product.color,
    description: product.description,
    applications: product.applications,
    images: product.images,
  }));

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (colorFilter !== "all") {
      const colors = product.color.split("|").map((c) => c.trim());
      if (!colors.includes(colorFilter)) return false;
    }
    if (finishFilter !== "all") {
      const finishes = product.finish.split("|").map((f) => f.trim());
      if (!finishes.includes(finishFilter)) return false;
    }
    // Kiểm tra kích thước nếu có bộ lọc kích thước
    if (sizeFilter !== "all") {
      const sizes = product.size.split("|").map((s) => s.trim());
      if (!sizes.includes(sizeFilter)) return false;
    }
    return true;
  });

  // Get unique colors for filter
  const uniqueColors = Array.from(
    new Set(
      products.flatMap((product) => {
        return product.color
          ? product.color.split("|").map((c) => c.trim())
          : [];
      }),
    ),
  ).filter(Boolean);

  // Get unique finishes for filter
  const uniqueFinishes = Array.from(
    new Set(
      products.flatMap((product) => {
        return product.finish
          ? product.finish.split("|").map((f) => f.trim())
          : [];
      }),
    ),
  ).filter(Boolean);

  // Get unique sizes for filter
  const uniqueSizes = Array.from(
    new Set(
      products.flatMap((product) => {
        return product.size ? product.size.split("|").map((s) => s.trim()) : [];
      }),
    ),
  ).filter(Boolean);

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            BỘ SƯU TẬP ĐÁ NUNG KẾT
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập đá nung kết cao cấp với đa dạng màu sắc, họa
            tiết và bề mặt
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 space-y-4">
          {/* Color Filter */}
          <div>
            <p className="text-sm font-medium mb-2">Màu sắc:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setColorFilter("all")}
                className={`px-4 py-2 rounded-md ${colorFilter === "all" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Tất cả
              </button>
              {uniqueColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setColorFilter(color as string)}
                  className={`px-4 py-2 rounded-md ${colorFilter === color ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Finish Filter */}
          <div>
            <p className="text-sm font-medium mb-2">Bề mặt:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFinishFilter("all")}
                className={`px-4 py-2 rounded-md ${finishFilter === "all" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Tất cả
              </button>
              {uniqueFinishes.map((finish) => (
                <button
                  key={finish}
                  onClick={() => setFinishFilter(finish as string)}
                  className={`px-4 py-2 rounded-md ${finishFilter === finish ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <p className="text-sm font-medium mb-2">Kích thước:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSizeFilter("all")}
                className={`px-4 py-2 rounded-md ${sizeFilter === "all" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Tất cả
              </button>
              {uniqueSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSizeFilter(size as string)}
                  className={`px-4 py-2 rounded-md ${sizeFilter === size ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p>Bề mặt: {product.finish}</p>
                  <p>Độ dày: {product.thickness}</p>
                  <p>Kích thước: {product.size}</p>
                </div>
                <Button
                  className="w-full mt-4 flex items-center justify-center gap-2"
                  onClick={() => handleProductClick(product)}
                >
                  <Eye size={16} /> Xem chi tiết
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedProduct && (
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[500px]">
                  <Image
                    src={selectedProduct.images?.[0] || selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedProduct.name}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Bề mặt
                      </h3>
                      <p className="mt-1 text-base text-gray-900">
                        {selectedProduct.finish}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Độ dày
                      </h3>
                      <p className="mt-1 text-base text-gray-900">
                        {selectedProduct.thickness}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Kích thước
                      </h3>
                      <p className="mt-1 text-base text-gray-900">
                        {selectedProduct.size}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        Ứng dụng
                      </h3>
                      <ul className="mt-1 list-disc pl-5 space-y-1">
                        {selectedProduct.applications?.length ? (
                          selectedProduct.applications.map((app, index) => (
                            <li key={index}>{app}</li>
                          ))
                        ) : (
                          <>
                            <li>Mặt bàn bếp</li>
                            <li>Ốp tường</li>
                            <li>Sàn nhà</li>
                            <li>Nội thất cao cấp</li>
                          </>
                        )}
                      </ul>
                    </div>

                    {selectedProduct.description && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Mô tả
                        </h3>
                        <p className="mt-1 text-base text-gray-900">
                          {selectedProduct.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button className="w-full">Yêu cầu báo giá</Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductCatalog;
