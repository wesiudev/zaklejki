"use client";

import { removeFromCart, setPromotion } from "@/redux/slices/shopSlice";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { polishToEnglish } from "@/lib/polishToEnglish";
import { removeNumbersFromString } from "@/lib/removeNumbersFromString";
import { getPrice } from "@/lib/getStickerPrice";
import { getPolishCurrency } from "@/lib/getPolishCurrency";
import { useState } from "react";
import { verifyCoupon } from "@/lib/verifyCoupon";
import { useRouter } from "next/navigation";
import { Countdown } from "../Countdown";

export default function Cart({
  isCartOpen,
  setCartOpen,
}: {
  isCartOpen: boolean;
  setCartOpen: (isCartOpen: boolean) => void;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [promotionCode, setPromotionCode] = useState("");
  const [countdownTime, setCountdownTime] = useState(0);
  const [promotionCodeTries, setPromotionCodeTries] = useState(0);
  const [promotionCodeError, setPromotionCodeError] = useState("");
  const cart = useAppSelector((state: any) => state.shop.cart);
  async function setupCart() {
    if (promotionCode === "") {
      router.push("/checkout");
      return;
    }
    if (promotionCode.length === 7 && promotionCode.includes("-")) {
      await verifyCoupon(promotionCode).then((res) => {
        if (!res.error) {
          {
            dispatch(
              setPromotion({ couponId: res.id, promotion: res.prizeId })
            );
            localStorage.setItem("activeCoupon", res.id);
            router.push("/checkout");
          }
        } else {
          setPromotionCodeError(`Błędny kod promocyjny`);
          setPromotionCodeTries(promotionCodeTries + 1);
          if (promotionCodeTries < 2) {
            setCountdownTime(5);
            setTimeout(() => {
              setCountdownTime(0);
              setPromotionCodeError("");
            }, 5000);
          } else if (promotionCodeTries >= 2 && promotionCodeTries < 4) {
            setCountdownTime(30);
            setTimeout(() => {
              setCountdownTime(0);
              setPromotionCodeError("");
            }, 30000);
          } else if (promotionCodeTries >= 4) {
            setCountdownTime(60);
            setCountdownTime(0);
            setTimeout(() => {
              setPromotionCodeError("");
            }, 60000);
          }
          return;
        }
      });
    } else {
      setPromotionCodeError(`Błędny kod promocyjny`);
      setPromotionCodeTries(promotionCodeTries + 1);
      if (promotionCodeTries < 2) {
        setCountdownTime(5);
        setTimeout(() => {
          setCountdownTime(0);
          setPromotionCodeError("");
        }, 5000);
      } else if (promotionCodeTries >= 2 && promotionCodeTries < 4) {
        setCountdownTime(30);
        setTimeout(() => {
          setCountdownTime(0);
          setPromotionCodeError("");
        }, 30000);
      } else if (promotionCodeTries >= 4) {
        setCountdownTime(60);
        setTimeout(() => {
          setCountdownTime(0);
          setPromotionCodeError("");
        }, 60000);
      }
    }
  }
  return (
    <>
      <button
        onClick={() => setCartOpen(!isCartOpen)}
        className={`hover:scale-125 duration-200  flex flex-row items-center group p-6 pt-12 pl-12  bg-[#F87FF0] hover:bg-[#f87ff0b6] rounded-tl-full  fixed bottom-0 right-0  z-[150]`}
      >
        <div className="absolute rounded-full p-1 h-max w-auto text-white font-bold text-lg xl:text-2xl  right-3 bottom-3  aspect-square">
          {cart?.length === 0 ? "" : cart?.length}
        </div>
        <FaShoppingCart className="mr-2 text-3xl xl:text-5xl  text-white " />
      </button>

      {isCartOpen && (
        <div className="fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-70 flex items-center justify-center z-[750]">
          <div
            className="p-2 scrollbar-rounded max-h-[76vh] overflow-y-scroll borderBar border border-gray-300 rounded-[10px] bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 h-max w-[90vw] lg:w-max"
            aria-modal="true"
            role="dialog"
          >
            {cart?.length !== 0 && (
              <span className="text-zinc-800 font-bold">Twój koszyk</span>
            )}
            <div className="flex flex-col items-center justify-center w-full">
              {cart.length === 0 && (
                <>
                  <FaShoppingCart className="text-7xl text-gray-400 mt-12" />
                  <p className="text-gray-400 mt-5 text-center">
                    Twój koszyk jest pusty...
                  </p>
                </>
              )}
              {cart?.length !== 0 && (
                <div className="grid grid-cols-1 mt-4 text-zinc-800 drop-shadow-md shadow-black w-full">
                  {cart?.map((item: any, i: any) => (
                    <div key={i}>
                      <div className="flex flex-row justify-between bg-gray-200 w-full rounded-lg">
                        <div className="flex flex-row items-start w-full p-2">
                          <div className="aspect-square w-24 h-24">
                            <Image
                              width={244}
                              height={244}
                              src={item?.image_source}
                              alt=""
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="pl-2 w-full">
                            <div className="w-full flex flex-row justify-between">
                              <Link
                                href={`/sklep-z-naklejkami/${
                                  item.categories[0]
                                }/${polishToEnglish(item.title)}`}
                                className="text-lg font-bold"
                              >
                                {removeNumbersFromString(item.title)} <br />
                                <span className="font-bold text-sm pr-1">
                                  {item.quantity}x
                                </span>
                                <span className="font-normal text-sm">
                                  {item.size === "small" && "Mała (6cm)"}
                                </span>
                                <span className="font-normal text-sm">
                                  {item.size === "medium" && "Średnia (8cm)"}
                                </span>
                                <span className="font-normal text-sm">
                                  {item.size === "large" && "Duża (14cm)"}
                                </span>
                                <span className="font-normal text-sm ml-1">
                                  {item.paperType === "normal" && "Zwykła"}
                                </span>
                                <span className="font-normal text-sm ml-1">
                                  {item.paperType === "silver" && "Srebrna"}
                                </span>
                                <span className="font-normal text-sm ml-1">
                                  {item.paperType === "gold" && "Złota"}
                                </span>
                              </Link>
                              <p className="font-bold text-lg px-2">
                                {getPolishCurrency(
                                  getPrice(item.quantity, item.size)
                                    .sumAfterDiscount
                                )}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                dispatch(removeFromCart(item));
                              }}
                              className="text-sm text-gray-500 underline hover:text-gray-600"
                            >
                              usuń
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-300 my-4" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-8 space-y-6 sticky w-full left-0 z-[250] bottom-0 bg-gray-200 p-4 rounded-md bg-opacity-70">
              <div className="space-y-4 text-center">
                {cart.length === 0 && (
                  <button
                    disabled={!cart.length}
                    className="disabled:cursor-not-allowed duration-200 block rounded bg-indigo-600 px-5 py-3 text-sm text-gray-100 transition hover:bg-indigo-700 w-full"
                  >
                    Do płatności
                  </button>
                )}
                {cart.length !== 0 && (
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Kod promocyjny"
                      value={promotionCode}
                      onChange={(e: any) => setPromotionCode(e.target.value)}
                      className="border-2 border-indigo-600 text-zinc-800 drop-shadow-lg shadow-black font-bold mb-2 p-1.5 rounded"
                    />

                    {promotionCodeError !== "" && (
                      <p className="mb-2 text-red-500 flex flex-row items-center">
                        {promotionCodeError}{" "}
                        <Countdown countdownTime={countdownTime} />
                      </p>
                    )}
                    <button
                      disabled={promotionCodeError.length > 0}
                      title="Przejdź do płatności"
                      onClick={setupCart}
                      className="disabled:bg-red-500 duration-200 block rounded bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-sm text-gray-100 transition w-full"
                    >
                      Do płatności
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setCartOpen(false)}
                  className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                  Kontynuuj zakupy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
