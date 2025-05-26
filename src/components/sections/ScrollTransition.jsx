"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTransition({
  bgImage,
  firstLines = [],
  secondLines = [],
  finalImage,
}) {
  const ref = useRef(null);
  // Progress = 0 when the section top reaches the viewport top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* ---------------------------------------------------------------------- */
  /* Utility to ensure each line is an object { text, className }           */
  /* ---------------------------------------------------------------------- */
  const toObj = (line, idx, fallback) =>
    typeof line === "string" ? { text: line, className: fallback(idx) } : line;

  /* ---------------------------------------------------------------------- */
  /* Chapter 1: firstLines (3 intro <p> tags)                               */
  /* Default classes give full-brightness white text; override as needed    */
  /* ---------------------------------------------------------------------- */
  const intro = firstLines.map((l, i) =>
    toObj(
      l,
      i,
      (index) =>
        index === 1
          ? "text-[8rem] md:text-[10rem] leading-none font-bold text-white"
          : index === 0
          ? "text-2xl md:text-3xl font-semibold text-white"
          : "text-xl md:text-2xl max-w-2xl mx-auto text-white"
    )
  );

  /* ---------------------------------------------------------------------- */
  /* Chapter 2: secondLines (any <p> tags)                                  */
  /* ---------------------------------------------------------------------- */
  const detail = secondLines.map((l, i) =>
    toObj(
      l,
      i,
      () => "text-2xl md:text-3xl max-w-5xl mx-auto text-neutral-300"
    )
  );

  /* ---------------------------------------------------------------------- */
  /* Image animations                                                       */
  /* ---------------------------------------------------------------------- */
  // Image: 80 % → plateaus at 50 % → fades to 0
  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.3, 0.6, 0.8, 1],
    [0.8, 0.8, 0.5, 0.5, 0, 0]
  );
  const imgScale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.05]);

  /* ---------------------------------------------------------------------- */
  /* Chapter opacities                                                      */
  /* ---------------------------------------------------------------------- */
  // Intro stays up until 30 % scroll, then fades
  const c1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  // Second text fades in after intro, plateaus, then fades out with image
  const c2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.65, 0.8],
    [0,   1,    1,    0]
  );
  const c3Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  /* ---------------------------------------------------------------------- */
  /* Render                                                                 */
  /* ---------------------------------------------------------------------- */
  return (
    <section ref={ref} className="relative h-[350vh] bg-black">
      {/* Background image that fades/zooms */}
      <motion.div
        className="sticky top-0 w-full h-screen bg-center bg-cover"
        initial={{ opacity: 0.8 }}
        style={{
          opacity: imgOpacity,
          scale: imgScale,
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* pinned and centered in the viewport */}
      <div className="sticky top-0 z-10 flex items-center justify-center w-full h-screen pointer-events-none">
        {/* Chapter 1 — intro (visible at load, full brightness) */}
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

        {/* Chapter 2 — detail copy */}
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

        {/* Chapter 3 — finale image */}
        {finalImage && (
          <motion.div style={{ opacity: c3Opacity }} className="flex justify-center">
            <img
              src={finalImage}
              alt=""
              className="w-auto h-[60vh] object-contain"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
