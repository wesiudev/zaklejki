import { getShopProduct } from "@/lib/getShopProduct";

export default async function sitemap() {
  const { products } = await getShopProduct();
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date().toISOString(),
    },
  ];
}
