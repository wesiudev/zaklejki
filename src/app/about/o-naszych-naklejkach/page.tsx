import Link from "next/link";
import HeroAbout from "../HeroAbout";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zaklejki.pl - Kolekcja Wysokiej Jakości Naklejek",
  description:
    "Obejrzyj naszą wspaniałą i wciąż rozwijającą się kolekcję naklejek wysokiej jakości na Zaklejki.pl. Dostarczamy naklejki, którym przykładamy szczególną uwagę, wycinając je własnoręcznie i dbając o środowisko. Odkryj bogactwo naszych kolekcji, obejmujących szeroki zakres tematyczny - od abstrakcji po inspiracje przyrodnicze. Czytaj o Inspiracji Naklejkami i zajrzyj do naszego sklepu, aby znaleźć idealne naklejki dla siebie!",
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
        mainH1={"Nasze Neklejki"}
        mainP={
          "Na Zaklejki.pl obejrzysz naszą wspaniałą i wciąż rozwijającą się kolekcję naklejek wysokiej jakości."
        }
        firstH2="Własnoręczne wycinanie"
        secondP="Dostarczamy naklejki, którym przykładamy szczególną uwagę. Sami wycinamy nasze naklejki i dbamy o środowisko redukując odpady. Jesteśmy Twoim idealnym wyborem pod kątem jakości usług i kreatywności."
        secondH2="Tworzymy kolekcje"
        thirdP="Odkryj bogactwo naszych kolekcji naklejek, które obejmują szeroki zakres tematyczny - od abstrakcji po inspiracje przyrodnicze. Każda kolekcja została starannie zaprojektowana, aby sprostać różnym gustom i potrzebom naszych klientów."
        image={{
          src: "/about-images/anime-girl.webp",
          alt: "Naklejka/Wlepa Dziewczyna Estetyczna z Anime",
        }}
        image2={{
          src: "/about-images/bird.webp",
          alt: "Naklejka/Wlepa Piękny Ptaszek",
        }}
        image3={{
          src: "/about-images/cato-pokemon.webp",
          alt: "Naklejka/Wlepa Kot, który wygląda jak z Pokemon'ów",
        }}
      />

      <Link
        href="/about/inspiracja-naklejkami"
        className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center mb-6 hover:bg-[#f7a4f2b4] duration-300"
        title="Inspiruj się z naszymi naklejkami"
      >
        Czytaj o &quot;Inspiracji Naklejkami&quot;{" "}
        <FaArrowRightLong className="ml-3 h-6 w-8" />
      </Link>
      <Link
        href="/sklep"
        className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center mb-12 hover:bg-[#f7a4f2b4] duration-300"
        title="Wszystkie nasze naklejki"
      >
        Zajrzyj do sklepu
        <FaShoppingCart className="ml-3 h-6 w-8" />
      </Link>
    </>
  );
}
