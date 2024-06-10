import React from "react";
import GetProducts from "./components/GetProducts";
import GetProductsErro from "./components/GetProductsErro";
import RemoveProductById from "./components/RemoveProductById";
import CreateProductComponent from "./components/CreateProduct";
import AddProduct from "./components/AddProduct";
import TableProducts from "./components/TableProducts";

export default function App() {
  return (
    <div>
      {/* <GetProducts></GetProducts>
      <GetProductsErro></GetProductsErro>
      <RemoveProductById></RemoveProductById>
      <CreateProductComponent></CreateProductComponent> */}

      <AddProduct></AddProduct>
      <TableProducts></TableProducts>
    </div>
  );
}
