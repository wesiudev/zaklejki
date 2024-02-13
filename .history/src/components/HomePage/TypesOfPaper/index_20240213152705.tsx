import Image from "next/image";

export default function TypesOfPaper({
  typesOfPaper,
}: {
  typesOfPaper: any[];
}) {
  return (
    <div className="mt-12 lg:mt-24 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:gap-6 mt-6 lg:mt-10">
        <div className="relative rounded-3xl overflow-hidden group">
          <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70 duration-1000">
            <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
              {typesOfPaper[0].title}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
            </h3>
            <div className="w-full relative overflow-hidden pb-24">
              <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                {typesOfPaper[0].description}
              </p>
            </div>
          </div>
          <Image
            src={typesOfPaper[0].image}
            width={1024}
            height={1024}
            alt=""
            className="group-hover:scale-125 group-hover:rotate-3 duration-1000"
          />
        </div>
        <div className="relative rounded-3xl overflow-hidden mt-6 sm:mt-0 group">
          <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70 duration-1000">
            <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
              {typesOfPaper[1].title}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
            </h3>
            <div className="w-full relative overflow-hidden pb-24">
              <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                {typesOfPaper[1].description}
              </p>
            </div>
          </div>
          <Image
            src={typesOfPaper[1].image}
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
