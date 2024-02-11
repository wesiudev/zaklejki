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
  const cart = useSelector((state: any) => state.shop.cart);
  const cartItem = cart?.find(
    (item: any) => item.title === product.title && item.size === product.size
  );
  return (
    <>
      {!cartItem ? (
        <button
          onClick={() => handleAddToCart(product)}
          disabled={cartItem?.length > 0}
          className="mb-3 lg:mb-0 px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-full lg:w-max font-bold flex flex-row items-center justify-center"
        >
          <FaCartShopping className="mr-2 h-6 w-6" />
          Dodaj do koszyka ({product?.quantity})
        </button>
      ) : (
        <div className="cursor-not-allowed mb-3 lg:mb-0 px-4 py-2 rounded-3xl bg-gray-500 hover:bg-gray-400 duration-300 text-white w-full lg:w-max font-bold flex flex-row items-center justify-center">
          <FaCartShopping className="mr-2 h-6 w-6" />
          Dodano do koszyka ({cartItem?.quantity})
        </div>
      )}
    </>
  );
}
