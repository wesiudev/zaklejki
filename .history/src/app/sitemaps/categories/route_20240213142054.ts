import config from "@/lib/config";
import { xmlUrl } from "@/lib/types/Xml";
import getXmlUrlSet from "@/lib/utils/getXmlUrlSet";

export async function GET() {
  const categories = [
    { url: "/category/your-life" },
    { url: "/category/entertainment" },
    { url: "/category/style" },
  ];

  const postUrls: xmlUrl[] = categories.map((cat: { url: string }) => ({
    url: `${config.local.baseUrl}${cat.url}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  const xmlStr = getXmlUrlSet(postUrls);

  return new Response(xmlStr, {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
    },
  });
}
