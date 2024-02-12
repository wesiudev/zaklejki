"use client";
import React, { useEffect, useState } from "react";
import ImageThumbnail from "./ImageThumbnail";
import debounce from "lodash/debounce";
import Masonry from "react-masonry-css";
import { polishToEnglish } from "@/lib/polishToEnglish";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
const DEBOUNCE_TIME = 200; // Adjust the debounce time based on your needs

export default function ShopProducts({
  products,
  isSlug,
  slug,
  categories,
}: {
  products: any[];
  isSlug?: boolean;
  slug?: any;
  categories: any[];
}) {
  const [searchInput, setSearchInput] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedStickers, setSelectedStickers] = useState(
    products?.slice(0, 30)
  );
  const [currentlyEditing, setCurrentlyEditing] = useState({
    title: "",
    i: -1,
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      // Calculate how far the user has scrolled from the top
      const scrollY = window?.scrollY || document?.documentElement?.scrollTop;
      // Calculate the total height of the page
      const totalHeight = document?.documentElement?.scrollHeight;
      // Calculate the height of the viewport
      const windowHeight = window?.innerHeight;

      // Load more stickers when the user is close to the bottom
      if (scrollY + windowHeight >= totalHeight - 1200) {
        // Load and append the next set of stickers
        const nextStickers = products?.slice(
          selectedStickers?.length,
          selectedStickers?.length + 12
        );
        setSelectedStickers((prevStickers) => [
          ...prevStickers,
          ...nextStickers,
        ]);
      }
    }, DEBOUNCE_TIME);

    // Attach the debounced scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedStickers]);
  const breakpointColumnsObj = {
    default: 6,
    1366: 5,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <div className="w-full">
      <div className="mb-12 mt-24 lg:mt-0 text-gray-500 text-sm">
        /<Link href="/sklep-z-naklejkami">sklep-z-naklejkami</Link>
        {isSlug && `/${polishToEnglish(slug.category)}`}
      </div>
      {!isSlug && (
        <h1 className="text-zinc-800 font-bold drop-shadow-xl shadow-black text-3xl xl:text-5xl mb-12">
          Sklep z naklejkami
        </h1>
      )}
      {isSlug && slug && (
        <>
          <div className="flex flex-col z-50 sticky top-[85px] lg:top-[105px]">
            <div className="flex flex-row items-center bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 rounded-3xl w-full pl-6 drop-shadow-xl shadow-black">
              <div
                onClick={(e: any) => {
                  e.stopPropagation();
                  setCategoriesOpen(!categoriesOpen);
                }}
                className="h-full pr-6 cursor-pointer"
              >
                <FaMagnifyingGlass className="text-white h-8 w-8" />
              </div>
              <div
                onClick={(e: any) => {
                  e.stopPropagation();
                  setCategoriesOpen(!categoriesOpen);
                }}
                className="relative w-full bg-white cursor-pointer rounded-3xl"
              >
                <h1
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen ? "!hidden" : "!block"
                  }`}
                >
                  {slug.h1}
                </h1>
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen
                      ? "rounded-b-none border-b-transparent block"
                      : "hidden"
                  }`}
                />
                <div
                  className={`scrollbar absolute translate-y-[100%] bottom-px left-0 bg-white rounded-bl-3xl w-full flex flex-col lg:flex-row lg:flex-wrap lg:space-x-3 max-h-[50vh] overflow-y-scroll p-6 lg:pl-3 lg:pt-3 space-y-3 duration-300 ${
                    categoriesOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                >
                  {categories.map((cat: any, i: any) => (
                    <>
                      {cat.category !== slug.category && (
                        <Link
                          title={`Zobacz ${cat.h1.toLowerCase()}`}
                          href={`/sklep-z-naklejkami/${cat.category}`}
                          key={i}
                          className={`${
                            i === 0 ? "lg:ml-3 lg:mt-3" : ""
                          } bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 rounded-3xl text-sm font-bold text-white px-3 py-2`}
                        >
                          {cat.h1}
                        </Link>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 mt-6 drop-shadow-xl shadow-black text-sm sm:text-base xl:text-lg relative z-0">
            {slug.p}
          </p>
        </>
      )}
      {!isSlug && !slug && (
        <>
          <div className="flex flex-col z-50 sticky top-[85px] lg:top-[105px]">
            <div className="flex flex-row items-center bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 rounded-3xl w-full pl-6 drop-shadow-xl shadow-black">
              <div
                onClick={(e: any) => {
                  e.stopPropagation();
                  setCategoriesOpen(!categoriesOpen);
                }}
                className="h-full pr-6 cursor-pointer"
              >
                <FaMagnifyingGlass className="text-white h-8 w-8" />
              </div>
              <div
                onClick={(e: any) => {
                  e.stopPropagation();
                  setCategoriesOpen(!categoriesOpen);
                }}
                className="relative w-full bg-white cursor-pointer rounded-3xl"
              >
                <h1
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen ? "!hidden" : "!block"
                  }`}
                >
                  Szukaj naklejek
                </h1>
                <input
                  value={searchInput}
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onBlur={() =>
                    setTimeout(() => {
                      setCategoriesOpen(false);
                    }, 500)
                  }
                  placeholder="Wpisz frazę"
                  type="text"
                  autoFocus={categoriesOpen}
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen
                      ? "rounded-b-none border-b-transparent block"
                      : "hidden"
                  }`}
                />
                <div
                  className={`scrollbar absolute translate-y-[100%] bottom-px left-0 bg-white rounded-bl-3xl w-full flex flex-col lg:flex-row lg:flex-wrap lg:space-x-3 max-h-[50vh] overflow-y-scroll p-6 lg:pl-3 lg:pt-3 space-y-3 duration-300 ${
                    categoriesOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                >
                  {categories.map((cat: any, i: any) => (
                    <>
                      <Link
                        title={`Zobacz ${cat.h1.toLowerCase()}`}
                        href={`/sklep-z-naklejkami/${cat.category}`}
                        key={i}
                        className={`${
                          i === 0 ? "lg:ml-3 lg:mt-3" : ""
                        } bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 rounded-3xl text-sm font-bold text-white px-3 py-2`}
                      >
                        {cat.h1}
                      </Link>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {selectedStickers?.map((product: any, i: any) => (
          <div key={i} className="mt-[30px]">
            <ImageThumbnail
              product={product}
              productIndex={i}
              currentlyEditing={currentlyEditing}
              setCurrentlyEditing={setCurrentlyEditing}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
