// src/app/writing/ClientWritingPage.jsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollTransition from "@/components/sections/ScrollTransition";
import Footer from "@/components/Footer";

export default function ClientWritingPage() {
  // Reference for the first viewport-height section
  const wrapperRef = React.useRef(null);

  // Fade the hero text out during the first 20 % of that section’s scroll
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  // Text stays at full opacity until 5 % scroll, then fades to 0 by 20 %
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.2], [1, 1, 0]);

  return (
    <main className="pt-20 scroll-smooth bg-black text-white">
      {/* ───── Hero + ScrollTransition share the same background ───── */}
      <section ref={wrapperRef} className="relative h-screen">
        {/* Background + later phases */}
        <ScrollTransition
          bgImage="/assets/images/JadeCB.png"
          firstLines={[]}
          secondLines={[
            {
              text: "Books I've written to spark curiosity and inspire fresh perspectives.",
              className:
                "text-4xl md:text-5xl w-full max-w-none text-white pl-8 pr-8 md:pl-24 md:pr-24 text-left leading-normal mb-10",
            },
            {
              text: "Articles that share what I've learned, clearly and thoughtfully.",
              className:
                "text-4xl md:text-5xl w-full max-w-none text-white pl-8 pr-8 md:pl-24 md:pr-24 text-left leading-normal mb-10",
            },
            {
              text: "Original research born from careful study and meaningful insights.",
              className:
                "text-4xl md:text-5xl w-full max-w-none text-white pl-8 pr-8 md:pl-24 md:pr-24 text-left leading-normal mb-10",
            },
            {
              text: "All my writing, together in one place, ready to explore.",
              className:
                "text-4xl md:text-5xl w-full max-w-none text-white pl-8 pr-8 md:pl-24 md:pr-24 text-left leading-normal mb-10",
            },
          ]}
          finalImage="/assets/images/CB2.png"
          books={[
            {
              image: "/assets/images/CB1.png",
              links: {
                amazon: "https://www.amazon.com/Circuit-Breakers-Innovation-Dalron-Robertson-ebook/dp/B0DQ5RCB3Z/?_encoding=UTF8&pd_rd_w=n7uTL&content-id=amzn1.sym.0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_p=0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_r=144-6969151-6856136&pd_rd_wg=8RZUK&pd_rd_r=7bc5fc46-9bad-41d7-bc02-3f6a768fd20c&ref_=aufs_ap_sc_dsk",
                googleBooks: "https://books.google.com/books?id=6B83EQAAQBAJ&num=6",
              },
            },
            {
              image: "/assets/images/CB2.png",
              links: {
                amazon: "https://www.amazon.com/Circuit-Breakers-Imperfections-Dalron-Robertson/dp/B0F4XWYDJB/?_encoding=UTF8&pd_rd_w=n7uTL&content-id=amzn1.sym.0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_p=0fb2cce1-1ca4-439a-844b-8ad0b1fb77f7&pf_rd_r=144-6969151-6856136&pd_rd_wg=8RZUK&pd_rd_r=7bc5fc46-9bad-41d7-bc02-3f6a768fd20c&ref_=aufs_ap_sc_dsk",
                barnesNoble: "https://www.barnesandnoble.com/w/circuit-breakers-dalron-robertson/1147282782",
                googleBooks: "https://books.google.com/books?id=PU5I0QEACAAJ&newbks=1&newbks_redir=0&hl=en",
              },
            },
            {
              image: "/assets/images/TLI.png",
              links: {
                amazon: "https://www.amazon.com/Love-Ignorantly-Loves-Memoir-ebook/dp/B0DS1DBR58",
                barnesNoble: "https://www.barnesandnoble.com/w/to-love-ignorantly-dalron-robertson/1146773973?ean=9798341897038",
                googleBooks: "https://books.google.com/books/about/To_Love_Ignorantly_Loves_Memoir.html?id=Abg7EQAAQBAJ",
              },
            },
          ]}
        />
        {/* Hero text overlay (visible on load, fades out) */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-20"
          style={{ opacity: heroOpacity }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-neutral-200">
            Every Word Matters.
          </p>
          <p className="text-[8rem] md:text-[10rem] leading-none font-bold text-white">
            Every Idea, Powerful.
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-neutral-200">
            Thoughtful writing crafted to educate, inspire, and make a lasting impact, across various topics and formats.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}