import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "../components/RevealText";
import Magnetic from "../components/Magnetic";
import { profile } from "../data/profile";

const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-ink text-bone"
    >
      {/* Ghost word */}
      <motion.span
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[28vw] font-bold leading-none tracking-tightest text-bone/[0.04]"
      >
        COLLAB
      </motion.span>

      <div className="container-x relative z-10 py-28 md:py-44">
        <span className="label text-bone/55">06 — Contact</span>

        <h2 className="mt-8 font-display text-[clamp(2.5rem,9vw,9rem)] font-semibold leading-[0.9] tracking-tightest">
          <RevealText text="Let's make" />
          <br />
          <RevealText
            text="something"
            delay={0.06}
            className="font-serif italic text-acid"
          />{" "}
          <RevealText text="real." delay={0.12} />
        </h2>

        <div className="mt-14 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          {/* Email + resume */}
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/55">
              Drop a line
            </p>
            <Magnetic strength={0.18}>
              <a
                href={`mailto:${profile.socials.email}`}
                data-cursor="copy"
                className="group inline-flex items-center gap-4 text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-tight"
              >
                <span className="link-underline">{profile.socials.email}</span>
                <motion.span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-acid text-ink"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.span>
              </a>
            </Magnetic>

            {/* Resume download */}
            <div className="mt-6">
              <a
                href={profile.resumeUrl}
                data-cursor="download"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-bone/60 transition-colors hover:text-acid"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {[
              ["GitHub", `/krisnasantosa15`, profile.socials.github],
              ["LinkedIn", `/krisna-santosa`, profile.socials.linkedin],
              ["Instagram", `@krisna.santosa_15`, profile.socials.instagram],
              ["WhatsApp", profile.socials.phone, profile.socials.whatsapp],
            ].map(([label, handle, url]) => (
              <Magnetic key={label} strength={0.2}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="visit"
                  className="group block"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/45">
                    {label}
                  </p>
                  <p className="mt-1 text-lg text-bone/90 transition-colors group-hover:text-acid">
                    {handle}
                  </p>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-24 flex flex-col gap-4 border-t border-bone/15 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-acid" />
            {profile.location} — Designed & developed with care
          </span>
          <a href="#top" data-cursor="top" className="link-underline hover:text-bone">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
