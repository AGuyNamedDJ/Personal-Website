"use client";

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
            aria-hidden="true"
          >
            <div className="absolute inset-[4%] rounded-full border border-[#BFA98B]/15" />
            <div className="absolute inset-[14%] rounded-full border border-[#8E7457]/25" />
            <div className="absolute left-1/2 top-[7%] h-[86%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#BFA98B]/35 to-transparent" />
            <div className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#BFA98B]/35 to-transparent" />

            <div
              className="absolute inset-[18%]"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              {[0, 1, 2, 3, 4].map((layer) => (
                <div
                  key={layer}
                  className="absolute inset-0 rounded-[2.2rem] border border-[#D9C5A8]/25 bg-[#5A402D]/10 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-[1px]"
                  style={{
                    transform: `rotateX(60deg) rotateZ(-34deg) translateZ(${
                      layer * 34
                    }px) scale(${1 - layer * 0.075})`,
                    transformOrigin: "center",
                  }}
                >
                  <div className="absolute inset-[14%] rounded-[1.35rem] border border-[#BFA98B]/20" />
                  <div className="absolute bottom-[13%] left-[13%] h-[18%] w-[18%] rounded-full bg-[#D7B68C]/20 blur-sm" />
                </div>
              ))}

              <div
                className="absolute left-1/2 top-1/2 h-[24%] w-[24%] rounded-3xl border border-[#F0DDC2]/50 bg-[radial-gradient(circle_at_35%_28%,rgba(244,221,190,0.72),rgba(144,94,57,0.35)_38%,rgba(21,17,14,0.15)_72%)] shadow-[0_0_90px_rgba(190,139,91,0.28)]"
                style={{
                  transform:
                    "translate(-50%, -50%) rotateX(60deg) rotateZ(-34deg) translateZ(180px)",
                }}
              />
            </div>

            <div className="absolute bottom-[8%] right-[8%] flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#8E7457]">
              <span className="h-px w-10 bg-[#8E7457]/70" />
              <span>Built in layers</span>
            </div>
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
