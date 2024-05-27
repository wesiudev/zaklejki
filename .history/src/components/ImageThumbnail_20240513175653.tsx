"use client";
import { auth, updateProduct } from "@/firebase";
import { polishToEnglish } from "@/lib/polishToEnglish";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { FaImage } from "react-icons/fa";

export default function ImageThumbnail({
  product,
  productIndex,
  currentlyEditing,
  setCurrentlyEditing,
}: {
  product: any;
  productIndex?: any;
  currentlyEditing?: any;
  setCurrentlyEditing?: any;
}) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {/* {currentlyEditing && currentlyEditing?.i === productIndex && (
        <form
          onSubmit={(e) => {
            e.preventDefault(),
              updateProduct(productIndex, {
                ...product,
                title: currentlyEditing?.title,
              }).then(() => setCurrentlyEditing({ title: "", i: -1 }));
          }}
          className="z-[1520] fixed left-[50%] top-[50%] -translate-x-[50%] flex flex-col -translate-y-[50%] rounded-3xl bg-white h-max w-max"
        >
          <div className="p-3 text-zinc-800 font-bold text-2xl">
            Edytujesz:
            {product?.title ? product?.title : ` Naklejka ${productIndex + 1}`}
          </div>
          <button
            type="submit"
            className="p-3 w-full bg-green-500 text-2xl text-white font-bold"
          >
            Zapisz
          </button>
          <input
            onChange={(e: any) =>
              setCurrentlyEditing({
                ...currentlyEditing,
                title: e.target.value,
              })
            }
            value={currentlyEditing?.title}
            type="text"
            className="p-2 bg-blue-500 text-white font-bold text-2xl rounded-b-3xl text-center"
            placeholder="Nowa nazwa"
          />
        </form>
      )} */}
      <Link
        href={`/sklep/${product.categories[0]}/${polishToEnglish(
          product.title
        )}`}
        title={`Zobacz produkt ${product.title}`}
        className="relative group duration-500 overflow-hidden"
      >
        {!isLoading && product?.title && (
          <div className="z-20 opacity-0 group-hover:opacity-100 duration-300 absolute text-sm bottom-0 left-0 w-full">
            <div className="py-0.5 px-2 rounded-b-xl w-full text-center bg-black bg-opacity-50 text-gray-300 font-bold">
              {product?.title ? product?.title : ""}
            </div>
          </div>
        )}
        {/* {user?.email === "wesiu@wesiu.pl" && (
          <div className="absolute group-hover:scale-100 scale-0 top-0 left-0 py-0.5 px-2 rounded-t-xl w-full bg-black bg-opacity-50 text-gray-300 font-bold flex flex-col space-y-3">
            <button
              onClick={(e: any) => {
                e.preventDefault(),
                  setCurrentlyEditing({
                    title: "",
                    i: productIndex,
                  });
              }}
              className=""
            >
              {product?.title ? product?.title : `Naklejka ${productIndex + 1}`}
            </button>
          </div>
        )} */}

        <Image
          className={`group-hover:opacity-50 duration-500 overflow-hidden rounded-xl ${
            isLoading ? "bg-zinc-500 bg-opacity-50 animate-pulse" : ""
          }`}
          priority
          width={400}
          height={400}
          src={product?.image_thumbnail}
          title={`${product?.title}`}
          alt={`${product?.title}`}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAA"
          placeholder="blur"
          onLoad={() => setIsLoading(false)}
        />
        <div
          className={`rounded-md flex flex-col items-center justify-center w-max h-max ${
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
    </>
  );
}
