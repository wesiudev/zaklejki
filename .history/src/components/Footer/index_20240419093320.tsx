import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mt-12 lg:p-6 flex flex-wrap items-center justify-evenly">
      <div className="p-3 w-[350px] flex flex-col">
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Zaklejki.pl &copy; 2024
        </h2>
        <Image src={} width={1024} height={1024} alt="" className="" />
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
