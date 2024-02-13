import Link from "next/link";
import HeroAbout from "../HeroAbout";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiEmojiStickerLine } from "react-icons/ri";

export default function Page() {
  return (
    <>
      <HeroAbout
        mainH1={"TWORZENIE WŁASNYCH NAKLEJEK"}
        mainP={
          "Stwórz naklejki, które są zupełnie wyjątkowe i niepowtarzalne. Personalizacja ze zdjęć pozwoli Ci uwiecznić chwile, które mają dla Ciebie szczególne znaczenie."
        }
        firstH2="PERSONALIZACJA ZE ZDJĘĆ"
        secondP="Rozbuduj swoją wyjątkowość, korzystając z możliwości tworzenia spersonalizowanych naklejek ze zdjęć. Prześlij nam swoje ulubione zdjęcie, a my zamienimy je na unikalną naklejkę, która doskonale odzwierciedli Twoją osobowość i chwile, które są dla Ciebie istotne."
        secondH2="TWORZENIE NAKLEJEK Z AI"
        thirdP="Zaplanuj podróż do przyszłości z naszą innowacyjną funkcją generowania naklejek za pomocą sztucznej inteligencji (AI). Wkrótce będziesz mógł stworzyć unikalne wzory, oparte na Twoich preferencjach, dzięki inteligentnym algorytmom, które dostosowują się do Twojego stylu."
        image={{
          src: "/about-images/galaxic-whale.webp",
          alt: "Naklejka/Wlepa Galaktyczny Wieloryb",
        }}
        image2={{
          src: "/about-images/lady-cold.webp",
          alt: "Naklejka/Wlepa Pani Lodu-Mrozu",
        }}
        image3={{
          src: "/about-images/mushroom-cat.webp",
          alt: "Naklejka/Wlepa Kot, Kot Grzybek",
        }}
      />
      <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-zinc-800 drop-shadow-xl shadow-black font-druk ">
        NIE BÓJ SIĘ ZACZĄĆ
      </h2>
      <p className="text-base lg:text-lg text-zinc-800 drop-shadow-xl shadow-black font-druk mt-3 text-center">
        Rozpocznij niezapomnianą przygodę z personalizacją naklejek, gdzie Twoja
        kreatywność staje się głównym bohaterem. Odkryj magiczny świat
        możliwości, który oferuje tworzenie spersonalizowanych naklejek ze
        zdjęć, ukazując niepowtarzalne fragmenty Twojego życia. Pozwól każdej
        naklejce opowiedzieć niezwykłą historię, zaczynając od inspirujących
        chwil, przez wyjątkowe wspomnienia, aż po osobiste wyrażenie Twojej
        unikalnej tożsamości.
      </p>
      <ul className="text-center text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 drop-shadow-xl shadow-black font-druk mt-12">
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mb-4">Unikalność</h3>
          <p>
            Stwórz naklejki, które są zupełnie wyjątkowe i niepowtarzalne.
            Personalizacja ze zdjęć pozwoli Ci uwiecznić chwile, które mają dla
            Ciebie szczególne znaczenie.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mb-4">
            Wyrażenie Osobowości
          </h3>
          <p>
            Nasze naklejki to doskonały sposób na wyrażenie swojej osobowości i
            zainteresowań. Dodaj do nich elementy, które najlepiej
            odzwierciedlają to, kim jesteś.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mb-4">
            Prezent Personalizowany
          </h3>
          <p>
            Szukasz idealnego prezentu? Zaskocz bliską osobę spersonalizowanymi
            naklejkami. Każdy projekt może być dopasowany do gustu obdarowanego.
          </p>
        </li>
        <li className="mt-12 flex flex-col">
          <h3 className="text-3xl xl:text-4xl 2xl:text-5xl mb-4">
            Szybki Proces
          </h3>
          <p>
            Dzięki naszym intuicyjnym narzędziom personalizacyjnym, proces
            tworzenia własnych naklejek jest szybki i prosty. W kilku krokach
            zamień swoje pomysły w rzeczywistość.
          </p>
          <p className="mt-6">
            Zaplanuj przyszłość swoich personalizacji. Wprowadzimy funkcję
            generowania naklejek za pomocą sztucznej inteligencji (AI), aby
            jeszcze bardziej dostosować się do Twoich oczekiwań i stworzyć coś
            wyjątkowego.
          </p>
        </li>
      </ul>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 my-12">
        <Link
          href="/about/projektanci-naklejek"
          className="p-4 font-bold text-4xl flex flex-row items-center justify-center w-full bg-[#F7A4F2] rounded-3xl text-white text-center hover:bg-[#f7a4f2b4] duration-300"
          title="Dołącz do nas jako artysta/designer"
        >
          Czytaj o &quot;Współpracy z nami&quot;{" "}
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
