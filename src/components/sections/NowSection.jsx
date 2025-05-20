

"use client";

import { motion } from "framer-motion";

/**
 * NowSection
 * A concise status update that fades in as it enters the viewport.
 */

export default function NowSection() {
  return (
    <section className="section-block bg-white text-center" id="now">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight">
          Building Nicole — the sovereign AI agent of&nbsp;NaS
        </h2>
        <p className="text-neutral-700">
          I’m training Nicole on two decades of biomedical literature while
          recruiting early collaborators to pilot our first drug‑discovery
          projects.
        </p>
      </motion.div>
    </section>
  );
}