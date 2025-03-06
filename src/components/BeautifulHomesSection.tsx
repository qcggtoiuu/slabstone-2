import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface BeautifulHomesSectionProps {
  className?: string;
}

const BeautifulHomesSection = ({
  className = "",
}: BeautifulHomesSectionProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nhà đẹp cùng SLABSTONE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá những công trình tiêu biểu sử dụng đá SLABSTONE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                alt="Biệt thự hiện đại The Manor"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Biệt thự hiện đại The Manor
              </h3>
              <p className="text-gray-600 mb-4">
                Không gian sang trọng với đá nung kết SLABSTONE làm điểm nhấn
                cho sàn và tường phòng khách.
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                Xem chi tiết <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Villa Đà Lạt"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Villa Đà Lạt</h3>
              <p className="text-gray-600 mb-4">
                Tường ốp đá nung kết SLABSTONE tạo điểm nhấn cho không gian
                phòng khách hiện đại.
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                Xem chi tiết <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulHomesSection;
