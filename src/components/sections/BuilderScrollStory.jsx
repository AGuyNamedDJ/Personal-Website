"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    eyebrow: "Foundation",
    title: "The work begins close to people.",
    body:
      "Clinical pharmacy and biomedical research keep every larger ambition connected to human needs, real institutions, and the consequences of therapeutic decisions.",
    range: [0, 0.08, 0.2, 0.29],
  },
  {
    number: "02",
    eyebrow: "Systems",
    title: "Knowledge becomes something people can use.",
    body:
      "Software, research tools, and disciplined operations turn observation into infrastructure that can support better work at a larger scale.",
    range: [0.22, 0.32, 0.45, 0.54],
  },
  {
    number: "03",
    eyebrow: "Companies",
    title: "Systems gain reach through ownership.",
    body:
      "NaS is the first company built around this idea: serious science carried forward into practical tools, durable value, and better therapeutic decisions.",
    range: [0.47, 0.57, 0.7, 0.79],
  },
  {
    number: "04",
    eyebrow: "Institutions",
    title: "The longest work makes room for others.",
    body:
      "Writing, education, philanthropy, culture, and future institutions extend the value of the work beyond one company, one role, or one lifetime.",
    range: [0.72, 0.82, 0.95, 1],
  },
];

function StoryStep({ step, progress }) {
  const opacity = useTransform(progress, step.range, [0, 1, 1, 0]);
  const y = useTransform(progress, step.range, [35, 0, 0, -35]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, y }}
    >
      <div className="max-w-xl">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#BFA98B]">
          <span>{step.number}</span>
          <span className="h-px w-10 bg-[#8E7457]" />
          <span>{step.eyebrow}</span>
        </div>
        <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#FFF9F0] sm:text-5xl md:text-6xl">
          {step.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#CDBEAA]">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function BuilderScrollStory() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.78, 1.02, 1.28]
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-2.5, 1.5]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [50, -45]
  );
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[360vh] bg-[#0B0908] text-white"
      aria-label="How Dalron's work develops"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(134,98,61,0.18),transparent_36%)]" />

        <div className="relative mx-auto grid h-full max-w-7xl gap-8 px-6 sm:px-10 md:grid-cols-[1fr_0.82fr] md:items-center lg:px-16">
          <div className="relative h-[62vh] md:h-[70vh]">
            {steps.map((step) => (
              <StoryStep key={step.number} step={step} progress={scrollYProgress} />
            ))}
          </div>

          <motion.div
            className="pointer-events-none absolute bottom-[-10vh] right-[-18vw] h-[62vh] w-[88vw] opacity-30 md:relative md:bottom-auto md:right-auto md:h-[74vh] md:w-full md:opacity-70"
            style={{ scale: imageScale, rotate: imageRotate, y: imageY }}
          >
            <Image
              src="/assets/images/NaSHQ.png"
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10">
          <motion.div
            className="h-full origin-left bg-[#BFA98B]"
            style={{ scaleX: lineScale }}
          />
        </div>
      </div>
    </section>
  );
}
