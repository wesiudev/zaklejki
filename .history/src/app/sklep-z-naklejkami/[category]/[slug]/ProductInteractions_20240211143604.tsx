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
      <div className="text-xl xl:text-2xl font-bold text-zinc-800 drop-shadow-xl shadow-black mt-2">
        Wybierz rozmiar
      </div>
      <div className="grid grid-cols-3 mt-3 gap-3 mb-3">
        <button
          onClick={() => setSize("small")}
          className={`px-4 w-full py-1 xl:py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
            size === "small" && "!bg-[#f06be7] opacity-100"
          }`}
        >
          6cm
        </button>

        <button
          onClick={() => setSize("medium")}
          className={`px-4 w-full py-1 xl:py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
            size === "medium" && "!bg-[#f06be7] opacity-100"
          }`}
        >
          8cm
        </button>

        <button
          onClick={() => setSize("large")}
          className={`px-4 w-full py-1 xl:py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold opacity-80 ${
            size === "large" && "!bg-[#f06be7] opacity-100"
          }`}
        >
          14cm
        </button>
      </div>
      <div>
        <div className="text-xl xl:text-2xl font-bold text-zinc-800 drop-shadow-xl shadow-black mt-2">
          Rodzaj papieru
        </div>
        <div className="grid grid-cols-3 mt-3 gap-3">
          <button
            onClick={() => setPaperType("normal")}
            className={`px-4 w-full py-1 xl:py-2 rounded-3xl bg-[#FAA4F4] hover:bg-[#f06be7] duration-300 text-white font-bold ${
              paperType === "normal"
                ? "!bg-[#f06be7] opacity-100"
                : "opacity-65 hover:opacity-100"
            }`}
          >
            Zwykły
          </button>
          <button
            onClick={() => setPaperType("silver")}
            className={`px-4 w-full py-1 xl:py-2 rounded-3xl bg-gradient-to-br from-slate-500 via-slate-400 to-slate-500 duration-300 text-white font-bold ${
              paperType === "silver"
                ? "opacity-100"
                : "opacity-65 hover:opacity-100"
            }`}
          >
            Srebrny
          </button>
          <button
            onClick={() => setPaperType("gold")}
            className={`px-4 w-full py-1 xl:py-2 rounded-3xl bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-500 duration-300 text-white font-bold ${
              paperType === "gold"
                ? "opacity-100"
                : "opacity-65 hover:opacity-100"
            }`}
          >
            Złoty
          </button>
        </div>
      </div>
      <div className="text-xl xl:text-2xl font-bold text-zinc-800 drop-shadow-xl shadow-black mt-2">
        Wybierz ilość
      </div>
      <div className="mt-3 flex flex-col md:flex-row">
        <div className="w-full lg:mr-3 lg:w-[150px] h-max relative">
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

        <div className="flex flex-col-reverse lg:flex-row items-center mt-4 md:mt-0">
          {/* <Link
            href="/tworzenie-naklejek"
            className="border-[#F87FF0] hover:bg-[#F87FF0] hover:text-white duration-300 border-2 text-center lg:mr-3 px-4 py-2 rounded-3xl text-zinc-500 w-full lg:w-max font-bold"
          >
            Utwórz własną
          </Link> */}
          <AddToCartBtn
            product={{
              ...product,
              paperType: paperType,
              quantity: quantity,
              price: getPrice(quantity, size).sumAfterDiscount,
              size: size,
            }}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <div className="text-3xl font-bold my-3">
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
    </div>
  );
}
