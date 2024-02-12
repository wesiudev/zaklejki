import CheckoutSummary from "./CheckoutSummary";

export default function Page() {
  return (
    <div className="pb-12">
      <CheckoutSummary />
    </div>
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
