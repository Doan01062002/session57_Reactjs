import React from "react";

export default function GetProductsErro() {
  async function GetproductErr(id: number) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      if (response.ok) {
        const product = await response.json();
        console.log(product);
      } else {
        console.log("Không tìm thấy bản ghi");
      }
    } catch (error) {
      console.error(error);
    }
  }
  GetproductErr(9);

  return <div></div>;
}
