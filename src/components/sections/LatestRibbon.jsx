"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    href: "/work/nas",
    title: "NaS & Research",
    blurb: "AI-powered drug discovery and genome science.",
  },
  {
    href: "/work/foundation",
    title: "Robertson Foundation",
    blurb: "Culture, education, and philanthropy.",
  },
  {
    href: "/work/creative",
    title: "Creative Studio",
    blurb: "Photography, film, art, and music.",
  },
];

export default function LatestRibbon() {
  return (
    <section className="section-block bg-neutral-100 text-center" id="latest">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
        {pillars.map(({ href, title, blurb }) => (
          <Link key={href} href={href} className="group">
            <motion.div
              initial={{ opacity: 0, rotateX: 5 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-md bg-white p-8 shadow-md
                         group-hover:shadow-lg group-hover:-translate-y-1
                         transition"
            >
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="text-neutral-600">{blurb}</p>
              <span className="mt-6 inline-block text-sm font-medium text-neutral-500 group-hover:text-neutral-700">
                Explore →
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}