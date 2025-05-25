import ClientGallery from "./ClientGallery";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_CHICAGO_MARATHON_23;

async function listAlbumObjects() {
  const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  const xml = await res.text();
  if (!xml.trim().startsWith('<?xml')) return [];
  if (xml.includes("<Code>AccessDenied</Code>")) return [];

  const keys = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)].map((m) => m[1]);
  const imageKeys = keys.filter((k) => /^CMO-\d+\.png$/i.test(k));

  return imageKeys.map((k) => ({
    opt: `https://${bucket}.s3.${region}.amazonaws.com/${k}`
  }));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const metadata = {
  title: "Chicago Marathon Week | Photo Album",
  description: "Highlights from Chicago Marathon Week"
};

export default async function ChicagoMarathonAlbum() {
  const images = shuffle(await listAlbumObjects());

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-20 bg-black min-h-screen">
      <h1
        className="relative z-0 whitespace-normal break-words leading-none text-[5rem] md:text-[7rem] font-bold text-center"
        style={{ fontFamily: "Willington", color: "#F9F4EC" }}
      >
        Chicago Marathon Week
      </h1>
      <div className="mt-1 relative z-0">
        <ClientGallery images={images} />
      </div>
    </main>
  );
}