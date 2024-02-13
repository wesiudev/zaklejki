import HeroSlider from "@/components/HeroSlider";
import LotteryWheel from "@/components/LotteryWheel";
import { listOfPrizes } from "@/components/listOfPrizes";
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
export default async function Page() {
  return (
    <div className="">
      <LotteryWheel listOfPrizes={listOfPrizes} />
      <div className="">
        <div className="relative mt-[132px]  md:mt-[172px] lg:mt-20 w-full">
          <HeroSlider />
        </div>
        <div className="mt-12 lg:mt-24 h-max relative">
          <div className="flex flex-col-reverse lg:flex-row h-full w-full relative">
            <div className="lg:w-[60vw] xl:w-[50vw] h-full lg:bg-white md:bg-[#f7faf7] rounded-xl rounded-tl-[80px]">
              <Image
                src="/home-images/stickers.webp"
                width={1024}
                height={1024}
                alt=""
                className="w-full  h-auto rounded-t-2xl rounded-b-2xl rounded-tl-[80px]"
              />
            </div>
            <div className="mb-12 lg:mb-0 flex flex-col lg:pl-4 xl:pl-12 font-coco text-zinc-800 lg:sticky lg:top-[200px] h-max">
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
                  className="text-base xl:text-xl mt-3 mg:mt-5 px-4 py-2 rounded-lg bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-full lg:w-max font-bold flex flex-row items-center justify-center"
                  href="/sklep-z-naklejkami"
                  title="Otwórz sklep"
                >
                  Sprawdź sklep
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-24 pb-12">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-zinc-800 font-bold sm:w-max mx-auto drop-shadow-xl shadow-black">
            Naklejkowe nowości!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6 mt-6 lg:mt-10">
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70 duration-1000">
                <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
                  Papier Holograficzny Złoty
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
                </h3>
                <div className="w-full relative overflow-hidden pb-24">
                  <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                    Wyjątkowy efekt holograficzny nadaje każdej naklejce
                    niepowtarzalny blask i głębię.
                  </p>
                </div>
              </div>
              <Image
                src="/home-images/gold-paper.webp"
                width={1024}
                height={1024}
                alt=""
                className="group-hover:scale-125 group-hover:rotate-3 duration-1000"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden mt-6 lg:mt-0 group">
              <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70 duration-1000">
                <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
                  Papier Holograficzny Srebrny
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
                </h3>
                <div className="w-full relative overflow-hidden pb-24">
                  <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                    Subtelność odbicić holograficznych nadają naklejce
                    wyjątkowego blasku.
                  </p>
                </div>
              </div>
              <Image
                src="/home-images/silver-paper.webp"
                width={1024}
                height={1024}
                alt=""
                className="group-hover:scale-125 group-hover:rotate-3 duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
