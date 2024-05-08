"use client";

import Image from "next/image";
import { IProduct } from "../../../types";

export default function Product({ product }: { product: IProduct }) {
  return (
    <div className="aspect-square h-full flex flex-col relative group">
      <Image
        src={product.image_thumbnail}
        width={200}
        height={200}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
      <h1 className="absolute left-0 bottom-0 p-2 text-left text-sm bg-black bg-opacity-50">
        {product.title}
      </h1>
    </div>
  );
}
