import { ArtworkData } from "@/types";
import AboutShop from "../AboutShop";
import Product from "./Product";
import { FaImages } from "react-icons/fa";

export default function Products({ products }: { products: ArtworkData[] }) {
  return (
    <div className="pt-12 mx-5 lg:mx-[8vw] xl:mx-[12vw] font-coco">
      <AboutShop
        title="Jaką sztukę tutaj znajdziesz?"
        description={
          <p>
            Zacznijmy od oryginalnych obrazów na płótnie mojego autorstwa.
            Główne media artystyczne jakich używam to akryle, farby olejne i
            gwasz. Moje obrazy są wykonane ze starannością i każdy z nich jest
            jedyny w swoim rodzaj, gdyż ich znaczenia płyną prosto ze źrodła
            inspiracji, która napędza mnie do tworzenia.
          </p>
        }
        imageAlt="Oryginalne obrazy na płótnie"
        imageUrl="/images/shop/Blank_Canvas.png"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-3 md:gap-6 mt-12">
        {products.map((product: ArtworkData, i) => (
          <>
            {product.category === "artwork" && (
              <Product product={product} key={i} />
            )}
          </>
        ))}{" "}
      </div>
      <div className="pt-12 font-coco">
        <AboutShop
          title="Doskonałej jakości druki"
          description="Oferuję sprzedaż moich prac w formie druków. Jest to idealny wybór dla osób, które chcą mieć moje dzieło sztuki na ścianie w niewielkiej cenie. Druk jest wykonywany na wysokiej jakości papierze, który jest odporny na blaknięcie. Dzięki temu możesz cieszyć się moimi dziełami przez długie lata."
          imageAlt="Oryginalne druki obrazów na płótnie"
          imageUrl="/images/shop/Blank_Canvas_2.png"
        />
      </div>
    </div>
  );
}
