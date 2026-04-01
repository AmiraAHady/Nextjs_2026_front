import { IProduct } from "@/types/simpleProduct";
import { NextResponse } from "next/server";

export async function GET() {
  const products:IProduct[] = [
    { id: 1, title: "tv", price: 1200 },
    { id: 2, title: "labtop", price: 3000 },
    { id: 3, title: "T-shirt", price: 100 },
  ];
  return NextResponse.json({ products:products});
}
