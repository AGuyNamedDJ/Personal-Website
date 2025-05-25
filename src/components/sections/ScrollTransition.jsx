"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTransition({
  bgImage,
  firstText,
  secondText,
  thirdText,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.75, 1],
    [0.8, 0.8, 0, 0]   // ⬅️ begins and plateaus at 80 % opacity
  );
  const imgScale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.05]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      <motion.div
        className="sticky top-0 w-full h-screen bg-center bg-cover"
        initial={{ opacity: 0.8 }}  // ⬅️ same 80 % at first paint
        style={{
          opacity: imgOpacity,
          scale: imgScale,
          backgroundImage: `url(${bgImage})`,
        }}
      />
    </section>
  );
}
