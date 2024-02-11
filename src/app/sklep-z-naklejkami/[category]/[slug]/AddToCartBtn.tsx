"use client";

import { useDispatch, useSelector } from "react-redux";
import { prepareCart, setCart } from "@/redux/slices/shopSlice";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function AddToCartBtn({ product }: { product: any }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.shop.cart);
  useEffect(() => {
    dispatch(prepareCart());
    // && order.status === "paid"
  }, []);
  const handleAddToCart = () => {
    localStorage.setItem("cart", JSON.stringify(product));
    dispatch(setCart(product));
  };

  const itemIndex = cart?.findIndex(
    (item: any) => item.title === product.title
  );
  const itemInCart = itemIndex !== -1;

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-zinc-500 hover:bg-zinc-600 text-white py-3 px-8 text-lg sm:text-base xl:text-lg font-bold uppercase tracking-wider ${
        itemInCart ? "duration-300 opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={itemInCart}
    >
      {itemInCart ? (
        <div className="flex flex-row items-center">
          <FaCheck className="text-green-400 mr-2" />
          Dodano do koszyka
        </div>
      ) : (
        <>Dodaj do koszyka</>
      )}
    </button>
  );
}
