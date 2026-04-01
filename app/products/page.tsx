// app/page.jsx
import Filter from "@/components/filter";
import ProductList from "@/components/productlist";
import { Product } from "@/types/product";
import { Suspense } from "react";
// import Loading from "../loading";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}
interface Props {
  searchParams: Promise<{ category: string }>;
}

export default async function Products({ searchParams }: Props) {
  const products = await fetchProducts();
  const { category } = await searchParams;
  const filteredValue = category ?? "all";

  let filteredproducts = products;
  if (filteredValue == "all") filteredproducts = products;
  if (filteredValue == "beauty")
    filteredproducts = products.filter(
      (product) => product.category == "beauty"
    );
  if (filteredValue == "fragrances")
    filteredproducts = products.filter(
      (product) => product.category == "fragrances"
    );
  if (filteredValue == "furniture")
    filteredproducts = products.filter(
      (product) => product.category == "furniture"
    );

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

      <Filter />
      <Suspense
        fallback={
          <div className="flex">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        }
      >
        <ProductList products={filteredproducts} />
      </Suspense>
    </div>
  );
}
