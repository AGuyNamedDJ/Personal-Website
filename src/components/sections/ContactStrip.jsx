

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactStrip() {
  return (
    <section className="section-block bg-neutral-100 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight">
          Let’s build something extraordinary
        </h2>
        <Link
          href="/connect"
          className="inline-block rounded border border-neutral-900 px-8 py-3 font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
        >
          Connect with Me
        </Link>
      </motion.div>
    </section>
  );
}