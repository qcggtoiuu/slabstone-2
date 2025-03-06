"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface LocationMapProps {
  address?: string;
  phone?: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  directions?: string;
}

const LocationMap = ({
  address = "123 Industrial Zone, District 9, Ho Chi Minh City, Vietnam",
  phone = "+84 28 1234 5678",
  email = "contact@slabstone.vn",
  coordinates = { lat: 10.8231, lng: 106.6297 },
  directions = "https://maps.google.com/?q=10.8231,106.6297",
}: LocationMapProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full h-[400px] bg-gray-200">
        {/* This would be replaced with an actual map integration */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=800&q=80)`,
          }}
        >
          {/* Map pin marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <MapPin size={40} className="text-red-600" />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>

          {/* Map controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <TooltipProvider>
              <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-md"
                    onClick={() => window.open(directions, "_blank")}
                  >
                    <Navigation size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Get directions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Vị Trí Nhà Máy</h3>

        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-gray-700">{address}</p>
          </div>

          <div className="flex items-center">
            <Phone className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
            <p className="text-gray-700">{phone}</p>
          </div>

          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
            <p className="text-gray-700">{email}</p>
          </div>
        </div>

        <div className="pt-2">
          <Button
            className="w-full flex items-center justify-center gap-2"
            onClick={() => window.open(directions, "_blank")}
          >
            <span>Chỉ Đường</span>
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
