import RSS from "rss";
export async function GET() {
  const map = new RSS({
    title: "",
    feed_url: "https://zaklejki.pl",
    site_url: "https://zaklejki.pl",
  });
}
