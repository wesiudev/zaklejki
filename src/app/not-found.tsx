import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-black bg-gradient-to-br from-[#F87FF0] via-gray-200 to-[#f87ff0b6] mt-48 rounded-t-[66px]">
      <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-3">
          Ups... Taka strona nie istnieje!
        </h1>
        <div className="flex flex-row items-center space-x-3">
          <Link
            href="/"
            className="mt-3 text-xl px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max mx-auto font-bold shadow-sm shadow-black"
          >
            Strona główna
          </Link>
          <Link
            href="/sklep"
            className="mt-3 text-xl px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max mx-auto font-bold shadow-sm shadow-black"
          >
            Sklep
          </Link>
          <Link
            href="/about"
            className="mt-3 text-xl px-4 py-2 rounded-3xl bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 text-white w-max mx-auto font-bold shadow-sm shadow-black"
          >
            O nas
          </Link>
        </div>
      </div>
    </div>
  );
}
