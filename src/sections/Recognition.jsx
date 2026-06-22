import { useState } from "react";
import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import { awards, certifications } from "../data/awards";

const ease = [0.16, 1, 0.3, 1];

const TABS = [
  { id: "awards", label: "Awards", count: awards.length },
  { id: "certs", label: "Certifications", count: certifications.length },
];

function AwardRow({ item, index }) {
  return (
    <motion.li
      className="group grid grid-cols-12 items-center gap-4 border-b border-ink/15 py-7 transition-colors hover:bg-ink hover:text-bone md:py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
    >
      <span className="col-span-1 hidden font-mono text-[11px] uppercase tracking-[0.2em] opacity-50 sm:block">
        0{index + 1}
      </span>
      <span className="col-span-7 font-display text-xl font-medium tracking-tight sm:col-span-5 md:text-2xl">
        {item.title}
      </span>
      <span className="col-span-5 text-sm opacity-75 sm:col-span-4">
        {item.issuer}
      </span>
      <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] opacity-50 sm:col-span-2 sm:text-right">
        {item.date}
      </span>
    </motion.li>
  );
}

export default function Recognition() {
  const [tab, setTab] = useState("awards");

  return (
    <section id="recognition" className="container-x py-24 md:py-36">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="label">05 — Recognition</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            <RevealText text="Honored by judges" />{" "}
            <RevealText text="& juries." delay={0.08} />
          </h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex gap-2">
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              data-cursor={active ? "" : undefined}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
                active
                  ? "border-ink bg-ink text-bone"
                  : "border-ink/20 text-ink/60 hover:border-ink/50 hover:text-ink"
              }`}
            >
              {t.label}{" "}
              <span className={active ? "opacity-50" : "opacity-40"}>{t.count}</span>
            </button>
          );
        })}
      </div>

      {/* List */}
      <ul className="border-t border-ink/15">
        {(tab === "awards" ? awards : certifications).map((item, i) => (
          <AwardRow key={item.id} item={item} index={i} />
        ))}
      </ul>
    </section>
  );
}
