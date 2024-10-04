"use client";
import React, { useEffect, useRef, useState } from "react";
import ImageThumbnail from "./ImageThumbnail";
import debounce from "lodash/debounce";
import Masonry from "react-masonry-css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import shuffle from "lodash.shuffle";
const DEBOUNCE_TIME = 200; // Adjust the debounce time based on your needs
import { Flipper, Flipped } from "react-flip-toolkit";
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
  const inputRef = useRef<any>(null);
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [userTriggeredFetch, setUserTriggeredFetch] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedStickers, setSelectedStickers] = useState(
    products?.slice(0, 30)
  );
  const [currentlyEditing, setCurrentlyEditing] = useState({
    title: "",
    i: -1,
  });

  const shuffleList = () =>
    setTimeout(() => {
      setCategoriesList(shuffle(categories));
    }, 50);
  useEffect(() => {
    const nextStickers = products?.slice(
      selectedStickers?.length,
      selectedStickers?.length + 36
    );
    setSelectedStickers((prevStickers) => [...prevStickers, ...nextStickers]);
  }, [userTriggeredFetch]);
  const breakpointColumnsObj = {
    default: 6,
    1366: 5,
    1100: 3,
    700: 2,
    500: 2,
  };
  const [searchFilter, setSearchFilter] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
    setCategoriesList(
      categories.filter(
        (item: any) =>
          item.h1.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.p.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  useEffect(() => {
    setCategoriesList(
      categories.filter(
        (item: any) =>
          item.h1.toLowerCase().includes(searchFilter) ||
          item.category.toLowerCase().includes(searchFilter) ||
          item.p.toLowerCase().includes(searchFilter)
      )
    );
  }, [searchFilter]);
  useEffect(() => {
    categories && setCategoriesList(categories);
  }, []);
  return (
    <div className="w-full">
      {!isSlug && (
        <h1 className="text-zinc-800 font-bold drop-shadow-xl shadow-black text-3xl xl:text-5xl mb-12 mt-24">
          Sklep z naklejkami
        </h1>
      )}
      {isSlug && slug && (
        <>
          <div className="flex flex-col z-50 sticky top-[85px] lg:top-[105px]">
            <div className="flex flex-row items-center bg-indigo-600 hover:bg-[#f87ff0b6] duration-300 rounded-3xl w-full pl-6 drop-shadow-xl shadow-black">
              <div
                onClick={(e: any) => {
                  setCategoriesOpen(!categoriesOpen);
                  shuffleList();
                }}
                className="h-full pr-6 cursor-pointer"
              >
                <FaMagnifyingGlass className="text-white h-8 w-8" />
              </div>
              <div
                onClick={(e: any) => {
                  setCategoriesOpen(!categoriesOpen);
                  shuffleList();
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
                  value={searchFilter}
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                  onChange={onChange}
                  onBlur={() =>
                    setTimeout(() => {
                      setCategoriesOpen(false);
                    }, 200)
                  }
                  placeholder="Kliknij by szukać"
                  type="text"
                  autoFocus={categoriesOpen}
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen
                      ? "rounded-b-none border-b-transparent block"
                      : "hidden"
                  }`}
                />
                <Flipper
                  spring="noWobble"
                  className={`scrollbar absolute translate-y-[100%] bottom-px left-0 bg-white rounded-bl-3xl w-full flex flex-col lg:flex-row lg:flex-wrap lg:space-x-3 max-h-[50vh] overflow-y-scroll p-6 lg:pl-3 lg:pt-3 space-y-3 duration-300 ${
                    categoriesOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                  flipKey={categoriesList.map((item, i) => i)}
                >
                  {categoriesList.map((cat: any, i: any) => (
                    <Flipped key={i} flipId={i}>
                      <Link
                        title={`Zobacz ${cat.h1.toLowerCase()}`}
                        href={`/sklep/${cat.category}`}
                        key={i}
                        className={`${
                          i === 0 ? "lg:ml-3 lg:mt-3" : ""
                        } bg-indigo-600 hover:bg-[#f87ff0b6]  rounded-3xl text-sm font-bold text-white px-3 py-2`}
                      >
                        {cat.h1}
                      </Link>
                    </Flipped>
                  ))}
                </Flipper>
              </div>
            </div>
          </div>
          <p className="text-gray-500 drop-shadow-xl shadow-black text-sm sm:text-base xl:text-lg relative z-0 mt-24">
            {slug.p}
          </p>
        </>
      )}
      {!isSlug && !slug && (
        <>
          <div className="flex flex-col z-50 sticky top-[85px] lg:top-[105px]">
            <div className="flex flex-row items-center bg-indigo-600 hover:bg-[#f87ff0b6] duration-300 rounded-3xl w-full pl-6 drop-shadow-xl shadow-black">
              <div
                onClick={(e: any) => {
                  setCategoriesOpen(!categoriesOpen);
                  shuffleList();
                }}
                className="h-full pr-6 cursor-pointer"
              >
                <FaMagnifyingGlass className="text-white h-8 w-8" />
              </div>
              <div
                onClick={(e: any) => {
                  setCategoriesOpen(!categoriesOpen);
                  shuffleList();
                }}
                className="relative w-full bg-white cursor-pointer rounded-3xl"
              >
                <h2
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen ? "!hidden" : "!block"
                  }`}
                >
                  Szukaj naklejek
                </h2>
                <input
                  value={searchFilter}
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                  onChange={onChange}
                  onBlur={() =>
                    setTimeout(() => {
                      setCategoriesOpen(false);
                    }, 200)
                  }
                  placeholder="Kliknij by szukać"
                  type="text"
                  autoFocus={categoriesOpen}
                  className={`text-zinc-800 bg-white w-full rounded-3xl duration-300 px-6 py-2 drop-shadow-lg shadow-black text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold border border-l-0 border-gray-200 ${
                    categoriesOpen
                      ? "rounded-b-none border-b-transparent block"
                      : "hidden"
                  }`}
                />
                <Flipper
                  spring="noWobble"
                  className={`scrollbar absolute translate-y-[100%] bottom-px left-0 bg-white rounded-bl-3xl w-full flex flex-col lg:flex-row lg:flex-wrap lg:space-x-3 max-h-[50vh] overflow-y-scroll p-6 lg:pl-3 lg:pt-3 space-y-3 duration-300 ${
                    categoriesOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                  flipKey={categoriesList.map((item, i) => i)}
                >
                  {categoriesList.map((cat: any, i: any) => (
                    <Flipped key={i} flipId={i}>
                      <Link
                        title={`Zobacz ${cat.h1.toLowerCase()}`}
                        href={`/sklep/${cat.category}`}
                        key={i}
                        className={`${
                          i === 0 ? "lg:ml-3 lg:mt-3" : ""
                        } bg-indigo-600 hover:bg-[#f87ff0b6]  rounded-3xl text-sm font-bold text-white px-3 py-2`}
                      >
                        {cat.h1}
                      </Link>
                    </Flipped>
                  ))}
                </Flipper>
              </div>
            </div>
          </div>
          <p className="text-gray-500 mt-6 drop-shadow-xl shadow-black text-sm sm:text-base xl:text-lg relative z-0">
            Witaj w naszym sklepie z naklejkami! Odkryj naszą różnorodną
            kolekcję unikatowych naklejek, które dodadzą charakteru Twojemu
            otoczeniu. Od inspirujących motywów artystycznych po ulubione
            postacie z kultowych filmów i książek - znajdziesz tutaj naklejki na
            każdą okazję. Wybierz swoje ulubione wzory i zacznij personalizować
            swoje przestrzenie już dziś!
          </p>
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
      <div className="w-full flex justify-center">
        {products.length < selectedStickers.length && (
          <button
            onClick={() => setUserTriggeredFetch(!userTriggeredFetch)}
            className="py-3 px-12 mx-auto rounded-xl text-white font-bold bg-indigo-600 hover:bg-indigo-500 duration-300 my-12 drop-shadow-xl shadow-black"
          >
            Wczytaj więcej
          </button>
        )}
        {products.length >= selectedStickers.length && (
          <div className="text-center italic my-12">
            Wyświetlono już wszystkie naklejki ({products.length})
          </div>
        )}
      </div>
    </div>
  );
}
