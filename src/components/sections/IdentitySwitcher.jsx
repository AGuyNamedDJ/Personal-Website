"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const areas = [
  {
    label: "Science and Care",
    shortLabel: "Science",
    title: "Close enough to the work to know what matters.",
    description:
      "Clinical pharmacy, biomedical research, and serious training provide the foundation. Oncology is the first long-term clinical focus, followed by infectious disease.",
    image: "/assets/images/Graduation.jpeg",
    imageAlt: "Dalron J. Robertson at Mississippi College",
    href: "/about",
    linkLabel: "See the foundation",
  },
  {
    label: "Systems and Companies",
    shortLabel: "Systems",
    title: "Ideas gain reach when they become infrastructure.",
    description:
      "NaS, Nicole, software, and future ventures reflect the same instinct: organize knowledge, build useful systems, and create value that can grow beyond one person.",
    image: "/assets/images/systems-companies-sculpture.jpg",
    imageAlt:
      "Interlocking bronze, glass, wood, and ceramic forms representing durable systems",
    href: "/work#companies",
    linkLabel: "Explore the systems",
  },
  {
    label: "Writing and Culture",
    shortLabel: "Writing",
    title: "Not every serious idea belongs in a laboratory.",
    description:
      "Books, essays, photography, and film create room to think about ambition, ethics, love, technology, memory, and the kind of future worth building.",
    image: "/assets/images/JadeCB.png",
    imageAlt: "Circuit Breakers artwork",
    href: "/writing",
    linkLabel: "Explore the writing",
  },
  {
    label: "Institutions and Community",
    shortLabel: "Institutions",
    title: "The longest work should continue serving others.",
    description:
      "The Robertson Foundation represents a long view of culture, education, philanthropy, and community development. It is in development and intended to grow with the work.",
    image: "/assets/images/RobertsonFoundation.jpg",
    imageAlt: "Robertson Foundation identity",
    href: "/work#institutions",
    linkLabel: "See the long view",
  },
];

export default function IdentitySwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeArea = areas[activeIndex];

  return (
    <section className="bg-[#15110E] px-6 py-24 text-[#F3EBDD] sm:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A99478]">
          One life, several forms of work
        </p>
        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#FFF9F0] md:text-7xl">
            The title changes. The purpose does not.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#BFAF9B]">
            Each part of the work answers a different question. Together, they
            describe the builder more accurately than any single profession.
          </p>
        </div>

        <div
          className="mt-12 flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-black/25 p-1.5"
          role="tablist"
          aria-label="Areas of Dalron's work"
        >
          {areas.map((area, index) => (
            <button
              key={area.label}
              type="button"
              role="tab"
              id={`identity-tab-${index}`}
              aria-selected={activeIndex === index}
              aria-controls="identity-panel"
              onClick={() => setActiveIndex(index)}
              className={`min-w-fit flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeIndex === index
                  ? "bg-[#E8DCC9] text-[#18110C]"
                  : "text-[#BFAF9B] hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="sm:hidden">{area.shortLabel}</span>
              <span className="hidden sm:inline">{area.label}</span>
            </button>
          ))}
        </div>

        <div
          id="identity-panel"
          role="tabpanel"
          aria-labelledby={`identity-tab-${activeIndex}`}
          className="mt-8 grid min-h-[600px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0C0A09] lg:grid-cols-[1.02fr_0.98fr]"
        >
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.label}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A99478]">
                  {activeArea.label}
                </p>
                <h3 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#FFF9F0] md:text-5xl">
                  {activeArea.title}
                </h3>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#BFAF9B]">
                  {activeArea.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              href={activeArea.href}
              className="mt-12 w-fit border-b border-[#A99478] pb-1 text-sm font-semibold text-[#E8DCC9] no-underline transition hover:border-white hover:text-white"
            >
              {activeArea.linkLabel} ↗
            </Link>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[#211A15] lg:min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.image}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={activeArea.image}
                  alt={activeArea.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className={`${
                    activeIndex === 3 ? "object-contain p-10" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
