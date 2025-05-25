import ClientGallery from "./ClientGallery";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_BACHELORS_GRADUATION;

async function listAlbumObjects() {
  const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  const xml = await res.text();
  if (!xml.trim().startsWith('<?xml')) return [];
  if (xml.includes("<Code>AccessDenied</Code>")) return [];

  const keys = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)].map((m) => m[1]);
  const imageKeys = keys.filter((k) => /\.(jpe?g|png)$/i.test(k));

  const map = {};
  for (const k of imageKeys) {
    const fullMatch = k.match(/^GRAD-JSU-(\d+)\.(jpe?g)$/i);
    const optMatch = k.match(/^GRAD-JSU-O-(\d+)\.(jpe?g)$/i);
    if (optMatch) {
      const id = optMatch[1];
      if (!map[id]) map[id] = {};
      map[id].opt = k;
    } else if (fullMatch) {
      const id = fullMatch[1];
      if (!map[id]) map[id] = {};
      map[id].full = k;
    }
  }

  return Object.values(map)
    .filter((p) => p.opt)
    .map((p) => ({
      opt: `https://${bucket}.s3.${region}.amazonaws.com/${p.opt}`,
      full: p.full
        ? `https://${bucket}.s3.${region}.amazonaws.com/${p.full}`
        : null
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
  title: "B.S. in Biology | Photo Album",
  description: "Celebrating the Bachelors Graduation"
};

export default async function BachelorsGraduationAlbum() {
  const images = shuffle(await listAlbumObjects());

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-20 bg-black min-h-screen">
      <h1
        className="relative z-10 whitespace-normal break-words leading-none text-[5rem] md:text-[7rem] font-bold text-center"
        style={{ fontFamily: "Willington", color: "#F9F4EC" }}
      >
        B.S. in Biology
      </h1>
      <div className="mt-1 relative z-0">
        <ClientGallery images={images} />
      </div>
    </main>
  );
}