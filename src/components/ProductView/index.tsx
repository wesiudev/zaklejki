import { getPolishCurrency } from "@/lib/getPolishCurrency";
import { getPrice } from "@/lib/getStickerPrice";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductView({
  setQuantity,
  quantity,
  setOwnStickerOpen,
  setCheckoutOpen,
}: {
  setQuantity: any;
  quantity: any;
  setOwnStickerOpen: any;
  setCheckoutOpen: any;
}) {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 h-max md:sticky xl:relative md:top-32 xl:top-0">
            <div className="">
              <Image
                src="/close-up-toilet-putin-2.png"
                width={1024}
                height={1024}
                alt=""
                className="rounded-3xl"
              />
            </div>
            <div className="">
              <Image
                src="/putin-inside-toilet.png"
                width={1024}
                height={1024}
                alt=""
                className=" rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="md:p-6 lg:p-8 xl:p-10 2xl:p-12 !pt-0 flex-col">
          <h1 className="text-4xl font-bold mt-4 md:mt-0">
            Wodoodporny Putin Toaletowy
          </h1>
          <p className="mb-3 text-gray-400 text-sm mt-2">8531 wyświetleń</p>
          <div className="my-3">
            <p>
              Ozdobne naklejki wodoodporne to doskonały sposób, aby nadać swoim
              przedmiotom osobisty i unikalny charakter. Nasze naklejki są nie
              tylko estetyczne, ale również odporne na wodę, co sprawia, że są
              idealne do ozdabiania laptopów, butelek, telefonów czy innych
              przedmiotów codziennego użytku.
            </p>
          </div>
          <span className="text-5xl">Wybierz ilość</span>

          <div className="grid grid-cols-3 mt-6 mb-3 gap-3">
            <button
              onClick={() => setQuantity(1)}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 1 && " !border-rose-500 bg-[#f87ff0b6]"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setQuantity(5)}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 5 && " !border-rose-500 bg-[#f87ff0b6]"
              }`}
            >
              5
            </button>
            <button
              onClick={() => setQuantity(10)}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 10 && " !border-rose-500 bg-[#f87ff0b6]"
              }`}
            >
              10
            </button>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e: any) => setQuantity(e.target.value)}
              className="placeholder:text-gray-300 px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold "
              placeholder="Inna ilość..."
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold h-12 mt-4">
              {getPolishCurrency(getPrice(quantity))}
            </span>
            <span className="text-gray-500">
              Darmowa dostawa dla zamówień powyżej 50zł
            </span>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <Link
                href="/tworzenie-naklejek"
                onClick={() => setOwnStickerOpen(true)}
                className="border-[#F87FF0] border-2 text-center md:mr-3 mt-3 md:mt-6 px-4 py-2 rounded-3xl duration-300 text-zinc-500 w-full md:w-max font-bold"
              >
                Utwórz własną
              </Link>
              <button
                onClick={() => setCheckoutOpen(true)}
                className="mt-6 px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-full md:w-max font-bold"
              >
                Zamów z dostawą
              </button>
            </div>
          </div>
          <div className="flex mt-12 flex-col">
            <ul>
              <li className="flex flex-col items-start mt-6">
                <div className="flex flex-row">
                  {" "}
                  <FaStar className="mr-2 text-yellow-400 h-5 w-5 text-5xl mt-[1px]" />
                  <strong>Wodoodporne</strong>
                </div>
                Naklejki są wykonane z wysokiej jakości materiałów, które
                zapewniają ochronę przed wilgocią i wodą. Możesz śmiało używać
                ozdobionych nimi przedmiotów nawet w deszczowe dni.
              </li>
              <li className="flex flex-col items-start mt-3">
                <div className="flex flex-row">
                  {" "}
                  <FaStar className="mr-2 text-yellow-400 h-5 w-5 text-5xl mt-[1px]" />
                  <strong>Estetyczny design</strong>
                </div>
                Oferujemy różnorodne wzory i kształty, które pozwolą Ci
                dopasować naklejkę do Twojego stylu. Od abstrakcyjnych motywów
                po urocze ilustracje – mamy wszystko, co potrzebne do stworzenia
                unikalnej aranżacji.
              </li>
              <li className="flex flex-col items-start mt-3">
                <div className="flex flex-row">
                  <FaStar className="mr-2 text-yellow-400 h-5 w-5 text-5xl mt-[1px]" />
                  <strong>Łatwe aplikowanie</strong>
                </div>
                Naklejki są łatwe do nakładania i usuwania, nie pozostawiając
                śladów ani uszkodzeń. Dzięki temu możesz zmieniać ich położenie
                i tworzyć nowe kompozycje wedle własnego uznania.
              </li>
            </ul>

            <h2 className="text-4xl font-bold mt-6">Darmowa dostawa</h2>
            <p className="mt-3">
              Zamówienia powyżej 50 złotych kwalifikują się do darmowej dostawy,
              co sprawia, że zdobienie swoich przedmiotów staje się jeszcze
              bardziej korzystne.
            </p>
            <h2 className="text-4xl font-bold mt-6">
              Własna naklejka wedle uznania{" "}
            </h2>
            <p className="mt-3">
              Oferujemy również możliwość stworzenia własnej, spersonalizowanej
              naklejki. Wystarczy przesłać nam swój projekt, a my dostarczymy Ci
              unikatową naklejkę, która idealnie odzwierciedli Twój indywidualny
              styl. Pozwól swojej kreatywności rozkwitać i nadaj swoim
              przedmiotom niepowtarzalny charakter dzięki naszym ozdobnym
              naklejkom wodoodpornym. Zamów już teraz i spraw, by codzienność
              była pełna kolorów i wyrazistych wzorów!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
