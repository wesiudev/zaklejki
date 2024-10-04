import { NextResponse, NextRequest } from "next/server";
import { getBlogPosts } from "@/firebase";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const url = req.nextUrl.searchParams.get("url");

  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  const posts = await getBlogPosts();
  if (url) {
    const post = posts?.posts.find((post: any) => url === post.url);
    return NextResponse.json({
      post,
    });
  }
  if (!url) {
    return NextResponse.json({
      posts,
    });
  }
}
