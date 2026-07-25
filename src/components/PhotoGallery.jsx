"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BATCH_SIZE = 18;

export default function PhotoGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [highResolution, setHighResolution] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [images]);

  useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= images.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + BATCH_SIZE, images.length)
          );
        }
      },
      { rootMargin: "500px" }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [images.length, visibleCount]);

  const showImage = useCallback((index) => {
    setSelectedIndex(index);
    setHighResolution(false);
    setLoading(false);
  }, []);

  const closeViewer = useCallback(() => {
    setSelectedIndex(null);
    setHighResolution(false);
    setLoading(false);
  }, []);

  const moveViewer = useCallback(
    (direction) => {
      if (selectedIndex === null) return;
      const nextIndex = selectedIndex + direction;
      if (nextIndex < 0 || nextIndex >= images.length) return;
      showImage(nextIndex);
    },
    [images.length, selectedIndex, showImage]
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKey(event) {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") moveViewer(1);
      if (event.key === "ArrowLeft") moveViewer(-1);
    }

    document.body.classList.add("viewer-open");
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("viewer-open");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [closeViewer, moveViewer, selectedIndex]);

  if (!images.length) {
    return (
      <p className="py-20 text-center text-neutral-400">
        This gallery is being prepared.
      </p>
    );
  }

  const selected = selectedIndex === null ? null : images[selectedIndex];
  const selectedSource = selected
    ? highResolution && selected.full
      ? selected.full
      : selected.preview
    : null;
  const canLoadHighResolution =
    Boolean(selected?.full) &&
    (selected.full !== selected.preview || selected.hasHighResolution);
  const nextPreview =
    selectedIndex !== null && selectedIndex < images.length - 1
      ? images[selectedIndex + 1].preview
      : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, visibleCount).map((image, index) => (
          <button
            key={`${image.preview}-${index}`}
            type="button"
            className="group relative aspect-square overflow-hidden bg-neutral-900 text-left transition duration-200 hover:scale-[1.02] active:scale-95"
            onClick={() => showImage(index)}
            aria-label={`Open photo ${index + 1} of ${images.length}`}
          >
            <Image
              src={image.preview}
              alt={image.alt || `Gallery photo ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              quality={72}
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </button>
        ))}
      </div>

      {visibleCount < images.length && (
        <div ref={loadMoreRef} className="flex justify-center py-10">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + BATCH_SIZE, images.length)
              )
            }
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Load more photos
          </button>
        </div>
      )}

      {selected && selectedSource && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${selectedIndex + 1} of ${images.length}`}
          onClick={closeViewer}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeViewer();
            }}
            className="absolute right-5 top-5 z-20 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            aria-label="Close photo viewer"
          >
            Close
          </button>

          {selectedIndex > 0 && (
            <button
              type="button"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-white/20 sm:left-6"
              onClick={(event) => {
                event.stopPropagation();
                moveViewer(-1);
              }}
              aria-label="Previous photo"
            >
              <FaChevronLeft size={22} />
            </button>
          )}

          <Image
            key={`${selectedSource}-${highResolution}`}
            src={selectedSource}
            alt={selected.alt || `Enlarged gallery photo ${selectedIndex + 1}`}
            width={2000}
            height={1600}
            sizes="95vw"
            quality={highResolution ? 100 : 82}
            unoptimized={highResolution}
            onLoad={() => setLoading(false)}
            onError={() => {
              setHighResolution(false);
              setLoading(false);
            }}
            onClick={(event) => event.stopPropagation()}
            className={`max-h-[90vh] max-w-[92vw] object-contain transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />

          {selectedIndex < images.length - 1 && (
            <button
              type="button"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-white/20 sm:right-6"
              onClick={(event) => {
                event.stopPropagation();
                moveViewer(1);
              }}
              aria-label="Next photo"
            >
              <FaChevronRight size={22} />
            </button>
          )}

          {loading && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/40 border-t-transparent" />
            </div>
          )}

          {canLoadHighResolution && (
            <button
              type="button"
              className="absolute bottom-5 right-5 z-20 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
              onClick={(event) => {
                event.stopPropagation();
                setLoading(true);
                setHighResolution((value) => !value);
              }}
            >
              {highResolution ? "Use preview" : "Load 4K original"}
            </button>
          )}

          {nextPreview && (
            <Image
              src={nextPreview}
              alt=""
              width={1200}
              height={900}
              sizes="90vw"
              loading="eager"
              aria-hidden="true"
              className="pointer-events-none absolute h-px w-px opacity-0"
            />
          )}
        </div>
      )}
    </>
  );
}
