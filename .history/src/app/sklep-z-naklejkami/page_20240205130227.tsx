import Link from "next/link";
import ShopProducts from "../../components/ShopProducts";
import { getShopProduct } from "@/lib/getShopProduct";

export default async function Page() {
  const { products } = await getShopProduct();
  return (
    <>
      <ShopProducts products={products} />
    </>
  );
}
