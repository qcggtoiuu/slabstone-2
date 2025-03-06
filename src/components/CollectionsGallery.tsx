"use client";

import React, { useState, useEffect } from "react";
import { fetchProducts, Product } from "@/lib/fetchProducts";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ProductFilter from "./ProductFilter";
import ProductGallery from "./ProductGallery";
import ProductModal from "./ProductModal";

interface CollectionsGalleryProps {
  title?: string;
  description?: string;
  className?: string;
}

interface FilterState {
  color: string;
  pattern: string;
  finish: string;
  size: string;
  sortBy: string;
}

const CollectionsGallery = ({
  title = "Bộ Sưu Tập Đá Cao Cấp Của Chúng Tôi",
  description = "Khám phá dòng sản phẩm đá nung kết độc quyền của Slabstone, được chế tác với độ chính xác cao và thiết kế cho không gian sang trọng.",
  className = "",
}: CollectionsGalleryProps) => {
  const [filters, setFilters] = useState<FilterState>({
    color: "all-colors",
    pattern: "all-patterns",
    finish: "all-finishes",
    size: "all-sizes",
    sortBy: "newest",
  });

  const [showDescription, setShowDescription] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (filters.color !== "all-colors" && product.color !== filters.color)
      return false;
    if (
      filters.pattern !== "all-patterns" &&
      product.pattern !== filters.pattern
    )
      return false;
    if (filters.finish !== "all-finishes" && product.finish !== filters.finish)
      return false;
    if (filters.size !== "all-sizes" && product.size !== filters.size)
      return false;
    return true;
  });

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>

          {showDescription ? (
            <div className="relative">
              <p className="text-lg text-gray-600 mb-4">{description}</p>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 flex items-center mx-auto"
                onClick={() => setShowDescription(false)}
              >
                Ẩn bớt <ChevronUp className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 flex items-center mx-auto"
              onClick={() => setShowDescription(true)}
            >
              Xem thêm <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>

        <Separator className="my-8" />

        <div className="mb-8">
          <ProductFilter onFilterChange={handleFilterChange} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800"></div>
          </div>
        ) : (
          <ProductGallery
            products={filteredProducts}
            selectedFilters={{
              color: filters.color,
              pattern: filters.pattern,
              finish: filters.finish,
            }}
          />
        )}

        {selectedProduct && (
          <ProductModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            product={{
              id: selectedProduct.id,
              name: selectedProduct.name,
              images: [
                selectedProduct.image,
                ...Array(2).fill(selectedProduct.image),
              ],
              description:
                "Elegant sintered stone with distinctive veining, offering a luxurious and timeless aesthetic for premium interior spaces.",
              specifications: {
                material: "Sintered Stone",
                finish: selectedProduct.finish,
                thickness: "12mm",
                sizes: ["120x60cm", "120x120cm", "160x320cm"],
              },
              applications: [
                "Kitchen Countertops",
                "Bathroom Vanities",
                "Wall Cladding",
                "Flooring",
              ],
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CollectionsGallery;
