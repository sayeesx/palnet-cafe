import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const FOUNDER_INSTAGRAM = "https://www.instagram.com/mohamed_shabeel/";
const FOUNDER_FACEBOOK = "https://www.facebook.com/mohamed.shabeel.585/";

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

function FacebookGlyph({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function ChefSection() {
  return (
    <section className="w-full" aria-labelledby="founder-title">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-14">
        <Reveal
          subtle
          delay={0}
          className="w-full max-w-xl shrink-0 md:w-[46%] md:max-w-none lg:max-w-[520px]"
        >
          <p className="inline-flex rounded-full border border-olive/35 bg-white/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-olive sm:text-[11px]">
            Meet our founder
          </p>
          <h2
            id="founder-title"
            className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-[0.95] tracking-tight text-olive md:mt-6"
          >
            Mohammed Shabeel,
            <br />
            Founder of Planet Café.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-olive/85 sm:text-[15px]">
            Behind every recipe and every welcome at Planet Cafe Bistro is a vision
            for honest food and community—built plate by plate.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={FOUNDER_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-olive/35 bg-white/80 px-4 text-xs font-bold uppercase tracking-wide text-olive transition hover:bg-white"
            >
              <InstagramGlyph className="h-5 w-5 shrink-0" />
              Instagram
            </Link>
            <Link
              href={FOUNDER_FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-olive/35 bg-white/80 px-4 text-xs font-bold uppercase tracking-wide text-olive transition hover:bg-white"
            >
              <FacebookGlyph className="h-5 w-5 shrink-0" />
              Facebook
            </Link>
          </div>
        </Reveal>

        <Reveal
          subtle
          delay={0.07}
          className="mx-auto flex w-full max-w-[200px] shrink-0 justify-center sm:max-w-[220px] md:mx-0 md:ml-auto md:max-w-[260px] lg:max-w-[280px]"
        >
          <Image
            src="/chef.webp"
            alt="Mohammed Shabeel, founder of Planet Café"
            width={720}
            height={900}
            className="h-auto w-full rounded-xl object-contain"
            sizes="(max-width: 768px) 200px, 280px"
          />
        </Reveal>
      </div>
    </section>
  );
}
