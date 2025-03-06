import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface NewsSectionProps {
  className?: string;
}

const NewsSection = ({ className = "" }: NewsSectionProps) => {
  const newsItems = [
    {
      id: 1,
      title: "Xu hướng thiết kế nội thất với đá cao cấp 2024",
      date: "15/03/2024",
      excerpt:
        "Khám phá những xu hướng mới nhất trong việc sử dụng đá cao cấp cho thiết kế nội thất...",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    },
    {
      id: 2,
      title: "SLABSTONE ra mắt bộ sưu tập mới",
      date: "10/03/2024",
      excerpt:
        "Bộ sưu tập mới với những mẫu đá độc đáo, kết hợp công nghệ tiên tiến...",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    },
    {
      id: 3,
      title: "Công nghệ sản xuất đá nhân tạo hiện đại",
      date: "05/03/2024",
      excerpt:
        "Tìm hiểu quy trình sản xuất đá nhân tạo với công nghệ tiên tiến nhất...",
      image:
        "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=80",
    },
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tin tức & Sự kiện
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất từ SLABSTONE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 p-0"
                >
                  Đọc thêm <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
