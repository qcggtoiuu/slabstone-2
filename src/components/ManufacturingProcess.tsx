"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string[];
}

interface ManufacturingProcessProps {
  title?: string;
  description?: string;
  steps?: ProcessStep[];
}

const ManufacturingProcess = ({
  title = "Quy Trình Sản Xuất Độc Đáo Của Chúng Tôi",
  description = "Khám phá cách chúng tôi tạo ra đá nung kết tốt nhất Việt Nam thông qua quy trình sản xuất đổi mới, kết hợp công nghệ tiên tiến với kỹ thuật chuyên môn cao.",
  steps = [
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
        "Precise formulation for optimal strength and appearance",
        "Environmentally responsible material selection process",
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
        "Specialized mixing process for consistent composition",
        "Quality checks at each processing stage",
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
        "Color calibration for accurate reproduction",
        "Custom design capabilities for bespoke projects",
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
        "Fusion of minerals at molecular level",
        "Energy-efficient production methods",
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
        "Comprehensive quality testing for strength and durability",
        "Final inspection for visual perfection",
      ],
    },
  ],
}: ManufacturingProcessProps) => {
  const [selectedStep, setSelectedStep] = React.useState<ProcessStep | null>(
    null,
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <section className="w-full py-16 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            {title}
          </h2>
          <p className="text-stone-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <Tabs defaultValue="1" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-stone-100">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id.toString()}
                  className="data-[state=active]:bg-stone-800 data-[state=active]:text-white"
                >
                  {step.id}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {steps.map((step) => (
            <TabsContent
              key={step.id}
              value={step.id.toString()}
              className="animate-fadeIn"
            >
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
                    <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold mr-4">
                      {step.id}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-stone-600 mb-6">{step.description}</p>

                  <ul className="space-y-2 mb-6">
                    {step.details.slice(0, 2).map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-stone-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Dialog
                    open={dialogOpen && selectedStep?.id === step.id}
                    onOpenChange={(open) => {
                      setDialogOpen(open);
                      if (!open) setSelectedStep(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <button
                        className="flex items-center text-stone-800 font-medium hover:text-stone-600 transition-colors"
                        onClick={() => {
                          setSelectedStep(step);
                          setDialogOpen(true);
                        }}
                      >
                        Tìm hiểu thêm về quy trình này
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-stone-600">{step.description}</p>
                        <div className="bg-stone-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Process Details:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-stone-700 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Công Nghệ Tiên Tiến</CardTitle>
              <CardDescription>
                Thiết bị và quy trình hiện đại nhất
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-stone-600">
                Nhà máy của chúng tôi sử dụng công nghệ nung kết mới nhất từ Ý,
                đảm bảo chất lượng vượt trội và độ đồng nhất trong mỗi tấm đá
                chúng tôi sản xuất.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Sản Xuất Bền Vững</CardTitle>
              <CardDescription>
                Sản xuất có trách nhiệm với môi trường
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-stone-600">
                Chúng tôi áp dụng các phương pháp thân thiện với môi trường
                trong toàn bộ quy trình sản xuất, giảm thiểu chất thải và giảm
                dấu chân môi trường của chúng tôi.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Đảm Bảo Chất Lượng</CardTitle>
              <CardDescription>
                Kiểm tra và đánh giá nghiêm ngặt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-stone-600">
                Mỗi tấm đá đều trải qua các kiểm tra chất lượng toàn diện để đảm
                bảo đáp ứng các tiêu chuẩn khắt khe của chúng tôi về độ bền, vẻ
                ngoài, và độ bền lâu.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
