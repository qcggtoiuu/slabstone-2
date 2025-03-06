"use client";

import React from "react";
import { Phone } from "lucide-react";

const Topbar = () => {
  return (
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
  );
};

export default Topbar;
