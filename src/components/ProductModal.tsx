"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";

interface ProductModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  product?: {
    id: string;
    name: string;
    images: string[];
    description: string;
    specifications: {
      material: string;
      finish: string;
      thickness: string;
      sizes: string[];
    };
    applications: string[];
  };
}

const ProductModal = ({
  isOpen = true,
  onClose = () => {},
  product = {
    id: "1",
    name: "Calacatta Gold",
    images: [
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      "https://images.unsplash.com/photo-1618221195647-1e485866a26d?w=800&q=80",
    ],
    description:
      "Elegant white marble with distinctive gold veining, offering a luxurious and timeless aesthetic for premium interior spaces.",
    specifications: {
      material: "Sintered Stone",
      finish: "Polished",
      thickness: "12mm",
      sizes: ["120x60cm", "120x120cm", "160x320cm"],
    },
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanities",
      "Wall Cladding",
      "Flooring",
    ],
  },
}: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("gallery");

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row h-[700px]">
          {/* Left side - Image Gallery */}
          <div className="relative w-full md:w-2/3 h-full bg-gray-100">
            <div className="absolute top-4 left-4 z-10">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-white drop-shadow-md">
                  {product.name}
                </DialogTitle>
              </DialogHeader>
            </div>

            <div className="relative h-full">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {product.images.length}
              </div>
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="w-full md:w-1/3 h-full overflow-y-auto p-6 bg-white">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="gallery">Details</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>

              <TabsContent value="gallery" className="mt-6">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>

                <h3 className="text-lg font-semibold mt-6">Applications</h3>
                <ul className="mt-2 space-y-1">
                  {product.applications.map((app, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                      {app}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button className="w-full mb-3">Yêu Cầu Mẫu</Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Thông số kỹ thuật
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Chia sẻ
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Material
                    </h3>
                    <p className="mt-1">{product.specifications.material}</p>
                    <Separator className="mt-2" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Finish
                    </h3>
                    <p className="mt-1">{product.specifications.finish}</p>
                    <Separator className="mt-2" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Thickness
                    </h3>
                    <p className="mt-1">{product.specifications.thickness}</p>
                    <Separator className="mt-2" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Available Sizes
                    </h3>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {product.specifications.sizes.map((size, index) => (
                        <div
                          key={index}
                          className="border rounded p-2 text-center text-sm"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
