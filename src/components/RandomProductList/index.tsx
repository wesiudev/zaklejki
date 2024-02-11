"use client";
import { useState } from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Image from "next/image";
import { polishToEnglish } from "@/lib/polishToEnglish";
import { FaImage, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";
export default function RandomProductList({
  products,
  length,
  type,
  category,
}: {
  products: any[];
  length: number;
  type: string;
  category: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div
      className="flex flex-row overflow-x-scroll relative scrollbar-rounded pb-2 cursor-grab"
      {...events}
      ref={ref}
    >
      <div className="w-max flex flex-row cursor-grab">
        {products.map((product: any, i: any) => (
          <Link
            title={`Przejdź do produktu ${product.title}`}
            className={`w-max ${i === 0 ? "ml-0" : "ml-3"} !cursor-pointer`}
            key={i}
            href={`/sklep-z-naklejkami/${
              product.categories[0]
            }/${polishToEnglish(product.title)}`}
          >
            <Image
              className={`select-none rounded-xl h-[20vh] w-auto ${
                isLoading ? "bg-zinc-500 animate-pulse blur-sm" : ""
              }`}
              priority
              width={150}
              height={150}
              src={product.image_source}
              title={`Naklejka odzobna na ścianę ${product.title}`}
              alt={`Naklejka odzobna na ścianę ${product.title}`}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA"
              placeholder="blur"
              onLoad={() => setIsLoading(false)}
            />
            <div
              className={`rounded-md flex flex-col w-max h-max ${
                isLoading
                  ? "absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-12 w-12 text-white"
                  : "hidden"
              }`}
            >
              <FaImage
                className={`rounded-md absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] h-12 w-12 text-white`}
              />
            </div>
          </Link>
        ))}
        {type === "all" && (
          <Link
            href={`/sklep-z-naklejkami/`}
            className="text-white relative rounded-xl h-full mx-3 aspect-square flex flex-col items-center justify-center text-center bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 !cursor-pointer"
          >
            <FaPlus className="h-3/5 aspect-square w-auto opacity-20 z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            <span className="font-bold text-xl relative z-50 ">
              Zobacz wszystkie
            </span>
            <span className="font-bold text-sm relative z-50 pt-3 underline">
              {length}
            </span>
          </Link>
        )}
        {type === "0" && (
          <Link
            href={`/sklep-z-naklejkami/${polishToEnglish(category)}`}
            className="text-white relative rounded-xl h-full mx-3 aspect-square flex flex-col items-center justify-center text-center bg-indigo-500 hover:bg-indigo-600 duration-300 !cursor-pointer"
          >
            <FaPlus className="h-3/5 aspect-square w-auto opacity-20 z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            <span className="font-bold text-xl relative z-50 ">
              {capitalizeFirstLetter(category)}
            </span>
            <span className="font-bold text-sm relative z-50 pt-3 underline">
              {length}
            </span>
          </Link>
        )}
        {type === "1" && (
          <Link
            href={`/sklep-z-naklejkami/${polishToEnglish(category)}`}
            className="text-white relative rounded-xl h-full mx-3 aspect-square flex flex-col items-center justify-center text-center bg-blue-500 hover:bg-blue-600 duration-300 !cursor-pointer"
          >
            <FaPlus className="h-3/5 aspect-square w-auto opacity-20 z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            <span className="font-bold text-xl relative z-50 ">
              {capitalizeFirstLetter(category)}
            </span>
            <span className="font-bold text-sm relative z-50 pt-3 underline">
              {length}
            </span>
          </Link>
        )}
      </div>
      {/* <button
        className="hidden md:block group-hover:lg:opacity-100 md:opacity-100 lg:opacity-0 duration-500 z-[250] absolute md:-left-[30px] top-1/2 -translate-y-1/2 bg-black p-3 text-white drop-shadow-xl shadow-black rounded-full"
        onClick={slideToPrevItem}
      >
        <FaArrowLeft className="w-8 h-8" />
      </button> */}
      {/* <button
        className="hidden md:block group-hover:lg:opacity-100 md:opacity-100 lg:opacity-0 duration-500 z-[250] absolute md:-right-[30px] top-1/2 -translate-y-1/2 bg-black p-3 text-white drop-shadow-xl shadow-black rounded-full"
        onClick={slideToNextItem}
      >
        <FaArrowRight className="w-8 h-8" />
      </button> */}
    </div>
  );
}
