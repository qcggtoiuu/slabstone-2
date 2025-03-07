"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Download, Share2 } from "lucide-react";
import { getProductBySlug } from "@/lib/productData";

interface ProductDetailProps {
  slug: string;
}

const ProductDetail = ({ slug }: ProductDetailProps) => {
  const product = getProductBySlug(slug);
  const [activeImage, setActiveImage] = React.useState(0);

  if (!product) {
    return <div className="py-20 text-center">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-4">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {product.images.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className={`relative h-20 cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? "border-amber-600" : "border-transparent"}`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-6">Mã sản phẩm: {product.code}</p>

          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">
                Thông tin chi tiết
              </TabsTrigger>
              <TabsTrigger value="specs" className="flex-1">
                Thông số kỹ thuật
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              {product.description && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Mô tả</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              )}

              {product.applications && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Ứng dụng</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.applications.map((app, index) => (
                      <li key={index} className="text-gray-700">
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-stone-800 hover:bg-stone-900">
                  Yêu cầu báo giá
                </Button>
                {product.catalogueUrl &&
                  product.catalogueUrl.includes("drive.google.com") && (
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a
                        href={product.catalogueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" /> Tải catalogue
                      </a>
                    </Button>
                  )}
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Bề mặt
                  </h4>
                  <p className="font-medium">{product.surface}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Độ dày
                  </h4>
                  <p className="font-medium">{product.thickness}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Kích thước
                  </h4>
                  <p className="font-medium">{product.size}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Hoàn thiện
                  </h4>
                  <p className="font-medium">{product.finish}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Màu sắc
                  </h4>
                  <p className="font-medium">{product.color}</p>
                </div>
                {product.price && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Giá tham khảo
                    </h4>
                    <p className="font-medium">{product.price}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-stone-800 hover:bg-stone-900">
                  Yêu cầu báo giá
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" /> Chia sẻ
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
