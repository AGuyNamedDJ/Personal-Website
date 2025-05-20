// src/components/sections/NowSection.jsx
"use client";

import { motion } from "framer-motion";

export default function NowSection() {
  return (
    <section className="section-block bg-white text-center px-4 sm:px-6 lg:px-8" id="now">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0"
      >
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight">
          Meet Nicole, NaS’ AI Research Agent
        </h2>
        <p className="text-neutral-700 my-6">
          I’m training Nicole on two decades of biomedical literature while
          recruiting early collaborators to pilot our first drug-discovery
          projects.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/files/Nicole-Whitepaper.pdf"
            download
            className="inline-block bg-black text-white rounded-lg px-6 py-3 text-base font-medium transition transform hover:scale-105 hover:opacity-90 decoration-none hover:decoration-none"
          >
            Download Whitepaper
          </a>
          <a
            href="https://github.com/NaS-Research/knowledge-model"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black rounded-lg px-6 py-3 text-base font-medium border border-black transition transform hover:scale-105 hover:bg-black hover:text-white decoration-none hover:decoration-none"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}