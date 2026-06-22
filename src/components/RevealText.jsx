import { motion } from "framer-motion";

/**
 * Reveals text by masking each word up into place.
 * Works on a plain string; splits on whitespace.
 */
export default function RevealText({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.06em" }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={once ? { y: 0 } : undefined}
            viewport={once ? { once: true, margin: "-8%" } : undefined}
            animate={once ? undefined : { y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
