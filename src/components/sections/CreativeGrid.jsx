"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const region = process.env.NEXT_PUBLIC_AWS_REGION;
const albumCover = (bucket, key, fallback) =>
  bucket && region
    ? `https://${bucket}.s3.${region}.amazonaws.com/${key}`
    : fallback;

const albums = [
  {
    title: "Master's Graduation",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_MASTERS_GRADUATION,
      "GRADO-6816.jpeg",
      "/assets/images/Graduation3.png"
    ),
    link: "/creative-studio/masters-graduation"
  },
  {
    title: "Gatlinburg 2025",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_GATLINBURG_25,
      "GATO-6617.jpeg",
      "/assets/images/Graduation1.png"
    ),
    link: "/creative-studio/gatlinburg-25"
  },
  {
    title: "Apple Day 2023",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_APPLE_DAY_23,
      "ADO-93.jpeg",
      "/assets/images/IMG_6414.JPG"
    ),
    link: "/creative-studio/apple-day-23"
  },
  {
    title: "Chicago Marathon 2023",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_CHICAGO_MARATHON_23,
      "CMO-21.png",
      "/assets/images/Graduation2.png"
    ),
    link: "/creative-studio/chicago-marathon-23"
  },
  {
    title: "Texas State Fair",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_TEXAS_STATE_FAIR,
      "Texas-State-Fair-82.jpg",
      "/assets/images/CB.png"
    ),
    link: "/creative-studio/texas-state-fair"
  },
  {
    title: "9-1-23",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_9_1_2023,
      "Sep1O-107.jpeg",
      "/assets/images/Hero.png"
    ),
    link: "/creative-studio/9-1-2023"
  },
  {
    title: "Bachelor's Graduation",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_BACHELORS_GRADUATION,
      "GRAD-JSU-O-748.jpeg",
      "/assets/images/Graduation.jpeg"
    ),
    link: "/creative-studio/bachelors-graduation"
  },
  {
    title: "Daddy-Daughter Photo Shoot",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_DADDY_DAUGHTER_PHOTOSHOOT,
      "E8-E.jpg",
      "/assets/images/RobertsonFoundation.jpg"
    ),
    link: "/creative-studio/daddy-daughter-photoshoot"
  }
];

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
    }, 6000);
    return () => clearInterval(timer);
  }, [pages.length, pageIndex]);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-20 pb-3 bg-black">
      <p className="mt-6 text-2xl md:text-3xl font-semibold mb-0 text-center text-neutral-400">
        Photo Galleries
      </p>
      <h1
        className="text-[4rem] md:text-[6rem] font-bold text-center mb-16 text-white"
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
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={68}
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                />
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
