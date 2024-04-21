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
          <h1 className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold">
            Blog Manicure Grudziądz
          </h1>
          <p className="text-gray-500 w-full">
            Zapraszam do mojego bloga poświęconego światu salonu manicure w
            Grudziądzu!
          </p>
          <p className="text-gray-500 w-full">
            Nasz salon manicure w Grudziądzu oferuje szeroki zakres usług,
            obejmujący klasyczne podejście do pielęgnacji paznokci. W moim
            studiu każda wizyta staje się niezapomnianym doświadczeniem, łącząc
            elegancję z nowoczesnym podejściem do designu paznokci.
          </p>
          <p className="text-gray-500 w-full">
            Przewodnik po najnowszych trendach w Grudziądzu znajdziesz właśnie
            tutaj. Podkreślam różnorodność stylów, inspirując do śmiałych
            eksperymentów z kolorami i formami.
          </p>
        </div>
        <div className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold mt-12">
          Najnowsze wpisy
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 my-8">
          {posts.posts.map((post: Post, i: number) => (
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
