import Link from "next/link";

export default function TypesOfPaper() {
  return (
    <div className="mt-12 lg:mt-24 pb-12">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-zinc-800 font-bold sm:w-max mx-auto drop-shadow-xl shadow-black">
        Naklejkowe nowości!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:gap-6 mt-6 lg:mt-10">
        <div className="relative rounded-3xl overflow-hidden group">
          <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70 duration-1000">
            <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
              Papier Holograficzny Złoty
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
            </h3>
            <div className="w-full relative overflow-hidden pb-24">
              <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                Wyjątkowy efekt holograficzny nadaje każdej naklejce
                niepowtarzalny blask i głębię.
              </p>
            </div>
          </div>
          <Image
            src="/home-images/gold-paper.webp"
            width={1024}
            height={1024}
            alt=""
            className="group-hover:scale-125 group-hover:rotate-3 duration-1000"
          />
        </div>
        <div className="relative rounded-3xl overflow-hidden mt-6 sm:mt-0 group">
          <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70 duration-1000">
            <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
              Papier Holograficzny Srebrny
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
            </h3>
            <div className="w-full relative overflow-hidden pb-24">
              <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                Subtelność odbicić holograficznych nadają naklejce wyjątkowego
                blasku.
              </p>
            </div>
          </div>
          <Image
            src="/home-images/silver-paper.webp"
            width={1024}
            height={1024}
            alt=""
            className="group-hover:scale-125 group-hover:rotate-3 duration-1000"
          />
        </div>
      </div>
    </div>
  );
}
