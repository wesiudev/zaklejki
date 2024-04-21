import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

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
        <Link
          href="/blog/promocje-na-naklejki"
          title="Post na blogu promocje na naklejki"
        >
          <Image
            src="/lotterysign2.png"
            width={250}
            height={250}
            alt=""
            className="max-w-[300px] my-8"
          />
        </Link>
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Zaklejki.pl &copy; 2024
        </h2>
      </div>
      <div className="p-3 w-[350px] flex flex-col">
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Social Media
        </h2>
        <div className="flex flex-col space-y-3">
          <Link href="/" className="flex items-center mt-4">
            <FaInstagram className="mr-4 text-2xl" />
            zaklejki.pl
          </Link>
          <Link href="/" className="flex items-center">
            <FaInstagram className="mr-4 text-2xl" />
          </Link>
          <Link href="/" className="flex items-center">
            <FaInstagram className="mr-4 text-2xl" />
          </Link>
        </div>
      </div>
      <div className="p-3 w-[350px] flex flex-col">
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Linki
        </h2>
      </div>
    </div>
  );
}
