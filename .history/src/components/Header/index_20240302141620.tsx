"use client";
import Image from "next/image";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import Categories from "./Categories";
import About from "./About";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "../Cart";

export default function Header() {
  const [hovered, setHovered] = useState(-1);
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };
  const [isMenuShow, setMenuShow] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const handleMouseLeave = () => {
    setHovered(-1);
  };
  return (
    <>
      <Cart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      <div className="z-[500] fixed top-0 left-0 bg-white border-gray-300 border-b flex flex-row items-center w-full justify-between px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
        <div className="flex flex-row items-center md:space-x-1 lg:space-x-6">
          <Link
            href="/"
            className="flex flex-row items-center text-xl font-bold"
          >
            <Image
              title="Sprawdź nasze naklejki"
              src="/zaklejkilogo2.png"
              width={600}
              height={600}
              alt="Naklejki"
              className="h-10 md:h-12 w-auto mr-3"
            />
          </Link>
          <div className="flex-row md:flex hidden">
            <Link
              title="Sklep z naklejkami"
              href="/sklep"
              className="hover:text-[#FAA4F3] text-[14px] flex items-center px-3 py-6"
            >
              Sklep
            </Link>

            <div
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className="group "
            >
              <button className="group-hover:text-[#FAA4F3] text-[14px] flex items-center px-3 py-6">
                Kategorie
                <IoChevronDownOutline className="ml-[2px] mt-[1px] group-hover:rotate-180 duration-150" />
              </button>
              {hovered === 1 && <Categories setHovered={setHovered} />}
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="group h-full"
            >
              <button className="group-hover:text-[#FAA4F3] text-[14px] flex items-center px-3 py-6 lg:pr-12 xl:pr-24">
                O nas
                <IoChevronDownOutline className="ml-[2px] mt-[1px] group-hover:rotate-180 duration-150" />
              </button>
              {hovered === 2 && <About setHovered={setHovered} />}
            </div>
          </div>
        </div>
        <div className="md:space-x-3 lg:space-x-6 flex flex-row items-center">
          <button
            onClick={() => setCartOpen(true)}
            className="p-2 bg-[#F87FF0] rounded-full hidden md:block hover:bg-[#f87ff0b6] duration-300 border-[#F87FF0] border-2"
          >
            <FaCartShopping className="text-white text-2xl" />
          </button>
        </div>
        <button
          className={`md:hidden relative !z-[2000] menu ${
            isMenuShow ? "opened" : ""
          }`}
          onClick={() => setMenuShow(!isMenuShow)}
          aria-expanded={isMenuShow}
          aria-label="Main Menu"
        >
          <svg width="65" height="65" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <div
        className={`text-center font-coco fixed lg:relative right-0 top-0  lg:flex lg:h-max justify-center items-center flex flex-col space-y-6 lg:space-y-0 lg:flex-row w-[100vw] lg:w-max  lg:justify-end lg:items-end  lg:pl-0 text-2xl lg:space-x-6 text-white overflow-hidden
            ${
              isMenuShow
                ? "z-[55] bg-[#303030] h-screen md:hidden opacity-100 duration-300"
                : "!z-[-25] h-[1vh] lg:z-[55] opacity-0 duration-300"
            }`}
      >
        <Link
          href="/"
          onClick={() => setMenuShow(!isMenuShow)}
          className={`flex flex-row items-center group  lg:duration-150 lg:delay-0`}
        >
          Strona główna
        </Link>
        <Link
          href="/sklep"
          onClick={() => setMenuShow(!isMenuShow)}
          className={`flex flex-row items-center group  lg:duration-150 lg:delay-0`}
        >
          Sklep
        </Link>

        <Link
          href="/about"
          onClick={() => setMenuShow(!isMenuShow)}
          className={`flex flex-row items-center hover:text-white lg:duration-150 lg:delay-0 group`}
        >
          O nas
        </Link>
        {/* <Link
          href="/tworzenie-naklejek"
          onClick={() => setMenuShow(!isMenuShow)}
          className={`md:hidden px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] text-white w-max font-bold`}
        >
          Stwórz naklejkę
        </Link> */}
        <button
          onClick={() => {
            setCartOpen(true), setMenuShow(!isMenuShow);
          }}
          className="p-4 bg-[#F87FF0] rounded-full"
        >
          <FaCartShopping className="text-white text-3xl" />
        </button>
      </div>
    </>
  );
}
