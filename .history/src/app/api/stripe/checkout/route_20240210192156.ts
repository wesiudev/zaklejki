import { NextResponse } from "next/server";

const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);

export async function POST(request: Request) {
  const { details, customerInfo, id } = await request.json();
  console.log((details.price * 100).toFixed(0));
  console.log(((details.price + 10) * 100).toFixed(0));

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "pln",
            unit_amount:
              details.price <= 100
                ? details.price.toFixed(2) * 100
                : ((details.price + 10) * 100).toFixed(2),
            product_data: {
              name: details.productName,
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
        productName: `${details.productName}`,
        products: JSON.stringify(details),
        customerInfo: JSON.stringify(customerInfo),
        id: id,
      },
    });
    return NextResponse.json({ ...session, error: false });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
