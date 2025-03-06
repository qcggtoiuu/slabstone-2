import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full bg-stone-900 text-white ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-logo.png"
                alt="Slabstone Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-stone-300 mb-4">
              Nhà máy đá nung kết đầu tiên tại Việt Nam, sản xuất bề mặt chất
              lượng cao với công nghệ tiên tiến và thiết kế đổi mới.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-stone-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-stone-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-stone-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-stone-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Bộ Sưu Tập Đá
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Quy Trình Sản Xuất
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Liên Hệ Với Chúng Tôi
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-stone-300 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-stone-300">
                  123 Industrial Zone, District 9, Ho Chi Minh City, Vietnam
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-stone-300 mr-3 flex-shrink-0" />
                <span className="text-stone-300">+84 28 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-stone-300 mr-3 flex-shrink-0" />
                <span className="text-stone-300">contact@slabstone.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bản Tin</h3>
            <p className="text-stone-300 mb-4">
              Đăng ký nhận bản tin của chúng tôi để cập nhật sản phẩm mới nhất
              và tin tức.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="px-4 py-2 bg-stone-800 border border-stone-700 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 rounded-md transition-colors"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-stone-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
          <p>&copy; {currentYear} Slabstone. Tất cả các quyền được bảo lưu.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Chính Sách Bảo Mật
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Điều Khoản Dịch Vụ
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sơ Đồ Trang Web
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
