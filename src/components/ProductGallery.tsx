"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { cn } from "../lib/utils";

import { Product } from "@/lib/productData";

type StoneProduct = Product;

interface ProductGalleryProps {
  products?: StoneProduct[];
  selectedFilters?: {
    color?: string;
    pattern?: string;
    finish?: string;
  };
}

const ProductGallery = ({
  products = [
    {
      id: "1",
      name: "Calacatta Gold",
      image:
        "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
      category: "Premium",
      color: "White",
      pattern: "Veined",
      finish: "Polished",
    },
    {
      id: "2",
      name: "Nero Marquina",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      category: "Luxury",
      color: "Black",
      pattern: "Veined",
      finish: "Matte",
    },
    {
      id: "3",
      name: "Statuario",
      image:
        "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=80",
      category: "Premium",
      color: "White",
      pattern: "Veined",
      finish: "Polished",
    },
    {
      id: "4",
      name: "Emperador",
      image:
        "https://images.unsplash.com/photo-1617791160588-241658c0f566?w=800&q=80",
      category: "Classic",
      color: "Brown",
      pattern: "Veined",
      finish: "Honed",
    },
    {
      id: "5",
      name: "Pietra Grey",
      image:
        "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=800&q=80",
      category: "Luxury",
      color: "Grey",
      pattern: "Linear",
      finish: "Polished",
    },
    {
      id: "6",
      name: "Sahara Noir",
      image:
        "https://images.unsplash.com/photo-1617791160505-23e3d6b5b0bf?w=800&q=80",
      category: "Premium",
      color: "Black",
      pattern: "Veined",
      finish: "Polished",
    },
  ],
  selectedFilters = {},
}: ProductGalleryProps) => {
  const [selectedProduct, setSelectedProduct] = useState<StoneProduct | null>(
    null,
  );
  const [open, setOpen] = useState(false);

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (selectedFilters.color && product.color !== selectedFilters.color)
      return false;
    if (selectedFilters.pattern && product.pattern !== selectedFilters.pattern)
      return false;
    if (selectedFilters.finish && product.finish !== selectedFilters.finish)
      return false;
    // Size filter is handled elsewhere
    return true;
  });

  return (
    <div className="bg-white w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
        {filteredProducts.map((product) => (
          <Dialog
            key={product.id}
            open={open && selectedProduct?.id === product.id}
            onOpenChange={(isOpen) => {
              setOpen(isOpen);
              if (!isOpen) setSelectedProduct(null);
            }}
          >
            <DialogTrigger asChild>
              <div
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-gray-50"
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "inline-block rounded-full px-2 py-1 text-xs font-medium",
                        product.category === "Premium"
                          ? "bg-amber-100 text-amber-800"
                          : product.category === "Luxury"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800",
                      )}
                    >
                      {product.category}
                    </span>
                    <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      {product.color}
                    </span>
                    <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      {product.finish}
                    </span>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
              {selectedProduct && (
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg">
                      <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedProduct.name}
                      </h2>
                      <div className="mt-4 space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Category
                          </h3>
                          <p className="mt-1 text-base text-gray-900">
                            {selectedProduct.category}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Color
                          </h3>
                          <p className="mt-1 text-base text-gray-900">
                            {selectedProduct.color}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Pattern
                          </h3>
                          <p className="mt-1 text-base text-gray-900">
                            {selectedProduct.pattern}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Finish
                          </h3>
                          <p className="mt-1 text-base text-gray-900">
                            {selectedProduct.finish}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                          Yêu Cầu Mẫu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-lg text-gray-600">
            Không có sản phẩm nào phù hợp với bộ lọc đã chọn.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Hãy thử điều chỉnh tiêu chí lọc của bạn.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
