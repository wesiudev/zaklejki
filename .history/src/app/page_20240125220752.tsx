import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold xl:text-5xl 2xl:text-6xl pt-6 pb-3">
          Naklejki ozdobne wodoodporne
        </h1>
        <div className="flex flex-col">
          <Image
            src="/putin-water-proof.png"
            width={1024}
            height={1024}
            alt=""
            className=""
          />
          <div className="grid grid-cols-2 my-6">
            <Image
              src="/close-up-toilet-putin-2.png"
              width={1024}
              height={1024}
              alt=""
              className="h-full w-auto"
            />
            <Image
              src="/close-up-toilet-putin.png"
              width={1024}
              height={1024}
              alt=""
              className=""
            />
          </div>
          <Image
            src="/putin-inside-toilet.png"
            width={1024}
            height={1024}
            alt=""
            className=""
          />
        </div>
      </div>
      <div className=""></div>
    </main>
  );
}
