"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlinePause,
  HiOutlinePlay,
} from "react-icons/hi";

const region = process.env.NEXT_PUBLIC_AWS_REGION;
const albumCover = (bucket, key, fallback) =>
  bucket && region
    ? `https://${bucket}.s3.${region}.amazonaws.com/${key}`
    : fallback;

const albums = [
  {
    title: "Master's Graduation",
    date: "May 2025",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_MASTERS_GRADUATION,
      "GRADO-6816.jpeg",
      "/assets/images/Graduation3.png"
    ),
    link: "/creative-studio/masters-graduation",
  },
  {
    title: "Gatlinburg",
    date: "2025",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_GATLINBURG_25,
      "GATO-6617.jpeg",
      "/assets/images/Graduation1.png"
    ),
    link: "/creative-studio/gatlinburg-25",
  },
  {
    title: "Apple Day",
    date: "2023",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_APPLE_DAY_23,
      "ADO-93.jpeg",
      "/assets/images/IMG_6414.JPG"
    ),
    link: "/creative-studio/apple-day-23",
  },
  {
    title: "Chicago Marathon",
    date: "2023",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_CHICAGO_MARATHON_23,
      "CMO-21.png",
      "/assets/images/Graduation2.png"
    ),
    link: "/creative-studio/chicago-marathon-23",
  },
  {
    title: "Texas State Fair",
    date: "In photographs",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_TEXAS_STATE_FAIR,
      "Texas-State-Fair-82.jpg",
      "/assets/images/CB.png"
    ),
    link: "/creative-studio/texas-state-fair",
  },
  {
    title: "September First",
    date: "2023",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_9_1_2023,
      "Sep1O-107.jpeg",
      "/assets/images/Hero.png"
    ),
    link: "/creative-studio/9-1-2023",
  },
  {
    title: "Bachelor's Graduation",
    date: "Jackson State University",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_BACHELORS_GRADUATION,
      "GRAD-JSU-O-748.jpeg",
      "/assets/images/Graduation.jpeg"
    ),
    link: "/creative-studio/bachelors-graduation",
  },
  {
    title: "Daddy-Daughter Portraits",
    date: "Family",
    cover: albumCover(
      process.env.NEXT_PUBLIC_S3_BUCKET_ALBUM_DADDY_DAUGHTER_PHOTOSHOOT,
      "E8-E.jpg",
      "/assets/images/RobertsonFoundation.jpg"
    ),
    link: "/creative-studio/daddy-daughter-photoshoot",
  },
];

export default function CreativeGrid() {
  const pages = useMemo(
    () => [albums.slice(0, 4), albums.slice(4, 8)],
    []
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return undefined;

    const timer = window.setInterval(() => {
      setPageIndex((current) => (current + 1) % pages.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPlaying, pages.length]);

  const previousPage = () => {
    setPageIndex((current) => (current - 1 + pages.length) % pages.length);
  };

  const nextPage = () => {
    setPageIndex((current) => (current + 1) % pages.length);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
            Photography
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
            Life, framed.
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousPage}
            aria-label="Previous photo galleries"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#E8DCC9] transition hover:bg-white/10"
          >
            <HiOutlineArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => setIsPlaying((current) => !current)}
            aria-label={isPlaying ? "Pause gallery rotation" : "Play gallery rotation"}
            aria-pressed={!isPlaying}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#E8DCC9] transition hover:bg-white/10"
          >
            {isPlaying ? (
              <HiOutlinePause size={20} />
            ) : (
              <HiOutlinePlay size={20} />
            )}
          </button>
          <button
            type="button"
            onClick={nextPage}
            aria-label="Next photo galleries"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#E8DCC9] transition hover:bg-white/10"
          >
            <HiOutlineArrowRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="mt-12 grid gap-4 md:grid-cols-2"
        aria-live="polite"
        aria-label={`Photo gallery group ${pageIndex + 1} of ${pages.length}`}
      >
        {pages[pageIndex].map((album, index) => (
          <Link
            key={album.title}
            href={album.link}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#15110E] no-underline ${
              index === 0 || index === 3
                ? "min-h-[520px]"
                : "min-h-[420px]"
            }`}
          >
            <Image
              src={album.cover}
              alt={album.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={68}
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[#BFA98B]">
                {album.date}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {album.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-7 flex justify-center gap-2" aria-label="Gallery groups">
        {pages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setPageIndex(index)}
            aria-label={`Show gallery group ${index + 1}`}
            aria-current={pageIndex === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${
              pageIndex === index
                ? "w-10 bg-[#D8C7AF]"
                : "w-4 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
