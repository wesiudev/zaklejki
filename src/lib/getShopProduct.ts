"use server";
export async function getShopProduct(slug?: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop?slug=${
      slug ? slug : ""
    }&secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 360 } }
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}
