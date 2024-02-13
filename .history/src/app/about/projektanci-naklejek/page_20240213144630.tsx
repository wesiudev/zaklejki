import Link from "next/link";
import HeroAbout from "../HeroAbout";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiEmojiStickerLine } from "react-icons/ri";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Współpraca z Zaklejki.pl - Twórz z Nami Unikalne Kolekcje Naklejek",
  description:
    "Zapraszamy do współpracy z artystami, projektantami i firmami, aby tworzyć unikalne kolekcje naklejek, które zachwycą naszych klientów. Oferujemy możliwość stworzenia spersonalizowanych naklejek reklamowych i promocyjnych dla Twojej firmy, idealnie dopasowanych do Twoich potrzeb.",
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
        mainH1={"współpraca"}
        mainP={
          "Współpracujemy z artystami, projektantami i firmami aby tworzyć unikalne kolekcje naklejek."
        }
        firstH2="Współpraca z Artystami i Projektantami"
        secondP="Poszukujemy kreatywnych umysłów z pasją do designu! Jeśli jesteś artystą lub projektantem, zapraszamy do nawiązania współpracy. Twórz z nami unikalne kolekcje naklejek, które zachwycą naszych klientów. Dzięki partnerstwu z nami, masz szansę wprowadzić swoje koncepcje na rynek i podzielić się swoim talentem z szeroką publicznością."
        secondH2="Inspirujące Projekty i Nowe Możliwości"
        thirdP="Nasze partnerstwo to nie tylko tworzenie produktów, to także inspirująca podróż przez świat designu. Wspólnie możemy rozwijać nowe pomysły, eksperymentować z formami i tworzyć kolekcje, które przekraczają granice konwencji. Dołącz do naszej społeczności kreatywnych umysłów i razem odkrywajmy nowe możliwości w świecie naklejek."
        image={{
          src: "/about-images/phoenix-red.webp",
          alt: "Naklejka/Wlepa Feniks W Płomieniach",
        }}
        image2={{
          src: "/about-images/lady-cold.webp",
          alt: "Naklejka/Wlepa Pikachu W Walce",
        }}
        image3={{
          src: "/about-images/ship-artwork.webp",
          alt: "Naklejka/Wlepa Statek Dzieło Sztuki",
        }}
      />
      <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-zinc-800 drop-shadow-xl shadow-black font-druk ">
        WSPÓŁPRACA DLA FIRM
      </h2>
      <p className="text-base lg:text-lg text-zinc-800 drop-shadow-xl shadow-black font-druk mt-3 text-center">
        Rozwijaj swoją markę za pomocą unikalnych naklejek reklamowych i
        promocyjnych, dostosowanych do Twoich potrzeb. Nasza współpraca z
        firmami to nie tylko skuteczna strategia marketingowa, ale także szansa
        na wyróżnienie się na rynku i przyciągnięcie uwagi klientów. Skorzystaj
        z naszych usług, aby stworzyć spersonalizowane naklejki, które będą
        doskonałym nośnikiem Twojego przekazu reklamowego.
      </p>
      <ul className="text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 drop-shadow-xl shadow-black font-druk mt-12">
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mb-4">
            Indywidualne Projekty dla Zintegrowanej Kampanii
          </h3>
          <p>
            Oferujemy firmom możliwość stworzenia indywidualnych projektów
            naklejek, idealnie dopasowanych do kampanii reklamowej. Dzięki
            naszym innowacyjnym rozwiązaniom, zyskasz oryginalne narzędzie
            promocyjne, które wyróżni Cię na tle konkurencji.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mb-4">
            Skuteczność i Kreatywność
          </h3>
          <p>
            Nasze spersonalizowane naklejki to nie tylko efektywne narzędzie
            marketingowe, ale także kreatywny sposób na zwrócenie uwagi
            klientów. Stawiamy na unikalne wzory i wysoką jakość, zapewniając,
            że Twoja firma będzie kojarzona z oryginalnością i innowacyjnością.
          </p>
        </li>
      </ul>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 my-12">
        <Link
          href="/about/kontakt-z-zaklejkami"
          className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center hover:bg-[#f7a4f2b4] duration-300"
          title="Skontaktuj się"
        >
          Skontaktuj się
          <FaArrowRightLong className="ml-3 h-6 w-8" />
        </Link>
        <Link
          href="/sklep-z-naklejkami"
          className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center hover:bg-[#f7a4f2b4] duration-300"
          title="Wszystkie nasze naklejki"
        >
          Zajrzyj do sklepu
          <FaShoppingCart className="ml-3 h-6 w-8" />
        </Link>
        <Link
          href="/tworzenie-naklejek"
          className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center hover:bg-[#f7a4f2b4] duration-300"
          title="Wszystkie nasze naklejki"
        >
          Stwórz własną naklejkę
          <RiEmojiStickerLine className="ml-3 h-6 w-8" />
        </Link>
      </div>
    </>
  );
}
