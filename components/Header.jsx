"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/menu", label: "MENU" },
  { href: "/#reviews", label: "REVIEWS" },
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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full py-2">
      <div className="flex h-[52px] w-full items-center justify-between gap-3 rounded-2xl border border-olive/10 bg-white px-3 shadow-sm sm:h-[60px] sm:gap-4 sm:px-5 md:px-6">
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

        {/* Desktop Nav */}
        <nav
          className="hidden items-center md:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-6 lg:gap-10">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative whitespace-nowrap py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-olive transition-opacity hover:opacity-75 sm:text-xs md:text-[13px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger only */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-olive/20 text-olive transition-transform duration-200 ease-out active:scale-95 md:hidden"
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

      {/* Mobile Nav Overlay */}
      <div
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden transition-all duration-300 ease-out md:hidden ${
          mobileOpen
            ? "mt-0 max-h-80 opacity-100"
            : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile Primary"
          className="rounded-2xl border border-olive/10 bg-white p-4 shadow-sm"
        >
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-[0.14em] text-olive transition-opacity hover:opacity-75"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
