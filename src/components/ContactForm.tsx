"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, User, Send } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

interface ContactFormProps {
  onSubmit?: (data: ContactFormValues) => void;
  className?: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = ({ onSubmit, className = "" }: ContactFormProps = {}) => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = (data: ContactFormValues) => {
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", data);
    if (onSubmit) {
      onSubmit(data);
    }
    // Show success message
    alert("Thank you for your inquiry. We will contact you shortly.");
    form.reset();
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Yêu Cầu Tư Vấn</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và Tên</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      <User size={16} />
                    </span>
                    <Input
                      placeholder="Tên của bạn"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      <Mail size={16} />
                    </span>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số Điện Thoại</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-500">
                      <Phone size={16} />
                    </span>
                    <Input
                      placeholder="+84 xxx xxx xxx"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chi Tiết Yêu Cầu</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Vui lòng mô tả dự án hoặc yêu cầu của bạn..."
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Hãy cho chúng tôi biết về dự án, yêu cầu, hoặc câu hỏi mà bạn
                  có thể có.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-stone-800 hover:bg-stone-900"
          >
            <Send className="mr-2 h-4 w-4" /> Gửi Yêu Cầu
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
