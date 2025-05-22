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
    year: 2018,
    title: "M.S. in Biology, Mississippi College (2018)",
    desc: "Enrolled in graduate studies to explore advanced topics in molecular biology and bioinformatics."
  },
  {
    year: 2019,
    title: "Doctor of Pharmacy Program Enrollment (2019)",
    desc: "Began Pharm.D. coursework, laying the foundation for clinical practice and pharmaceutical research."
  },
  {
    year: 2021,
    title: "Professional Sabbatical (2021)",
    desc: "Took intentional time away to reflect, plan next steps, and align career goals with personal vision."
  },
  {
    year: 2022,
    title: "Software Engineering Coursework Completion, University of Illinois at Chicago (2022)",
    desc: "Finished key classes in algorithms, full-stack development, and systems design to bridge code with life sciences."
  },
  {
    year: 2023,
    title: "AI Software Engineer, Scale AI (2023)",
    desc: "Joined the Scale AI team to apply machine-learning pipelines for annotating biological datasets and accelerating drug discovery."
  },
  {
    year: 2024,
    title: "Master’s Coursework Resumption, Mississippi College (August 2024)",
    desc: "Returned to complete remaining credits and move toward thesis research in cellular and molecular biology."
  },
  {
    year: 2025,
    title: "Publication: To Love Ignorantly (February 2025)",
    desc: "Released my second book, a reflection on vulnerability, faith, and the courage to love without guarantees."
  },
  {
    year: 2025,
    title: "Publication: Circuit Breakers 2 (April 2025)",
    desc: "Published the sequel to my tech memoir, examining resilience and creative problem-solving in high-pressure environments."
  },
  {
    year: 2025,
    title: "M.S. in Biology Conferred, Mississippi College (May 2025)",
    desc: "Officially graduated, marking the culmination of advanced research and thesis defense in biological sciences."
  },
  {
    year: 2025,
    title: "NaS Foundational White Paper Release (May 25, 2025)",
    desc: "Unveiled the strategic blueprint for NaS—outlining infrastructure, research pillars, and initial findings."
  },
  {
    year: 2025,
    title: "Pharm.D. P3 Re-enrollment & Chicago Relocation (Summer 2025)",
    desc: "Re-entered the final year of pharmacy school and moved back to Chicago to begin clinical rotations."
  },
  {
    year: 2028,
    title: "Pharm.D. Graduation (Projected May 2028)",
    desc: "Target date to earn my Doctor of Pharmacy and transition into patient-centered pharmaceutical care."
  }
];

export default function TimelineRibbonClient() {
  const reversedEntries = entries.slice().reverse();
  const [currentYear, setCurrentYear] = useState(reversedEntries[0].year);
  return (
    <div className="relative">
      <div className="sticky top-20 mb-4">
        <span className="absolute -left-14 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#D2C2AA] text-sm shadow">
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