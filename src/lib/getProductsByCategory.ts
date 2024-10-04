"use server";
export async function getProductsByCategory(cat: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/shop/byCategory?cat=${
      cat ? cat : ""
    }&secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 5 } }
  );

  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}
