"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BookObject } from "./Primitives";
export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      whileInView={reduced ? {} : { y: [22, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Parallax({ children, className = "", amount = 65 }) {
  const ref = useRef(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-amount, amount],
  );
  return (
    <div ref={ref} className={`parallax-wrap ${className}`}>
      <motion.div className="parallax-content" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
export function BookComposition({ compact = false }) {
  const ref = useRef(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const spread = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [-105, -105, -105] : [-65, -115, -150],
  );
  const right = useTransform(spread, (v) => -v);
  const rotateLeft = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [-20, -20] : [-10, -29],
  );
  const rotateRight = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [20, 20] : [10, 29],
  );
  return (
    <div
      ref={ref}
      className={`book-composition ${compact ? "compact-books" : ""}`}
    >
      <motion.div
        className="composed-book left-book"
        style={{ x: spread, rotateY: rotateLeft, rotateZ: -8 }}
      >
        <BookObject index={0} />
      </motion.div>
      <motion.div
        className="composed-book right-book"
        style={{ x: right, rotateY: rotateRight, rotateZ: 8 }}
      >
        <BookObject index={2} />
      </motion.div>
      <div className="composed-book center-book">
        <BookObject index={1} />
      </div>
    </div>
  );
}
export function DotCarousel({ children, label }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const count = Array.isArray(children) ? children.length : 1;
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) setActive(Number(e.target.dataset.slide));
      },
      { root, threshold: 0.6 },
    );
    [...root.children].forEach((x) => observer.observe(x));
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className="dot-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div ref={ref} className="carousel-track">
        {(Array.isArray(children) ? children : [children]).map((child, i) => (
          <div
            className="carousel-slide"
            key={i}
            data-slide={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-dots" aria-label="Choose a photograph">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            aria-label={`Show photograph ${i + 1}`}
            aria-pressed={i === active}
            onClick={() =>
              ref.current.scrollTo({
                left:
                  ref.current.children[i].offsetLeft -
                  ref.current.children[0].offsetLeft,
                behavior: reduced ? "auto" : "smooth",
              })
            }
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}
