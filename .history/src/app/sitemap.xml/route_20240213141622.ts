import { xmlUrl } from "@/lib/types/Xml";

export async function GET() {
  const sitemaps: any = [
    { url: "/sitemaps/latest" },
    { url: "/sitemaps/categories" },
    { url: "/sitemaps/all/1" },
    { url: "/sitemaps/all/2" },
    { url: "/sitemaps/all/3" },
    { url: "/sitemaps/all/4" },
  ];

  const postUrls: xmlUrl[] = sitemaps.map((cat: { url: string }) => ({
    url: `${config.local.baseUrl}${cat.url}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${postUrls
        .map((postUrl: xmlUrl) => `<sitemap><loc>${postUrl.url}</loc></sitemap>`)
        .join("")}
    </urlset>`;

  return new Response(xmlStr, {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
    },
  });
}