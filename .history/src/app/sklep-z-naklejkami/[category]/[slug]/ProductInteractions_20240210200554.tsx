"use client";
import AddToCartBtn from "@/components/Cart/AddToCartBtn";
import { getPolishCurrency } from "@/lib/getPolishCurrency";
import {
  Size,
  getPrice,
  getStickerPriceNotification,
} from "@/lib/getStickerPrice";
import { setCart } from "@/redux/slices/shopSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductInteractions({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const [paperType, setPaperType] = useState("normal");
  const [size, setSize] = useState<Size>("small");
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    localStorage.setItem("cart", JSON.stringify(product));
    dispatch(setCart(product));
  };
  const cart = useSelector((state: any) => state.shop.cart);
  const cartItems = cart?.filter((item: any) => item.title === product.title);
  const { notification } = getStickerPriceNotification(quantity, size);
  return (
    <div>
      <span className="text-xl xl:text-3xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
        Wybierz rozmiar
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-3 gap-3 mb-3">
        {!cartItems?.some((item: any) => item?.size?.includes("small")) ? (
          <button
            onClick={() => setSize("small")}
            className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
              size === "small" && "!bg-[#f06be7] opacity-100"
            }`}
          >
            6cm
          </button>
        ) : (
          <div
            className={`text-center border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-gray-500 hover:bg-gray-400 duration-300 text-white font-bold ${
              size === "small" && " bg-[#F87FF0] bg-[#f87ff0b6]"
            }`}
          >
            6cm
          </div>
        )}
        {!cartItems?.some((item: any) => item?.size?.includes("medium")) ? (
          <button
            onClick={() => setSize("medium")}
            className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
              size === "medium" && "!bg-[#f06be7] opacity-100"
            }`}
          >
            8cm
          </button>
        ) : (
          <div
            className={`text-center border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-gray-500 hover:bg-gray-400 duration-300 text-white font-bold`}
          >
            8cm
          </div>
        )}
        {!cartItems?.some((item: any) => item?.size?.includes("large")) ? (
          <button
            onClick={() => setSize("large")}
            className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
              size === "large" && "!bg-[#f06be7] opacity-100"
            }`}
          >
            14cm
          </button>
        ) : (
          <div
            className={`text-center border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-gray-500 hover:bg-gray-400 duration-300 text-white font-bold`}
          >
            14cm
          </div>
        )}
      </div>
      <div>
        <span className="text-xl xl:text-3xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Rodzaj papieru
        </span>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-3 gap-3">
          <button
            onClick={() => setPaperType("normal")}
            className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
              paperType === "normal" && "!bg-[#f06be7] opacity-100"
            }`}
          >
            Zwykły
          </button>
          <button
            onClick={() => setPaperType("normal")}
            className={`border-2 border-slate-500 px-4 w-full py-2 rounded-3xl bg-gradient-to-br from-slate-500 via-slate-400 to-slate-500 duration-300 text-white font-bold opacity-80 hover:opacity-100 ${
              paperType === "silver" &&  opacity-100"
            }`}
          >
            Srebrny
          </button>
          <button
            onClick={() => setPaperType("normal")}
            className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
              paperType === "gold" && "!bg-[#f06be7] opacity-100"
            }`}
          >
            Złoty
          </button>
        </div>
      </div>
      <span className="text-xl xl:text-3xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
        Wybierz ilość
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-3 gap-3">
        <div className="flex flex-row items-center">
          <div className="w-max h-max relative">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                } else {
                  return;
                }
              }}
              className="absolute left-0 rounded-l-3xl h-full pl-4 pr-3 bg-[#F87FF0] hover:bg-[#f87ff0b6] text-xl font-bold text-white flex items-center justify-center"
            >
              -
            </button>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              className="absolute right-0 rounded-r-3xl h-full pr-4 pl-3 bg-[#F87FF0] hover:bg-[#f87ff0b6] text-xl font-bold text-white flex items-center justify-center"
            >
              +
            </button>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e: any) => {
                e.target.value >= 1 && setQuantity(e.target.value);
              }}
              className="placeholder:text-gray-300 px-4 w-full py-2 rounded-3xl bg-[#f87ff0b6] duration-300 text-white font-bold text-center"
              placeholder="Wybierz ilość"
            />
          </div>
        </div>
      </div>

      <div className="text-3xl font-bold my-6">
        {quantity < 3 && (
          <span>
            {getPolishCurrency(getPrice(quantity, size).sumBeforeDiscount)}
          </span>
        )}
        {quantity >= 3 && (
          <div className="flex flex-row items-center">
            <span className="text-zinc-400 font-light line-through">
              {getPolishCurrency(getPrice(quantity, size).sumBeforeDiscount)}
            </span>
            <span className="text-green-500 ml-2">
              {getPolishCurrency(getPrice(quantity, size).sumAfterDiscount)}
            </span>
          </div>
        )}
      </div>
      <div className="text-sm sm:text-base  font-bold mb-6 mt-3">
        {quantity >= 3 && notification}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* <Link
            href="/tworzenie-naklejek"
            className="border-[#F87FF0] hover:bg-[#F87FF0] hover:text-white duration-300 border-2 text-center lg:mr-3 px-4 py-2 rounded-3xl text-zinc-500 w-full lg:w-max font-bold"
          >
            Utwórz własną
          </Link> */}

          <AddToCartBtn
            product={{
              ...product,
              quantity: quantity,
              price: getPrice(quantity, size).sumAfterDiscount,
              size: size,
            }}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}