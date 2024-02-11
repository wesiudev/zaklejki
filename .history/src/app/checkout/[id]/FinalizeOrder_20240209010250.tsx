"use client";
import { addCart } from "@/firebase";
import { clearCart, setCart } from "@/redux/slices/shopSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

export default function FinalizeOrder({ order }: { order: any }) {
  const [isSent, setIsSent] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: any) => state.shop.cart);

  const sendMail = async () => {
    await addCart({
      ...cart,
      id: order.metadata.id,
      customerInfo: JSON.parse(order.metadata.customerInfo),
    });
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
  };
  useEffect(() => {
    if (cart?.length > 0 && !isSent) {
      setIsSent(true);
      sendMail().then(() => {
        localStorage.removeItem("cart");
        dispatch(clearCart());
      });
    }
  }, [cart, isSent]); // Include cart and isSent as dependencies

  return <div></div>;
}
