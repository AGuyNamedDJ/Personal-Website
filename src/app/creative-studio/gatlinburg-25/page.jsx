import ClientGallery from "./ClientGallery";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_GATLINBURG_25;

/** Publicly list all objects (requires bucket policy with s3:ListBucket Allow) */
async function listAlbumObjects() {
  const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  const xml = await res.text();

  // If the bucket is still blocking list access, S3 returns an AccessDenied XML
  // with sample keys like "JSHcreates.com". Detect that and bail early so no
  // bogus placeholders reach the gallery.
  if (xml.includes("<Code>AccessDenied</Code>")) {
    return [];
  }

  const keys = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)].map((m) => m[1]);

  // Only include JPEG and PNG images; skip everything else (e.g., videos or placeholders)
  const imageKeys = keys.filter((k) => /\.(jpe?g|png)$/i.test(k));

  // Group keys by numeric suffix; map.opt = optimized, map.full = full‑res
  const map = {};
  for (const k of imageKeys) {
    const m = k.match(/^GAT(O?)-(\d+)\.(jpe?g)$/i);
    if (!m) continue;
    const [, optFlag, id] = m;
    if (!map[id]) map[id] = {};
    if (optFlag === "O") map[id].opt = k;
    else map[id].full = k;
  }

  // Keep only entries where an optimized image exists
  return Object.values(map)
    .filter((p) => p.opt)
    .map((p) => ({
      opt: `https://${bucket}.s3.${region}.amazonaws.com/${p.opt}`,
      full: p.full
        ? `https://${bucket}.s3.${region}.amazonaws.com/${p.full}`
        : null
    }));
}

// Fisher‑Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const metadata = {
  title: "Gatlinburg 2025 | Photo Album",
  description: "Photo gallery of the Gatlinburg 2025 trip"
};

export default async function GatlinburgAlbum() {
  const images = shuffle(await listAlbumObjects());

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-20 bg-black min-h-screen">
      <h1
        className="whitespace-normal break-words leading-none text-[5rem] md:text-[7rem] font-bold text-center"
        style={{ fontFamily: "Willington", color: "#F9F4EC" }}
      >
        Gatlinburg 2025
      </h1>

      <ClientGallery images={images} />
    </main>
  );
}