import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface TechnologySectionProps {
  className?: string;
}

const TechnologySection = ({ className = "" }: TechnologySectionProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://www.sacmi.com/SacmiCorporate/media/ceramics/continua/linea_continua_2024.png"
              alt="CONTINUA+ 2000 Technology"
              fill
              className="object-contain"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Công nghệ CONTINUA+ 2000 đột phá
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Bạn đã từng mơ ước sở hữu những tấm đá hoàn mỹ với kích thước
              không lồ mà không có điểm khiếm khuyết? SLABSTONE chính là câu trả
              lời với công nghệ CONTINUA+ 2000 đột phá.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Được sinh ra từ sự hợp tác giữa Trung Đô và những gã khổng lồ hàng
              đầu thế giới trong ngành công nghiệp đá như Sacmi, Esmalglass
              Itaca & Fritta - SLABSTONE mang đến:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>Đá nung kết siêu khổ với độ hoàn thiện tuyệt đối</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Hệ thống kiểm soát MDX tiên tiến, đảm bảo từng mm² đều hoàn
                  hảo
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Dây chuyền 5 tầng hiện đại với chiều dài 260m - Quy mô lớn
                  nhất Việt Nam
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <p className="text-gray-800 font-medium">
                Với SLABSTONE, chúng tôi không chỉ sản xuất đá - chúng tôi kiến
                tạo những kiệt tác. Mỗi tấm đá là một tác phẩm nghệ thuật, nơi
                công nghệ và đam mê hội tụ để tạo nên vẻ đẹp vĩnh cửu cho không
                gian của bạn.
              </p>
              <p className="text-gray-800 font-medium mt-4">
                Hãy để SLABSTONE nâng tầm không gian sống của bạn lên một đẳng
                cấp mới!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
