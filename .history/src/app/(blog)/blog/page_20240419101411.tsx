import Link from "next/link";
import Image from "next/image";

async function getPost(url: string, blogType?: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?url=${url}&blogType=${blogType}&secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 180 } }
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const post = res.json();
  return post;
}

async function getBlogData() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 30 } }
  );
  const posts = req.json();
  return posts;
}
export default async function Page() {
  const { posts } = await getBlogData();
  return (
    <div className="mt-[66px] font-sans ">
      <div
        className={`w-full px-5 lg:px-[8vw] xl:px-[12vw] bg-white pt-12 min-h-[60vh]`}
      >
        <span className="font-bold py-3">
          /{" "}
          <Link href="/" className="hover:underline hover:underline-offset-2">
            home
          </Link>{" "}
          /{" "}
          <Link
            href={`/blog`}
            className="hover:underline hover:underline-offset-2"
          >
            blog
          </Link>
        </span>
        <div className="bg-gray-200 p-3 lg:p-6 mt-12 prose lg:prose-xl min-w-[100%]">
          <div className="grid grid-cols-2 w-full h-max gap-4 mb-12">
            <Link href="/tworzenie-naklejek">
              <Image
                src={"/1.jpeg"}
                width={1024}
                height={1024}
                alt=""
                className=""
              />
            </Link>
            <Link href="/sklep">
              <Image
                src={"/3.jpeg"}
                width={1024}
                height={1024}
                alt=""
                className=""
              />
            </Link>
          </div>
          <h1 className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold mb-6">
            Zaklejki Blog
          </h1>
          <p>
            Witajcie na naszym blogu poświęconym fascynującemu światu naklejek!
            Tutaj znajdziecie inspirujące artykuły, porady dotyczące aplikacji
            naklejek oraz najnowsze trendy w świecie projektowania naklejek.
            Zapraszamy do odkrywania różnorodnych zastosowań naklejek i
            poznawania ich nieograniczonego potencjału w personalizacji i
            dekoracji różnych przedmiotów. Bądźcie na bieżąco z naszymi wpisami
            i pozwólcie się zainspirować kreatywnością naklejkowych możliwości!
          </p>
        </div>
        <div className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold mt-12">
          Najnowsze wpisy
        </div>
        {posts && (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
            {posts?.posts.map((post: any, i: number) => (
              <Link
                href={`/blog/${post.url}`}
                key={i}
                className="group relative aspect-square h-max flex flex-col hover:bg-purple-300 hover:p-1 duration-300 ease-in-out rounded-lg shadow-md  shadow-zinc-700"
              >
                <div className="w-full overflow-hidden flex items-start">
                  <Image
                    src={post.mainImage}
                    width={1024}
                    height={1024}
                    alt={post.title}
                    className="w-full object-contain rounded-lg shadow-md shadow-zinc-700"
                  />
                </div>
                <span className="group-hover:bg-gray-200 duration-300 group-hover:p-4 absolute bottom-3 left-3 right-3 text-base lg:text-xl  drop-shadow-xl shadow-black mt-3 bg-white text-zinc-700 font-bold  text-left p-3 rounded-lg">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
