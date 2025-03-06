"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Về chúng tôi", href: "#about" },
    { label: "Sản phẩm", href: "#collections" },
    { label: "Dự án", href: "#projects" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Tin tức", href: "#news" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full bg-stone-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm hover:text-amber-300 transition-colors"
            >
              Nhà máy
            </a>
            <a
              href="#"
              className="text-sm hover:text-amber-300 transition-colors"
            >
              Chính sách nhà phân phối
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Hotline: 0978649797</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-logo.png"
              alt="Slabstone Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-stone-800 hover:text-amber-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-2 text-stone-800 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default MainNav;
