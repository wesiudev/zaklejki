"use server";

import { CartItem } from "@/types";
import { getShopProduct } from "./getShopProduct";

export async function createCheckout(cartItems: CartItem[], customerInfo: any) {
  const listOfProducts = await Promise.all(
    cartItems.map(async (item) => {
      const product = await getShopProduct(item.category, item.slug);
      if (product.price !== item.price) {
        return {
          ...product,
          error: true,
        };
      }
      return product;
    })
  );

  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/stripe/checkout`,
    {
      method: "POST",
      body: JSON.stringify({ listOfProducts, customerInfo }),
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
