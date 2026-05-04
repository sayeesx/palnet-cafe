"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const springDesktop = {
  type: "spring",
  stiffness: 40,
  damping: 16,
  mass: 1.05,
};

/** Softer, slightly overshooting spring — reads “gluey” on small screens */
const springMobileGlue = {
  type: "spring",
  stiffness: 28,
  damping: 11.5,
  mass: 1.22,
};

function subscribeMobileNav(cb) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(max-width: 767px)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMobileNavSnapshot() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

function getMobileNavServerSnapshot() {
  return false;
}

/**
 * Section wrapper: content stays visible (opacity 1) so the page doesn’t look
 * “navbar only” while sections wait for in-view. Motion is transform-only.
 * `slide={false}` uses a gentler vertical offset (for product strip overlap safety).
 */
export function FadeIn({ children, className = "", slide = true }) {
  const reduce = useReducedMotion();
  const isMobileNav = useSyncExternalStore(
    subscribeMobileNav,
    getMobileNavSnapshot,
    getMobileNavServerSnapshot,
  );
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
      transition={
        reduce ? { duration: 0 } : isMobileNav ? springMobileGlue : springDesktop
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
