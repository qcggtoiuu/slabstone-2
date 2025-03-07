"use client";

import React, { useState } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PricingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStoneType, setSelectedStoneType] = useState("");

  const handleRequestPrice = (stoneType: string) => {
    setSelectedStoneType(stoneType);
    setIsDialogOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bảng giá sản phẩm
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn về sản phẩm
          </p>
          <Button
            className="bg-stone-800 hover:bg-stone-900 flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
                "_blank",
              )
            }
          >
            <Download className="h-4 w-4" /> Tải catalogue
          </Button>
        </div>
      </section>

      {/* Stone Types Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Stone */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Đá cao cấp</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  onClick={() => handleRequestPrice("Đá cao cấp")}
                  className="w-full bg-stone-800 hover:bg-stone-900"
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            </div>

            {/* Thạch Anh Stone */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Đá thạch anh</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  onClick={() => handleRequestPrice("Đá thạch anh")}
                  className="w-full bg-stone-800 hover:bg-stone-900"
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            </div>

            {/* Marble Stone */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Đá marble</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  onClick={() => handleRequestPrice("Đá marble")}
                  className="w-full bg-stone-800 hover:bg-stone-900"
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            </div>

            {/* Granite Stone */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Đá granite</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  onClick={() => handleRequestPrice("Đá granite")}
                  className="w-full bg-stone-800 hover:bg-stone-900"
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            </div>

            {/* Natural Stone */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Đá tự nhiên</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  onClick={() => handleRequestPrice("Đá tự nhiên")}
                  className="w-full bg-stone-800 hover:bg-stone-900"
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            </div>

            {/* Artificial Stone */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Đá nhân tạo</h2>
                <p className="text-gray-600 text-sm mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  onClick={() => handleRequestPrice("Đá nhân tạo")}
                  className="w-full bg-stone-800 hover:bg-stone-900"
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Price Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Yêu cầu báo giá {selectedStoneType}</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Họ và tên
              </label>
              <Input id="name" placeholder="Nhập họ và tên của bạn" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Số điện thoại
              </label>
              <Input id="phone" placeholder="Nhập số điện thoại của bạn" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="Nhập email của bạn" />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Yêu cầu chi tiết
              </label>
              <Textarea
                id="message"
                placeholder="Nhập yêu cầu chi tiết của bạn"
                className="min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-stone-800 hover:bg-stone-900"
            >
              Gửi yêu cầu
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}
