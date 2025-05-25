"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const region = process.env.NEXT_PUBLIC_AWS_REGION;
const albums = [
  {
    title: "Masters Graduation",
    cover: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_MASTERS_GRADUATION}.s3.${region}.amazonaws.com/GRADO-6816.jpeg`,
    link: "/creative-studio/masters-graduation"
  },
  {
    title: "Gatlinburg 2025",
    cover: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_GATLINBURG_25}.s3.${region}.amazonaws.com/GATO-6617.jpeg`,
    link: "/creative-studio/gatlinburg-25"
  },
  {
    title: "Texas State Fair",
    cover: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_TEXAS_STATE_FAIR}.s3.${region}.amazonaws.com/Texas-State-Fair-82.jpg`,
    link: "/creative-studio/texas-state-fair"
  },
  {
    title: "9-1-23",
    cover: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_9_1_2023}.s3.${region}.amazonaws.com/Sep1O-107.jpeg`,
    link: "/creative-studio/9-1-2023"
  },
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
    <div className="mx-auto max-w-6xl px-4 pt-20 pb-3 bg-black">
      <p className="mt-6 text-2xl md:text-3xl font-semibold mb-0 text-center text-neutral-400">
        Photo Galleries
      </p>
      <h1
        className="text-[4rem] md:text-[6rem] font-bold text-center mb-16"
        style={{ color: "#FFFFFF" }}
      >
        Life, Framed by Me.
      </h1>
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
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {["Masters Graduation", "Gatlinburg 2025", "Texas State Fair", "Daddy Daughter Photoshoot"].includes(album.title) ? (
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    quality={70}
                    unoptimized
                    className="object-cover w-full h-full transition-opacity duration-200 group-hover:opacity-75"
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