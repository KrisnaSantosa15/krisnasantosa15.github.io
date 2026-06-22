import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile } from "../data/profile";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const bgX = useTransform(sx, (v) => `${v * 100}%`);
  const bgY = useTransform(sy, (v) => `${v * 100}%`);

  const px = useTransform(sx, [0, 1], [24, -24]);
  const py = useTransform(sy, [0, 1], [24, -24]);
  const px2 = useTransform(sx, [0, 1], [-14, 14]);
  const py2 = useTransform(sy, [0, 1], [-14, 14]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28"
    >
      {/* Ambient gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: useTransform(
            [bgX, bgY],
            ([x, y]) =>
              `radial-gradient(60rem 60rem at ${x} ${y}, rgba(214,255,61,0.18), transparent 55%), radial-gradient(40rem 40rem at ${100 - x}% ${100 - y}%, rgba(255,77,46,0.12), transparent 50%)`
          ),
        }}
      />

      {/* Grid */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06]"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M64 0H0V64" fill="none" stroke="#0a0a0a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating cards — driven by profile data */}
      <motion.div
        style={{ x: px, y: py }}
        className="pointer-events-none absolute right-[8%] top-[24%] z-10 hidden lg:block"
      >
        <div className="animate-float-y rounded-2xl border border-ink/15 bg-bone/70 px-4 py-3 backdrop-blur-md">
          <p className="label mb-1">{profile.highlights[0].label}</p>
          <p className="font-display text-lg font-semibold">{profile.highlights[0].value}</p>
        </div>
      </motion.div>

      <motion.div
        style={{ x: px2, y: py2 }}
        className="pointer-events-none absolute left-[6%] top-[52%] z-10 hidden lg:block"
      >
        <div className="animate-float-y rounded-2xl border border-ink/15 bg-ink px-4 py-3 text-bone [animation-delay:-2s]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid">
            {profile.highlights[1].label}
          </p>
          <p className="mt-1 text-sm text-bone/70">{profile.highlights[1].value}</p>
        </div>
      </motion.div>

      {/* Top meta */}
      <div className="container-x flex items-start justify-between text-ink/55">
        <motion.p
          className="label max-w-[14rem]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
        >
          Full-Stack Developer
          <br />⟶ ML Engineer
        </motion.p>
        <motion.p
          className="label hidden text-right md:block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease }}
        >
          Portfolio
          <br />
          MMXXVI — Vol. 04
        </motion.p>
      </div>

      {/* Headline */}
      <div className="container-x mt-auto">
        <h1 className="font-display font-semibold leading-[0.84] tracking-tightest">
          <Block delay={0.3}>
            <span className="block text-[clamp(3rem,15vw,18rem)]">CODE</span>
          </Block>
          <Block delay={0.42} className="relative">
            <span className="block text-[clamp(3rem,15vw,18rem)]">
              <span className="stroke-text">THAT</span>{" "}
              <span className="font-serif italic text-ember">scales</span>
            </span>
          </Block>
          <Block delay={0.54}>
            <span className="flex items-end gap-[0.18em] text-[clamp(3rem,15vw,18rem)]">
              <span>MODELS</span>
              <span className="mb-[0.6em] inline-block h-[0.18em] w-[0.9em] animate-blink bg-ember" />
            </span>
          </Block>
        </h1>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-8 border-t border-ink/15 pt-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="max-w-md text-pretty text-[15px] leading-relaxed text-ink/75"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease }}
          >
            I'm <span className="font-medium text-ink">{profile.name}</span> —{" "}
            {profile.heroIntro}
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.9, ease }}
          >
            <a
              href="#work"
              data-cursor="explore"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-ink"
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-ink">
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="transition-transform group-hover:translate-y-0.5"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                  <path d="M7 1v12M2 8l5 5 5-5" stroke="currentColor" fill="none" strokeWidth="1.4" />
                </motion.svg>
              </span>
              Selected Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Block({ children, delay = 0, className = "" }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}
