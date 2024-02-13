import Image from "next/image";

export default function HeroAbout({
  mainH1,
  mainP,
  image,
  image2,
  image3,
  firstH2,
  secondP,
  secondH2,
  thirdP,
  contactInfo,
}: {
  mainH1: string;
  mainP: string;
  image: { src: string; alt: string };
  image2: { src: string; alt: string };
  image3: { src: string; alt: string };
  firstH2: string;
  secondP: string;
  secondH2: string;
  thirdP: string;
  contactInfo?: any;
}) {
  return (
    <div className="h-max py-24 flex items-center justify-center text-center flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative h-full">
        <div className="h-max sticky top-24">
          <h1 className="text-3xl  text-zinc-800 drop-shadow-xl shadow-black font-druk">
            {mainH1.toUpperCase()}
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 drop-shadow-xl shadow-black mt-12">
            {mainP}
          </p>
        </div>
        <Image
          src={image.src}
          width={1920}
          height={1080}
          alt={image.alt}
          className="w-full rounded-3xl drop-shadow-xl shadow-pink-400"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative h-full">
        <Image
          src={image2.src}
          width={1920}
          height={1080}
          alt={image2.alt}
          className="w-full rounded-3xl drop-shadow-xl shadow-pink-400 mt-12"
        />
        <div className="h-max sticky top-12">
          <h2 className="text-3xl text-zinc-800 drop-shadow-xl shadow-black font-druk mt-12">
            {firstH2.toUpperCase()}
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 drop-shadow-xl shadow-black mt-12">
            {secondP}
          </p>
        </div>
      </div>
      {contactInfo && contactInfo}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {secondH2 !== "" && thirdP !== "" && (
          <>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-zinc-800 drop-shadow-xl shadow-black font-druk mt-12">
              {secondH2.toUpperCase()}
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-zinc-800 drop-shadow-xl shadow-black font-druk mt-12">
              {thirdP}
            </p>
          </>
        )}
      </div>
      <Image
        src={image3.src}
        width={1920}
        height={1080}
        alt={image3.alt}
        className="w-full rounded-3xl drop-shadow-xl shadow-pink-400 mt-12"
      />
    </div>
  );
}
