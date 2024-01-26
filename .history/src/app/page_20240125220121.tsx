import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-2">
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
