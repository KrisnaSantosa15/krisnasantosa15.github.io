import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom dynamic cursor.
 *
 * A small dot rigidly tracks the pointer and a larger ring trails it with
 * spring physics. Scales up and shows a contextual label when hovering
 * interactive elements marked with [data-cursor].
 *
 * COLOR: the cursor auto-adapts to its backdrop — it samples the computed
 * background color at the pointer and flips to black on light surfaces and
 * white on dark ones, so it's always visible (bone sections, the black
 * footer, the acid ML cards, the ember web cards, the dark "currently" card).
 */

const INK = "#0a0a0a";
const WHITE = "#ffffff";
const ACID = "#d6ff3d";

/** Parse an rgba()/rgb() CSS string into [r,g,b,a]. */
function parseColor(str) {
  const m = str.match(/rgba?\(([^)]+)\)/i);
  if (!m) return null;
  const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
  const [r, g, b] = parts;
  const a = parts.length === 4 ? parts[3] : 1;
  return [r, g, b, a];
}

/** Relative luminance (sRGB) of an [r,g,b] triplet, 0–1. */
function luminance([r, g, b]) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/**
 * Walk up from `el` accumulating backgrounds until we hit an opaque one,
 * then return its luminance. Considers semi-transparent layers by compositing
 * over the page's default bone background.
 */
function backdropLuminanceAt(el) {
  let node = el;
  const stack = [];
  while (node && node.nodeType === 1 && node !== document.documentElement) {
    const bg = getComputedStyle(node).backgroundColor;
    const c = parseColor(bg);
    if (c) stack.push(c);
    if (c && c[3] >= 0.95) break; // opaque — stop here
    node = node.parentElement;
  }
  // Composite over bone (#f4f1ea) bottom-up
  let r = 0xf4,
    g = 0xf1,
    b = 0xea;
  for (let i = stack.length - 1; i >= 0; i--) {
    const [cr, cg, cb, ca] = stack[i];
    r = cr + (r - cr) * (1 - ca);
    g = cg + (g - cg) * (1 - ca);
    b = cb + (b - cb) * (1 - ca);
  }
  return luminance([r, g, b]);
}

export default function Cursor() {
  const [enabled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }
    return false;
  });
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [down, setDown] = useState(false);
  const [dark, setDark] = useState(false); // backdrop under cursor is dark?

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  // Cache the darkness result by target element so we only read computed
  // styles when the pointer actually crosses into a new element.
  const lastTarget = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      // Contextual hover state
      const el = e.target.closest?.("[data-cursor]");
      if (el) {
        setLabel(el.dataset.cursor || "");
        setHovering(true);
      } else {
        setLabel("");
        setHovering(false);
      }

      // Backdrop darkness (recompute only when target changes)
      if (e.target !== lastTarget.current) {
        lastTarget.current = e.target;
        setDark(backdropLuminanceAt(e.target) < 0.42);
      }
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const fg = dark ? WHITE : INK; // idle color: white on dark, black on light

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.3s" }}
    >
      {/* Rigid dot */}
      <motion.div
        className="absolute rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%", width: 8, height: 8 }}
        animate={{ backgroundColor: fg, scale: down ? 0.5 : hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Trailing ring + label */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full border-2"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 88 : 34,
          height: hovering ? 88 : 34,
          backgroundColor: hovering ? ACID : "rgba(255,255,255,0)",
          borderColor: hovering ? ACID : fg,
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <span
          className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink"
          style={{ opacity: hovering ? 1 : 0, transition: "opacity 0.2s" }}
        >
          {label}
        </span>
      </motion.div>
    </div>
  );
}
