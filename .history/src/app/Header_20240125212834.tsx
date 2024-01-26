import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return <div className="flex flex-row items-center py-5 w-full px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
    <Image
                        src="/"
                        width={1024}
                        height={1024}
                        alt=""
                        className=""
                      />
  </div>;
}