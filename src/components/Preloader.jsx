import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let raf;
    const start = performance.now();
    const dur = 1800;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setGone(true), 250);
        setTimeout(() => {
          document.body.style.overflow = "";
          onDone?.();
        }, 1450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink p-6 text-bone md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease }}
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/55">
              Krisna Santosa
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/55">
              Portfolio / Vol. 04
            </span>
          </div>

          <div className="flex flex-col items-center">
            <motion.h1
              className="font-display text-[clamp(2.5rem,10vw,7rem)] font-semibold leading-none tracking-tightest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              Krisna<span className="font-serif italic text-acid">.</span>
            </motion.h1>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-bone/55">
              Full-Stack Developer & ML Engineer
            </p>
          </div>

          <div className="flex items-end justify-between">
            <div className="w-1/2 max-w-md">
              <div className="mb-2 h-px w-full bg-bone/20">
                <motion.div
                  className="h-full bg-acid"
                  style={{ width: `${count}%` }}
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/45">
                Loading experience
              </p>
            </div>
            <div className="font-display text-[clamp(3rem,12vw,8rem)] font-semibold leading-none tabular-nums">
              {count}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
