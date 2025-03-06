import React from "react";
import { Building2, Landmark, Users } from "lucide-react";
import { Button } from "./ui/button";

interface PartnershipSectionProps {
  className?: string;
}

const PartnershipSection = ({ className = "" }: PartnershipSectionProps) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            HỢP TÁC VỚI SLABSTONE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cùng SLABSTONE kiến tạo không gian sống đẳng cấp và phát triển bền
            vững
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nhà phân phối/đại lý */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-600 p-8 flex justify-center">
              <Building2 className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Nhà phân phối/ đại lý</h3>
              <p className="text-gray-600 mb-4">
                Trở thành đối tác phân phối sản phẩm SLABSTONE
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Chính sách chiết khấu hấp dẫn</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Hỗ trợ marketing</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Đào tạo chuyên sâu</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full bg-stone-900 text-white hover:bg-stone-800"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Dự án */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-600 p-8 flex justify-center">
              <Landmark className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Dự án</h3>
              <p className="text-gray-600 mb-4">
                Hợp tác phát triển dự án với SLABSTONE
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Tư vấn kỹ thuật</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Hỗ trợ thiết kế</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Giá ưu đãi đặc biệt</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full bg-stone-900 text-white hover:bg-stone-800"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Kiến trúc sư */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-600 p-8 flex justify-center">
              <Users className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Kiến trúc sư</h3>
              <p className="text-gray-600 mb-4">
                Đồng hành cùng SLABSTONE trong các dự án thiết kế
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Mẫu sản phẩm miễn phí</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Hỗ trợ kỹ thuật</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Đào tạo sản phẩm</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full bg-stone-900 text-white hover:bg-stone-800"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
