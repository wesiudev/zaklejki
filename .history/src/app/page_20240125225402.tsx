"use client";
import { getPolishCurrency } from "@/getPolishCurrency";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [otherQuantity, setOtherQuantity] = useState(0);

  function getPrice() {
    if (quantity === 1 && otherQuantity === 0) {
      return 15;
    } else if (quantity === 5 && otherQuantity === 0) {
      return 50;
    } else if (quantity === 10 && otherQuantity === 0) {
      return 70;
    } else if (otherQuantity >= 10) {
      return otherQuantity * 7;
    } else {
      return 0;
    }
  }
  return (
    <>
      <h1 className="text-4xl font-bold xl:text-5xl 2xl:text-6xl pt-3 pb-12 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        Naklejki ozdobne wodoodporne
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-3 aspect-square h-max sticky top-12">
            <Image
              src="/putin-water-proof.png"
              width={1024}
              height={1024}
              alt=""
              className="aspect-square rounded-3xl"
            />
            <Image
              src="/close-up-toilet-putin-2.png"
              width={1024}
              height={1024}
              alt=""
              className="h-full w-auto aspect-square rounded-3xl"
            />
            <Image
              src="/close-up-toilet-putin.png"
              width={1024}
              height={1024}
              alt=""
              className="aspect-square rounded-3xl"
            />
            <Image
              src="/putin-inside-toilet.png"
              width={1024}
              height={1024}
              alt=""
              className="aspect-square rounded-3xl"
            />
          </div>
        </div>
        <div className="p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 !pt-0 flex-col">
          <p className="mt-3">
            Ozdobne naklejki wodoodporne to doskonały sposób, aby nadać swoim
            przedmiotom osobisty i unikalny charakter. Nasze naklejki są nie
            tylko estetyczne, ale również odporne na wodę, co sprawia, że są
            idealne do ozdabiania laptopów, butelek, telefonów czy innych
            przedmiotów codziennego użytku.
          </p>
          <span className="text-5xl mt-4">Wybierz ilość</span>

          <div className="grid grid-cols-3 mt-6 mb-3   gap-3">
            <button
              onClick={() => {
                setOtherQuantity(0), setQuantity(1);
              }}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 1 && " !border-rose-500"
              }`}
            >
              1
            </button>
            <button
              onClick={() => {
                setOtherQuantity(0), setQuantity(5);
              }}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 5 && " !border-rose-500"
              }`}
            >
              5
            </button>
            <button
              onClick={() => {
                setOtherQuantity(0), setQuantity(10);
              }}
              className={`border-2 border-transparent px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold ${
                quantity === 10 && " !border-rose-500"
              }`}
            >
              10
            </button>
            <input
              type="number"
              min={10}
              value={otherQuantity === 0 ? "Podaj ilość" : otherQuantity}
              onChange={(e: any) => setOtherQuantity(e.target.value)}
              className="placeholder:text-gray-300 px-4 w-full py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white font-bold "
              placeholder="Inna ilość..."
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold h-12 mt-4">
              {getPolishCurrency(getPrice())}
            </span>
            <span className="text-gray-500">
              Darmowa dostawa dla zamówień powyżej 50zł
            </span>
            <div className="flex flex-row items-center">
              <button className="mr-3 mt-6 px-4 py-2 rounded-3xl duration-300 text-zinc-500 w-max font-bold">
                Utwórz własną
              </button>
              <button className="mt-6 px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max font-bold">
                Zamów z dostawą
              </button>
            </div>
          </div>
          <div className="flex mt-12 flex-col">
            <h2 className="text-5xl font-bold">Cechy produktu:</h2>
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

            <h2 className="text-5xl font-bold mt-6">Darmowa dostawa</h2>
            <p className="mt-3">
              Zamówienia powyżej 50 złotych kwalifikują się do darmowej dostawy,
              co sprawia, że zdobienie swoich przedmiotów staje się jeszcze
              bardziej korzystne.
            </p>
            <h2 className="text-5xl font-bold mt-6">
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
