"use client";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useMotionValue,
} from "framer-motion";

export default function ScrollTransition({
  bgImage,
  firstLines = [],
  secondLines = [],
  finalImage,
  images = [],
}) {
  /* keep a local copy of the loop images (starts with two sets for SSR) */
  const [loopImgs, setLoopImgs] = useState(
    images.length > 0 ? [...images, ...images] : []
  );

  /* distance the track must translate for one full native image set */
  const distanceRef = useRef(1); // initialise non‑zero so % won't divide by 0

  /* seconds a single batch of slides should take to cross the screen */
  const [durationFactor, setDurationFactor] = useState(9.5);

  const ref = useRef(null);

  const x = useMotionValue(0);                // carousel translate‑X
  const controls = useAnimation();

  /* restart the infinite tween without a visual jump */
  const updateSpeed = (factor) => {
    const dist = distanceRef.current;
    const loopOffset = x.get() % -dist;
    controls.stop();
    controls.set({ x: loopOffset });
    controls.start({
      x: loopOffset - dist,
      transition: {
        duration: images.length * factor,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
    setDurationFactor(factor);
  };

  /* ───── scroll progress 0 → 1 ───── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* helper to normalise line props */
  const toObj = (line, idx, fallback) =>
    typeof line === "string"
      ? { text: line, className: fallback(idx) }
      : line;

  useLayoutEffect(() => {
    if (typeof window === "undefined" || images.length === 0) return;

    const vw = window.innerWidth;
    const slideW = vw * 0.54;    // 20 % wider (was 45 vw → 54 vw)
    const overlap = vw * 0.12;   // keep the overlap proportional (10 vw → 12 vw)
    const effectiveW = slideW - overlap;
    distanceRef.current = effectiveW * images.length;

    const cardsPerScreen = Math.ceil(vw / effectiveW);
    const setsNeeded = cardsPerScreen + 1; // always have one spare set
    const newLoop = Array.from({ length: setsNeeded }).flatMap(() => images);
    setLoopImgs(newLoop);

    // kick off animation with correct distance
    updateSpeed(durationFactor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ───── chapter copy ───── */
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

  /* ───── background zoom / fade ───── */
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

  /* ───── render ───── */
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
        {/* chapter 1 */}
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

        {/* chapter 2 */}
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

        {/* phase 3 — full‑screen visual that shrinks away */}
        {finalImage && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.78, 0.8, 0.965, 0.98],
                [0, 1, 1, 0]
              ),
              scale: useTransform(scrollYProgress, [0.8, 0.9, 0.965], [
                1, 1, 0.45,
              ]),
            }}
          >
            <img
              src={finalImage}
              alt=""
              className="w-screen h-screen object-cover"
            />
          </motion.div>
        )}

        {/* phase 4 — 40 %‑width carousel */}
        {images.length > 0 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            style={{
              opacity: useTransform(scrollYProgress, [0.96, 0.975], [0, 1]),
            }}
          >
            {/* track */}
            <motion.div
              className="flex items-center"
              style={{ x }}
              animate={controls}
              onHoverStart={() => updateSpeed(19)} /* half‑speed */
              onHoverEnd={() => updateSpeed(9.5)}  /* normal */
            >
              {loopImgs.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 rounded-lg shadow-xl overflow-hidden"
                  style={{
                    width: "54vw",          // 20 % larger
                    marginRight: "-12vw",   // proportional overlap
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
