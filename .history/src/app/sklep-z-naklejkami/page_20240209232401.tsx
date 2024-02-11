import Link from "next/link";
import ShopProducts from "../../components/ShopProducts";
import { getShopProduct } from "@/lib/getShopProduct";
import { categoriesArray } from "@/components/categories";

export default async function Page() {
  const { products } = await getShopProduct();
  return (
    <>
      <ShopProducts products={products} categories={categoriesArray} />
    </>
  );
}
