"use client";

import { motion } from "framer-motion";

/** `slide={false}` avoids translateY so the block cannot paint over the prior section (mobile WebKit + flex quirks). */
export function FadeIn({ children, className = "", slide = true }) {
  const motionProps = slide
    ? {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      };

  return (
    <motion.div
      {...motionProps}
      viewport={{ once: true, margin: "-32px", amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
