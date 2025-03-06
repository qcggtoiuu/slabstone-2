import React from "react";
import Image from "next/image";
import { Building2, Landmark, Shield, Sparkles } from "lucide-react";

interface AboutFactorySectionProps {
  className?: string;
}

const AboutFactorySection = ({ className = "" }: AboutFactorySectionProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
              alt="Nhà máy Slabstone"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block bg-amber-600 text-white px-4 py-1 text-sm font-medium rounded-full mb-3">
                  Thành lập 2020
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Dẫn Đầu Ngành Công Nghiệp Đá Tại Việt Nam
                </h3>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nhà Máy Đá Nung Kết Đầu Tiên Tại Việt Nam
              </h2>
              <p className="text-xl text-amber-600 font-medium">
                Tiên Phong Về Sự Xuất Sắc Trong Sản Xuất Đá
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Slabstone tự hào là nhà sản xuất đầu tiên và hàng đầu Việt Nam
                về bề mặt đá nung kết cao cấp. Nhà máy hiện đại của chúng tôi
                kết hợp công nghệ tiên tiến với kỹ thuật thủ công truyền thống
                để tạo ra các sản phẩm đá đặc biệt đáp ứng tiêu chuẩn quốc tế về
                chất lượng và thiết kế.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Nhà máy của chúng tôi rộng hơn 20.000 mét vuông và sở hữu thiết
                bị nung kết tiên tiến nhất Đông Nam Á. Với công suất sản xuất
                hơn 1 triệu mét vuông mỗi năm, chúng tôi có đủ khả năng đáp ứng
                nhu cầu trong nước và quốc tế về bề mặt đá cao cấp.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Thành Tựu Của Chúng Tôi
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100">
                  <div className="mr-4 mt-1">
                    <Building2 className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Công Nghệ Tiên Tiến
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Sử dụng công nghệ nung kết mới nhất cho sản xuất đá chất
                      lượng cao
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100">
                  <div className="mr-4 mt-1">
                    <Shield className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Chất Lượng Cao Cấp
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Đáp ứng tiêu chuẩn quốc tế với quy trình kiểm soát chất
                      lượng nghiêm ngặt
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100">
                  <div className="mr-4 mt-1">
                    <Landmark className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Sản Xuất Bền Vững
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Sản xuất thân thiện với môi trường, giảm thiểu tác động
                      đến môi trường
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100">
                  <div className="mr-4 mt-1">
                    <Sparkles className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Thiết Kế Đổi Mới
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Liên tục phát triển các mẫu và bề mặt mới để dẫn đầu xu
                      hướng thị trường
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFactorySection;
