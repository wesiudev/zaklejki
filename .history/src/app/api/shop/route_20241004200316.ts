import { getProducts } from "@/firebase";
import { polishToEnglish } from "@/lib/polishToEnglish";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const products = await getProducts();
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({
      products: products?.products?.sort(() => Math.random() - 0.5),
    });
  } else {
    const product = products?.products?.find(
      (product: any) => slug === polishToEnglish(product.title)
    );

    if (!product) {
      return new NextResponse("not found", { status: 404 });
    }
    if (product) {
      return NextResponse.json(product);
    }
  }
}
