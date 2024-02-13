import Link from "next/link";
import HeroAbout from "./HeroAbout";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaklejki.pl: Nasza Historia",
  description:
    "Rozwijamy naszą pasję do tworzenia naklejek od wielu lat, zaczynając od skromnych początków w domowym warsztacie. Nasza misja jest jasna - dostarczać naklejki, które nie tylko ozdabiają, ale również wyrażają osobowość i kreatywność każdej osoby.",
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
        mainH1={"Nasza historia - Zaklejki.pl"}
        mainP={
          "Rozwijamy naszą pasję do tworzenia naklejek od wielu lat, zaczynając od skromnych początków w domowym warsztacie."
        }
        firstH2="Misja i wartości"
        secondP="Nasza misja jest jasna - dostarczać naklejki, które nie tylko ozdabiają, ale również wyrażają osobowość i kreatywność każdej osoby. Stawiamy na najwyższą jakość materiałów, innowacyjne wzory i ekologiczne podejście do produkcji. Nasze wartości obejmują zrównoważony rozwój, pasję do sztuki oraz zaangażowanie w tworzenie produktów, które przekraczają oczekiwania naszych klientów."
        secondH2="Rozwijamy się!"
        thirdP="Dziś nasza historia to pełna wyzwań podróż, podczas której przekształciliśmy się w cenioną markę oferującą szeroką gamę unikalnych produktów."
        image={{
          src: "/about-images/dragon-sticker.webp",
          alt: "Naklejka Smok Niebieski Dumny",
        }}
        image2={{
          src: "/about-images/pretty-cat.webp",
          alt: "Naklejka/Wlepa Kot Z Maslanym Spojrzeniem",
        }}
        image3={{
          src: "/about-images/shrek.webp",
          alt: "Naklejka/Wlepa Shrek Nie Patrzy Na Wybuchy",
        }}
      />
      <Link
        href="/about/o-naszych-naklejkach"
        className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center mb-6 hover:bg-[#f7a4f2b4] duration-300"
        title="Informacje o naszych naklejkach"
      >
        Czytaj &quot;O Naszych Naklejkach&quot;{" "}
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
