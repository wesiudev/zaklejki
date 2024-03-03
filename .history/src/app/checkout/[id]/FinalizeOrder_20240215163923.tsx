"use client";
import { updateCoupon, updateOrder } from "@/firebase";
import { clearCart } from "@/redux/slices/shopSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

export default function FinalizeOrder({ order }: { order: any }) {
  const [isSent, setIsSent] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: any) => state.shop.cart);

  const sendMail = async () => {
    try {
      await updateCoupon("123");
      await updateOrder(["isPaid"], [true], order.metadata.id);
      setIsSent(true);
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/mailer`, {
        method: "POST",
        body: JSON.stringify({
          reciever: order.customer_details?.email,
          cartId: order.metadata.id,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };

  useEffect(() => {
    if (cart?.length > 0 && !isSent) {
      setIsSent(true);
      sendMail()
        .then(() => {
          localStorage.removeItem("cart");
          dispatch(clearCart());
        })
        .catch((error) => console.error("Error sending mail:", error));
    }
  }, [cart, isSent]); // Include cart and isSent as dependencies

  return <div></div>;
}
