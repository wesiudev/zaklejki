"use client";
import { polishToEnglish } from "@/lib/polishToEnglish";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImage } from "react-icons/fa";

export default function ImageFullSize({ product }: { product: any }) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      <div className="relative group duration-300 overflow-hidden">
        {!product.title.includes("putin") && (
          <>
            <Image
              className={`rounded-3xl ${
                isLoading ? "bg-[#f87ff080] animate-pulse blur-sm" : ""
              }`}
              priority
              width={1920}
              height={1080}
              src={product.image_source}
              title={`Naklejka na laptopa, kubek, biurko, szafę ${polishToEnglish(
                product.title
              )}`}
              alt={`Naklejka na laptopa, kubek, biurko, szafę ${polishToEnglish(
                product.title
              )}`}
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
              <Image
                src="/zaklejkilogo.png"
                width={200}
                height={200}
                title="Zaklejki Logo"
                alt="Zaklejki Logo"
                className="h-12 lg:h-16 w-auto"
              />
            </div>
          </>
        )}
        {product.title.includes("putin") && (
          <Image
            className={`rounded-3xl ${
              isLoading ? "bg-[#f87ff080] animate-pulse blur-sm" : ""
            }`}
            priority
            width={1920}
            height={1080}
            src="/putin-water-proof.png"
            title={`Naklejka na pisuar ${polishToEnglish(product.title)}`}
            alt={`Naklejka na pisuar ${polishToEnglish(product.title)}`}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA"
            placeholder="blur"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>
    </>
  );
}
