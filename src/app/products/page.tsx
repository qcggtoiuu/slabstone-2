import React from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/productData";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Banner */}
      <section className="relative w-full h-[400px] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
          alt="Sản phẩm Slabstone"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bộ sưu tập đá SLABSTONE
          </h1>
          <p className="text-xl">
            Khám phá bộ sưu tập đá nung kết cao cấp với đa dạng màu sắc và họa
            tiết
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-2 bg-stone-800 text-white rounded-full hover:bg-stone-900 transition-colors"
            >
              Tất cả
            </Link>
            <Link
              href="/products?category=da-hoa"
              className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              Đá hoa
            </Link>
            <Link
              href="/products?category=da"
              className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              Đá
            </Link>
            <Link
              href="/products?category=bodytech"
              className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              BODYTECH
            </Link>
            <Link
              href="/products?category=go"
              className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              Gỗ
            </Link>
            <Link
              href="/products?category=xi-mang"
              className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
            >
              Xi măng
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Mã: {product.code}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {product.surface}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {product.finish}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full">
                      {product.color}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
