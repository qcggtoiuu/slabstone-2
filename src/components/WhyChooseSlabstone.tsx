"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "./ui/dialog";
import {
  Shield,
  Thermometer,
  Maximize2,
  Factory,
  Building,
  Flag,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

interface WhyChooseSlabstoneProps {
  className?: string;
}

const WhyChooseSlabstone = ({ className = "" }: WhyChooseSlabstoneProps) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureProps | null>(
    null,
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const features: FeatureProps[] = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Chịu lực",
      description: "Khả năng chịu lực vượt trội so với đá thông thường",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-luc.jpg",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Chịu nhiệt",
      description:
        "Công nghệ nung kết giúp đá chịu được nhiệt độ cao, vượt trội so với các loại đá khác",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-nhiet.jpg",
      bgColor: "bg-red-50",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Chống thấm ố",
      description:
        "Nung ở 1200 độ C, hút ẩm toàn bộ, không còn khả năng hút nước",
      imageUrl:
        "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80",
      bgColor: "bg-cyan-50",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Chống trầy xước",
      description: "Bề mặt cứng cáp, khó bị trầy xước trong quá trình sử dụng",
      imageUrl:
        "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Maximize2 className="h-8 w-8" />,
      title: "Khổ lớn",
      description:
        "Sản xuất được các tấm đá có kích thước lớn lên tới 1600*2400 (mm), đáp ứng mọi nhu cầu thiết kế",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-kho-lon.jpg",
      bgColor: "bg-green-50",
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Công nghệ Italy",
      description:
        "Dây chuyền nhập khẩu 100% công nghệ Italy, tự động hóa 100% bằng Robot (hãng Sacmi)",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-cong-nghe-italy.jpg",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Đầu tư lớn",
      description:
        "Vốn đầu tư 1000 tỷ đồng cho công nghệ và cơ sở vật chất hiện đại",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-day-chuyen-1km.jpg",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Flag className="h-8 w-8" />,
      title: "Tiên phong",
      description: "Nhà máy đá nung kết đầu tiên tại Việt Nam",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-nha-may-tien-phong.jpg",
      bgColor: "bg-red-50",
    },
  ];

  const handleFeatureClick = (feature: FeatureProps) => {
    setSelectedFeature(feature);
    setDialogOpen(true);
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block py-2 px-8 border-2 border-gray-800">
            VÌ SAO CHỌN SLABSTONE
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            Đá nung kết SLABSTONE vượt trội với 8 ưu điểm nổi bật, mang đến giải
            pháp hoàn hảo cho không gian sống của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-lg`}
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedFeature && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src={selectedFeature.imageUrl}
                  alt={selectedFeature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedFeature.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {selectedFeature.description}
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Ứng dụng:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Mặt bàn bếp và phòng tắm</li>
                    <li>Ốp tường và sàn nhà</li>
                    <li>Nội thất cao cấp</li>
                    <li>Các dự án kiến trúc đòi hỏi độ bền cao</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhyChooseSlabstone;
