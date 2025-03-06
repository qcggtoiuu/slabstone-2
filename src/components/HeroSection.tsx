"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  videoUrl?: string;
  overlayOpacity?: number;
}

const HeroSection = ({
  title = "Nhà Máy Đá Nung Kết Đầu Tiên Tại Việt Nam",
  subtitle = "Tấm đá nung kết chất lượng cao được sản xuất với công nghệ tiên tiến cho các ứng dụng nội thất và ngoại thất sang trọng.",
  ctaText = "Khám Phá Bộ Sưu Tập",
  ctaLink = "#collections",
  videoUrl = "https://www.youtube.com/watch?v=KQF2qSRpNTg",
  overlayOpacity = 0.5,
}: HeroSectionProps) => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  return (
    <div className="relative w-full h-[800px] bg-stone-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            ref={videoRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            style={{ border: "none" }}
          />
        </div>
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          {/* Logo or Badge */}
          <div className="mb-8 inline-block">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium">SLABSTONE</span>
              <span className="mx-2 text-white/50">|</span>
              <span className="text-white/80 text-sm">Đá Nung Kết Cao Cấp</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className={cn(
                "bg-white text-stone-900 hover:bg-white/90 group",
                "transition-all duration-300 ease-in-out",
              )}
              asChild
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-12 bg-white/40"></div>
            <span className="text-white/60 text-sm">
              Cuộn xuống để khám phá
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
