import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ITEMS = [
  "Full-Stack Development",
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "MLOps",
  "React & Next.js",
  "Python & FastAPI",
  "Data Engineering",
  "TensorFlow",
  "Cloud & Docker",
];

export default function Marquee() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const base = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const baseX = useSpring(base, { stiffness: 60, damping: 22 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-ink bg-ink py-6 text-bone"
    >
      <motion.div
        style={{ x: baseX }}
        className="flex w-max whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="px-8 font-display text-4xl font-medium tracking-tight sm:text-6xl">
                  {item}
                </span>
                <span className="text-2xl text-acid sm:text-3xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
