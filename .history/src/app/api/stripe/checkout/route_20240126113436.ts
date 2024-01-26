import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);

export async function POST(request: Request) {
  const { cartItems, customerInfo } = await request.json();
  const id = uuidv4();

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "pln",
            unit_amount:
              cartItems.price >= 50
                ? cartItems.price * 100
                : (cartItems.price + 9) * 100,
            product_data: {
              name: cartItems.productName,
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
        productName: `Zamówienie: ${cartItems.productName}`,
        products: `${cartItems.productName}`,
        customerInfo: JSON.stringify(customerInfo),
        id: id,
      },
    });
    return NextResponse.json({ ...session, error: false });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
