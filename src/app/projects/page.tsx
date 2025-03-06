import React from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Building, Hotel, Hospital, PalmTree, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Banner */}
      <section className="relative w-full h-[400px] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
          alt="Dự án Slabstone"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dự án SLABSTONE
          </h1>
          <p className="text-xl">
            Chúng tôi sẵn sàng hợp tác với các dự án của bạn
          </p>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hợp tác cùng SLABSTONE
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SLABSTONE cung cấp giải pháp đá cao cấp cho nhiều loại dự án khác
              nhau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Office Buildings */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 flex justify-center bg-gray-100">
                <Building className="h-16 w-16 text-gray-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Toà nhà</h3>
                <p className="text-gray-600 mb-4">
                  Các dự án toà nhà văn phòng, thương mại
                </p>
              </div>
            </div>

            {/* Hotels */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 flex justify-center bg-gray-100">
                <Hotel className="h-16 w-16 text-gray-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Khách sạn</h3>
                <p className="text-gray-600 mb-4">
                  Các dự án khách sạn cao cấp
                </p>
              </div>
            </div>

            {/* Hospitals */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 flex justify-center bg-gray-100">
                <Hospital className="h-16 w-16 text-gray-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Bệnh viện</h3>
                <p className="text-gray-600 mb-4">
                  Các dự án bệnh viện, cơ sở y tế
                </p>
              </div>
            </div>

            {/* Resorts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 flex justify-center bg-gray-100">
                <PalmTree className="h-16 w-16 text-gray-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Khu nghỉ dưỡng</h3>
                <p className="text-gray-600 mb-4">
                  Các dự án resort, khu nghỉ dưỡng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Liên hệ hợp tác dự án</h2>
            <p className="text-gray-600 mb-8">
              Hãy để lại thông tin để được tư vấn về giải pháp đá cao cấp cho dự
              án của bạn
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    placeholder="Nhập họ và tên"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    placeholder="Nhập số điện thoại"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tên dự án
                </label>
                <Input
                  id="project-name"
                  placeholder="Nhập tên dự án"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="project-desc"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mô tả dự án
                </label>
                <Textarea
                  id="project-desc"
                  placeholder="Mô tả ngắn về dự án của bạn"
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-stone-800 hover:bg-stone-900"
              >
                <Send className="mr-2 h-4 w-4" /> Gửi thông tin
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
