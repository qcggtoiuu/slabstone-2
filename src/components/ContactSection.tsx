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
      </div>
    </section>
  );
};

export default ContactSection;
