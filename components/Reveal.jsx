"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Soft spring — “liquid” feel without hiding content on first paint */
const spring = {
  type: "spring",
  stiffness: 42,
  damping: 17,
  mass: 1,
};

/**
 * Scroll-triggered reveal: keeps opacity at 1 so layout/LCP aren’t blocked;
 * animates transform only (no blank sections waiting for intersection).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  /** Smaller motion for dense grids */
  subtle = false,
}) {
  const reduce = useReducedMotion();
  const y = subtle ? 10 : 18;
  const scale = subtle ? 0.994 : 0.988;

  return (
    <motion.div
      className={className}
      initial={
        reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y, scale }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{
        once: true,
        amount: 0.06,
        margin: "14% 0px 20% 0px",
      }}
      transition={
        reduce ? { duration: 0 } : { ...spring, delay }
      }
    >
      {children}
    </motion.div>
  );
}
