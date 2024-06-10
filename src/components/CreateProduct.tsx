import React, { useEffect } from "react";

type Product = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};

export default function CreateProductComponent() {
  async function createProduct() {
    // Tạo đối tượng product
    const product: Product = {
      id: Math.floor(Math.random() * 10000),
      product_name: "sản phẩm mới",
      image: "ảnh mới",
      price: 1000,
      quantity: 19,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.log("Thêm không thành công");
      }
    } catch (err) {
      console.log("Lỗi xảy ra khi thêm sản phẩm:", err);
    }
  }

  useEffect(() => {
    createProduct();
  }, []);

  return <div></div>;
}
