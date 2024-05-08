// category - may be category of a sticker eg. cat, dog, etc. or category of a product eg. for phone, for laptop, etc.
import ShopProducts from "@/components/ShopProducts";
import { categoriesArray } from "@/components/categories";
import { getProductsByCategory } from "@/lib/getProductsByCategory";

export async function generateStaticParams() {
  try {
    return categoriesArray.map((cat: any) => ({
      category: cat.category,
    }));
  } catch (error) {
    console.error(
      "Error generating static params in Shop/[category]/page: ",
      error
    );
    throw error;
  }
}

export default async function Page({ params }: { params: any }) {
  try {
    const products = await getProductsByCategory(params.category);
    const category = categoriesArray.find(
      (cat) => cat.category === params.category
    );

    if (!products) {
      throw new Error(`No products for category ${params.category}`);
    }

    if (!category) {
      throw new Error(`No category ${params.category}`);
    }

    console.log(products);

    return (
      <>
        <ShopProducts
          products={products}
          isSlug={true}
          slug={category}
          categories={categoriesArray}
        />
      </>
    );
  } catch (error) {
    console.error("Error in Shop/[category]/page: ", error);
    throw error;
  }
}

export async function generateMetadata({ params }: { params: any }) {
  try {
    // fetch data
    const products = await getProductsByCategory(params.category);

    if (!products) {
      throw new Error(`No products for category ${params.category}`);
    }

    const category = categoriesArray.find(
      (cat) => cat.category === params.category
    );

    if (!category) {
      throw new Error(`No category ${params.category}`);
    }

    return {
      keywords: `naklejki ${params.category}, naklejki ${params.category} ręcznie wycinane, naklejki ${params.category} na każdą okazję, naklejki ${params.category} na ścianę, naklejki ${params.category} dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki ${params.category} holograficzne, naklejki ${params.category} srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki ${params.category} na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
      title: `Zaklejki.pl: ${category.h1} - ${products.length} naklejek`,
      description: `Ręcznie wycinane ${category.h1} - Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
      openGraph: {
        keywords: `naklejki ${params.category}, naklejki ${params.category} ręcznie wycinane, naklejki ${params.category} na każdą okazję, naklejki ${params.category} na ścianę, naklejki ${params.category} dla dzieci, naklejki, naklejki bajkowe, naklejki złote, naklejki ${params.category} holograficzne, naklejki ${params.category} srebrne, drukowanie naklejek, naklejki z anime, naklejki na ścianę do kuchni, naklejki na ścianę nowoczesne, naklejki na ścianę dinozaury, naklejki na ścianę kwiaty, nalepki ${params.category} na ścianę, wlepki, nalepki, wlepy, nakejki, nakleki, nalejki`,
        type: "website",
        url: "https://zaklejki.pl",
        title: `Zaklejki.pl: ${category.h1} - ${products.length} naklejek`,
        description: `Ręcznie wycinane ${category.h1} - Kup jedną z naszych naklejek i twórz własne. Naklejki złote, srebrne, holo. Naklejki na każdą okazję. Sklep z największą kolekcja naklejek ozdobnych.`,
        siteName: "zaklejki",
        images: [
          {
            url: "/zaklejkiLogo2.png",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata in Shop/[category]/page: ", error);
    throw error;
  }
}
