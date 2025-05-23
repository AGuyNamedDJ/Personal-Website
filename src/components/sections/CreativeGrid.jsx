"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
const region = process.env.NEXT_PUBLIC_AWS_REGION;
const albums = [
  {
    title: "Texas State Fair",
    cover: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_TEXAS_STATE_FAIR}.s3.${region}.amazonaws.com/Texas-State-Fair-82.jpg`,
    link: "/creative-studio/texas-state-fair"
  }
];

console.log(
  "📦 BUCKET:", process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_TEXAS_STATE_FAIR,
  "🌎 REGION:", process.env.NEXT_PUBLIC_AWS_REGION
);

export default function CreativeGrid() {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = React.useMemo(() => {
    const chunks = [];
    const n = albums.length;
    const numPages = Math.ceil(n / 4);
    for (let p = 0; p < numPages; p++) {
      const page = [];
      for (let j = 0; j < 4; j++) {
        page.push(albums[(p * 4 + j) % n]);
      }
      chunks.push(page);
    }
    return chunks;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [pages.length, pageIndex]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 bg-black">
      <p className="text-3xl font-semibold mb-8 text-center text-white">Photography</p>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-1/5 group">
          <button
            onClick={() => setPageIndex((pageIndex - 1 + pages.length) % pages.length)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 active:scale-95 hover:bg-black/70"
          >
            <FaChevronLeft className="text-white" size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pages[pageIndex].map((album, idx) => (
            <Link
              key={`${album.title}-${idx}`}
              href={album.link}
              className="group block transform transition-transform duration-200 hover:scale-[1.025] active:scale-95 active:opacity-80"
            >
              <div className="relative">
                <div
                  className="aspect-[4/5] w-full overflow-hidden bg-cover bg-center transition-opacity duration-200 group-hover:opacity-75"
                  style={{ backgroundImage: `url(${album.cover})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span
                    className="text-white text-xl font-semibold transition-colors duration-500 delay-[1000ms] group-hover:text-gray-200"
                  >
                    {album.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-1/5 group">
          <button
            onClick={() => setPageIndex((pageIndex + 1) % pages.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-105 active:scale-95 hover:bg-black/70"
          >
            <FaChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}