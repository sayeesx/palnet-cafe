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

function navLinkClass(active) {
  return [
    "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition sm:px-5 sm:text-xs",
    active
      ? "bg-olive text-white shadow-sm"
      : "border border-olive/15 bg-white text-olive hover:border-olive/30 hover:bg-offwhite",
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
      <div className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-2xl border border-olive/10 bg-white px-3 py-2 shadow-sm sm:min-h-[56px] sm:gap-4 sm:px-5 md:min-h-[72px] md:py-2.5 md:px-6">
        {/* Logo */}
        <Link
          href="/"
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

        {/* Desktop Nav — two rows: Home + Menu, then Contact */}
        <nav
          className="hidden flex-col items-end gap-1.5 md:flex"
          aria-label="Primary"
        >
          <ul className="flex list-none flex-col items-end gap-1.5 p-0">
            <li className="flex flex-wrap justify-end gap-2">
              {NAV.slice(0, 2).map((item) => {
                const isPath =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href === "/menu"
                      ? pathname === "/menu"
                      : false;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={navLinkClass(isPath)}
                    aria-current={isPath ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </li>
            <li className="flex justify-end">
              <Link href={NAV[2].href} className={navLinkClass(false)}>
                {NAV[2].label}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger only */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-olive/20 text-olive transition-transform duration-300 md:hidden"
          style={{
            transitionTimingFunction: reduceMotion
              ? undefined
              : "cubic-bezier(0.34, 1.45, 0.64, 1)",
          }}
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
              className="rounded-2xl border border-olive/10 bg-white/95 p-4 shadow-lg shadow-olive/10 ring-1 ring-olive/[0.06] backdrop-blur-md"
            >
              <ul className="flex list-none flex-col gap-2 p-0">
                <motion.li
                  className="flex gap-2"
                  initial={reduceMotion ? false : { opacity: 0, x: -10, y: 4 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { ...mobileDrawerSpring, delay: 0.04 }
                  }
                >
                  {NAV.slice(0, 2).map((item) => {
                    const isPath =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === "/menu";
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`${navLinkClass(isPath)} min-w-0 flex-1 text-center`}
                        aria-current={isPath ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </motion.li>
                <motion.li
                  initial={reduceMotion ? false : { opacity: 0, x: -10, y: 4 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { ...mobileDrawerSpring, delay: 0.1 }
                  }
                >
                  <Link
                    href={NAV[2].href}
                    onClick={() => setMobileOpen(false)}
                    className={`${navLinkClass(false)} block w-full text-center`}
                  >
                    {NAV[2].label}
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
