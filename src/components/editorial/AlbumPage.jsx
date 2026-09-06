import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";
import { loadAlbum } from "@/lib/album-loader";
import PhotoGallery from "@/components/PhotoGallery";
import { NextChapter } from "./Primitives";
export default async function AlbumPage({ slug }) {
  const index = collections.findIndex((c) => c.slug === slug),
    collection = collections[index],
    next = collections[(index + 1) % collections.length];
  const images = await loadAlbum(collection);
  return (
    <main className="album-page">
      <header className="album-header shell">
        <Link className="album-back" href="/life#collections">
          ← The photo journal
        </Link>
        <p className="eyebrow">
          {collection.category} / {collection.year}
        </p>
        <h1>
          {collection.name}
          <span>.</span>
        </h1>
        <div className="album-description">
          <p>{collection.description}</p>
          {images.length > 0 && <span>{images.length} photographs</span>}
        </div>
        {collection.credit && (
          <a
            className="photo-credit"
            href={collection.creditHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {collection.credit} ↗
          </a>
        )}
      </header>
      {images.length ? (
        <PhotoGallery images={images} title={collection.name} />
      ) : (
        <div className="album-unavailable shell">
          <div>
            <Image
              src={collection.cover}
              alt={collection.name}
              fill
              sizes="90vw"
            />
          </div>
          <p>
            The full collection is temporarily unavailable. Please visit again
            soon.
          </p>
        </div>
      )}
      <NextChapter
        label="The next chapter"
        title={next.name}
        href={`/creative-studio/${next.slug}`}
        image={next.cover}
      />
    </main>
  );
}
