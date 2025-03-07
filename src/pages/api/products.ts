import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Product } from "@/lib/productData";

type ResponseData = {
  success: boolean;
  message?: string;
  products?: Product[];
  product?: Product;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // In a real application, this would interact with a database
  // For this example, we'll simulate by reading/writing to the productData.ts file

  // GET - Retrieve all products or a single product by ID
  if (req.method === "GET") {
    try {
      const { products } = require("../../lib/productData");
      const { id } = req.query;

      if (id) {
        const product = products.find((p: Product) => p.id === id);
        if (!product) {
          return res
            .status(404)
            .json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, product });
      }

      return res.status(200).json({ success: true, products });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to fetch products" });
    }
  }

  // POST - Create a new product
  if (req.method === "POST") {
    try {
      const newProduct = req.body;

      // Validation would go here
      if (!newProduct.name || !newProduct.code) {
        return res
          .status(400)
          .json({ success: false, message: "Name and code are required" });
      }

      // In a real app, you would add to database
      // For this example, we'll just return success
      return res
        .status(201)
        .json({
          success: true,
          message: "Product created successfully",
          product: newProduct,
        });
    } catch (error) {
      console.error("Error creating product:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to create product" });
    }
  }

  // PUT - Update a product
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const updatedProduct = req.body;

      if (!id) {
        return res
          .status(400)
          .json({ success: false, message: "Product ID is required" });
      }

      // In a real app, you would update in database
      // For this example, we'll just return success
      return res
        .status(200)
        .json({
          success: true,
          message: "Product updated successfully",
          product: updatedProduct,
        });
    } catch (error) {
      console.error("Error updating product:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to update product" });
    }
  }

  // DELETE - Delete a product
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      if (!id) {
        return res
          .status(400)
          .json({ success: false, message: "Product ID is required" });
      }

      // In a real app, you would delete from database
      // For this example, we'll just return success
      return res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete product" });
    }
  }

  // Method not allowed
  return res
    .status(405)
    .json({ success: false, message: "Method not allowed" });
}
