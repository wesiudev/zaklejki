import HeroSlider from "@/components/HomePage/HeroSlider";
import LotteryWheel from "@/components/HomePage/LotteryWheel";
import TypesOfPaper from "@/components/HomePage/TypesOfPaper";
import ListOfCategories from "@/components/ListOfCategories";
import { categoriesArray } from "@/components/categories";
import { listOfPrizes } from "@/components/listOfPrizes";
import { incrementGoogleCounter } from "@/firebase";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaHandScissors, FaShippingFast } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
export const metadata: Metadata = {
  title: "Sklep z naklejkami | Stwórz swoją naklejkę | Naklejki na ścianę",
  description:
    "Ręcznie wycinane naklejki. Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.",
  authors: [
    { name: "wesiu.dev", url: "https://wesiu.dev" },
    { name: "blackbell", url: "https://blackbellart.com/" },
  ],
  publisher: "wesiu.dev",
  keywords: [
    "naklejki ręcznie wycinane, naklejki na każdą okazję, naklejki na ścianę, naklejki dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki holograficzne, naklejki srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki na ścianę",
  ],
  icons: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};
export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const google = searchParams?.destination;
  if (google) {
    await incrementGoogleCounter();
  }
  return (
    <div className="">
      <LotteryWheel listOfPrizes={listOfPrizes} />
      <div className="">
        <div className="relative mt-[132px]  md:mt-[172px] lg:mt-20 w-full">
          <HeroSlider />
        </div>
        <div className="mt-12 lg:mt-24 h-max relative">
          <div className="flex flex-col-reverse lg:flex-row h-full w-full relative">
            <div className="lg:w-[60vw] xl:w-[50vw] lg:bg-white md:bg-[#f7faf7] rounded-xl rounded-tl-[80px] min-h-full">
              <Image
                src="/home-images/stickers.webp"
                width={1024}
                height={1024}
                alt="Nasze naklejki wieloryb"
                className="w-full h-full object-cover rounded-t-2xl rounded-b-2xl rounded-tl-[80px]"
              />
            </div>
            <div className="mb-12 lg:mb-0 flex flex-col lg:pl-4 xl:pl-12 font-coco text-zinc-800 min-h-full py-6">
              <h2 className="font-cardo text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold  drop-shadow-md shadow-black mb-6 mt-6 md:mt-0">
                Odkryj nasze naklejki
              </h2>
              <div className="flex flex-row">
                <FaHandScissors className="h-10 w-10 font-bold" />
                <div className="ml-3 flex flex-col mt-1">
                  <h3 className="font-bold text-lg sm:text-xl xl:text-2xl ">
                    <Link href="/about/o-naszych-naklejkach">
                      Ręcznie wycinane
                    </Link>
                  </h3>
                  <p className="text-zinc-500 text-sm 2xl:text-lg">
                    Dzięki czemu nasi klienci mogą zamawiać swoje ulubione
                    naklejki już od 1 sztuki!
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <FaShippingFast className="h-10 w-10 font-bold" />
                <div className="ml-3 flex flex-col mt-1">
                  <h3 className="font-bold text-lg sm:text-xl xl:text-2xl ">
                    Szybka i dostawa
                  </h3>
                  <p className="text-zinc-500 text-sm 2xl:text-lg">
                    Każde zamówienie traktujemy poważnie. Dbamy zarówno o jakość
                    jak i wydajność naszych usług.
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <GrLineChart className="h-10 w-10 font-bold" />
                <div className="ml-3 flex flex-col mt-1">
                  <h3 className="font-bold text-lg sm:text-xl xl:text-2xl ">
                    Wciąż się rozwijamy
                  </h3>
                  <p className="text-zinc-500 text-sm 2xl:text-lg">
                    Mimo dużej ilości zamówień, mamy czas na tworzenie nowych
                    naklejek. Wciąż rozwijamy i optymalizujemy nasz sklep.
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <Link
                  className="text-base xl:text-xl mt-3 mg:mt-5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-[#f87ff0b6] duration-300 text-white w-full lg:w-max font-bold flex flex-row items-center justify-center"
                  href="/sklep"
                  title="Otwórz sklep"
                >
                  Sprawdź sklep
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-12 lg:mt-24 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-zinc-800 font-bold sm:w-max mx-auto drop-shadow-xl shadow-black">
          Naklejkowe nowości!
        </h2>
        <TypesOfPaper typesOfPaper={typesOfPaper} />
        <ListOfCategories categories={categoriesArray} />
      </div>
    </div>
  );
}
const typesOfPaper = [
  {
    type: "gold",
    title: "Papier Holograficzny Złoty",
    description:
      "Wyjątkowy efekt holograficzny nadaje każdej naklejce niepowtarzalny blask i głębię.",
    image: "/home-images/gold-paper.webp",
    image2: "/home-images/gold.webp",
    title2: "Naklejki Złote",
    longDescription:
      "Nasze naklejki na złotym papierze holograficznym otwierają drzwi do świata pełnego blasku i wyrafinowanego piękna.",
    additional: [
      <>
        <strong className="text-xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Unikalność
        </strong>
        Każda naklejka stworzona na Papierze Holograficznym Złotym jest
        wyjątkowa, dzięki niepowtarzalnemu efektowi holograficznemu.
      </>,
      <>
        <strong className="text-xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Ekskluzywność
        </strong>
        Dzięki temu papierowi naklejki zyskują elegancję i luksusowy charakter.
      </>,
      <>
        <strong className="text-xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Druk Precyzyjny
        </strong>
        Papier jest doskonale przystosowany do precyzyjnego druku, gwarantując
        ostre detale i wysoką jakość obrazu
      </>,
    ],
  },

  {
    type: "silver",
    title: "Papier Holograficzny Srebrny",
    description:
      "Subtelność odbicić holograficznych nadają naklejce wyjątkowego blasku.",
    image: "/home-images/silver-paper.webp",
    image2: "/home-images/silver.webp",
    title2: "Naklejki Srebrne",
    longDescription:
      "Idealne rozwiązanie dla miłośników detali, którzy chcą, aby ich naklejki przyciągały spojrzenia i hipnotyzowały swoim niezwykłym wyglądem.",
    additional: [
      <>
        <strong className="text-xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Innowacyjność
        </strong>
        Oryginalny efekt holograficzny nadaje produktom niepowtarzalną i
        nowoczesną estetykę.
      </>,
      <>
        <strong className="text-xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Elegancja
        </strong>
        Srebrna barwa nadaje naklejkom ekskluzywny charakter, podkreślając ich
        wartość
      </>,
      <>
        <strong className="text-xl font-bold text-zinc-800 drop-shadow-xl shadow-black">
          Druk Precyzyjny
        </strong>
        Papier gwarantuje doskonałą jakość druku, co przekłada się na wyraziste
        detale i wysoką estetykę
      </>,
    ],
  },
];
