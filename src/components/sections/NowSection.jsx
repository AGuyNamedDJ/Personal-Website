// src/components/sections/NowSection.jsx
"use client";

import { motion } from "framer-motion";

export default function NowSection() {
  return (
    <section
      className="section-block bg-[#F9F4EC] text-center px-6 sm:px-8 lg:px-10"
      id="now"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10"
      >
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight">
          Meet Nicole, NaS’ AI Research Agent
        </h2>
        <p className="mt-4 mb-8 text-neutral-700">
          I’m currently training Nicole on two decades of biomedical literature, continuously fine-tuning her foundational knowledge base.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="/files/Nas-White-Paper.pdf"
            download
            className="inline-block bg-black text-white rounded-lg border border-transparent px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black hover:border-black decoration-none hover:decoration-none focus:outline-none"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download Whitepaper
          </motion.a>
          <motion.a
            href="https://github.com/NaS-Research/knowledge-model"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black rounded-lg px-5 py-2 text-sm font-medium border border-black transition hover:scale-105 hover:bg-black hover:text-white no-underline focus:outline-none"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View on GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}