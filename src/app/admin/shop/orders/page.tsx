"use server";
import AdminOrders from "./AdminOrders";

export default async function Page() {
  const orders = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/stripe/orders?secret=${process.env.API_SECRET_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <div className="relative">
      <AdminOrders orders={orders.data} />
    </div>
  );
}
