import Link from "next/link";
import HeroAbout from "../HeroAbout";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaklejki.pl: Inspiracje i Dekoracje Naklejkami",
  description:
    "Odkryj bogaty zbiór inspiracji i kreatywnych zastosowań naszych naklejek. Przekształć swoje przestrzenie dzięki unikalnym wzorom i dodaj odrobinę osobistego stylu do swojego otoczenia. Czytaj historie klientów, znajdź inspirację i zajrzyj do naszego sklepu, by odkryć wszystkie nasze naklejki. Twórz własne projekty i wyrażaj swoją indywidualność za pomocą Zaklejki.pl!",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};
export default function Page() {
  return (
    <>
      <HeroAbout
        mainH1={"Inspiruj się z nami"}
        mainP={
          "Na Zaklejki.pl oferujemy bogaty zbiór inspiracji, która może towarzyszyć Tobie na co dzień. Naklej swoje wlepy na ściany, laptopa czy biurko."
        }
        firstH2="Kreatywne zastosowania"
        secondP="Dodaj odrobinę kreatywności do swojego laptopa, pokrywając go unikalnymi naklejkami. Stwórz własny wzór lub wybierz z naszych kolekcji, by wyrazić swoje zainteresowania i styl."
        secondH2="Unikalne dekoracje mebli"
        thirdP="Przemień zwykłe meble w unikalne dzieła sztuki, dodając do nich nasze naklejki. Stwórz efektowne detale na szafkach, stołach czy szafach, nadając im nowe życie."
        image={{
          src: "/about-images/closed-world.webp",
          alt: "Naklejka/Wlepa Piękny Świat W Słoiku",
        }}
        image2={{
          src: "/about-images/cornflakes-dragon.webp",
          alt: "Naklejka/Wlepa Smok Jedzący Płatki",
        }}
        image3={{
          src: "/about-images/flying-dragon.webp",
          alt: "Naklejka/Wlepa Lecący Smok",
        }}
      />
      <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-zinc-800 drop-shadow-xl shadow-black font-druk ">
        Historie klientów
      </h2>
      <p className="text-base lg:text-lg text-zinc-800 drop-shadow-xl shadow-black mt-3 text-center">
        Dowiedz się, jak nasi klienci wykorzystują nasze naklejki do tworzenia
        magicznych przestrzeni. Czytaj o projektach, które zrodziły się z ich
        kreatywności, inspirując innych do eksperymentowania z naszymi
        produktami. Podziel się swoimi historiami i doświadczeniami, inspirując
        społeczność do jeszcze większej ekspresji i indywidualności za pomocą
        naklejek.
      </p>
      <ul className="text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 drop-shadow-xl shadow-black mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl mb-4 font-druk">NAKLEJKA DO BIURA?</h3>
          <p>
            Stwórz inspirujący kącik w biurze, ozdabiając ścianę naklejkami w
            motywujących cytatach lub abstrakcyjnych wzorach. To doskonały
            sposób na podniesienie nastroju w miejscu pracy.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl mb-4 font-druk">NAKLEJKA NA TELEFON?</h3>
          <p>
            Przyklej nasze naklejki do telefonu, kubka czy powerbanku, aby
            wyróżnić się w tłumie. Twórz zestawy, które odzwierciedlają Twój
            osobisty styl.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl mb-4 font-druk">NAKLEJKA NA SAMOCHÓD?</h3>
          <p>
            Dla miłośników motoryzacji - ozdób swój samochód oryginalnymi
            naklejkami. Stwórz własny projekt lub wybierz coś z naszej kolekcji,
            by pojazd stał się unikatowy.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl mb-4 font-druk">NAKLEJKA DLA DZIECKA?</h3>
          <p>
            Udekoruj dziecięcy pokój za pomocą kolorowych i przyjaznych
            naklejek. Stwórz bajkowy krajobraz na ścianie lub dodaj urocze
            postacie do mebli.
          </p>
        </li>
      </ul>

      <Link
        href="/about/tworzenie-wlasnych-naklejek"
        className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center mb-6 hover:bg-[#f7a4f2b4] duration-300 mt-12"
        title="Twórz i drukuj własne naklejki"
      >
        Czytaj o &quot;Tworzeniu Własnych Naklejek&quot;{" "}
        <FaArrowRightLong className="ml-3 h-6 w-8" />
      </Link>
      <Link
        href="/sklep-z-naklejkami"
        className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center mb-12 hover:bg-[#f7a4f2b4] duration-300"
        title="Wszystkie nasze naklejki"
      >
        Zajrzyj do sklepu
        <FaShoppingCart className="ml-3 h-6 w-8" />
      </Link>
    </>
  );
}
