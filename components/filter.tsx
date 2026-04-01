"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter); //?category=filter
    
    // http://localhost:3000/products?category=filter
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="flex gap-29 justify-center border-b border-purple-900 mb-5">
      <button
        className="text-green-600 text-2xl"
        onClick={() => handleFilter("all")}
      >
        all
      </button>
      <button
        className="text-green-600 text-2xl"
        onClick={() => handleFilter("beauty")}
      >
        beauty
      </button>
      <button
        className="text-green-600 text-2xl"
        onClick={() => handleFilter("fragrances")}
      >
        fragrances
      </button>
      <button
        className="text-green-600 text-2xl"
        onClick={() => handleFilter("furniture")}
      >
        furniture
      </button>
    </div>
  );
}
