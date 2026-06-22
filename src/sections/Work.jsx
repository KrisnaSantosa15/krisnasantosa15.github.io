import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "../components/RevealText";
import { projects, projectCategories, categoryColors } from "../data/projects";

const ease = [0.16, 1, 0.3, 1];
const INITIAL = 4; // show only 4 cards first
const STEP = 4; // load 4 more per click

// Row span patterns — each pair always sums to 12 so rows tile perfectly.
// Alternating asymmetric → symmetric creates a magazine rhythm.
const ROW_PATTERNS = [
  [7, 5],
  [5, 7],
  [6, 6],
];
const SPAN_CLASS = {
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  12: "lg:col-span-12",
};

function chunkInPairs(arr) {
  const rows = [];
  for (let i = 0; i < arr.length; i += 2) rows.push(arr.slice(i, i + 2));
  return rows;
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [count, setCount] = useState(INITIAL);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;
  const rows = chunkInPairs(visible);

  return (
    <section id="work" className="container-x py-24 md:py-36">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="label">01 — Selected Work</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            <RevealText text="A few things" />{" "}
            <RevealText text="worth showing." delay={0.08} />
          </h2>
        </div>
        <p className="max-w-xs text-sm text-ink/55">
          {projects.length} projects across web, ML, data, and more. Each shipped, measured, and documented.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((c) => {
          const active = filter === c.id;
          const n = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => { setFilter(c.id); setCount(INITIAL); }}
              data-cursor={active ? "" : undefined}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all ${
                active
                  ? "border-ink bg-ink text-bone"
                  : "border-ink/20 text-ink/60 hover:border-ink/50 hover:text-ink"
              }`}
            >
              {c.label}{" "}
              <span className="opacity-50">{n}</span>
            </button>
          );
        })}
      </div>

      {/* Rows — each row is a fixed-height 12-col grid so cards align with no gaps */}
      <div className="space-y-6">
        {rows.map((rowCards, ri) => (
          <div
            key={ri}
            className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:h-[30rem]"
          >
            {rowCards.map((p, ci) => {
              const [a, b] = ROW_PATTERNS[ri % ROW_PATTERNS.length];
              const spanN = rowCards.length === 1 ? 12 : ci === 0 ? a : b;
              return (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={ri * 2 + ci}
                  colSpanClass={SPAN_CLASS[spanN]}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
            Showing {visible.length} of {filtered.length}
          </span>
          <button
            onClick={() => setCount((c) => c + STEP)}
            data-cursor="more"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/20 px-8 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
          >
            Load more
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index, colSpanClass }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const color = categoryColors[project.category] || "#0a0a0a";
  const isDark = project.category === "others";
  const textOnDark = isDark ? "#ebe6da" : "#0a0a0a";

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 6, ry: px * 6 });
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ rx: 0, ry: 0 }); }}
      data-cursor="view"
      className={`group relative ${colSpanClass} h-[26rem] sm:h-[28rem] lg:h-full perspective`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, delay: (index % 8) * 0.05, ease }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-3xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        {/* Cover */}
        <div className="absolute inset-0" style={{ background: color }}>
          <Cover project={project} color={color} textOnDark={textOnDark} />
        </div>

        {/* Gradient for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/10" />

        {/* Top meta */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6" style={{ color: textOnDark }}>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] opacity-60">
            ({String(index + 1).padStart(2, "0")})
          </span>
          <span className="rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em]" style={{ border: `1px solid ${textOnDark}40`, color: textOnDark }}>
            {project.category.replace("-", " ")}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-bone md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-bone/70 line-clamp-1">{project.summary}</p>
            </div>
            <motion.div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bone/40"
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {hovered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-3 border-t border-bone/20 pt-4">
                  {/* Metrics badges */}
                  {project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((m) => (
                        <span key={m} className="rounded-full bg-acid px-2.5 py-1 font-mono text-[10px] font-medium text-ink">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-bone/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-bone/75"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="font-mono text-[9px] text-bone/50">+{project.technologies.length - 6}</span>
                    )}
                  </div>

                  {/* Feature list (truncated) */}
                  {project.features.length > 0 && (
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-xs text-bone/65">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-acid" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-1">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid transition-colors hover:text-bone">
                        GitHub ↗
                      </a>
                    )}
                    {project.liveDemo && project.liveDemo !== project.github && (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid transition-colors hover:text-bone">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

/**
 * Category-aware generated SVG covers.
 */
function Cover({ project, color, textOnDark }) {
  const cls = "absolute inset-0 h-full w-full";
  const seed = project.id * 7; // deterministic variation per project
  const title = project.title.split(":")[0].split(" ")[0].slice(0, 8);

  switch (project.category) {
    case "machine-learning":
      return (
        <svg className={cls} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {/* Neural network nodes */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={60 + col * 70}
                cy={50 + row * 80 + (col % 2 ? 20 : 0)}
                r={6 + row * 2}
                fill={textOnDark}
                opacity={0.1 + ((row + col) % 3) * 0.06}
              />
            ))
          )}
          {/* Connections */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={60 + (i % 5) * 70}
              y1={50 + Math.floor(i / 5) * 80}
              x2={60 + ((i + 1) % 5) * 70}
              y2={130 + Math.floor(i / 5) * 40}
              stroke={textOnDark}
              strokeWidth="1"
              opacity="0.08"
            />
          ))}
          {/* Loss curve */}
          <path
            d={`M40,${200 + seed % 30} Q100,${220 + seed % 20} 160,${180 + seed % 40} Q220,${160 + seed % 20} 280,${140 + seed % 30} Q340,${130 + seed % 20} 380,${125 + seed % 15}`}
            fill="none"
            stroke="#d6ff3d"
            strokeWidth="2"
            opacity="0.6"
          />
          <text x="30" y="40" fontFamily="monospace" fontSize="10" fill={textOnDark} opacity="0.5">
            epoch {(seed % 50 + 10)} · loss: {(0.05 + (seed % 20) * 0.01).toFixed(3)}
          </text>
          <text x="30" y="285" fontFamily="Clash Display, sans-serif" fontSize="20" fontWeight="600" fill={textOnDark}>
            {title}
          </text>
        </svg>
      );

    case "web":
      return (
        <svg className={cls} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {/* Layout grid */}
          <rect x="30" y="40" width="150" height="80" rx="8" fill={textOnDark} opacity="0.15" />
          <rect x="30" y="130" width="150" height="50" rx="8" fill={textOnDark} opacity="0.1" />
          <rect x="30" y="190" width="340" height="4" rx="2" fill={textOnDark} opacity="0.08" />
          <rect x="30" y="210" width="100" height="8" rx="4" fill={textOnDark} opacity="0.12" />
          <rect x="140" y="210" width="60" height="8" rx="4" fill={textOnDark} opacity="0.08" />
          {/* Sidebar */}
          <rect x="220" y="40" width="150" height="140" rx="8" fill={textOnDark} opacity="0.08" />
          <rect x="230" y="55" width="130" height="20" rx="4" fill={textOnDark} opacity="0.06" />
          <rect x="230" y="85" width="90" height="6" rx="3" fill={textOnDark} opacity="0.06" />
          <rect x="230" y="100" width="110" height="6" rx="3" fill={textOnDark} opacity="0.06" />
          {/* Browser dots */}
          <circle cx="45" cy="52" r="4" fill="#ff4d2e" opacity="0.6" />
          <circle cx="58" cy="52" r="4" fill="#d6ff3d" opacity="0.6" />
          <circle cx="71" cy="52" r="4" fill="#3b82f6" opacity="0.6" />
          <text x="30" y="280" fontFamily="Clash Display, sans-serif" fontSize="20" fontWeight="600" fill={textOnDark}>
            {title}
          </text>
        </svg>
      );

    case "data-analysis":
      return (
        <svg className={cls} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {/* Chart bars */}
          {[55, 90, 70, 120, 95, 145, 110].map((h, i) => (
            <rect
              key={i}
              x={35 + i * 50}
              y={230 - h}
              width="30"
              height={h}
              rx="4"
              fill={textOnDark}
              opacity={0.12 + ((i * 3) % 5) * 0.04}
            />
          ))}
          <line x1="25" y1="230" x2="385" y2="230" stroke={textOnDark} strokeWidth="1.5" opacity="0.3" />
          {/* Trend line */}
          <path
            d={`M50,${220 - seed % 40} L85,${190 + seed % 30} L135,${200 - seed % 20} L185,${160 + seed % 20} L235,${170 - seed % 30} L285,${130 + seed % 20} L335,${140 - seed % 15}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2.5"
            opacity="0.7"
          />
          <text x="30" y="35" fontFamily="monospace" fontSize="10" fill={textOnDark} opacity="0.5">
            RFM ANALYSIS · SEGMENTATION
          </text>
          <text x="30" y="280" fontFamily="Clash Display, sans-serif" fontSize="20" fontWeight="600" fill={textOnDark}>
            {title}
          </text>
        </svg>
      );

    default: // others
      return (
        <svg className={cls} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {/* Terminal-like */}
          <rect x="20" y="30" width="360" height="200" rx="10" fill={textOnDark} opacity="0.06" />
          <circle cx="40" cy="48" r="4" fill="#ff4d2e" opacity="0.4" />
          <circle cx="53" cy="48" r="4" fill="#d6ff3d" opacity="0.4" />
          <circle cx="66" cy="48" r="4" fill="#3b82f6" opacity="0.4" />
          {[
            "$ python {title.toLowerCase()}.py",
            ">> Loading model...",
            `>> {project.technologies.slice(0, 3).join(" · ")}`,
            ">> Done ✓",
          ].map((line, i) => (
            <text
              key={i}
              x="40"
              y={75 + i * 22}
              fontFamily="monospace"
              fontSize="12"
              fill={textOnDark}
              opacity={0.3 + (4 - i) * 0.05}
            >
              {line}
            </text>
          ))}
          <text x="30" y="280" fontFamily="Clash Display, sans-serif" fontSize="20" fontWeight="600" fill={textOnDark}>
            {title}
          </text>
        </svg>
      );
  }
}
