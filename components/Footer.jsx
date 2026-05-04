import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const INSTAGRAM = "https://www.instagram.com/planet_cafe_bistro/";
const NARRS = "https://narrs.in/";

const MENU_DISHES = [
  { name: "Hawaiian Salad", href: "/menu" },
  { name: "Lambi Chicken", href: "/menu" },
  { name: "Alf med Pasta", href: "/menu" },
  { name: "Prawn in Red Sauce", href: "/menu" },
];

function InstagramGlyph({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-t-2xl bg-olive px-4 pb-8 pt-10 text-white sm:rounded-t-3xl sm:px-6 sm:pb-10 sm:pt-12 md:px-8 md:pb-12 md:pt-14"
    >
      <Reveal
        subtle
        delay={0}
        className="flex w-full max-w-6xl flex-1 flex-col gap-10 lg:mx-auto"
      >
        <div className="flex min-h-0 flex-1 flex-col gap-8">
          <div>
            <h2 className="max-w-md text-2xl font-bold uppercase leading-[0.95] tracking-tight sm:text-3xl">
              FROM OUR KITCHEN
              <br />
              TO YOUR FEED
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
              Peek at new plates, weekend specials, and the vibe at Planet Cafe
              Bistro.
            </p>
          </div>

          <nav aria-label="Menu dishes">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
              Menu
            </p>
            <ul className="mt-3 flex flex-col gap-2 sm:gap-2.5">
              {MENU_DISHES.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="inline-block text-sm font-medium text-white/85 transition hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Reveal>

      <Reveal
        subtle
        delay={0.06}
        className="mx-auto mt-auto flex w-full max-w-6xl flex-row flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8 sm:pt-10"
      >
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-white/60 hover:bg-white/10"
          aria-label="Planet Cafe Bistro on Instagram"
        >
          <InstagramGlyph className="h-6 w-6" />
        </a>
        <div className="flex flex-col gap-2 text-right sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Planet Cafe Bistro. All rights reserved.
          </p>
          <p className="text-xs text-white/55">
            Developed by{" "}
            <a
              href={NARRS}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white/60"
            >
              narrs
            </a>
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
