"use client";
import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Fisher‑Yates shuffle (returns a new array)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * ClientGallery
 * Props:
 * - files: array of S3 object keys (strings)
 * - bucket: S3 bucket name
 * - region: AWS region string
 *
 * Renders a responsive 3‑column grid of images with a click‑to‑zoom modal.
 */
export default function ClientGallery({ files, bucket, region }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Shuffle once per mount so order is random on every page load
  const shuffledFiles = useMemo(() => shuffle(files), [files]);

  // Close modal on Esc key and navigate with arrow keys
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (
        e.key === "ArrowRight" &&
        selectedIndex !== null &&
        selectedIndex < shuffledFiles.length - 1
      ) {
        setSelectedIndex(selectedIndex + 1);
      }
      if (e.key === "ArrowLeft" && selectedIndex !== null && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
    [selectedIndex, shuffledFiles.length]
  );
  useEffect(() => {
    if (selectedIndex !== null) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handleKey]);

  const selectedSrc =
    selectedIndex !== null
      ? `https://${bucket}.s3.${region}.amazonaws.com/${shuffledFiles[selectedIndex]}`
      : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shuffledFiles.map((file, i) => {
          const src = `https://${bucket}.s3.${region}.amazonaws.com/${file}`;
          return (
            <div
              key={file}
              className="group aspect-square cursor-zoom-in transform transition duration-200 hover:scale-[1.025] active:scale-95 active:opacity-80"
              onClick={() => setSelectedIndex(i)}
            >
              <Image
                src={src}
                width={800}
                height={800}
                alt={file}
                quality={70}
                unoptimized
                className="w-full h-full object-cover shadow-lg transition-opacity duration-200 group-hover:opacity-90"
              />
            </div>
          );
        })}
      </div>

      {selectedIndex !== null && selectedSrc && (
        <div
          className="group fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setSelectedIndex(null)}
        >
          {selectedIndex > 0 && (
            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 active:scale-95 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <FaChevronLeft className="text-white" size={24} />
            </button>
          )}
          {selectedIndex < shuffledFiles.length - 1 && (
            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 active:scale-95 hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <FaChevronRight className="text-white" size={24} />
            </button>
          )}
          <Image
            src={selectedSrc}
            alt="Enlarged photo"
            width={1600}
            height={1200}
            quality={90}
            unoptimized
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
}