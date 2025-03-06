"use client";

import React, { useState } from "react";
import { Filter, Sliders, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "./ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ProductFilterProps {
  onFilterChange?: (filters: FilterState) => void;
  className?: string;
}

interface FilterState {
  color: string;
  pattern: string;
  finish: string;
  size: string;
  sortBy: string;
}

const ProductFilter = ({
  onFilterChange = () => {},
  className = "",
}: ProductFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    color: "all-colors",
    pattern: "all-patterns",
    finish: "all-finishes",
    size: "all-sizes",
    sortBy: "newest",
  });

  const [activeFilters, setActiveFilters] = useState<number>(0);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    // Count active filters (excluding sort)
    const activeCount = Object.entries(newFilters).filter(
      ([k, v]) => k !== "sortBy" && !v.startsWith("all-"),
    ).length;
    setActiveFilters(activeCount);

    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      color: "all-colors",
      pattern: "all-patterns",
      finish: "all-finishes",
      size: "all-sizes",
      sortBy: filters.sortBy, // Keep the sort option
    };
    setFilters(resetFilters);
    setActiveFilters(0);
    onFilterChange(resetFilters);
  };

  return (
    <div className={`w-full bg-white p-4 rounded-lg shadow-sm ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Mobile Filter Button */}
        <div className="md:hidden w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Bộ lọc
                  {activeFilters > 0 && (
                    <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {activeFilters}
                    </span>
                  )}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px]">
              <DropdownMenuLabel>Lọc Sản Phẩm</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground mt-2">
                  Màu sắc
                </DropdownMenuLabel>
                {["White", "Beige", "Gray", "Black", "Brown"].map((color) => (
                  <DropdownMenuCheckboxItem
                    key={color}
                    checked={filters.color === color.toLowerCase()}
                    onCheckedChange={() =>
                      handleFilterChange(
                        "color",
                        filters.color === color.toLowerCase()
                          ? ""
                          : color.toLowerCase(),
                      )
                    }
                  >
                    {color}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground mt-2">
                  Họa tiết
                </DropdownMenuLabel>
                {["Marble", "Solid", "Terrazzo", "Concrete", "Wood"].map(
                  (pattern) => (
                    <DropdownMenuCheckboxItem
                      key={pattern}
                      checked={filters.pattern === pattern.toLowerCase()}
                      onCheckedChange={() =>
                        handleFilterChange(
                          "pattern",
                          filters.pattern === pattern.toLowerCase()
                            ? ""
                            : pattern.toLowerCase(),
                        )
                      }
                    >
                      {pattern}
                    </DropdownMenuCheckboxItem>
                  ),
                )}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground mt-2">
                  Bề mặt
                </DropdownMenuLabel>
                {["Polished", "Matte", "Textured", "Honed"].map((finish) => (
                  <DropdownMenuCheckboxItem
                    key={finish}
                    checked={filters.finish === finish.toLowerCase()}
                    onCheckedChange={() =>
                      handleFilterChange(
                        "finish",
                        filters.finish === finish.toLowerCase()
                          ? ""
                          : finish.toLowerCase(),
                      )
                    }
                  >
                    {finish}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground mt-2">
                  Kích thước
                </DropdownMenuLabel>
                {["120x60cm", "120x120cm", "160x80cm", "320x160cm"].map(
                  (size) => (
                    <DropdownMenuCheckboxItem
                      key={size}
                      checked={filters.size === size}
                      onCheckedChange={() =>
                        handleFilterChange(
                          "size",
                          filters.size === size ? "" : size,
                        )
                      }
                    >
                      {size}
                    </DropdownMenuCheckboxItem>
                  ),
                )}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <div className="p-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={clearFilters}
                  disabled={activeFilters === 0}
                >
                  Xóa bộ lọc
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Filter Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tất cả sản phẩm</TabsTrigger>
              <TabsTrigger value="marble">Vân đá cẩm thạch</TabsTrigger>
              <TabsTrigger value="solid">Màu đơn sắc</TabsTrigger>
              <TabsTrigger value="terrazzo">Terrazzo</TabsTrigger>
              <TabsTrigger value="concrete">Vân bê tông</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop Filter Dropdowns */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center">
            <Sliders className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Bộ lọc:</span>
          </div>

          <Select
            value={filters.color}
            onValueChange={(value) => handleFilterChange("color", value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-colors">Tất cả màu sắc</SelectItem>
              <SelectItem value="white">Trắng</SelectItem>
              <SelectItem value="beige">Be</SelectItem>
              <SelectItem value="gray">Xám</SelectItem>
              <SelectItem value="black">Đen</SelectItem>
              <SelectItem value="brown">Nâu</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.pattern}
            onValueChange={(value) => handleFilterChange("pattern", value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Pattern" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-patterns">Tất cả họa tiết</SelectItem>
              <SelectItem value="marble">Vân đá cẩm thạch</SelectItem>
              <SelectItem value="solid">Đơn sắc</SelectItem>
              <SelectItem value="terrazzo">Terrazzo</SelectItem>
              <SelectItem value="concrete">Vân bê tông</SelectItem>
              <SelectItem value="wood">Vân gỗ</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.finish}
            onValueChange={(value) => handleFilterChange("finish", value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Finish" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-finishes">Tất cả bề mặt</SelectItem>
              <SelectItem value="polished">Bóng</SelectItem>
              <SelectItem value="matte">Mờ</SelectItem>
              <SelectItem value="textured">Nhám</SelectItem>
              <SelectItem value="honed">Mài mịn</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.size}
            onValueChange={(value) => handleFilterChange("size", value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-sizes">Tất cả kích thước</SelectItem>
              <SelectItem value="120x60cm">120x60cm</SelectItem>
              <SelectItem value="120x120cm">120x120cm</SelectItem>
              <SelectItem value="160x80cm">160x80cm</SelectItem>
              <SelectItem value="320x160cm">320x160cm</SelectItem>
            </SelectContent>
          </Select>

          {activeFilters > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-sm text-muted-foreground"
            >
              Xóa
            </Button>
          )}
        </div>

        {/* Sort Dropdown (Both Mobile and Desktop) */}
        <Select
          value={filters.sortBy}
          onValueChange={(value) => handleFilterChange("sortBy", value)}
        >
          <SelectTrigger className="w-full md:w-[130px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Mới nhất</SelectItem>
            <SelectItem value="popular">Phổ biến nhất</SelectItem>
            <SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
            <SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilter;
