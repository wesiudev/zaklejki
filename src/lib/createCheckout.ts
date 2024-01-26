"use server";

export async function createCheckout(cartItems: any, customerInfo: any) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/stripe/checkout`,
    {
      method: "POST",
      body: JSON.stringify({ cartItems, customerInfo }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  const data = req.json();

  return data;
}
