import React from "react";

export default function GetProducts() {
  fetch("http://localhost:3000/products")
    .then((response: Response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return <div></div>;
}
