import React from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import ProprietaryTechnology from "@/components/ProprietaryTechnology";
import Image from "next/image";
import { Shield, Droplet, Zap, Utensils, Flame, Sparkles } from "lucide-react";
import FactorySection from "@/components/FactorySection";
import ManufacturingProcessSection from "@/components/ManufacturingProcessSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Banner */}
      <section className="relative w-full h-[400px] bg-gray-900">
        <Image
          src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg"
          alt="Nhà máy Slabstone"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NHÀ MÁY HIỆN ĐẠI NHẤT ĐÔNG NAM Á
          </h1>
          <p className="text-xl">THE MOST MODERN FACTORY IN SOUTHEAST ASIA</p>
        </div>
      </section>

      {/* Factory Section */}
      <FactorySection />

      {/* Manufacturing Process Section */}
      <ManufacturingProcessSection />

      {/* Factory Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 text-sm uppercase mb-2">QUY MÔ</h3>
              <p className="text-gray-400 text-xs mb-2">Total Area</p>
              <p className="text-4xl font-bold text-gray-900">
                430.000 m<sup>2</sup>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 text-sm uppercase mb-2">
                TỔNG ĐẦU TƯ
              </h3>
              <p className="text-gray-400 text-xs mb-2">Total capital</p>
              <p className="text-4xl font-bold text-gray-900">1000 tỷ</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 text-sm uppercase mb-2">
                CÔNG SUẤT
              </h3>
              <p className="text-gray-400 text-xs mb-2">Capacity</p>
              <p className="text-4xl font-bold text-gray-900">
                3.2 tr m<sup>2</sup>/năm
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 text-sm uppercase mb-2">NHÂN LỰC</h3>
              <p className="text-gray-400 text-xs mb-2">Employees</p>
              <p className="text-4xl font-bold text-gray-900">150 người</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                TẦM NHÌN
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Trở thành nhà máy sản xuất vật liệu xây dựng gốm sứ tiên phong
                tại Việt Nam sử dụng công nghệ tiên tiến nhất và thân thiện với
                môi trường.
              </p>
              <p className="text-gray-500 italic">
                To become the pioneer in ceramics industry in Vietnam using the
                most advanced and eco-friendly technology.
              </p>
            </div>

            {/* Products */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                SẢN PHẨM
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Đá nung kết khổ lớn và gạch ốp lát cao cấp với kích thước và
                chất lượng vượt trội là những sản phẩm chủ lực của nhà máy
                SLABSTONE TRUNGDO. Các sản phẩm có thể đạt kích thước lên đến
                1600x2400mm và độ dày 20mm.
              </p>
              <p className="text-gray-500 italic">
                Large-format sintered stones and high-grade porcelain tiles with
                superior dimensions and quality are the flagship products of
                SLABSTONE TRUNGDO factory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Slabstone */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            TẠI SAO CHỌN SLABSTONE?
          </h2>
          <p className="text-center text-gray-600 mb-12">WHY SLABSTONE?</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Ultra Size */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">KÍCH THƯỚC VƯỢT TRỘI</h3>
              <p className="text-gray-500 uppercase text-sm mb-6">
                ULTRA SIZES
              </p>
              <p className="text-gray-700 mb-4">
                Với kích thước lên đến 1600 x 2400 cm, tương đương với 3.84 m²,
                SLABSTONE tạo ra tiêu chuẩn mới cho kiến trúc dự án nơi kích
                thước quyết định đến tính thẩm mỹ.
              </p>
              <p className="text-gray-500 italic text-sm">
                With dimensions up to 1600 x 2400 cm, equivalent to 3.84 m²,
                SLABSTONE sets a new standard for project architecture where
                size determines aesthetics.
              </p>
              <div className="mt-6">
                <Image
                  src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-kho-lon.jpg"
                  alt="Kích thước vượt trội"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Boundless Applications */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                ỨNG DỤNG KHÔNG GIỚI HẠN
              </h3>
              <p className="text-gray-500 uppercase text-sm mb-6">
                BOUNDLESS APPLICATIONS
              </p>
              <p className="text-gray-700 mb-4">
                Các không gian ứng dụng được mở ra và tấm kích thước và đặc tính
                kỹ thuật không còn là rào cản với SLABSTONE.
              </p>
              <p className="text-gray-500 italic text-sm">
                The application designs are endlessly opened when sizes and
                technical specifications are no longer a limitation with
                SLABSTONE.
              </p>
              <div className="mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Ứng dụng không giới hạn"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Made in Vietnam */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">SẢN XUẤT TẠI VIỆT NAM</h3>
              <p className="text-gray-500 uppercase text-sm mb-6">
                MADE IN VIETNAM
              </p>
              <p className="text-gray-700 mb-4">
                98% nguyên liệu sản phẩm được điều chế từ phòng S-Lab tại Nghệ
                An và lấy từ nguồn địa phương giúp chúng tôi kiểm soát điều kiện
                chất lượng nguyên vật liệu tốt nhất.
              </p>
              <p className="text-gray-500 italic text-sm">
                98% of product materials are prepared from S-Lab in Nghe An and
                sourced from local sources, helping us to control the best
                quality of raw materials.
              </p>
              <div className="mt-6">
                <Image
                  src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-nha-may-tien-phong.jpg"
                  alt="Sản xuất tại Việt Nam"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            ĐẶC TÍNH SẢN PHẨM
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">
                Nguyên vật liệu chất lượng cao
              </h3>
              <p className="text-gray-500 text-sm">High quality materials</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Dễ vệ sinh</h3>
              <p className="text-gray-500 text-sm">Easy to clean</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Chống trầy xước</h3>
              <p className="text-gray-500 text-sm">
                Scratch & impact resistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">An toàn thực phẩm</h3>
              <p className="text-gray-500 text-sm">Safe for food</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Chống thấm</h3>
              <p className="text-gray-500 text-sm">Waterproof</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Chống ố và hóa chất</h3>
              <p className="text-gray-500 text-sm">
                Chemical & stain resistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Bền màu</h3>
              <p className="text-gray-500 text-sm">Color fast</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="h-10 w-10 text-gray-600" />
              </div>
              <h3 className="font-semibold mb-2">Chống cháy</h3>
              <p className="text-gray-500 text-sm">Fire resistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Technology */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            TIÊN PHONG TRONG CÔNG NGHỆ MỚI
          </h2>
          <p className="text-gray-600">INNOVATION AT ITS FINEST</p>
        </div>
        <ProprietaryTechnology />
      </section>

      <Footer />
    </main>
  );
}
