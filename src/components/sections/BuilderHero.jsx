"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BuilderHero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.14]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 110]
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [0.42, 0.08]);
  const copyY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -45]
  );
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] overflow-hidden bg-[#0B0908] text-[#F3EBDD]"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY, opacity: imageOpacity }}
      >
        <Image
          src="/assets/images/NaSHQ.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(184,146,101,0.16),transparent_34%),linear-gradient(90deg,#0B0908_10%,rgba(11,9,8,0.94)_48%,rgba(11,9,8,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0B0908] to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 md:justify-center md:pb-0 lg:px-16"
        style={{ y: copyY, opacity: copyOpacity }}
      >
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#BFA98B] sm:text-sm">
            Dalron J. Robertson, M.S.
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3.6rem,10vw,8.8rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#FFF9F0]">
            Building what should exist.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#D8CCBC] md:text-2xl">
            Scientist, founder, writer, and builder creating systems, companies,
            and institutions with a foundation in science and patient care.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="rounded-full bg-[#E8DCC9] px-7 py-3.5 text-sm font-semibold text-[#18110C] no-underline transition hover:bg-[#FFF9F0]"
            >
              Explore the work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[#D8CCBC]/45 bg-black/10 px-7 py-3.5 text-sm font-semibold text-[#F3EBDD] no-underline backdrop-blur-sm transition hover:bg-white/10"
            >
              About Dalron
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium uppercase tracking-[0.17em] text-[#BFA98B]">
          <span>Science</span>
          <span>Systems</span>
          <span>Writing</span>
          <span>Institutions</span>
        </div>
      </motion.div>

      <div className="absolute bottom-5 right-6 z-10 hidden items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[#A99478] md:flex">
        <span>Scroll to enter</span>
        <span className="h-10 w-px bg-[#A99478]/60" />
      </div>
    </section>
  );
}
