import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface FactorySectionProps {
  className?: string;
}

const FactorySection = ({ className = "" }: FactorySectionProps) => {
  return (
    <section className={`py-16 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">NHÀ MÁY</h2>
        </div>

        <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="text-center text-white">
              <p className="text-xl mb-4">Ấn nút Play để</p>
              <p className="text-2xl font-bold">KHÁM PHÁ NHÀ</p>
              <p className="text-2xl font-bold mb-8">MÁY SLABSTONE</p>
              <a
                href="https://www.youtube.com/embed/PDYhwdNi_5Y?controls=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white hover:bg-white/30 transition-all duration-300 group relative"
              >
                <div className="absolute -inset-3 border-2 border-white/50 rounded-full animate-ping opacity-75"></div>
                <Play className="h-10 w-10 text-white fill-white" />
              </a>
            </div>
          </div>
          <Image
            src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg"
            alt="Nhà máy Slabstone"
            fill
            className="object-cover brightness-50"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Với quy mô 430.000m², đầu tư 1000 tỷ đồng và công suất 3.2 triệu
            m²/năm, SLABSTONE TRUNGDO là nhà máy sản xuất đá nung kết hiện đại
            nhất Đông Nam Á. Sở hữu công nghệ Continua+ từ Sacmi Italia, chúng
            tôi tự hào mang đến những tấm đá siêu kích thước lên đến 1600x2400mm
            - sự kết tinh hoàn hảo giữa công nghệ châu Âu và nguồn nguyên liệu
            Việt Nam chất lượng cao.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Đội ngũ 150 chuyên gia không ngừng sáng tạo, khẳng định vị thế vật
            liệu xây dựng Việt Nam trên thị trường quốc tế. Với SLABSTONE
            TRUNGDO, chúng tôi kiến tạo tương lai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FactorySection;
