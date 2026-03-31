// components/ProductList.tsx
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain mb-4 w-full h-48"
            loading="lazy"
          />
          <h2 className="font-semibold text-lg">{product.title}</h2>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
}