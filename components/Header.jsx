"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "#home", label: "HOME" },
  { href: "#menu", label: "MENU" },
  { href: "#reviews", label: "REVIEWS" },
  { href: "#contact", label: "CONTACT" },
];

function CartIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M9 8V6a3 3 0 116 0v2M4 8h16l-1.5 11.5A2 2 0 0116.52 22H7.48a2 2 0 01-1.98-1.66L4 8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
    <header className="w-full py-2">
      <div className="flex h-[52px] w-full items-center justify-between gap-3 rounded-2xl border border-olive/10 bg-white px-3 shadow-sm sm:h-[60px] sm:gap-4 sm:px-5 md:px-6">
        {/* Logo */}
        <Link
          href="#home"
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

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
          <span className="hidden text-[11px] font-semibold tabular-nums uppercase tracking-wide text-olive sm:inline sm:text-xs">
            EN
          </span>
          <button
            type="button"
            className="flex h-9 items-center gap-2 rounded-full border border-olive bg-white px-3 text-[10px] font-bold uppercase tracking-wide text-olive transition-colors hover:bg-offwhite sm:h-10 sm:px-3.5 sm:text-[11px]"
            aria-label="Cart"
          >
            <CartIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">CART</span>
            <span className="flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-olive px-1.5 text-[10px] font-bold leading-none text-white sm:text-[11px]">
              0
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-olive/20 text-olive md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <HamburgerIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-olive/10 bg-white p-4 shadow-sm md:hidden">
          <nav aria-label="Mobile Primary">
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
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-olive/75">
                  EN
                </span>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
