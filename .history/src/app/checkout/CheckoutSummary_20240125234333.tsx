"use client";
import { getPolishCurrency } from "@/getPolishCurrency";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { format } from "path";
import { use, useEffect, useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

export default function CheckoutSummary({
  price,
  setCheckoutOpen,
  quantity,
}: {
  price: number;
  setCheckoutOpen: Function;
  quantity: number;
}) {
  return (
    <div className="flex flex-col  justify-center w-full h-full">
      <>
        <button
          onClick={() => setCheckoutOpen(false)}
          className="text-white font-bold text-xl flex flex-row items-center mb-12 "
        >
          <FaArrowLeft className="mr-2" />
          Powrót
        </button>
        <h2 className="mb-3 text-base text-[#A5B4FC]">Do zapłaty</h2>
        <span className="text-[30px] xl:text-[38px]  font-bold text-white ">
          {price > 50 ? getPolishCurrency(price) : getPolishCurrency(price + 9)}
        </span>
        <div className="grid grid-cols-1 mt-16 text-white w-full ">
          <div>
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-row w-full items-start justify-start h-full">
                <div className="aspect-square h-[85px] w-[85px] rounded-lg overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    src="/close-up-toilet-putin.png"
                    alt="Wodoodporny putin"
                    className="w-full h-full object-cover my-auto"
                  />
                </div>
                <div className=" w-2/3">
                  <h2 className="text-2xl pl-3">
                    Wodoodporny Putin <br />x {quantity}
                  </h2>
                </div>
              </div>
              <div className="font-bold text-lg mt-1 w-max">
                <div className="w-max">{getPolishCurrency(price)}</div>
              </div>
            </div>
            <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
          </div>
        </div>
        <div className=" text-white">
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-lg font-bold">Wysyłka</p>
            <p className="text-lg font-bold">
              {price > 250 && "Darmowa"}
              {price < 250 && getPolishCurrency(20)}
            </p>
          </div>
          <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-lg font-bold">Do zapłaty</p>
            <p className="text-lg font-bold">
              {getPolishCurrency(price < 250 ? price + 20 : price)}
            </p>
          </div>
          <div className="bg-[#e5e7eb] h-px my-4 opacity-10" />
        </div>
      </>
    </div>
  );
}
