import Link from "next/link";
import ShopProducts from "../../components/ShopProducts";
import { getShopProduct } from "@/lib/getShopProduct";
import { categoriesArray } from "@/components/categories";
import { Metadata } from "next";

export default async function Page() {
  const { products } = await getShopProduct();
  return (
    <>
      <ShopProducts products={products} categories={categoriesArray} />
    </>
  );
}

export const metadata: Metadata = {
  keywords: `naklejki, naklejki ręcznie wycinane, naklejki na każdą okazję, naklejki na ścianę, naklejki dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki holograficzne, naklejki srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
  title: `Zaklejki.pl: Sklep z Naklejkami - Przeglądaj`,
  description: `Kup jedną z naszych naklejek lub twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
  openGraph: {
    type: "website",
    url: "https://zaklejki.pl",
    title: `Zaklejki.pl: Sklep z Naklejkami - Przeglądaj`,
    description: `Kup jedną z naszych naklejek lub twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
    siteName: "zaklejki",
    images: [
      {
        url: "/zaklejkiLogo2.png",
      },
    ],
  },
};
