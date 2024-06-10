import React from "react";

export default function RemoveProductById() {
  async function removeProductById(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Product removed:", result);
      } else {
        console.log("Failed to remove product. Status:", response.status);
      }
    } catch (error) {
      console.error("Error occurred while removing product:", error);
    }
  }

  // Gọi hàm với id bất kỳ để kiểm tra
  removeProductById(1); // Thay đổi ID để kiểm tra

  return <div></div>;
}
