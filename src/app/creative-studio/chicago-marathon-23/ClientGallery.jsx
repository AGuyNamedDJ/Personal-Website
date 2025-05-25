"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ClientGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelectedIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selectedSrc =
    selectedIndex !== null ? images[selectedIndex].opt : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <div
            key={img.opt}
            className="relative overflow-hidden group aspect-square cursor-zoom-in transform transition duration-200 hover:scale-[1.025] active:scale-95 active:opacity-80"
            onClick={() => setSelectedIndex(i)}
          >
            <Image
              src={img.opt}
              fill
              unoptimized
              alt={`Photo ${i + 1}`}
              className="object-cover w-full h-full shadow-lg transition-opacity duration-200 group-hover:opacity-90"
              onError={() =>
                setSelectedIndex((prev) =>
                  prev === i ? null : prev
                )
              }
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="group fixed inset-0 z-[90] flex items-center justify-center bg-black/90 cursor-zoom-out"
          onClick={() => setSelectedIndex(null)}
        >
          <Image
            src={selectedSrc}
            alt="Enlarged photo"
            width={1600}
            height={1200}
            unoptimized
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
}
