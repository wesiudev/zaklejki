import { getProducts } from "@/firebase";
import { polishToEnglish } from "@/lib/polishToEnglish";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const products = await getProducts();
  const secret = req.nextUrl.searchParams.get("secret");
  const cat = req.nextUrl.searchParams.get("cat");

  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (cat) {
    return NextResponse.json(
      products?.products
        ?.filter((product: any) =>
          product.categories.some((category: string) =>
            polishToEnglish(category).includes(polishToEnglish(cat))
          )
        )
        .sort(() => Math.random() - 0.5)
    );
  } else {
    return NextResponse.json({ error: "Not Found" });
  }
}
