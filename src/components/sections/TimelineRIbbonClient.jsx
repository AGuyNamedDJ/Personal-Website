"use client";
 
import React, { useState } from "react";
import { motion } from "framer-motion";

// Variants for scroll reveal animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const entries = [
  {
    year: 2013,
    title: "B.S. in Biology, Jackson State University (2013 - 2018)",
    desc: "Completed my undergraduate degree in biology, transitioning from an initial major in music education to a pre-med/pre-pharmacy academic track."
  },
    {
    year: 2018,
    title: "M.S. in Biology, Mississippi College (2018 - 2019)",
    desc: "Began graduate coursework in medical sciences, completing advanced classes including neuroanatomy, vertebrate histology, and clinical physiology."
  },
  {
    year: 2019,
    title: "Doctor of Pharmacy, Chicago State University (2019 - 2021)",
    desc: "Left my master’s program early to begin Pharm.D. studies, transitioning my academic path toward clinical pharmacy practice and pharmaceutical research."
  },
  {
    year: 2021,
    title: "Sabbatical (2021 - 2022)",
    desc: "Stepped away from academic and professional commitments to focus on spiritual growth, personal reflection, and and clarify my personal and professional direction."
  },
  {
    year: 2022,
    title: "Software Engineering Training, University of Illinois at Chicago (2022)",
    desc: "Completed specialized training in algorithms, full-stack development, and systems design, establishing a foundation that directly led to my role at Scale AI."
  },
  {
    year: 2023,
    title: "AI Software Engineer, Scale AI (Sep 2023 – Jan 2025)",
    desc: "Collaborated directly with Google on Gemini, employing reinforcement learning, prompt engineering, and red-teaming methods to enhance model accuracy, search effectiveness, and reliability."
  },
  {
    year: 2024,
    title: "Master’s Program Re-entry, Mississippi College (August 2024)",
    desc: "Returned to Mississippi College to complete coursework and begin research in computational biology after stepping away in 2019."
  },
  {
    year: 2024,
    title: "Circuit Breakers: Echoes of Innovation (November 2024)",
    desc: "Released the first book in the Circuit Breakers series, a novel centered on resilience, self-discovery, and the struggle to preserve humanity amid technological transformation in healthcare."
  },
  {
    year: 2025,
    title: "To Love Ignorantly - Love's Memoir (February 2025)",
    desc: "Released my second book, an intimate exploration of vulnerability, faith, and the unpredictable journey toward authentic connection and self-discovery."
  },
  {
    year: 2025,
    title: "Circuit Breakers: Imperfections (April 2025)",
    desc: "Released the second book in the Circuit Breakers series, a novel exploring ambition, ethics, and resilience amid rapid advancements in medical artificial intelligence."
  },
  {
    year: 2025,
    title: "M.S. in Biological Sciences (May 2025)",
    desc: "Completed my master's degree with research in computational biology, earning second place at the university’s annual research symposium for work involving bioinformatics and molecular modeling."
  },
  {
    year: 2025,
    title: "NaS Foundational White Paper Release (May 2025)",
    desc: "Published the initial white paper outlining the vision, research framework, and strategic direction for NaS as a life sciences research institute."
  },
  {
    year: 2025,
    title: "Pharm.D. Program Re-entry  (Summer 2025)",
    desc: "Returned to pharmacy school following my master's graduation, relocating to Chicago to resume clinical rotations and complete doctoral coursework."
  },
  {
    year: 2028,
    title: "Doctor of Pharmacy (Pharm.D.) (Expected May 2028)",
    desc: "Anticipated completion of pharmacy doctoral training, positioning me to integrate clinical expertise and pharmaceutical science in patient care and research."
  }
];

export default function TimelineRibbonClient() {
  const reversedEntries = entries.slice().reverse();
  const [currentYear, setCurrentYear] = useState(reversedEntries[0].year);
  return (
    <div className="relative">
      <div className="sticky top-20 mb-4">
        <span className="absolute -left-11 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#D2C2AA] text-sm shadow">
          {currentYear}
        </span>
      </div>
      <ol className="border-l-2 border-[#D2C2AA] space-y-12">
        {reversedEntries.map((m, i) => (
          <motion.li
            key={m.year + m.title}
            className="ml-6 relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onViewportEnter={() => setCurrentYear(m.year)}
          >
            <h3 className="font-semibold text-lg">{m.title}</h3>
            <p className="mt-1 text-neutral-700">{m.desc}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}