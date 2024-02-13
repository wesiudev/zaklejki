import { getShopProduct } from "@/lib/getShopProduct";
import { polishToEnglish } from "@/lib/polishToEnglish";

export default async function sitemap() {
  const { products: allProducts } = await getShopProduct();
  const products = allProducts.map((product: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${
      product.categories[0]
    }/${polishToEnglish(product.title)}`,
    lastModified: new Date().toISOString,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date().toISOString(),
    },
  ];
}
