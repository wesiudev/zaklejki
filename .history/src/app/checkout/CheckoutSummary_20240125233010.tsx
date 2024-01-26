"use client";
import { getPolishCurrency } from "@/getPolishCurrency";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { format } from "path";
import { use, useEffect, useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

export default function CheckoutSummary({cartPrice, setCheckoutOpen}:{cartPrice:number, setCheckoutOpen:Function}) {
  const [isLoading, setLoading] = useState(true);

 

  return (
    <div className="flex flex-col  justify-center w-full h-full">
      {isLoading ? (
        <div className="bg-white w-24 h-24 mx-auto rounded-md flex flex-col items-center justify-center">
          <img
            className="h-12 w-12"
            src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/blocks-shuffle-2.svg"
            alt=""
          />
          <h2 className="text-sm font-bold mt-3">Zaklejki</h2>
        </div>
      ) : (
        <>
          
          
            <>
              <button
               onClick={() => setCheckoutOpen(false)}
                className="text-white font-bold text-xl flex flex-row items-center mb-12 px-6 sm:px-36 lg:px-24"
              >
                <FaArrowLeft className="mr-2" />
                Powrót
              </button>
              <h2 className="mb-3 px-6 sm:px-36 lg:px-24 text-base text-[#A5B4FC]">
                Do zapłaty
              </h2>
              <span className="text-[30px] xl:text-[38px]  font-bold text-white px-6 sm:px-36 lg:px-24">
                {cartPrice > 50
                  ? getPolishCurrency(cartPrice)
                  : getPolishCurrency(cartPrice + 20)}
              </span>
              <div className="grid grid-cols-1 mt-16 text-white w-full px-6 sm:px-36 lg:px-24">
               
                  <div key={i}>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row w-full items-start justify-start h-full">
                        <div className="aspect-square h-[85px] w-[85px] rounded-lg overflow-hidden">
                          <img
                            src="/"
                            alt=""
                            className="w-full h-full object-cover my-auto"
                          />
                        </div>
                        <div className="pl-2 w-2/3">
                          <h2 className="text-2xl">
                            Wodoodporny Putin
                            </h2>
                          
                        </div>
                      </div>
                      <div className="font-bold text-lg mt-1 w-max">
                        <div className="w-max">
                          {getPolishCurrency(price)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
                  </div>
              </div>
              <div className=" px-6 sm:px-36 lg:px-24 text-white">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Wysyłka</p>
                  <p className="text-lg font-bold">
                    {cartPrice > 250 && "Darmowa"}
                    {cartPrice < 250 && getPolishCurrency(20)}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-lg font-bold">Do zapłaty</p>
                  <p className="text-lg font-bold">
                    {getPolishCurrency(
                      cartPrice < 250 ? cartPrice + 20 : cartPrice
                    )}
                  </p>
                </div>
                <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
