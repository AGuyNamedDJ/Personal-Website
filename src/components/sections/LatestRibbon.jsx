"use client";

import React, { useState, useEffect } from "react";

const backgrounds = [
  { type: "image", src: "/assets/images/NaSArticle.png" },
  { type: "image", src: "/assets/images/RobertsonFoundation.jpg" },
  { type: "image", src: "/assets/images/CB.png" },
  { type: "image", src: "/assets/images/Graduation3.png" },
];

export default function LatestRibbon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const bg = backgrounds[index];

  return (
    <section
      id="latest"
      className="relative overflow-hidden py-32 min-h-[70vh]"
    >
      {index === 0 ? (
        // Floating research article image
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={bg.src}
            alt="Research Article"
            className="max-w-3xl max-h-[60vh] object-contain rounded-lg shadow-lg"
          />
          <a
            href="/files/NaSArticle.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 left-8 inline-flex items-center text-sm font-medium text-neutral-900 underline transform transition-transform hover:scale-105 active:scale-95 focus:outline-none"
          >
            View Article →
          </a>
        </div>
      ) : index === 1 ? (
        // Robertson Foundation custom background
        <div className="absolute inset-0 flex items-center justify-center bg-[#181615]">
          <img
            src={bg.src}
            alt="Robertson Foundation"
            className="w-[65%] h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      ) : (
        // Other image backgrounds
        <img
          src={bg.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </section>
  );
}