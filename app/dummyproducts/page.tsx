import { IProduct } from "@/types/simpleProduct";
import React from "react";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return data.products;
}

export default async function DummyProducts() {
  const products: IProduct[] = await getProducts();
  return (
    <div className="m-2">
      <h1>Dummy Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
        </div>
      ))}
    </div>
  );
}
