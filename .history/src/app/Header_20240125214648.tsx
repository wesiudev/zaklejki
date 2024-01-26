import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row items-center py-5 w-full px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <div className="flex flex-row items-center text-xl font-bold w-full">
        <Image
          src="/favicon.png"
          width={250}
          height={250}
          alt=""
          className="h-12 w-12 mr-3"
        />
        Zaklejki
      </div>
      <div className="px-4 py-2 rounded-2xl bg-[#F87FF0] text-white">
        Utwórz własną
      </div>
    </div>
  );
}
