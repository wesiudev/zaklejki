import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-max mt-12 grid grid-cols-1 gap-4">
      <div className="p-3 w-[350px] flex flex-col">
        <p className="text-justify mb-4">
          Zaklejki.pl, jest liderem w branży ręcznie wycinanych naklejek. Od
          momentu naszego założenia, naszym celem było dostarczanie klientom
          najwyższej jakości produktów.{" "}
          <Link
            title="O naszych naklejkach"
            href="/about"
            className="underline hover:no-underline"
          >
            Więcej o nas.
          </Link>
        </p>
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
          <Link
            href="https://www.instagram.com/zaklejki.pl/"
            className="flex items-center mt-6 hover:underline"
          >
            <FaInstagram className="mr-4 text-2xl" />
            zaklejki.pl
          </Link>
          <Link
            href="https://www.instagram.com/wesiudev"
            className="flex items-center hover:underline"
          >
            <FaInstagram className="mr-4 text-2xl" /> developer
          </Link>
        </div>
      </div>
      <div className="p-3 w-[350px] flex flex-col">
        <h2 className="font-bold text-2xl drop-shadow-xl shadow-black text-zinc-800">
          Linki
        </h2>
        <Link
          href="https://wesiu.dev"
          className="flex items-center hover:underline mt-6"
        >
          wesiu.dev
        </Link>
        <Link
          href="https://quixy.pl"
          className="flex items-center hover:underline"
        >
          quixy.pl
        </Link>
        <Link
          href="https://blackbellart.com"
          className="flex items-center hover:underline"
        >
          blackbellart.com
        </Link>
      </div>
    </div>
  );
}
