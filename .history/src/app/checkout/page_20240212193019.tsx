import { Metadata } from "next";
import CheckoutSummary from "./CheckoutSummary";

export default function Page() {
  return (
    <div className="pb-12">
      <CheckoutSummary />
    </div>
  );
}

export const metadata: Metadata = {
  keywords: `naklejki, naklejki ręcznie wycinane, naklejki na każdą okazję, naklejki na ścianę, naklejki dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki holograficzne, naklejki srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
  title: `Zaklejki.pl: Sklep z Naklejkami - Koszyk`,
  description: `Kup jedną z naszych naklejek lub twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
  openGraph: {
    type: "website",
    url: "https://zaklejki.pl",
    title: `Zaklejki.pl: Sklep z Naklejkami - Koszyk`,
    description: `Kup jedną z naszych naklejek lub twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
    siteName: "zaklejki",
    images: [
      {
        url: "/zaklejkiLogo2.png",
      },
    ],
  },
};
