import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Award,
  Building2,
  Factory,
  Leaf,
  Shield,
  Sparkles,
} from "lucide-react";

interface AboutCompanyProps {
  title?: string;
  subtitle?: string;
  description?: string;
  achievements?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  imageUrl?: string;
}

const AboutCompany = ({
  title = "Nhà Máy Đá Nung Kết Đầu Tiên Tại Việt Nam",
  subtitle = "Tiên Phong Về Sự Xuất Sắc Trong Sản Xuất Đá",
  description = "Slabstone tự hào là nhà sản xuất đầu tiên và hàng đầu Việt Nam về bề mặt đá nung kết cao cấp. Nhà máy hiện đại của chúng tôi kết hợp công nghệ tiên tiến với kỹ thuật thủ công truyền thống để tạo ra các sản phẩm đá đặc biệt đáp ứng tiêu chuẩn quốc tế về chất lượng và thiết kế. Với cam kết đổi mới và bền vững, chúng tôi cung cấp nhiều giải pháp đá đa dạng cho cả ứng dụng dân dụng và thương mại.",
  achievements = [
    {
      icon: <Factory className="h-8 w-8 text-amber-600" />,
      title: "Công Nghệ Tiên Tiến",
      description:
        "Sử dụng công nghệ nung kết mới nhất cho sản xuất đá chất lượng cao",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Chất Lượng Cao Cấp",
      description:
        "Đáp ứng tiêu chuẩn quốc tế với quy trình kiểm soát chất lượng nghiêm ngặt",
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: "Sản Xuất Bền Vững",
      description:
        "Sản xuất thân thiện với môi trường, giảm thiểu tác động đến môi trường",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-amber-600" />,
      title: "Thiết Kế Đổi Mới",
      description:
        "Liên tục phát triển các mẫu và bề mặt mới để dẫn đầu xu hướng thị trường",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Đảm Bảo Độ Bền",
      description: "Sản phẩm được thiết kế cho độ bền và hiệu suất vượt trội",
    },
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Sản Xuất Trong Nước",
      description:
        "Tự hào sản xuất tại Việt Nam với sự chú ý đến từng chi tiết và tay nghề cao",
    },
  ],
  imageUrl = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
}: AboutCompanyProps) => {
  return (
    <section className="w-full py-16 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={imageUrl}
              alt="Slabstone Factory"
              fill
              className="object-cover"
              priority
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
              <p className="mt-2 text-xl text-amber-600 font-medium">
                {subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{description}</p>

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
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start p-4 rounded-lg transition-all",
                      "bg-white shadow-sm hover:shadow-md border border-gray-100",
                    )}
                  >
                    <div className="mr-4 mt-1">{achievement.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {achievement.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
