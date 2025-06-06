 "use client";
import { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ScrollTransition({
  bgImage,
  firstLines = [],
  secondLines = [],
  finalImage,
  books = [],
}) {
  const images = books.map(book => book.image);
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

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    },
    []
  );

  useEffect(() => {
    if (selectedIndex !== null) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handleKey]);

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
    <>
      <section ref={ref} className="relative h-[750vh] bg-black">
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
                className="max-w-[80vw] max-h-[80vh] object-contain"
              />
            </motion.div>
          )}

          {/* phase 4 — 40 %‑width carousel */}
          {images.length > 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-auto translate-y-20"
              style={{
                opacity: useTransform(scrollYProgress, [0.96, 0.975], [0, 1]),
              }}
            >
              <div className="absolute top-20 w-full text-center px-8 md:px-16 z-50">
                <p className="mt-6 text-[4rem] md:text-[6rem] font-bold text-center mb-0 text-white">
                  Written to Inspire.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-center text-neutral-400">
                  A collection of ideas and stories I’ve written, meant to clarify my thinking, invite reflection, and encourage deeper conversations.
                </p>
              </div>
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
                    className="flex-shrink-0 rounded-lg shadow-xl overflow-hidden cursor-pointer"
                    style={{
                      width: "54vw",          // keep the wider card
                      marginRight: "-12vw",   // maintain overlap
                      aspectRatio: "2/3",     // portrait ratio like a book
                      padding: "3vw",         // inner padding so cover isn't cropped
                      backgroundImage: `url(${src})`,
                      backgroundSize: "contain",   // show whole cover
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundColor: "#000",     // neutral backdrop around the cover
                    }}
                    onClick={() => setSelectedIndex(i)}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
        {selectedIndex !== null && loopImgs[selectedIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:opacity-70 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              &times;
            </button>
            <Image
              src={loopImgs[selectedIndex]}
              alt="Enlarged book cover"
              width={1200}
              height={1800}
              quality={90}
              unoptimized
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <div className="absolute bottom-8 flex space-x-4">
              {books[selectedIndex % books.length].links.amazon && (
                <a
                  href={books[selectedIndex % books.length].links.amazon}
                  target="_blank"
                  className="inline-block transform transition-transform hover:scale-105 active:scale-95 active:opacity-75"
                >
                  <Image
                    src="/assets/images/AmazonButton.png"
                    alt="Buy on Amazon"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </a>
              )}
              {books[selectedIndex % books.length].links.barnesNoble && (
                <a
                  href={books[selectedIndex % books.length].links.barnesNoble}
                  target="_blank"
                  className="inline-block transform transition-transform hover:scale-105 active:scale-95 active:opacity-75"
                >
                  <Image
                    src="/assets/images/BarnesandNobleButton.png"
                    alt="Buy on Barnes & Noble"
                    width={100}
                    height={33}
                    className="object-contain rounded-lg shadow-md"
                  />
                </a>
              )}
              {books[selectedIndex % books.length].links.googleBooks && (
                <a
                  href={books[selectedIndex % books.length].links.googleBooks}
                  target="_blank"
                  className="inline-block transform transition-transform hover:scale-105 active:scale-95 active:opacity-75"
                >
                  <Image
                    src="/assets/images/GooglePlayButton.png"
                    alt="Buy on Google Books"
                    width={120}
                    height={40}
                    className="object-contain rounded-lg shadow-md"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Research Papers section correctly outside of the animation */}
      <section className="w-full pt-0 pb-24 bg-black text-left">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-5xl md:text-7xl font-semibold text-white">
            All Original Research.<br />By Dalron Robertson.
          </p>
        </div>
        {/* Two-column grid of research article previews */}
        <div className="mx-auto max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-40">
          <Image
            src="/assets/images/NaSArticle.png"
            alt="Research Article Preview"
            width={500}
            height={667}
            className="rounded-lg shadow-xl object-cover"
          />
          <Image
            src="/assets/images/M.S.Article.png"
            alt="Research Article Preview"
            width={500}
            height={667}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        {/* Description and call-to-action link */}
        <div className="mx-auto max-w-4xl px-4 text-center mt-16">
          <p className="text-xl md:text-2xl text-neutral-400 mb-6">
            Explore more original research I’ve done recently at the NaS CDN.
          </p>
          <a
            href="https://cdn.your-nas-website.com"
            target="_blank"
            className="inline-block text-blue-500 text-xl font-medium transition-transform hover:scale-105 active:scale-95 active:opacity-75"
          >
            Visit NaS CDN →
          </a>
        </div>
      </section>

    <Footer />
    </>
  );
}
