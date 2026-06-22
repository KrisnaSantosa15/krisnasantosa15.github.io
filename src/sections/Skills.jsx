import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "../components/RevealText";
import { skills, skillCategories, proficiencyRank } from "../data/skills";

const ease = [0.16, 1, 0.3, 1];

const PROF_STYLE = {
  Beginner: "border-ink/15 text-ink/60 bg-bone",
  Intermediate: "border-ink/25 text-ink/75 bg-bone",
  Advanced: "border-ember/40 text-ember bg-bone",
  Expert: "border-acid/50 text-ink bg-acid",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const filtered = skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="container-x py-24 md:py-36">
      <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="label">03 — Skills</span>
        </div>
        <h2 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-tight md:col-span-8">
          <RevealText text="Code, creativity," />{" "}
          <RevealText text="and communication." delay={0.08} className="font-serif italic text-ember" />
        </h2>
      </div>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {skillCategories.map((cat) => {
          const n = skills.filter((s) => s.category === cat.id).length;
          const active = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              data-cursor={active ? "" : undefined}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
                active
                  ? "border-ink bg-ink text-bone"
                  : "border-ink/20 text-ink/60 hover:border-ink/50 hover:text-ink"
              }`}
            >
              {cat.label}{" "}
              <span className={active ? "opacity-50" : "opacity-40"}>{n}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered
            .sort((a, b) => proficiencyRank[b.proficiency] - proficiencyRank[a.proficiency])
            .map((s) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-bone/50 px-5 py-4 transition-colors hover:border-ink/25"
              >
                <div>
                  <p className="font-display text-base font-medium tracking-tight">
                    {s.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                    {s.years} yr{s.years > 1 ? "s" : ""}
                  </p>
                </div>
                <span
                  className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${PROF_STYLE[s.proficiency]}`}
                >
                  {s.proficiency}
                </span>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
