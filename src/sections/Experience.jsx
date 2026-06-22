import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import { workExperience, education } from "../data/experience";

const ease = [0.16, 1, 0.3, 1];

function TimelineItem({ item, index, type }) {
  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      {/* Dot on line */}
      <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-ink" />
      </div>

      {/* Line (hidden on last) */}
      {index < (type === "work" ? workExperience.length : education.length) - 1 && (
        <div className="absolute bottom-0 left-[7px] top-5 w-px bg-ink/15" />
      )}

      <div className="group">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
            {type === "work" ? item.company : item.institution}
          </h3>
          <span className="rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/55">
            {item.period}
          </span>
        </div>

        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
          {type === "work" ? item.position : item.degree}
          {item.location && ` · ${item.location}`}
        </p>

        {item.description && (
          <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
            {item.description}
          </p>
        )}

        {/* Responsibilities / Achievements */}
        {(item.responsibilities || item.achievements) && (
          <ul className="mt-3 space-y-1.5">
            {(item.responsibilities || item.achievements).map((entry, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-ink/60"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                {entry}
              </li>
            ))}
          </ul>
        )}

        {/* Technologies (work items only) */}
        {item.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/55"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container-x py-24 md:py-36">
      <div className="mb-14 flex items-center gap-4">
        <span className="label">04 — Experience</span>
        <span className="h-px flex-1 bg-ink/15" />
      </div>

      <h2 className="mb-16 font-display text-[clamp(2rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
        <RevealText text="A journey of" />{" "}
        <RevealText text="growth and learning." delay={0.08} />
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Work */}
        <div>
          <h3 className="label mb-8">Work Experience</h3>
          <div className="border-l border-ink/15 pl-4">
            {workExperience.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} type="work" />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="label mb-8">Education</h3>
          <div className="border-l border-ink/15 pl-4">
            {education.map((item, i) => (
              <TimelineItem key={item.institution} item={item} index={i} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
