import Image from "next/image";
import { IProduct } from "../../types";
import Link from "next/link";
import { polishToEnglish } from "@/lib/polishToEnglish";

export default function ShopProductsWithCategories({
  products,
  categories,
}: {
  products: IProduct[];
  categories: any[];
}) {
  return (
    <div>
      <h1 className="text-zinc-800 font-bold drop-shadow-xl shadow-black text-3xl xl:text-5xl mt-24">
        Sklep z naklejkami
      </h1>
      <p className="text-zinc-600 text-justify mt-6 mb-12">
        Zaklejki.pl to miejsce, gdzie znajdziesz ponad 2000 różnorodnych
        naklejek, idealnych do ozdabiania każdej okazji. Nasza kolekcja zawiera
        naklejki ręcznie wycinane, naklejki na ścianę, naklejki dla dzieci oraz
        wiele innych. Oferujemy naklejki złote, srebrne, holograficzne i wiele
        innych, które dodadzą blasku i charakteru Twoim projektom. Kup jedną z
        naszych naklejek lub stwórz własną! Zaklejki.pl - sklep z największą
        kolekcją naklejek ozdobnych
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {categories.map((item: any, i: any) => (
          <div
            key={i}
            className="p-3 drop-shadow-xl shadow-black rounded-lg aspect-square w-full bg-indigo-200"
          >
            <h2 className="text-3xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
              {item.h1}
            </h2>

            <div className="grid grid-cols-2 gap-2 my-4">
              {products
                .filter((p: IProduct) => p.categories.includes(item.category))
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
                .map((product: IProduct, j: number) => (
                  <Link
                    href={`/sklep/${item.category}/${polishToEnglish(
                      product.title
                    )}`}
                    className="relative rounded-lg w-full aspect-square group overflow-hidden"
                    key={j}
                  >
                    <Image
                      src={
                        product.image_thumbnail
                          ? product.image_thumbnail
                          : product.image_source
                      }
                      width={500}
                      height={500}
                      alt={product.title}
                      className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 duration-500"
                    />
                  </Link>
                ))}
            </div>
            <div className="w-full flex items-end justify-center">
              <Link
                href={`/sklep/${item.category}`}
                className="mt-6 bg-indigo-600 hover:bg-indigo-500 duration-300 rounded-md text-white px-4 py-2 w-full h-full text-center"
              >
                Zobacz więcej
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
