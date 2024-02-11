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
    <div className="lg:-mt-[65px]">
      <div className={`w-full bg-white`}>
        <div className="mb-8 mt-24 lg:mt-0 text-gray-500 text-sm">
          /<Link href="/">home</Link>/<Link href={`/blog`}>blog</Link>
        </div>
        <div className="bg-[#f87ff0] p-3 lg:p-6 mt-12 prose lg:prose-xl min-w-[100%]">
          <h1 className="text-3xl text-white drop-shadow-lg shadow-black font-bold">
            Zaklejki Blog
          </h1>
          <p className="text-white w-full mt-1">
            Witaj na Zaklejki Blog – miejscu, gdzie śledzisz najnowsze trendy i
            nowości dotyczące świata naklejek! Nasz blog to centralne źródło
            informacji o kreatywnych wzorach, innowacyjnych technologiach i
            wszystkim, co związane z fascynującym uniwersum naklejek. Pozostawaj
            na bieżąco z naszymi artykułami, aby odkrywać inspiracje do
            personalizacji swojego świata za pomocą unikalnych naklejek. Zanurz
            się w świecie kolorów, wzorów i ciekawostek – witamy Cię w
            społeczności Zaklejek!
          </p>
        </div>
        <div className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold mt-12">
          Najnowsze wpisy
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 my-8">
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
      </div>
    </div>
  );
}
