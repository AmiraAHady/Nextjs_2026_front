import { IProduct } from "@/types/simpleProduct";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const products: IProduct[] = [
    { id: 1, title: "tv", price: 1200 },
    { id: 2, title: "labtop", price: 3000 },
    { id: 3, title: "T-shirt", price: 100 },
  ];
  const { id } =await  params;
  console.log(id);
  


  const product = products.find((p) => p.id == Number(id));
  if (!product) {
    return NextResponse.json(
      { message: "No Product With This Id" },
      { status: 404 }
    );
  }
  return NextResponse.json({ product: product, success: true });
}
