import { ArtworkData } from "@/types";
import { polishToEnglish } from "../../../../../utils/polishToEnglish";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: ArtworkData }) {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/shop/${product.category}/${product.slug}`}
      className="relative rounded-xl flex items-center justify-center flex-col hover:scale-95 duration-150"
    >
      <div className="absolute bottom-4 w-full h-max">
        <div className="mt-4 text-center">
          <p className="mt-1 text-white font-bold bg-black bg-opacity-40 rounded-xl py-0.5 px-2 w-max mx-auto text-sm">
            {product.price}
          </p>
          <h2 className="text-white font-bold bg-black bg-opacity-40 rounded-3xl py-0.5 px-2 w-max mx-auto text-lg truncate mt-1">
            {product.title}
          </h2>
        </div>
      </div>
      <Image
        width={300}
        height={300}
        src={product.images[0]}
        alt={product.title}
        className="h-full w-auto mx-auto object-cover shadow-md shadow-zinc-700"
      />
    </Link>
  );
}
