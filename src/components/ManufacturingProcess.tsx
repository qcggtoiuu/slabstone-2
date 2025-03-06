"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface ManufacturingProcessProps {
  className?: string;
}

const ManufacturingProcess = ({
  className = "",
}: ManufacturingProcessProps) => {
  const [selectedStep, setSelectedStep] = React.useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const steps = [
    {
      id: 1,
      title: "Lựa Chọn Nguyên Liệu",
      description:
        "Khoáng chất và nguyên liệu thô cao cấp được lựa chọn cẩn thận và kiểm tra chất lượng.",
      image:
        "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80",
      details: [
        "Sourcing high-quality minerals from trusted suppliers",
        "Rigorous quality control and testing of raw materials",
      ],
    },
    {
      id: 2,
      title: "Chế Biến Khoáng Chất",
      description:
        "Nguyên liệu thô được xử lý và tinh chế để tạo ra thành phần khoáng chất hoàn hảo.",
      image:
        "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80",
      details: [
        "Advanced grinding and milling techniques",
        "Precise particle size control for optimal sintering",
      ],
    },
    {
      id: 3,
      title: "Thiết Kế Kỹ Thuật Số",
      description:
        "Các nhà thiết kế của chúng tôi tạo ra các mẫu và kết cấu tuyệt đẹp bằng công nghệ kỹ thuật số tiên tiến.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      details: [
        "High-resolution digital design process",
        "Creation of natural stone patterns and unique designs",
      ],
    },
    {
      id: 4,
      title: "Quá Trình Nung Kết",
      description:
        "Sử dụng nhiệt độ và áp suất cực cao, chúng tôi biến hỗn hợp khoáng chất thành các tấm đá bền vững.",
      image:
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80",
      details: [
        "State-of-the-art sintering technology",
        "Precise temperature and pressure control",
      ],
    },
    {
      id: 5,
      title: "Hoàn Thiện & Kiểm Soát Chất Lượng",
      description:
        "Mỗi tấm đá đều trải qua quá trình hoàn thiện tỉ mỉ và kiểm tra chất lượng nghiêm ngặt.",
      image:
        "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?w=800&q=80",
      details: [
        "Multiple surface finish options (polished, matte, textured)",
        "Precision cutting and edge processing",
      ],
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quy Trình Sản Xuất Độc Đáo Của Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá cách chúng tôi tạo ra đá nung kết tốt nhất Việt Nam thông
            qua quy trình sản xuất đổi mới, kết hợp công nghệ tiên tiến với kỹ
            thuật chuyên môn cao.
          </p>
        </div>

        <Tabs defaultValue="1" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {[1, 2, 3, 4, 5].map((num) => (
                <TabsTrigger key={num} value={num.toString()}>
                  {num}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {steps.map((step) => (
            <TabsContent key={step.id} value={step.id.toString()}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold mr-4">
                      {step.id}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>

                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                    onClick={() => {
                      setSelectedStep(step.id);
                      setDialogOpen(true);
                    }}
                  >
                    Tìm hiểu thêm về quy trình này
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Công Nghệ Tiên Tiến</h3>
            <p className="text-sm text-gray-500 mb-4">
              Thiết bị và quy trình hiện đại nhất
            </p>
            <p className="text-gray-600">
              Nhà máy của chúng tôi sử dụng công nghệ nung kết mới nhất từ Ý,
              đảm bảo chất lượng vượt trội và độ đồng nhất trong mỗi tấm đá
              chúng tôi sản xuất.
            </p>
          </div>

          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Sản Xuất Bền Vững</h3>
            <p className="text-sm text-gray-500 mb-4">
              Sản xuất có trách nhiệm với môi trường
            </p>
            <p className="text-gray-600">
              Chúng tôi áp dụng các phương pháp thân thiện với môi trường trong
              toàn bộ quy trình sản xuất, giảm thiểu chất thải và giảm dấu chân
              môi trường của chúng tôi.
            </p>
          </div>

          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Đảm Bảo Chất Lượng</h3>
            <p className="text-sm text-gray-500 mb-4">
              Kiểm tra và đánh giá nghiêm ngặt
            </p>
            <p className="text-gray-600">
              Mỗi tấm đá đều trải qua các kiểm tra chất lượng toàn diện để đảm
              bảo đáp ứng các tiêu chuẩn khắt khe của chúng tôi về độ bền, vẻ
              ngoài, và độ bền lâu.
            </p>
          </div>
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setSelectedStep(null);
        }}
      >
        <DialogContent className="sm:max-w-md">
          {selectedStep && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                {steps[selectedStep - 1].title}
              </h3>
              <p className="text-gray-600">
                {steps[selectedStep - 1].description}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Chi tiết quy trình:</h4>
                <ul className="space-y-2">
                  {steps[selectedStep - 1].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ManufacturingProcess;
