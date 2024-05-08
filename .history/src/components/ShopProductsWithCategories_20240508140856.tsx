import Image from "next/image";
import { IProduct } from "../../types";

export default function ShopProductsWithCategories({
  products,
  categories,
}: {
  products: IProduct[];
  categories: any[];
}) {
  return (
    <div>
      <h1 className="text-zinc-800 font-bold drop-shadow-xl shadow-black text-3xl xl:text-5xl mb-12 mt-24">
        Sklep z naklejkami
      </h1>
      {categories.map((item: any, i: any) => (
        <div key={i} className="p-3 drop-shadow-xl shadow-black rounded-lg">
          <div className="grid grid-cols-2">
            {products.map((product: any, j: any) => (
              <div key={j}></div>
            ))}
            <Image src={ninja} width={1024} height={1024} alt="" className="" />
          </div>
          <h2 className="text-xl mt-4">{item.h1}</h2>
          <p className="text-gray-600 text-justify text-sm mt-2">{item.p}</p>
        </div>
      ))}
      <p className="text-zinc-600 text-justify">
        Zaklejki.pl to miejsce, gdzie znajdziesz ponad 2000 różnorodnych
        naklejek, idealnych do ozdabiania każdej okazji. Nasza kolekcja zawiera
        naklejki ręcznie wycinane, naklejki na ścianę, naklejki dla dzieci oraz
        wiele innych. Oferujemy naklejki złote, srebrne, holograficzne i wiele
        innych, które dodadzą blasku i charakteru Twoim projektom. Kup jedną z
        naszych naklejek lub stwórz własną! Zaklejki.pl - sklep z największą
        kolekcją naklejek ozdobnych
      </p>
    </div>
  );
}
