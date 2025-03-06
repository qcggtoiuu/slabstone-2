import React from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug } from "@/lib/productData";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  return (
    <main className="min-h-screen bg-white">
      <MainNav />
      <ProductDetail slug={slug} />
      <Footer />
    </main>
  );
}
