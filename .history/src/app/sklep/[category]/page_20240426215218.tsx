// category - may be category of a sticker eg. cat, dog, etc. or category of a product eg. for phone, for laptop, etc.
import ShopProducts from "@/components/ShopProducts";
import { categoriesArray } from "@/components/categories";
import { getProductsByCategory } from "@/lib/getProductsByCategory";

export async function generateStaticParams() {
  return categoriesArray.map((cat: any) => ({
    category: cat.category,
  }));
}

export default async function Page({ params }: { params: any }) {
  const products = await getProductsByCategory(params.category);
  const category = categoriesArray.find(
    (cat) => cat.category === params.category
  );
  return (
    <>
      {
        <ShopProducts
          products={products}
          isSlug={true}
          slug={category}
          categories={categoriesArray}
        />
      }
    </>
  );
}

export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const products = await getProductsByCategory(params.category);

  if (products)
    return {
      keywords: `naklejki ${params.category}, naklejki ${params.category} ręcznie wycinane, naklejki ${params.category} na każdą okazję, naklejki ${params.category} na ścianę, naklejki ${params.category} dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki ${params.category} holograficzne, naklejki ${params.category} srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki ${params.category} na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
      title: `Zaklejki.pl: ${
        categoriesArray.find((cat) => cat.category === params.category)?.h1
      } - ${products?.length} naklejek`,
      description: `Ręcznie wycinane ${
        categoriesArray.find((cat) => cat.category === params.category)?.h1
      } - Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
      openGraph: {
        keywords: `naklejki ${params.category}, naklejki ${params.category} ręcznie wycinane, naklejki ${params.category} na każdą okazję, naklejki ${params.category} na ścianę, naklejki ${params.category} dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki ${params.category} holograficzne, naklejki ${params.category} srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki ${params.category} na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
        type: "website",
        url: "https://zaklejki.pl",
        title: `Zaklejki.pl: ${
          categoriesArray.find((cat) => cat.category === params.category)?.h1
        } - ${products?.length} naklejek`,
        description: `Ręcznie wycinane ${
          categoriesArray.find((cat) => cat.category === params.category)?.h1
        } - Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
        siteName: "zaklejki",
        images: [
          {
            url: "/zaklejkiLogo2.png",
          },
        ],
      },
    };
}
