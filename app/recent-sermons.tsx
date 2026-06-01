import { siteConfig } from "@/lib/site-config";

type Video = { id: string; title: string; published: string };

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

// Pulls the 3 most recent uploads from the church YouTube channel via its
// public RSS feed (no API key needed). Runs on the server at build time and
// refreshes hourly. Falls back to a "Watch on YouTube" panel if the feed
// can't be reached.
async function getRecentVideos(): Promise<Video[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${siteConfig.youtubeChannelId}`,
      { next: { revalidate: 3600 }, signal: controller.signal }
    );
    clearTimeout(timeout);
    if (!res.ok) return [];
    const xml = await res.text();
    return xml
      .split("<entry>")
      .slice(1, 4)
      .map((e) => ({
        id: e.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "",
        title: decode((e.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "").trim()),
        published: e.match(/<published>(.*?)<\/published>/)?.[1] ?? "",
      }))
      .filter((v) => v.id);
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function RecentSermons() {
  const videos = await getRecentVideos();

  if (videos.length === 0) {
    return (
      <div className="rounded-2xl border border-burgundy/15 bg-cream p-10 md:p-14 text-center fade-up">
        <h3 className="font-display text-2xl mb-3">Watch our latest services</h3>
        <p className="text-warm-gray max-w-md mx-auto mb-6">
          Our most recent messages are posted to our YouTube channel — join us live or catch up anytime.
        </p>
        <a
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener"
          className="bg-burgundy text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-ink transition inline-block"
        >
          Watch on YouTube
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 fade-up">
      {videos.map((v) => (
        <a
          key={v.id}
          href={`https://www.youtube.com/watch?v=${v.id}`}
          target="_blank"
          rel="noopener"
          className="group block"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              alt={v.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition flex items-center justify-center">
              <div className="w-14 h-14 bg-cream/95 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[14px] border-l-burgundy border-y-[10px] border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
          {v.published && (
            <div className="text-warm-gray text-xs uppercase tracking-widest mb-2">{formatDate(v.published)}</div>
          )}
          <h3 className="font-display text-xl mb-2 group-hover:text-burgundy transition line-clamp-2">{v.title}</h3>
        </a>
      ))}
    </div>
  );
}
