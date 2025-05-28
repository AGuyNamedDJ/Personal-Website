"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTransition({
  bgImage,
  firstLines = [],
  secondLines = [],
  finalImage,
  images = [],
}) {
  const loopImgs = images.length > 0 ? [...images, ...images] : [];

  // track speed factor (seconds per slide group); increases on hover
  const [durationFactor, setDurationFactor] = useState(9.5);

  const ref = useRef(null);

  /* viewport width for slide math */
  const viewportW =
    typeof window !== "undefined" ? window.innerWidth : 0;
  const slideW = viewportW * 0.45; // 45 % of page width

  const distance = slideW * images.length;          // one full loop

  /* ───────── scroll progress 0-1 ───────── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* ───────── helper to normalise line props ───────── */
  const toObj = (line, idx, fallback) =>
    typeof line === "string"
      ? { text: line, className: fallback(idx) }
      : line;

  /* ───────── Chapter 1 & 2 copy (unchanged) ───────── */
  const intro = firstLines.map((l, i) =>
    toObj(l, i, (n) =>
      n === 1
        ? "text-[8rem] md:text-[10rem] leading-none font-bold text-white"
        : n === 0
        ? "text-2xl md:text-3xl font-semibold text-white"
        : "text-xl md:text-2xl max-w-2xl mx-auto text-white"
    )
  );

  const detail = secondLines.map((l, i) =>
    toObj(l, i, () =>
      "text-2xl md:text-3xl max-w-5xl mx-auto text-neutral-300"
    )
  );

  /* ───────── background zoom / fade ───────── */
  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.3, 0.6, 0.8, 1],
    [0.8, 0.8, 0.5, 0.5, 0, 0]
  );
  const imgScale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.05]);

  const c1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const c2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.65, 0.8],
    [0, 1, 1, 0]
  );

  /* ───────── render ───────── */
  return (
    <section ref={ref} className="relative h-[650vh] bg-black">
      {/* background plate */}
      <motion.div
        className="sticky top-0 w-full h-screen bg-center bg-cover"
        initial={{ opacity: 0.8 }}
        style={{
          opacity: imgOpacity,
          scale: imgScale,
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* pinned stage */}
      <div className="sticky top-0 z-10 flex items-center justify-center w-full h-screen pointer-events-none">
        {/* Chapter 1 */}
        <motion.div
          initial={{ opacity: 1 }}
          style={{ opacity: c1Opacity }}
          className="text-center space-y-2"
        >
          {intro.map(({ text, className }, i) => (
            <p key={i} className={className}>
              {text}
            </p>
          ))}
        </motion.div>

        {/* Chapter 2 */}
        {detail.length > 0 && (
          <motion.div
            style={{ opacity: c2Opacity }}
            className="text-center space-y-4"
          >
            {detail.map(({ text, className }, i) => (
              <p key={i} className={className}>
                {text}
              </p>
            ))}
          </motion.div>
        )}

        {/* ───────── Phase 3 — full-screen book ➔ smooth shrink ───────── */}
        {finalImage && (
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
            /* visible 80 %–96 %, fades at 97 % */
            opacity: useTransform(
                scrollYProgress,
                [0.78, 0.80, 0.965, 0.98],
                [0,    1,    1,     0]
            ),
            /* hold full-size to 90 %, then scale down to 40 % width by 96 % */
            scale: useTransform(
                scrollYProgress,
                [0.80, 0.90, 0.965],
                [1,    1,    0.45]
            ),
            }}
        >
            <img
              src={finalImage}
              alt=""
              className="w-screen h-screen object-cover"
            />
        </motion.div>
        )}

        {/* ───────── Phase 4 — 40 %-width carousel (arrow-controlled) ───────── */}
        {images.length > 0 && (
        <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            style={{
            /* fade in right after Phase 3 completes */
            opacity: useTransform(scrollYProgress, [0.96, 0.975], [0, 1]),
            }}
        >
            {/* track */}
            <motion.div
              className="flex items-center"
              animate={{ x: [0, -distance] }}
              transition={{
                duration: images.length * durationFactor,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                delay: 1,
              }}
              onHoverStart={() => setDurationFactor(19)}   /* 2× slower */
              onHoverEnd={() => setDurationFactor(9.5)}    /* normal */
            >
            {loopImgs.map((src, i) => (
                <div
                key={i}
                className="flex-shrink-0 rounded-lg shadow-xl overflow-hidden"
                style={{
                    width: "45vw",
                    marginRight: "-10vw",
                    aspectRatio: "16/9",
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                />
            ))}
            </motion.div>
        </motion.div>
        )}
      </div>
    </section>
  );
}
