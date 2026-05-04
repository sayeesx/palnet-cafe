"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/menu", label: "MENU" },
  { href: "/#contact", label: "CONTACT" },
];

function HamburgerIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

/** Desktop: text-style nav (aligned row, no pill buttons). */
function desktopNavLinkClass(active) {
  return [
    "relative whitespace-nowrap py-2 text-sm font-semibold tracking-tight transition-colors",
    active
      ? "text-olive after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-olive"
      : "text-olive/65 hover:text-olive",
  ].join(" ");
}

/** Mobile drawer: full-width rows, left-aligned (no round pill buttons). */
function mobileNavLinkClass(active) {
  return [
    "block w-full rounded-lg px-1 py-3 text-left text-[15px] font-semibold tracking-tight transition-colors sm:py-3.5 sm:text-base",
    active ? "bg-olive/[0.08] text-olive" : "text-olive/80 active:bg-olive/[0.06]",
  ].join(" ");
}

const mobileDrawerSpring = {
  type: "spring",
  stiffness: 200,
  damping: 17,
  mass: 0.95,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative z-50 w-full py-2">
      <div className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-2xl border border-olive/10 bg-white px-3 py-2 shadow-sm sm:min-h-[56px] sm:gap-4 sm:px-5 md:min-h-[64px] md:items-center md:py-2 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          prefetch
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <Image
            src="/planetcafe.png"
            alt=""
            width={64}
            height={32}
            className="h-[26px] w-auto shrink-0 object-contain sm:h-[30px]"
            priority
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-[12px] font-bold uppercase tracking-wide text-olive sm:text-[13px]">
              planet cafe
            </span>
            <span className="mt-0.5 text-[9px] font-normal uppercase tracking-[0.18em] text-olive/75 sm:text-[10px]">
              bistro
            </span>
          </span>
        </Link>

        {/* Desktop Nav — single horizontal row, baseline-aligned */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="m-0 flex list-none items-center gap-8 p-0 lg:gap-10">
            {NAV.map((item) => {
              const isPath =
                item.href === "/"
                  ? pathname === "/"
                  : item.href === "/menu"
                    ? pathname === "/menu"
                    : false;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch
                    className={desktopNavLinkClass(isPath)}
                    aria-current={isPath ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger only */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-olive/20 text-olive transition-transform duration-300 md:hidden"
          style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.45, 0.64, 1)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <HamburgerIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav — spring panel (md+ hidden) */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-primary-nav"
            className="absolute left-0 right-0 top-full z-50 mt-2 md:hidden"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -18, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -12, scale: 0.985 }
            }
            transition={
              reduceMotion
                ? { duration: 0.2, ease: "easeOut" }
                : mobileDrawerSpring
            }
            style={{ transformOrigin: "top center" }}
          >
            <nav
              aria-label="Mobile Primary"
              className="rounded-2xl border border-olive/10 bg-white/95 px-2 py-1 shadow-lg shadow-olive/10 ring-1 ring-olive/[0.06] backdrop-blur-md sm:px-3"
            >
              <ul className="m-0 flex list-none flex-col divide-y divide-olive/10 p-0">
                {NAV.map((item, idx) => {
                  const isPath =
                    item.href === "/"
                      ? pathname === "/"
                      : item.href === "/menu"
                        ? pathname === "/menu"
                        : false;
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, x: -8, y: 4 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { ...mobileDrawerSpring, delay: 0.04 + idx * 0.05 }
                      }
                    >
                      <Link
                        href={item.href}
                        prefetch
                        onClick={() => setMobileOpen(false)}
                        className={mobileNavLinkClass(isPath)}
                        aria-current={isPath ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
