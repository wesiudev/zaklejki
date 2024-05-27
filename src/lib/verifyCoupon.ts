"use server";

import { getCouponByValue } from "@/firebase";

export async function verifyCoupon(promotionCode: any) {
  const coupon = await getCouponByValue(promotionCode);
  return coupon;
}
