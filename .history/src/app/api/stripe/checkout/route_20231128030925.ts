import { CartItem } from "@/types";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);

export async function POST(request: Request) {
  const { listOfProducts, customerInfo } = await request.json();
  const id = uuidv4();
  const hasError = listOfProducts.some(
    (product: CartItem) => product.error === true
  );
  if (hasError) {
    return NextResponse.json({ error: "Request Malwared" });
  }
  const amount = listOfProducts.reduce((total: number, product: CartItem) => {
    return total + product.price;
  }, 0);

  const paymentName = listOfProducts
    .map((product: any) => product.title)
    .join(", ");

  const products = listOfProducts.map((product: any) => product.title);

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "pln",
            unit_amount:
              amount < 250
                ? Math.floor(amount * 100)
                : Math.floor(amount * 100),
            product_data: {
              name: paymentName,
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/${id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/${id}`,
      locale: "pl",
      metadata: {
        productName: `Zamówienie: ${paymentName}`,
        products: `${products}`,
        customerInfo: JSON.stringify(customerInfo),
        id: id,
      },
    });
    return NextResponse.json({ ...session, error: false });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
