import ClientGallery from "./ClientGallery";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_TEXAS_STATE_FAIR;

/** Publicly list all objects (requires bucket policy with s3:ListBucket Allow) */
async function listAlbumObjects() {
  const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2`;
  const xml = await fetch(url).then((r) => r.text());

  return [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)]
    .map((m) => m[1])
    .filter((key) => key.match(/\.(jpe?g|png|webp|avif)$/i));
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
  title: "Texas State Fair | Photo Album",
  description: "Photo gallery of the Texas State Fair"
};

export default async function TexasStateFairAlbum() {
  const files = shuffle(await listAlbumObjects());

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-20 bg-black min-h-screen">
      <h1
        className="whitespace-normal break-words leading-none text-[5rem] md:text-[7rem] font-bold text-center"
        style={{ fontFamily: "Willington", color: "#F9F4EC" }}
      >
        Texas State Fair
      </h1>

      <ClientGallery files={files} bucket={bucket} region={region} />
    </main>
  );
}