"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const documents = [
  {
    label: "Résumé",
    preview: "/assets/images/ResumePreview.png",
    href: "/files/DJR-Resume.pdf"
  },
  {
    label: "CV",
    preview: "/assets/images/CVPreview.png",
    href: "/files/DJR-CurriculumVitae.pdf"
  }
];


export default function DocumentsRibbon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % documents.length), 6000);
    return () => clearInterval(t);
  }, []);

  const doc = documents[index];

  return (
    <section className="relative overflow-hidden pt-0 pb-40 min-h-[85vh]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
        <img
          src={doc.preview}
          alt={`${doc.label} Preview`}
          className="max-w-4xl max-h-[65vh] object-contain rounded-lg shadow-lg"
          style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.14)" }}
        />
        <div className="flex gap-8">
          <motion.a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline transform transition-transform hover:scale-105"
            whileTap={{ scale: 0.95, opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View {doc.label}
          </motion.a>
          <motion.a
            href={doc.href}
            download
            className="text-sm font-medium underline transform transition-transform hover:scale-105"
            whileTap={{ scale: 0.95, opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download {doc.label}
          </motion.a>
        </div>
      </div>
    </section>
  );
}