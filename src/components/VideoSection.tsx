"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "./ui/dialog";
import { Play } from "lucide-react";

interface VideoSectionProps {
  className?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

const VideoSection = ({
  className = "",
  videoUrl = "https://www.youtube.com/watch?v=PDYhwdNi_5Y",
  thumbnailUrl = "https://i.ytimg.com/vi/PDYhwdNi_5Y/maxresdefault.jpg",
}: VideoSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  return (
    <section className={`py-16 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-900">
            {/* Video Thumbnail */}
            <div className="relative w-full h-[600px]">
              <Image
                src={thumbnailUrl}
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                {/* Play Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="group relative w-20 h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center border-2 border-white hover:bg-white hover:bg-opacity-30 transition-all duration-300"
                  aria-label="Play video"
                >
                  <div className="absolute -inset-3 border-2 border-white border-opacity-50 rounded-full animate-ping opacity-75"></div>
                  <Play className="h-8 w-8 text-white fill-white" />
                </button>

                <div className="mt-8 text-lg md:text-xl font-medium">
                  <p>Ấn nút Play để</p>
                  <p>KHÁM PHÁ NHÀ</p>
                  <p>MÁY SLABSTONE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 max-w-3xl mx-auto">
              Với quy mô 430.000m², đầu tư 1000 tỷ đồng và công suất 3.2 triệu
              m²/năm, SLABSTONE TRUNGDO là nhà máy sản xuất đá nung kết hiện đại
              nhất Đông Nam Á. Sở hữu công nghệ Continua+ từ Sacmi Italia, chúng
              tôi tự hào mang đến những tấm đá siêu kích thước lên đến
              1600x2400mm - sự kết tinh hoàn hảo giữa công nghệ châu Âu và nguồn
              nguyên liệu Việt Nam chất lượng cao.
            </p>
            <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
              Đội ngũ 150 chuyên gia không ngừng sáng tạo, khẳng định vị thế vật
              liệu xây dựng Việt Nam trên thị trường quốc tế. Với SLABSTONE
              TRUNGDO, chúng tôi kiến tạo tương lai.
            </p>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
          <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
