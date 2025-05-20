

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HeroSection
 * Cycles through muted video clips every 3 s.
 * If no clips are provided, shows a neutral gradient placeholder.
 */

const clips = [
  // e.g. "https://cdn.example.com/hero/01.mp4",
  // "https://cdn.example.com/hero/02.mp4",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (clips.length === 0) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % clips.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {clips.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.video
            key={clips[index]}
            src={clips[index]}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-300" />
      )}

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Dalron J. Robertson
        </h1>
      </div>
    </section>
  );
}