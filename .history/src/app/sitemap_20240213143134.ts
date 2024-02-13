import { getShopProduct } from "@/lib/getShopProduct";

export default async function sitemap() {
  const { products } = await getShopProduct();
  return [{}];
}
