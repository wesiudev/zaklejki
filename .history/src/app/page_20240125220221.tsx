import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <div className=""></div>
      <div className="grid grid-cols-2 gap-3">
        <Image
          src="/putin-water-proof.png"
          width={1024}
          height={1024}
          alt=""
          className=""
        />
        <Image
          src="/putin-inside-toilet.png"
          width={1024}
          height={1024}
          alt=""
          className=""
        />
      </div>
      <div className=""></div>
    </main>
  );
}
