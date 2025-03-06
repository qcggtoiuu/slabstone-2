"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

interface ProductCatalogProps {
  className?: string;
}

const ProductCatalog = ({ className = "" }: ProductCatalogProps) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Filter states
  const [colorFilter, setColorFilter] = useState("all");
  const [finishFilter, setFinishFilter] = useState("all");

  // Sample product data (matching the image)
  const products = [
    {
      id: "1",
      name: "Đá nung kết Slabstone - Calacatta Gold",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      finish: "Đá hoa",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "2",
      name: "Đá nung kết Slabstone - Statuario",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      finish: "Đá hoa",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "3",
      name: "Đá nung kết Slabstone - Nero Marquina",
      image:
        "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=80",
      finish: "Đá",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "4",
      name: "Đá nung kết Slabstone - Pietra Grey",
      image:
        "https://images.unsplash.com/photo-1617791160588-241658c0f566?w=800&q=80",
      finish: "BODYTECH",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "5",
      name: "Đá nung kết Slabstone - Emperador",
      image:
        "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=800&q=80",
      finish: "Đá hoa",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "6",
      name: "Đá nung kết Slabstone - Sahara Noir",
      image:
        "https://images.unsplash.com/photo-1617791160505-23e3d6b5b0bf?w=800&q=80",
      finish: "Đá",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "7",
      name: "Đá nung kết Slabstone - Bianco Carrara",
      image:
        "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
      finish: "BODYTECH",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "8",
      name: "Đá nung kết Slabstone - Portoro",
      image:
        "https://images.unsplash.com/photo-1618221195647-1e485866a26d?w=800&q=80",
      finish: "Đá hoa",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "9",
      name: "Đá nung kết Slabstone - Travertine",
      image:
        "https://images.unsplash.com/photo-1617791160505-23e3d6b5b0bf?w=800&q=80",
      finish: "Đá",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "10",
      name: "Đá nung kết Slabstone - Onyx",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      finish: "BODYTECH",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "11",
      name: "Đá nung kết Slabstone - Basalt",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      finish: "Đá",
      thickness: "9mm",
      size: "1200x2400",
    },
    {
      id: "12",
      name: "Đá nung kết Slabstone - Terrazzo",
      image:
        "https://images.unsplash.com/photo-1600607687513-a6c92b4f2b61?w=800&q=80",
      finish: "Đá hoa",
      thickness: "9mm",
      size: "1200x2400",
    },
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (
      colorFilter !== "all" &&
      colorFilter !== "Màu Be" &&
      colorFilter !== "Bóng kính" &&
      colorFilter !== "Xám" &&
      colorFilter !== "Đen"
    )
      return true;
    if (finishFilter !== "all" && product.finish !== finishFilter) return false;
    return true;
  });

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
              <button
                onClick={() => setColorFilter("Màu Be")}
                className={`px-4 py-2 rounded-md ${colorFilter === "Màu Be" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Màu Be
              </button>
              <button
                onClick={() => setColorFilter("Bóng kính")}
                className={`px-4 py-2 rounded-md ${colorFilter === "Bóng kính" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Bóng kính
              </button>
              <button
                onClick={() => setColorFilter("Xám")}
                className={`px-4 py-2 rounded-md ${colorFilter === "Xám" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Xám
              </button>
              <button
                onClick={() => setColorFilter("Đen")}
                className={`px-4 py-2 rounded-md ${colorFilter === "Đen" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Đen
              </button>
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
              <button
                onClick={() => setFinishFilter("Đá hoa")}
                className={`px-4 py-2 rounded-md ${finishFilter === "Đá hoa" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Đá hoa
              </button>
              <button
                onClick={() => setFinishFilter("Đá")}
                className={`px-4 py-2 rounded-md ${finishFilter === "Đá" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Đá
              </button>
              <button
                onClick={() => setFinishFilter("BODYTECH")}
                className={`px-4 py-2 rounded-md ${finishFilter === "BODYTECH" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                BODYTECH
              </button>
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
                    src={selectedProduct.image}
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
                        <li>Mặt bàn bếp</li>
                        <li>Ốp tường</li>
                        <li>Sàn nhà</li>
                        <li>Nội thất cao cấp</li>
                      </ul>
                    </div>
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
