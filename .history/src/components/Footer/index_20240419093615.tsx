import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mt-12 lg:p-6 flex flex-wrap items-center justify-evenly">
      <div className="p-3 w-[350px] flex flex-col">
        <Link href="/" title="Strona główna">
          <Image
            src="/zaklejkilogo2.png"
            width={150}
            height={150}
            alt=""
            className="max-w-[300px]"
          />
        </Link>
        <Image
          src="/lotterysign2.png"
          width={250}
          height={250}
          alt=""
          className="max-w-[300px] my-8"
        />
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Zaklejki.pl &copy; 2024
        </h2>
      </div>
      <div className="p-3 w-[350px] flex flex-col">
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Social Media
        </h2>
      </div>
      <div className="p-3 w-[350px] flex flex-col">
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Linki
        </h2>
      </div>
    </div>
  );
}
