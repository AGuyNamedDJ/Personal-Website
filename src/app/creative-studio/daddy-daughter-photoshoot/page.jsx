import ClientGallery from "./ClientGallery";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const bucket =
  process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_DADDY_DAUGHTER_PHOTOSHOOT;

/** Publicly list all objects (requires bucket policy with s3:ListBucket Allow) */
async function listAlbumObjects() {
  const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2`;
  const xml = await fetch(url).then((r) => r.text());

  return [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)]
    .map((m) => m[1])
    .filter((key) => key.match(/\.(jpe?g|png|webp|avif)$/i));
}

export default async function DaddyDaughterAlbum() {
  const files = await listAlbumObjects();

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-20 bg-black min-h-screen">
      <h1
        className="whitespace-normal break-words leading-none text-[5rem] md:text-[7rem] font-bold text-center"
        style={{ fontFamily: "Willington", color: "#F9F4EC" }}
      >
        Daddy Daughter Photoshoot
      </h1>

      <ClientGallery files={files} bucket={bucket} region={region} />
    </main>
  );
}