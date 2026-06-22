import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { profile } from "../data/profile";
import Magnetic from "./Magnetic";

const LINKS = [
  { label: "Index", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

function useClock(tz) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const fmt = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  });
  return fmt.format(now);
}

export default function Nav() {
  const clock = useClock(profile.timezone);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const last = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = last.current;
    last.current = y;
    setScrolled(y > 40);
    if (y > 300 && y > prev) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-bone/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-4">
          {/* Wordmark */}
          <Magnetic strength={0.3}>
            <a
              href="#top"
              data-cursor="home"
              className="flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-acid">
                K
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                {profile.firstName}<span className="text-ember">.</span>
              </span>
            </a>
          </Magnetic>

          {/* Center nav */}
          <nav className="hidden items-center gap-1 rounded-full border border-ink/15 bg-bone/40 px-2 py-1.5 backdrop-blur-md md:flex">
            {LINKS.map((l) => (
              <Magnetic key={l.href} strength={0.25}>
                <a
                  href={l.href}
                  data-cursor=""
                  className="link-underline rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55 sm:inline">
              {profile.locationShort} · {clock} {profile.timezoneLabel}
            </span>
            <Magnetic strength={0.35}>
              <a
                href="#contact"
                data-cursor="say hi"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-acid shadow-[0_0_10px] shadow-acid" />
                {profile.availability.label}
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
