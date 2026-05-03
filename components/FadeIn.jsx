"use client";

import { motion, useReducedMotion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 40,
  damping: 16,
  mass: 1.05,
};

/**
 * Section wrapper: content stays visible (opacity 1) so the page doesn’t look
 * “navbar only” while sections wait for in-view. Motion is transform-only.
 * `slide={false}` uses a gentler vertical offset (for product strip overlap safety).
 */
export function FadeIn({ children, className = "", slide = true }) {
  const reduce = useReducedMotion();
  const yEnter = slide ? 22 : 0;
  const scaleEnter = slide ? 0.987 : 0.992;

  const motionProps = reduce
    ? { initial: { opacity: 1, y: 0, scale: 1 }, whileInView: { opacity: 1, y: 0, scale: 1 } }
    : slide
      ? {
          initial: { opacity: 1, y: yEnter, scale: scaleEnter },
          whileInView: { opacity: 1, y: 0, scale: 1 },
        }
      : {
          initial: { opacity: 1, scale: scaleEnter },
          whileInView: { opacity: 1, scale: 1 },
        };

  return (
    <motion.div
      {...motionProps}
      viewport={{
        once: true,
        margin: "18% 0px 22% 0px",
        amount: 0.02,
      }}
      transition={reduce ? { duration: 0 } : spring}
      className={className}
    >
      {children}
    </motion.div>
  );
}
