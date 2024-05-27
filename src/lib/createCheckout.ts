export async function createCheckout(details: any, customerInfo: any, id: any) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/stripe/checkout`,
    {
      method: "POST",
      body: JSON.stringify({ details, customerInfo, id }),
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
