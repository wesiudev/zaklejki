import Link from "next/link";
import { FaBook, FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiEmojiStickerLine } from "react-icons/ri";
export default function About({ setHovered }: { setHovered: any }) {
  return (
    <div className="fixed left-0 top-[69px] border-t border-gray-300 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 h-max w-screen shadow-sm bg-white shadow-zinc-300 rounded-b-lg">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        <Link
          href="/about/"
          title="Dowiedz się więcej o nas"
          className="rounded-3xl overflow-hidden border-2 border-[#F87FF0] hover:bg-[#f5a5ee28] flex flex-col"
          onClick={() => setHovered(-1)}
        >
          <div className="flex flex-row items-center h-full">
            <div className="h-full p-3 flex items-center justify-center bg-indigo-600 ">
              {" "}
              <FaBook className="h-7 w-7 text-white" />
            </div>{" "}
            <div className="flex flex-col p-3 lg:p-4">
              <h2 className="text-xl xl:text-2xl font-bold text-zinc-800">
                {" "}
                Czytaj o nas
              </h2>
              <p className="text-gray-500 text-sm xl:text-base">
                Nasz utalentowany zespół twórców pracuje z pasją nad
                projektowaniem unikalnych naklejek, podkreślając różnorodność
                społeczności.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/about/o-naszych-naklejkach"
          title="Czytaj o naszych naklejkach"
          className="rounded-3xl overflow-hidden border-2 border-[#F87FF0] hover:bg-[#f5a5ee28] flex flex-col"
          onClick={() => setHovered(-1)}
        >
          <div className="flex flex-row items-center h-full">
            <div className="h-full p-3 flex items-center justify-center bg-indigo-600 ">
              {" "}
              <RiEmojiStickerLine className="h-7 w-7 text-white" />
            </div>{" "}
            <div className="flex flex-col p-3 lg:p-4">
              <h2 className="text-xl xl:text-2xl font-bold text-zinc-800">
                {" "}
                Nasze naklejki
              </h2>
              <p className="text-gray-500 text-sm xl:text-base">
                Rozwijamy pasję do tworzenia naklejek od lat, zaczynając od
                domowego warsztatu, by stać się cenioną marką oferującą unikalne
                produkty.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/about/inspiracja-naklejkami"
          title="Zainspiruj się z nami, zaklejkami"
          className="rounded-3xl overflow-hidden border-2 border-[#F87FF0] hover:bg-[#f5a5ee28] flex flex-col"
          onClick={() => setHovered(-1)}
        >
          <div className="flex flex-row items-center h-full">
            <div className="h-full p-3 flex items-center justify-center bg-indigo-600 ">
              {" "}
              <RiEmojiStickerLine className="h-7 w-7 text-white" />
            </div>{" "}
            <div className="flex flex-col p-3 lg:p-4">
              <h2 className="text-xl xl:text-2xl font-bold text-zinc-800">
                {" "}
                Inspiracja naklejkami
              </h2>
              <p className="text-gray-500 text-sm xl:text-base">
                Odkryj możliwość tworzenia spersonalizowanych naklejek,
                odzwierciedlających Twoją wyjątkową osobowość.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/about/tworzenie-wlasnych-naklejek"
          title="Stwórz własną naklejkę"
          className="rounded-3xl overflow-hidden border-2 border-[#F87FF0] hover:bg-[#f5a5ee28] flex flex-col"
          onClick={() => setHovered(-1)}
        >
          <div className="flex flex-row items-center h-full">
            <div className="h-full p-3 flex items-center justify-center bg-indigo-600 ">
              {" "}
              <RiEmojiStickerLine className="h-7 w-7 text-white" />
            </div>{" "}
            <div className="flex flex-col p-3 lg:p-4">
              <h2 className="text-xl xl:text-2xl font-bold text-zinc-800">
                Tworzenie własnych naklejek
              </h2>
              <p className="text-gray-500 text-sm xl:text-base">
                Znajdź inspirację do kreatywnego wykorzystania naszych narzędzi
                do tworzenia naklejek.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/about/projektanci-naklejek"
          title="Współpracuj z nami"
          className="rounded-3xl overflow-hidden border-2 border-[#F87FF0] hover:bg-[#f5a5ee28] flex flex-col"
          onClick={() => setHovered(-1)}
        >
          <div className="flex flex-row items-center h-full">
            <div className="h-full p-3 flex items-center justify-center bg-indigo-600 ">
              {" "}
              <FaUserGroup className="h-7 w-7 text-white" />
            </div>{" "}
            <div className="flex flex-col p-3 lg:p-4">
              <h2 className="text-xl xl:text-2xl font-bold text-zinc-800">
                {" "}
                Współpraca
              </h2>
              <p className="text-gray-500 text-sm xl:text-base">
                Współpracujemy z artystami i projektantami, aby tworzyć unikalne
                kolekcje naklejek. Jeśli jesteś kreatywnym umysłem z pasją do
                designu, zapraszamy do nawiązania współpracy.
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/about/kontakt-z-zaklejkami"
          title="Skontaktuj się"
          className="rounded-3xl overflow-hidden border-2 border-[#F87FF0] hover:bg-[#f5a5ee28] flex flex-col"
          onClick={() => setHovered(-1)}
        >
          <div className="flex flex-row items-center h-full">
            <div className="h-full p-3 flex items-center justify-center bg-indigo-600 ">
              {" "}
              <FaUser className="h-7 w-7 text-white" />
            </div>{" "}
            <div className="flex flex-col p-3 lg:p-4">
              <h2 className="text-xl xl:text-2xl font-bold text-zinc-800">
                {" "}
                Kontakt
              </h2>
              <p className="text-gray-500 text-sm xl:text-base">
                Masz pytania, sugestie lub chcesz dowiedzieć się więcej na temat
                naszych naklejek?
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
