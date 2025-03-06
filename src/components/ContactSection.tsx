import React from "react";
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = "" }: ContactSectionProps) => {
  return (
    <section className={`py-16 bg-stone-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bạn quan tâm đến các sản phẩm đá nung kết cao cấp của chúng tôi? Hãy
            liên hệ với đội ngũ của chúng tôi để được tư vấn, lấy mẫu, hoặc tham
            quan nhà máy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Location Map */}
          <div className="w-full">
            <LocationMap
              address="123 Industrial Zone, District 9, Ho Chi Minh City, Vietnam"
              phone="+84 28 1234 5678"
              email="contact@slabstone.vn"
              coordinates={{ lat: 10.8231, lng: 106.6297 }}
              directions="https://maps.google.com/?q=10.8231,106.6297"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Tham Quan Showroom Của Chúng Tôi
          </h3>
          <p className="text-gray-600 mb-6">
            Trải nghiệm bộ sưu tập đá nung kết cao cấp của chúng tôi trực tiếp
            tại showroom. Các chuyên gia của chúng tôi sẽ hướng dẫn bạn qua
            nhiều loại sản phẩm đa dạng.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-xs">
              <p className="font-medium text-gray-900">Giờ Mở Cửa</p>
              <p className="text-gray-600 mt-2">
                Thứ Hai - Thứ Sáu: 8:00 - 17:00
              </p>
              <p className="text-gray-600">Thứ Bảy: 9:00 - 12:00</p>
              <p className="text-gray-600">Chủ Nhật: Đóng cửa</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-full max-w-xs">
              <p className="font-medium text-gray-900">Đặt Lịch Hẹn</p>
              <p className="text-gray-600 mt-2">
                Lên lịch tư vấn cá nhân với các chuyên gia đá của chúng tôi
              </p>
              <button className="mt-2 text-stone-800 font-medium hover:underline">
                Đặt Lịch Hẹn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
