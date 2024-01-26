"use client";
import { getPolishCurrency } from "@/getPolishCurrency";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <h1 className="text-4xl font-bold xl:text-5xl 2xl:text-6xl pt-3 pb-12 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        Naklejki ozdobne wodoodporne
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <Image
              src="/putin-water-proof.png"
              width={1024}
              height={1024}
              alt=""
              className=""
            />
            <div className="grid grid-cols-2 my-6">
              <Image
                src="/close-up-toilet-putin-2.png"
                width={1024}
                height={1024}
                alt=""
                className="h-full w-auto"
              />
              <Image
                src="/close-up-toilet-putin.png"
                width={1024}
                height={1024}
                alt=""
                className=""
              />
            </div>
            <Image
              src="/putin-inside-toilet.png"
              width={1024}
              height={1024}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 !pt-0 flex-col">
          <h2 className="text-5xl">Wybierz ilość</h2>
          <div className="grid grid-cols-3 my-12">
            <button
              onClick={() => setQuantity(1)}
              className={`px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max font-bold ${
                quantity === 1 && "!border-2 border-blue-500"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setQuantity(5)}
              className={`px-4 py-2 rounded-full bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max font-bold ${
                quantity === 5 && "!border-2 border-blue-500"
              }`}
            >
              5
            </button>
            <button
              onClick={() => setQuantity(10)}
              className={`px-4 py-2 rounded-full bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max font-bold ${
                quantity === 10 && "!border-2 border-blue-500"
              }`}
            >
              10
            </button>
            <input
              type="text"
              className="px-4 py-2 rounded-full bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max font-bold "
              placeholder="Ilość..."
            />
          </div>
          <h2 className="text-3xl font-bold">{getPolishCurrency(15)}</h2>
        </div>
      </main>
    </>
  );
}
