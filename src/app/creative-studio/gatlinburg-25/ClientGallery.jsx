"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * ClientGallery
 * Props:
 * - images: array of objects with `opt` and optional `full` URLs
 *
 * Renders a responsive 3‑column grid of images with a click‑to‑zoom modal.
 */
export default function ClientGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hiRes, setHiRes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayImages, setDisplayImages] = useState(images);

  useEffect(() => {
    setDisplayImages(images);
  }, [images]);

  // Close modal on Esc key and navigate with arrow keys
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex !== null && selectedIndex < displayImages.length - 1) {
        setSelectedIndex(selectedIndex + 1);
        setHiRes(false);
        setLoading(false);
      }
      if (e.key === "ArrowLeft" && selectedIndex !== null && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
        setHiRes(false);
        setLoading(false);
      }
    },
    [selectedIndex, displayImages.length]
  );
  useEffect(() => {
    if (selectedIndex !== null) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handleKey]);

  const selectedSrc =
    selectedIndex !== null
      ? (hiRes && displayImages[selectedIndex].full
          ? displayImages[selectedIndex].full
          : displayImages[selectedIndex].opt)
      : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayImages.map((img, i) => {
          const src = img.opt;
          return (
            <div
              key={src}
              className="relative overflow-hidden group aspect-square cursor-zoom-in transform transition duration-200 hover:scale-[1.025] active:scale-95 active:opacity-80"
              onClick={() => {
                setSelectedIndex(i);
                setHiRes(false);
              }}
            >
              <Image
                src={src}
                fill
                unoptimized
                alt={`Photo ${i + 1}`}
                className="object-cover w-full h-full shadow-lg transition-opacity duration-200 group-hover:opacity-90"
                onError={() => {
                  setDisplayImages((prev) =>
                    prev.filter((_, idx) => idx !== i)
                  );
                }}
              />
            </div>
          );
        })}
      </div>

      {selectedIndex !== null && selectedSrc && (
        <div
          className="group fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => {
            setSelectedIndex(null);
            setLoading(false);
          }}
        >
          {selectedIndex > 0 && (
            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 active:scale-95 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex - 1);
                setHiRes(false);
                setLoading(false);
              }}
            >
              <FaChevronLeft className="text-white" size={24} />
            </button>
          )}
          {selectedIndex < displayImages.length - 1 && (
            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 active:scale-95 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
                setHiRes(false);
                setLoading(false);
              }}
            >
              <FaChevronRight className="text-white" size={24} />
            </button>
          )}
          <Image
            key={selectedSrc}
            src={selectedSrc}
            alt="Enlarged photo"
            width={1600}
            height={1200}
            unoptimized
            onLoad={() => setLoading(false)}
            onError={() => {
              setHiRes(false);
              setLoading(false);
            }}
            className={`max-h-[90vh] max-w-[90vw] object-contain m-auto transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 rounded-full border-4 border-white/40 border-t-transparent animate-spin" />
            </div>
          )}
          {displayImages[selectedIndex].full && (
            <button
              className="absolute bottom-6 right-6 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm text-white hover:bg-white/40"
              onClick={(e) => {
                e.stopPropagation();
                const next = !hiRes;
                setLoading(true);   // always show spinner until the new img loads
                setHiRes(next);
              }}
            >
              {loading
                ? "Loading…"
                : hiRes
                    ? "Preview size"
                    : "Load 4‑K"}
            </button>
          )}
        </div>
      )}
    </>
  );
}
