import Image from "next/image";
import Link from "next/link";

interface AboutShopProps {
  description: string | JSX.Element;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export default function AboutShop({
  description,
  title,
  imageUrl,
  imageAlt,
}: AboutShopProps) {
  return (
    <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 h-full w-full">
      <div className="w-full lg:flex ">
        <Image
          width={800}
          height={800}
          className="w-full h-auto object-cover rounded-l-xl"
          src={imageUrl}
          alt={imageAlt}
        />
      </div>
      <div className="bg-purple-400 lg:rounded-l-none rounded-xl w-full mx-auto mb-3 sm:mb-6 lg:mb-0 lg:px-8 flex flex-col items-start lg:justify-center p-5 md:p-6">
        <h2 className="text-3xl lg:text-2xl xl:text-4xl font-extrabold  tracking-tight mb-4 text-white drop-shadow-md shadow-black ">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4 lg:text-xl xl:text-2xl ">
          <div className="md:w-4/5 text-white">{description}</div>
        </div>
      </div>
    </div>
  );
}
