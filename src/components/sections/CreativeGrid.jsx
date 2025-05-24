"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const region = process.env.NEXT_PUBLIC_AWS_REGION;
const albums = [
  {
    title: "Daddy Daughter Photoshoot",
    cover: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_DADDY_DAUGHTER_PHOTOSHOOT}.s3.${region}.amazonaws.com/E8-E.jpg`,
    link: "/creative-studio/daddy-daughter-photoshoot"
  }
];

export default function CreativeGrid() {
  console.log("CreativeGrid config → region:", region, "albums:", albums);
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
      <h1 className="text-4xl font-bold text-center mt-16 mb-10">Upcoming Ventures</h1>
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
                {album.title === "Daddy Daughter Photoshoot" ? (
                  <Image
                    src={album.cover}
                    alt={album.title}
                    width={300}
                    height={375}
                    quality={70}
                    unoptimized
                    className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-75"
                    placeholder="empty"
                  />
                ) : (
                  <div
                    className="aspect-[4/5] w-full overflow-hidden bg-cover bg-center transition-opacity duration-200 group-hover:opacity-75"
                    style={{ backgroundImage: `url(${album.cover})` }}
                  />
                )}
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