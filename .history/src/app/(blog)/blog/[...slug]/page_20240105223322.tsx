import { Post } from "@/types";
import Link from "next/link";
import { getBlogPosts, getDocuments } from "@/firebase";
import moment from "moment";
import "moment/locale/pl";
import Image from "next/image";
import { renderMarkdown } from "@/app/utils/parseMarkdown";
import { polishToEnglish } from "@/app/utils/polishToEnglish";
import ScrollTo from "@/components/ScrollTo";
import { ServicesGrid } from "@/components/ServicesGrid";
import Reserve from "@/components/Reserve";

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

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts?.posts.map((post: Post) => ({
    slug: [`${post.url}`],
  }));
}
async function getBlogData() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 30 } }
  );
  const posts = req.json();
  return posts;
}
export default async function Page({ params }: { params: any }) {
  const { post }: { post: Post } = await getPost(params.slug[0]);
  const { posts } = await getBlogData();
  const services = await getDocuments("services");
  if (post)
    return (
      <>
        <div className="mt-[66px] -mb-12 font-sans">
          <div className={`w-full px-5 lg:px-[8vw] xl:px-[12vw] py-12`}>
            <span className="font-bold py-3 ">
              /{" "}
              <Link
                href="/"
                className="hover:underline hover:underline-offset-2"
              >
                home
              </Link>{" "}
              /{" "}
              <Link
                href={`/blog`}
                className="hover:underline hover:underline-offset-2"
              >
                blog
              </Link>{" "}
              /{" "}
              <Link
                href={`/blog/${post.url}`}
                className="hover:underline hover:underline-offset-2"
              >
                {post?.url}
              </Link>
            </span>
            <div className="grid grid-cols-1 min-w-[100%] font-coco mt-12">
              {/* 1 */}
              <div className="flex flex-col prose lg:prose-xl min-w-[100%]">
                <div className="bg-gray-200 p-4 lg:p-8 flex flex-col items-center justify-center">
                  <h1 className="text-center  leading-relaxed font-bold text-zinc-800 drop-shadow-lg shadow-black">
                    {post.title}
                  </h1>
                  <span className="italic -mt-5 text-center text-gray-400 text-lg">
                    {moment(post.creationTime).format("MMMM YYYY")}
                  </span>
                </div>
                <div dangerouslySetInnerHTML={renderMarkdown(post.intro)} />
                <div className="bg-gray-200 p-3 lg:p-6">
                  {post.sections.length > 0 && (
                    <span className="text-black font-bold text-xl">
                      Spis treści
                    </span>
                  )}
                  <div className="flex flex-col text-zinc-800">
                    {post.sections.length > 0 &&
                      post.sections.map((section: any, idx) => (
                        <span key={idx} className="relative h-12">
                          <ScrollTo section={section} />
                        </span>
                      ))}
                  </div>
                </div>

                {post.sections.map((section: any, idx) => (
                  <div id={`${polishToEnglish(section.title)}`} key={idx}>
                    <h2 className="leading-relaxed font-bold text-zinc-800 drop-shadow-lg shadow-black">
                      {section.title}
                    </h2>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: section.content,
                      }}
                    />
                  </div>
                ))}

                <p className="leading-relaxed">{post.outro}</p>
                <div className="flex flex-row space-x-6 flex-wrap">
                  {post.tags.map((tag: any, i) => (
                    <Link href={`/blog/?tag=${tag.name}`} key={i}>
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ServicesGrid services={services} />
          <Reserve />
          {post.faq.length > 0 && (
            <div className="my-6 w-full px-5 lg:px-[8vw] xl:px-[12vw] font-coco">
              <h2 className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold">
                Często zadawane pytania
              </h2>
              <p className="mt-4">
                Tutaj znajdziesz odpowiedzi na temat:{" "}
                <strong>{post.title}</strong>
              </p>
              {post.faq.map((item: any, i: any) => (
                <div
                  key={i}
                  className="flex flex-col bg-gray-200 mt-3 p-3 rounded-xl"
                >
                  <h2 className="text-zinc-800 drop-shadow-lg shadow-black text-2xl">
                    {item.question}
                  </h2>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-24 w-full px-5 lg:px-[8vw] xl:px-[12vw] py-24 bg-gray-200">
            <span className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold ">
              Przeczytaj też
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
              {posts.posts.map((post: Post, i: number) => (
                <>
                  {post?.url !== params.url && (
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
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}
export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const { post } = await getPost(params.slug[0]);
  const faqQuestions =
    post?.faq?.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })) || [];
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions,
  };
  return {
    title: post?.metaTitle,
    description: post?.metaDescription,
    openGraph: {
      type: "website",
      url: "https://manicuregrudziadz.com/",
      title: post?.metaTitle,
      description: post?.metaDescription,
      siteName: "manicuregrudziadz",
      images: [
        {
          url: "/favicon.png",
          type: "image/png",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      site: "@manicuregrudziadz",
      title: post?.metaTitle,
      description: post?.metaDescription,
      image: {
        url: "/favicons/android-chrome-512x512.png",
      },
    },
    schema: [faqPage],
    meta: [
      {
        name: "theme-color",
        content: "white", // replace with your desired theme color
      },
    ],
  };
}
