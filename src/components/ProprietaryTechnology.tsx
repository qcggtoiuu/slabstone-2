import React from "react";
import Image from "next/image";

interface ProprietaryTechnologyProps {
  className?: string;
}

const ProprietaryTechnology = ({
  className = "",
}: ProprietaryTechnologyProps) => {
  return (
    <section className={`w-full ${className}`}>
      {/* Header */}
      <div className="bg-black text-white text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          CÔNG NGHỆ ĐỘC QUYỀN
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Khám phá hai công nghệ độc quyền tạo nên sự khác biệt của đá SLABSTONE
        </p>
      </div>

      {/* Two Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* BODYTECH */}
        <div className="relative min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/bodytechnen.jpg"
              alt="BODYTECH background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative z-10 p-12 h-full flex flex-col">
            <div className="mb-8 w-48">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/Bodytech-white-rieng-1-1.png"
                alt="BODYTECH logo"
                width={200}
                height={60}
                className="w-full h-auto"
              />
            </div>
            <div className="text-white space-y-4 max-w-xl">
              <p>
                BODYTECH - nơi nghệ thuật tạo hình đá đạt đến đỉnh cao hoàn mỹ.
                Quên đi những tấm đá thông thường, BODYTECH đánh dấu bước đột
                phá trong việc tái tạo vẻ đẹp tự nhiên của đá. Với công nghệ độc
                quyền này, chúng tôi tạo ra những tấm đá có kết cấu xương hoàn
                hảo, mô phỏng chính xác về độ dày của đá tự nhiên, đồng thời
                nâng cao tính năng kỹ thuật vượt trội và tôi ưu hóa mọi đặc tính
                của sản phẩm.
              </p>
            </div>
          </div>
        </div>

        {/* VEINTECH */}
        <div className="relative min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/veintechnen.jpg"
              alt="VEINTECH background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative z-10 p-12 h-full flex flex-col">
            <div className="mb-8 w-48">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/Vientech-white-rieng-1.png"
                alt="VEINTECH logo"
                width={200}
                height={60}
                className="w-full h-auto"
              />
            </div>
            <div className="text-white space-y-4 max-w-xl">
              <p>
                VEINTECH không đơn thuần là một công nghệ - đây là nghệ thuật
                tạo hình đường vân tinh tế đỉnh cao. Bằng việc tái hiện hoàn hảo
                những đường vân tự nhiên và kiểm soát tuyệt đối lượng khoáng
                chất, VEINTECH tạo nên độ đồng nhất tuyệt đối giữa bề mặt và
                phần thân của tấm đá. Mỗi đường vân được thiết kế từ mí mang đến
                màu sắc tinh tế, sống động như chính đá tự nhiên.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietaryTechnology;
