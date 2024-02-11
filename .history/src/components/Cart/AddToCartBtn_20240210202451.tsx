"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function AddToCartBtn({
  product,
  handleAddToCart,
}: {
  product: any;
  handleAddToCart: any;
}) {
  return (
    <>
      <button
        onClick={() => handleAddToCart(product)}
        className="mb-3 lg:mb-0 px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-full lg:w-max font-bold flex flex-row items-center justify-center"
      >
        <FaCartShopping className="mr-2 h-6 w-6" />
        Dodaj do koszyka ({product?.quantity})
      </button>
    </>
  );
}
