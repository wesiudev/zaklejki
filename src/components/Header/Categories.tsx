import Link from "next/link";
import { categoriesArray } from "../categories";

export default function Categories({ setHovered }: { setHovered: any }) {
  return (
    <div className="fixed left-0 top-[69px] border-t border-gray-300 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 h-max w-screen shadow-sm bg-white shadow-zinc-300 rounded-b-lg">
      <div
        className={`scrollbar bottom-px left-0 bg-white rounded-bl-3xl w-full flex flex-row flex-wrap space-x-3 max-h-[30vh] overflow-y-scroll p-6 pl-3 pt-3 space-y-3 duration-300`}
      >
        {categoriesArray.map((cat: any, i: any) => (
          <Link
            title={`Zobacz ${cat.h1.toLowerCase()}`}
            href={`/sklep-z-naklejkami/${cat.category}`}
            key={i}
            className={`${
              i === 0 ? "ml-3 mt-3" : ""
            } bg-[#F87FF0] hover:bg-[#f87ff0b6] duration-300 rounded-3xl text-sm font-bold text-white px-3 py-2`}
          >
            {cat.h1}
          </Link>
        ))}
      </div>
    </div>
  );
}
