// app/page.jsx
import ProductList from "@/components/productlist";
import { Product } from "@/types/product";
import { Suspense } from "react";
// import Loading from "../loading";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <p className="text-lg mb-10 text-center max-w-3xl mx-auto">
        Upgrade your everyday experience with our products. Crafted with premium
        materials and attention to detail, making your life easier and more
        enjoyable. Upgrade your everyday experience with our products. Crafted
        with premium materials and attention to detail, making your life easier
        and more enjoyable.
      </p>
      <Suspense
        fallback={
          <div className="flex">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        }
      >
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}
