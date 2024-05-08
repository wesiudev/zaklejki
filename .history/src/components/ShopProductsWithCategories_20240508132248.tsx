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
      {" "}
      <h1 className="text-zinc-800 font-bold drop-shadow-xl shadow-black text-3xl xl:text-5xl mb-12 mt-24">
        Sklep z naklejkami
      </h1>
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
