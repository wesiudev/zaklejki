"use client";
import Image from "next/image";
import Link from "next/link";
import * as Scroll from "react-scroll";
export default function TypesOfPaper({
  typesOfPaper,
}: {
  typesOfPaper: any[];
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-6 mt-6 lg:mt-10">
        {typesOfPaper.map((typeOfPaper: any, i: any) => (
          <Scroll.Link
            key={i}
            to={typeOfPaper.type}
            smooth={true}
            className="relative rounded-3xl overflow-hidden mt-6 md:mt-0 group cursor-pointer"
          >
            <div className="z-[50] flex flex-col justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 group hover:bg-opacity-70  duration-1000">
              <h3 className="mt-24 relative font-bold text-base sm:text-xl lg:text-2xl text-center text-white group-hover:-translate-y-6 duration-1000">
                {typeOfPaper.title}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-transparent h-px w-px group-hover:bg-white group-hover:w-full duration-1000"></div>
              </h3>
              <div className="w-full relative overflow-hidden pb-24">
                <p className="text-gray-300 text-center w-full absolute top-0 left-0 -translate-y-24 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-1000 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-sm lg:text-base xl:text-lg">
                  {typeOfPaper.description}
                </p>
              </div>
            </div>
            <Image
              src={typeOfPaper.image}
              width={1024}
              height={1024}
              alt={typeOfPaper.title}
              title={typeOfPaper.title}
              className="group-hover:scale-125 group-hover:rotate-3 duration-1000"
            />
          </Scroll.Link>
        ))}
      </div>
      <div className="flex flex-col w-full">
        {typesOfPaper.map((typeOfPaper: any, i: any) => (
          <div
            key={i}
            className={`${
              i === 0 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
            } flex mt-12 relative`}
          >
            <div
              className="absolute -top-[150px] lg:-top-[200px] left-0 w-1 h-1"
              id={typeOfPaper.type}
            ></div>

            <div
              className={`${
                i === 0
                  ? "lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none lg:rounded-tl-[75px]"
                  : "lg:rounded-r-3xl rounded-t-3xl lg:rounded-tl-none lg:rounded-tr-[75px]"
              } overflow-hidden lg:w-full`}
            >
              <Image
                src={typeOfPaper.image2}
                width={1024}
                height={1024}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className={`${
                i === 0
                  ? "lg:rounded-r-3xl bg-yellow-200"
                  : "lg:rounded-l-3xl bg-gray-200"
              } lg:w-full p-3 lg:p-6  min-h-full w-full flex flex-col justify-center`}
            >
              <h2 className="text-3xl xl:text-5xl font-bold text-black drop-shadow-xl shadow-black mb-4">
                {typeOfPaper.title2}
              </h2>
              <p className="text-sm xl:text-base mb-2 italic">
                {typeOfPaper.longDescription}
              </p>
              <div className="flex flex-col space-y-2">
                {typeOfPaper.additional.map((additional: any, i: any) => (
                  <div key={i} className="flex flex-col items-start text-sm">
                    {additional}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
