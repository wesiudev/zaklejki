/* eslint-disable @next/next/no-img-element */

import { getShopProduct } from "@/lib/getShopProduct";
import Link from "next/link";
import { FaArrowRight, FaShippingFast } from "react-icons/fa";
import { polishToEnglish } from "@/lib/polishToEnglish";
import RandomProductList from "@/components/RandomProductList";
import ProductInteractions from "./ProductInteractions";
import ImageFullSize from "@/components/ImageFullSize";
import { AiOutlineStar } from "react-icons/ai";
import { RiEmojiStickerLine } from "react-icons/ri";
import { removeNumbersFromString } from "@/lib/removeNumbersFromString";
import { getProductsByCategory } from "@/lib/getProductsByCategory";
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";
import Image from "next/image";
export async function generateStaticParams() {
  const products = await getShopProduct();
  return products?.products?.map((product: any) => ({
    slug: polishToEnglish(product.title),
  }));
}

export default async function Page({ params }: { params: any }) {
  const product = await getShopProduct(params.slug);
  const products = await getShopProduct();
  const categoryProductsOne = await getProductsByCategory(
    product.categories[0]
  );
  const categoryProductsTwo = await getProductsByCategory(
    product.categories[1]
  );
  function getRandomProducts(products: any, count: any) {
    const shuffledIndices = generateRandomIndices(products.length);
    const selectedProducts = [];

    for (let i = 0; i < count && i < shuffledIndices.length; i++) {
      const randomIndex = shuffledIndices[i];
      selectedProducts.push(products[randomIndex]);
    }

    return selectedProducts;
  }

  function generateRandomIndices(length: any) {
    const indices = Array.from({ length }, (_, index) => index);

    // Fisher-Yates shuffle
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    return indices;
  }
  return (
    <>
      <div className="mb-8 mt-24 lg:mt-0 text-gray-500 text-sm">
        /
        <Link className="px-0.5" href="/sklep-z-naklejkami">
          sklep-z-naklejkami
        </Link>
        /
        <Link
          className="px-0.5"
          href={`/sklep-z-naklejkami/${polishToEnglish(product.categories[0])}`}
        >
          {polishToEnglish(product.categories[0])}
        </Link>
        /<span className="px-0.5">{polishToEnglish(product.title)}</span>
      </div>
      <main className="flex flex-col-reverse lg:grid lg:grid-cols-2">
        <div className="flex flex-col lg:pb-12">
          <div className="flex-col gap-3 h-max relative xl:top-0 hidden lg:flex">
            <ImageFullSize product={product} />
            <div className="group overflow-hidden rounded-3xl">
              <div className="relative w-full h-full group-hover:scale-150 duration-700 ease-in-out">
                <Image
                  src="/slugImages/macbookmockup1.webp"
                  width={1024}
                  height={1024}
                  alt={`Mockup Naklejki ${product.title}`}
                  title={`Mockup Naklejki ${product.title}`}
                  className=""
                />
                <Image
                  priority
                  src={product.image_source}
                  width={150}
                  height={150}
                  title="Mała skala obrazek na mockup'ie"
                  alt="Mała skala obrazek na mockup'ie"
                  className="h-auto w-[13%] absolute right-[34%] top-[54.5%] -translate-y-1/2 z-[50] shadow-sm shadow-black"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-12 flex-col text-zinc-800 drop-shadow-xl shadow-black space-y-4">
            <div className="flex flex-row h-max">
              <div className="w-max bg-[#F87FF0] rounded-l-3xl px-2 min-h-full flex items-center justify-center">
                <FaShippingFast className="h-10 w-10 font-bold text-white" />
              </div>
              <div className="flex flex-col bg-[#f5a5ee28] rounded-r-3xl p-2 lg:p-3">
                <h2 className="font-bold text-lg lg:text-2xl mb-2">
                  Darmowa dostawa
                </h2>
                <p className="text-zinc-500 text-sm xl:text-lg">
                  Zamówienia powyżej 100 złotych kwalifikują się do darmowej
                  dostawy, co sprawia, że zdobienie swoich przedmiotów staje się{" "}
                  <strong>jeszcze bardziej korzystne</strong>.
                </p>
              </div>
            </div>
            <div className="flex flex-row h-max">
              <div className="w-max bg-[#F87FF0] rounded-l-3xl px-2 min-h-full flex items-center justify-center">
                <AiOutlineStar className="h-10 w-10 font-bold text-white" />
              </div>
              <div className="flex flex-col bg-[#f5a5ee28] rounded-r-3xl p-2 lg:p-3">
                <h2 className="font-bold text-lg lg:text-2xl mb-2">
                  Estetyczny design
                </h2>
                <p className="text-zinc-500 text-sm xl:text-lg">
                  Oferujemy <strong>różnorodne wzory</strong>, które pozwolą Ci
                  dopasować naklejkę do Twojego stylu. Od abstrakcyjnych motywów
                  po urocze ilustracje – mamy wszystko, co potrzebne do
                  stworzenia unikalnej aranżacji.
                </p>
              </div>
            </div>
            <div className="flex flex-row h-max">
              <div className="w-max bg-[#F87FF0] rounded-l-3xl p-2 min-h-full flex items-center justify-center">
                <RiEmojiStickerLine className="h-10 w-10 font-bold text-white" />
              </div>
              <div className="flex flex-col bg-[#f5a5ee28] rounded-r-3xl p-2 lg:p-3">
                <h2 className="font-bold text-lg lg:text-2xl mb-2">
                  Łatwe aplikowanie
                </h2>
                <p className="text-zinc-500 text-sm xl:text-lg">
                  Naklejki są łatwe do przyklejania i usuwania, nie
                  pozostawiając śladów ani uszkodzeń. Dzięki temu możesz{" "}
                  <strong> zmieniać ich położenie</strong> i tworzyć nowe
                  kompozycje wedle własnego uznania.
                </p>
              </div>
            </div>

            <p className="mt-4">
              Oferujemy również{" "}
              <Link
                title="Tworzenie własnych naklejek"
                target="_blank"
                href="/about/tworzenie-własnych-naklejek"
                className="text-[#F87FF0]"
              >
                możliwość stworzenia własnej, spersonalizowanej naklejki
              </Link>
              . Wystarczy przesłać nam swój projekt, a my dostarczymy Ci
              unikatową naklejkę, która idealnie odzwierciedli Twój indywidualny
              styl. Pozwól swojej kreatywności rozkwitać i nadaj swoim
              przedmiotom niepowtarzalny charakter dzięki{" "}
              <Link
                title="O naszych naklejkach"
                target="_blank"
                href="/about/o-naszych-naklejkach"
                className="text-[#F87FF0]"
              >
                naszym ozdobnym naklejkom
              </Link>
              . Zamów już teraz i spraw, by codzienność była pełna kolorów i
              wyrazistych wzorów!
            </p>
            <Link
              href="/tworzenie-naklejek"
              title="O tworzeniu własnych naklejek"
              className="text-lg p-3 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] text-white font-bold w-max"
            >
              Stwórz własną naklejkę
            </Link>
          </div>
          {/* <div className="mt-12 flex-col">
            <Link
              href="/sklep-z-naklejkami"
              title="Do sklepu z naklejkami"
              target="_blank"
              className="flex flex-row items-center text-2xl xl:text-3xl group font-bold mb-6 text-zinc-800 drop-shadow-xl shadow-black"
            >
              Przeglądaj{" "}
              <FaArrowRight className="ml-2 text-lg xl:text-xl group-hover:translate-x-1.5 mt-[1px] xl:mt-[3px]  duration-200" />
            </Link>
            <RandomProductList
              products={getRandomProducts(products?.products, 18)}
              length={products?.products?.length}
              type={"all"}
              category={"all"}
            />
          </div>
          <div className="mt-12 flex-col">
            <Link
              href={`/sklep-z-naklejkami/${polishToEnglish(
                product.categories[0]
              )}`}
              target="_blank"
              title={`Więcej z kategrii ${product.categories[0]}`}
              className="flex flex-row items-center text-2xl xl:text-3xl group font-bold mb-6 text-zinc-800 drop-shadow-xl shadow-black"
            >
              {capitalizeFirstLetter(product.categories[0])}
              <FaArrowRight className="ml-2 text-lg xl:text-xl group-hover:translate-x-1.5 mt-[1px] xl:mt-[3px]  duration-200" />
            </Link>
            <RandomProductList
              products={getRandomProducts(categoryProductsOne, 18)}
              length={categoryProductsOne?.length}
              type={`0`}
              category={product.categories[0]}
            />
          </div>
          <div className="mt-12 flex-col">
            <Link
              href={`/sklep-z-naklejkami/${polishToEnglish(
                product.categories[1]
              )}`}
              target="_blank"
              title={`Więcej z kategrii ${product.categories[1]}`}
              className="flex flex-row items-center text-2xl xl:text-3xl group font-bold mb-6 text-zinc-800 drop-shadow-xl shadow-black"
            >
              {capitalizeFirstLetter(product.categories[1])}
              <FaArrowRight className="ml-2 text-lg xl:text-xl group-hover:translate-x-1.5 mt-[1px] xl:mt-[3px]  duration-200" />
            </Link>
            <RandomProductList
              products={getRandomProducts(categoryProductsTwo, 18)}
              length={categoryProductsTwo?.length}
              type={`1`}
              category={product.categories[1]}
            />
          </div> */}
        </div>
        <div className="h-full relative">
          <div className="mt-12 lg:mt-0 lg:pl-8 xl:pl-10 2xl:pl-12 flex-col sticky top-32">
            <h1 className="text-3xl xl:text-5xl font-bold mt-4 md:mt-0">
              {removeNumbersFromString(product?.title)}
            </h1>
            <div className="flex flex-row items-center -ml-2 flex-wrap mt-2">
              {product?.categories?.map((category: any, i: any) => (
                <Link
                  href={`/sklep-z-naklejkami/${polishToEnglish(category)}`}
                  title={`Przejdź do kategorii ${category}`}
                  className={`mb-3 text-white rounded-3xl px-3 bg-[#F87FF0] hover:bg-[#f87ff0ad] duration-300 hover:scale-105 text-sm ml-2`}
                  key={i}
                  target="_blank"
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="mb-3">
              <p className="text-zinc-800 drop-shadow-xl shadow-black">
                Ozdobne naklejki to doskonały sposób, aby nadać swoim
                przedmiotom osobisty i unikalny charakter. Nasze naklejki są nie
                tylko estetyczne, ale również odporne uszkodzenia, co sprawia,
                że są{" "}
                <Link
                  href="/about/inspiracja-naklejkami"
                  className=" text-[#F87FF0]"
                  target="_blank"
                  title="Inspiruj się naklejkami"
                >
                  idealne do ozdabiania laptopów, butelek, telefonów
                </Link>{" "}
                czy innych przedmiotów codziennego użytku.
              </p>
            </div>
            <div className="lg:hidden mb-6">
              <ImageFullSize product={product} />
              <div className="grid grid-cols-1 mt-6">
                <div className="relative w-full h-full">
                  <Image
                    src="/slugImages/macbookmockup1.webp"
                    width={1024}
                    height={1024}
                    title={`Mockup naklejki ${product.title}`}
                    alt={`Mockup naklejki ${product.title}`}
                    className="rounded-3xl"
                  />
                  <Image
                    priority
                    src={product.image_source}
                    width={150}
                    height={150}
                    title="Mała skala obrazek na mockup'ie"
                    alt="Mała skala obrazek na mockup'ie"
                    className="h-auto w-[15%] absolute right-[33.5%] top-[55%] -translate-y-1/2 z-[50] shadow-sm shadow-black"
                  />
                </div>
              </div>
            </div>
            <ProductInteractions product={product} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const product = await getShopProduct(params.slug);

  if (product)
    return {
      keywords: `naklejki ${product.categories[0]}, naklejki ${product.categories[0]} ręcznie wycinane, naklejki ${product.categories[0]} na każdą okazję, naklejki ${product.categories[0]} na ścianę, naklejki ${product.categories[0]} dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki ${product.categories[0]} holograficzne, naklejki ${product.categories[0]} srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki ${product.categories[0]} na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
      title: `Zaklejki.pl: Sklep z Naklejkami - ${removeNumbersFromString(
        product.title
      )}`,
      description: `Ręcznie wycinana ${removeNumbersFromString(
        product.title
      )} - Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
      openGraph: {
        keywords: `naklejki ${product.categories[0]}, naklejki ${product.categories[0]} ręcznie wycinane, naklejki ${product.categories[0]} na każdą okazję, naklejki ${product.categories[0]} na ścianę, naklejki ${product.categories[0]} dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki ${product.categories[0]} holograficzne, naklejki ${product.categories[0]} srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki ${product.categories[0]} na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
        type: "website",
        url: "https://zaklejki.pl",
        title: `Zaklejki.pl: Sklep z Naklejkami - ${removeNumbersFromString(
          product.title
        )}`,
        description: `Ręcznie wycinana ${removeNumbersFromString(
          product.title
        )} - Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
        siteName: "zaklejki",
        images: [
          {
            url: "/zaklejkiLogo2.png",
          },
        ],
      },
    };
}
