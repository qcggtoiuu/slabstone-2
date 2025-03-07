"use client";

import React, { useState, useEffect } from "react";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { csvToJson, convertCSVToProductData } from "@/lib/csvToJson";
import { Product } from "@/lib/productData";
import { Trash2, Edit, Plus, Upload, Download, Save, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [csvData, setCsvData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    id: "",
    name: "",
    slug: "",
    code: "",
    price: "",
    surface: "",
    thickness: "",
    size: "",
    finish: "",
    color: "",
    catalogueUrl: "",
    description: "",
    images: [],
    url: "",
  });

  useEffect(() => {
    // Load products from local storage or API
    const loadProducts = async () => {
      try {
        // For demo purposes, we'll use the products from productData.ts
        // In a real app, you would fetch from an API
        const { products } = await import("@/lib/productData");
        setProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  const handleImport = () => {
    if (!csvData.trim()) {
      setStatus({ success: false, message: "Please enter CSV data" });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      // Parse CSV data
      const csvProducts = csvToJson(csvData);
      const importedProducts = convertCSVToProductData(csvProducts);

      // Update products state
      setProducts(importedProducts);
      setStatus({
        success: true,
        message: `Successfully imported ${importedProducts.length} products`,
      });

      // In a real app, you would send this to an API endpoint
      console.log("Imported products:", importedProducts);
    } catch (error) {
      setStatus({
        success: false,
        message: `Error: ${error instanceof Error ? error.message : String(error)}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportCSV = () => {
    // Create CSV header
    const headers = [
      "Tên sản phẩm",
      "Slug",
      "Mã sản phẩm",
      "Giá sản phẩm",
      "Bề mặt",
      "Độ dày",
      "Kích thước",
      "Hoàn thiện",
      "Màu sắc",
      "Tải catalogue",
      "Mô tả",
      "Ảnh 1",
      "Ảnh 2",
      "Ảnh 3",
      "Ảnh 4",
      "Ảnh 5",
      "Ảnh 6",
      "Ảnh 7",
      "URL",
    ].join(",");

    // Create CSV rows
    const rows = products.map((product) => {
      const images = [...product.images];
      while (images.length < 7) {
        images.push(""); // Ensure we have 7 image slots
      }

      return [
        `"${product.name || ""}"`,
        `"${product.slug || ""}"`,
        `"${product.code || ""}"`,
        `"${product.price || ""}"`,
        `"${product.surface || ""}"`,
        `"${product.thickness || ""}"`,
        `"${product.size || ""}"`,
        `"${product.finish || ""}"`,
        `"${product.color || ""}"`,
        `"${product.catalogueUrl || ""}"`,
        `"${product.description?.replace(/\n/g, " ") || ""}"`,
        ...images.map((img) => `"${img || ""}"`),
        `"${product.url || ""}"`,
      ].join(",");
    });

    // Combine header and rows
    const csv = [headers, ...rows].join("\n");

    // Create download link
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== productId));
      setStatus({ success: true, message: "Product deleted successfully" });
    }
  };

  const handleSaveEdit = () => {
    if (!currentProduct) return;

    setProducts(
      products.map((p) => (p.id === currentProduct.id ? currentProduct : p)),
    );
    setIsEditDialogOpen(false);
    setStatus({ success: true, message: "Product updated successfully" });
  };

  const handleAddNew = () => {
    setIsAddDialogOpen(true);
    setNewProduct({
      id: (products.length + 1).toString(),
      name: "",
      slug: "",
      code: "",
      price: "",
      surface: "",
      thickness: "",
      size: "",
      finish: "",
      color: "",
      catalogueUrl: "",
      description: "",
      images: [],
      url: "",
    });
  };

  const handleSaveNew = () => {
    const productToAdd = {
      ...newProduct,
      id: (products.length + 1).toString(),
      images: Array.isArray(newProduct.images) ? newProduct.images : [],
    } as Product;

    setProducts([...products, productToAdd]);
    setIsAddDialogOpen(false);
    setStatus({ success: true, message: "Product added successfully" });
  };

  const handleImageChange = (index: number, value: string) => {
    if (!currentProduct) return;

    const newImages = [...currentProduct.images];
    newImages[index] = value;
    setCurrentProduct({ ...currentProduct, images: newImages });
  };

  const handleNewImageChange = (index: number, value: string) => {
    const newImages = Array.isArray(newProduct.images)
      ? [...newProduct.images]
      : [];
    newImages[index] = value;
    setNewProduct({ ...newProduct, images: newImages });
  };

  const filteredProducts = products.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      product.name?.toLowerCase().includes(searchLower) ||
      product.code?.toLowerCase().includes(searchLower) ||
      product.surface?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Quản lý sản phẩm</h1>

        <Tabs defaultValue="products">
          <TabsList className="mb-6">
            <TabsTrigger value="products">Sản phẩm</TabsTrigger>
            <TabsTrigger value="import">Nhập/Xuất CSV</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4 items-center">
                <Input
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="text-sm text-gray-500">
                  {filteredProducts.length} sản phẩm
                </span>
              </div>
              <Button
                onClick={handleAddNew}
                className="bg-stone-800 hover:bg-stone-900"
              >
                <Plus className="mr-2 h-4 w-4" /> Thêm sản phẩm
              </Button>
            </div>

            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead className="w-[200px]">Tên sản phẩm</TableHead>
                    <TableHead>Mã</TableHead>
                    <TableHead>Bề mặt</TableHead>
                    <TableHead>Độ dày</TableHead>
                    <TableHead>Kích thước</TableHead>
                    <TableHead>Hoàn thiện</TableHead>
                    <TableHead>Màu sắc</TableHead>
                    <TableHead className="w-[100px]">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>{product.code}</TableCell>
                      <TableCell>{product.surface}</TableCell>
                      <TableCell>{product.thickness}</TableCell>
                      <TableCell>{product.size}</TableCell>
                      <TableCell>{product.finish}</TableCell>
                      <TableCell>{product.color}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(product)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(product.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="import">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Nhập sản phẩm từ CSV</h2>
                <Textarea
                  value={csvData}
                  onChange={(e) => setCsvData(e.target.value)}
                  className="min-h-[300px]"
                  placeholder="Dán dữ liệu CSV vào đây..."
                />
                <Button
                  onClick={handleImport}
                  disabled={isLoading}
                  className="bg-stone-800 hover:bg-stone-900"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {isLoading ? "Đang nhập..." : "Nhập sản phẩm"}
                </Button>

                {status && (
                  <div
                    className={`p-4 rounded-md ${status.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                  >
                    {status.message}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Xuất sản phẩm ra CSV</h2>
                <p className="text-gray-600">
                  Xuất tất cả sản phẩm hiện tại ra file CSV để chỉnh sửa hoặc
                  sao lưu.
                </p>
                <Button
                  onClick={handleExportCSV}
                  className="bg-stone-800 hover:bg-stone-900"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Xuất CSV
                </Button>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Hướng dẫn</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>
                      Chuẩn bị dữ liệu CSV với các cột: Tên sản phẩm, Slug, Mã
                      sản phẩm, Giá sản phẩm, Bề mặt, Độ dày, Kích thước, Hoàn
                      thiện, Màu sắc, Tải catalogue, Mô tả, Ảnh 1-7, URL
                    </li>
                    <li>Sao chép và dán dữ liệu CSV vào ô văn bản bên trên</li>
                    <li>Nhấn nút "Nhập sản phẩm"</li>
                    <li>
                      Hệ thống sẽ xử lý dữ liệu và cập nhật cơ sở dữ liệu sản
                      phẩm
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
          </DialogHeader>

          {currentProduct && (
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tên sản phẩm
                  </label>
                  <Input
                    value={currentProduct.name}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <Input
                    value={currentProduct.slug}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        slug: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mã sản phẩm
                  </label>
                  <Input
                    value={currentProduct.code}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        code: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Giá sản phẩm
                  </label>
                  <Input
                    value={currentProduct.price}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        price: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Bề mặt
                  </label>
                  <Input
                    value={currentProduct.surface}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        surface: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Độ dày
                  </label>
                  <Input
                    value={currentProduct.thickness}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        thickness: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Kích thước
                  </label>
                  <Input
                    value={currentProduct.size}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        size: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Hoàn thiện
                  </label>
                  <Input
                    value={currentProduct.finish}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        finish: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Màu sắc
                  </label>
                  <Input
                    value={currentProduct.color}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        color: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">URL</label>
                  <Input
                    value={currentProduct.url}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        url: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tải catalogue
                  </label>
                  <Input
                    value={currentProduct.catalogueUrl}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        catalogueUrl: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mô tả
                  </label>
                  <Textarea
                    value={currentProduct.description}
                    onChange={(e) =>
                      setCurrentProduct({
                        ...currentProduct,
                        description: e.target.value,
                      })
                    }
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-1">
                    Hình ảnh
                  </label>
                  {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Input
                        value={currentProduct.images[index] || ""}
                        onChange={(e) =>
                          handleImageChange(index, e.target.value)
                        }
                        placeholder={`Ảnh ${index + 1}`}
                      />
                      {currentProduct.images[index] && (
                        <div className="w-10 h-10 relative flex-shrink-0 bg-gray-100">
                          <img
                            src={currentProduct.images[index]}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) =>
                              ((e.target as HTMLImageElement).src =
                                "https://via.placeholder.com/40")
                            }
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              <X className="mr-2 h-4 w-4" /> Hủy
            </Button>
            <Button
              onClick={handleSaveEdit}
              className="bg-stone-800 hover:bg-stone-900"
            >
              <Save className="mr-2 h-4 w-4" /> Lưu thay đổi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Thêm sản phẩm mới</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tên sản phẩm
                </label>
                <Input
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <Input
                  value={newProduct.slug}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, slug: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mã sản phẩm
                </label>
                <Input
                  value={newProduct.code}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, code: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Giá sản phẩm
                </label>
                <Input
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Bề mặt</label>
                <Input
                  value={newProduct.surface}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, surface: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Độ dày</label>
                <Input
                  value={newProduct.thickness}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, thickness: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Kích thước
                </label>
                <Input
                  value={newProduct.size}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, size: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Hoàn thiện
                </label>
                <Input
                  value={newProduct.finish}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, finish: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Màu sắc
                </label>
                <Input
                  value={newProduct.color}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, color: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">URL</label>
                <Input
                  value={newProduct.url}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, url: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tải catalogue
                </label>
                <Input
                  value={newProduct.catalogueUrl}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      catalogueUrl: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <Textarea
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">
                  Hình ảnh
                </label>
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Input
                      value={
                        (newProduct.images && newProduct.images[index]) || ""
                      }
                      onChange={(e) =>
                        handleNewImageChange(index, e.target.value)
                      }
                      placeholder={`Ảnh ${index + 1}`}
                    />
                    {newProduct.images && newProduct.images[index] && (
                      <div className="w-10 h-10 relative flex-shrink-0 bg-gray-100">
                        <img
                          src={newProduct.images[index]}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) =>
                            ((e.target as HTMLImageElement).src =
                              "https://via.placeholder.com/40")
                          }
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Hủy
            </Button>
            <Button
              onClick={handleSaveNew}
              className="bg-stone-800 hover:bg-stone-900"
            >
              <Save className="mr-2 h-4 w-4" /> Thêm sản phẩm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}
