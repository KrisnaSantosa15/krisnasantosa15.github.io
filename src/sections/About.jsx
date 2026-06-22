import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import { profile } from "../data/profile";

const ease = [0.16, 1, 0.3, 1];

const TOOLS_WALL = ["Python", "TensorFlow", "React", "Next.js", "FastAPI", "Scikit-Learn", "Tailwind CSS", "Docker", "PostgreSQL", "Node.js", "Laravel", "OpenCV"];

export default function About() {
  return (
    <section id="about" className="container-x py-24 md:py-36">
      <div className="mb-16 flex items-center gap-4">
        <span className="label">02 — About</span>
        <span className="h-px flex-1 bg-ink/15" />
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        {/* Bio */}
        <div className="lg:col-span-8">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-balance">
            <RevealText text="I build apps. I train AI." />{" "}
            <RevealText
              text="I touch grass... occasionally."
              delay={0.1}
              className="font-serif italic text-ember"
            />{" "}
            <RevealText
              text="Strategy, craft, and a relentless eye for details people feel but can't name."
              delay={0.2}
              className="text-ink/55"
            />
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                className="text-[15px] leading-relaxed text-ink/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Sidebar card */}
        <motion.aside
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-bone">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-acid/30 blur-2xl" />
            <p className="label text-bone/55">Currently</p>
            <p className="mt-3 font-display text-2xl font-medium leading-snug">
              {profile.currently}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["ML", "LLMs", "Computer Vision", "TFX", "React", "Python"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-bone/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/75"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/15 bg-ink/15 md:grid-cols-4">
        {profile.stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="bg-bone p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
          >
            <p className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
              {s.value}
              <span className="text-ember">{s.suffix}</span>
            </p>
            <p className="mt-2 label">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Tools wall */}
      <div className="mt-16">
        <p className="label mb-6">Core Technologies</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {TOOLS_WALL.map((t, i) => (
            <motion.span
              key={t}
              className="font-display text-2xl font-medium text-ink/40 transition-colors hover:text-ink md:text-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              data-cursor=""
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
