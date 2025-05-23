// src/components/CreativeGrid.jsx

 "use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
const albums = [
  { title: "Album One", cover: "/assets/images/Dummy.png", link: "/creative-studio/album-one" },
  { title: "Album Two", cover: "/assets/images/Dummy.png", link: "/creative-studio/album-two" },
  { title: "Album Three", cover: "/assets/images/Dummy.png", link: "/creative-studio/album-three" },
  { title: "Album Four", cover: "/assets/images/Dummy.png", link: "/creative-studio/album-four" },
  { title: "Album Five", cover: "/assets/images/DummyOne.png", link: "/creative-studio/album-five" },
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
    }, 4000);
    return () => clearInterval(timer);
  }, [pages.length, pageIndex]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 bg-black">
      <p className="text-4xl font-semibold mb-8 text-center text-white">Photography</p>
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
          {pages[pageIndex].map((album) => (
            <Link
              key={album.title}
              href={album.link}
              className="block transform transition-transform duration-200 hover:scale-[1.025]"
            >
              <div
                className="aspect-[4/5] w-full overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${album.cover})` }}
              />
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