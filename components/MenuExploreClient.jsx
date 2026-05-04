"use client";

import { ImageWithShimmer } from "@/components/ImageWithShimmer";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DishDetailModal } from "@/components/DishDetailModal";

function ratingNumber(rating) {
  const m = String(rating ?? "").match(/(\d+\.?\d*)/);
  return m ? Number.parseFloat(m[1]) : 4.6;
}

function ratingTagline(rating) {
  const parts = String(rating ?? "").split("·");
  if (parts.length > 1) return parts.slice(1).join("·").trim();
  return "Made to order";
}

/** Empty string = no bottom banner on that card (closer to Swiggy mix). */
const DESKTOP_PROMO_BADGES = [
  "Chef’s pick",
  "",
  "Guest favorite",
  "",
  "Fresh daily",
  "Bistro classic",
];

function DesktopStarRow({ rating, tagline }) {
  const n = ratingNumber(rating);
  return (
    <div className="mt-1.5 flex min-w-0 flex-wrap items-center justify-start gap-1.5 text-left text-[13px] text-neutral-900">
      <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#267e3e] text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </span>
      <span className="font-semibold tabular-nums">{n.toFixed(1)}</span>
      <span className="text-neutral-300" aria-hidden>
        ·
      </span>
      <span className="max-w-full min-w-0 break-words text-[13px] font-medium leading-snug text-neutral-600">
        {tagline}
      </span>
    </div>
  );
}

function VegDot({ isVeg }) {
  return (
    <span
      className={`inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-sm border-2 sm:h-5 sm:w-5 ${
        isVeg ? "border-green-700 bg-white" : "border-red bg-white"
      }`}
      title={isVeg ? "Vegetarian" : "Non-vegetarian"}
      aria-label={isVeg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className={`block rounded-[2px] sm:rounded-sm ${
          isVeg ? "h-2.5 w-2.5 bg-green-600 sm:h-3 sm:w-3" : "h-2.5 w-2.5 bg-red sm:h-3 sm:w-3"
        }`}
      />
    </span>
  );
}

export function MenuExploreClient({ products }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [products]);

  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const slug = searchParams.get("dish");
    if (!slug) return;
    const match = products.find((p) => p.slug === slug);
    if (match) setSelected(match);
  }, [searchParams, products]);

  const closeModal = useCallback(() => {
    setSelected(null);
    if (searchParams.get("dish")) {
      router.replace("/menu", { scroll: false });
    }
  }, [router, searchParams]);

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  return (
    <>
      <div className="-mx-3 border-b border-olive/10 bg-offwhite px-3 py-2 sm:-mx-4 sm:px-4 md:mx-0 md:rounded-xl md:border md:border-neutral-200/70 md:bg-neutral-50 md:px-4 md:py-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-olive/55 md:text-[10px] md:tracking-[0.22em]">
          Categories
        </p>
        <div className="mt-1.5 flex max-md:flex-nowrap max-md:justify-between max-md:gap-1 md:mt-2 md:flex-wrap md:gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full font-bold uppercase transition max-md:min-w-0 max-md:flex-1 max-md:px-1.5 max-md:py-1 max-md:text-[8px] max-md:leading-tight max-md:tracking-tight md:shrink-0 md:px-4 md:py-2 md:text-xs md:tracking-wide ${
                active === c
                  ? "bg-olive text-white shadow-sm"
                  : "border border-olive/15 bg-white text-olive hover:border-olive/25"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: unchanged horizontal card list */}
      <div className="mt-6 flex flex-col gap-4 sm:gap-5 md:hidden">
        {filtered.map((item) => (
          <article
            key={item.slug}
className="flex gap-3 overflow-hidden rounded-2xl border border-olive/10 bg-white p-2 shadow-sm ring-1 ring-black/[0.03] transition hover:shadow-md sm:gap-4 sm:p-4"
          >
            <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-offwhite sm:h-[112px] sm:w-[112px]">
              <ImageWithShimmer
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover scale-[0.85]"
                sizes="112px"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <VegDot isVeg={item.isVeg} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold uppercase leading-snug text-olive sm:text-[15px]">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-olive/50">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  {item.rating && (
                    <span className="shrink-0 rounded bg-[#267e3e] px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {item.rating.split('·')[0].trim()}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-olive/75 sm:text-[13px]">
                  {item.shortDescription}
                </p>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="rounded-full bg-olive px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-olive/90"
                >
                  View details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: Swiggy-style card grid — fixed image band + consistent text inset */}
      <div className="mt-8 hidden md:grid md:grid-cols-2 md:items-start md:gap-x-6 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item, index) => {
          const promo = DESKTOP_PROMO_BADGES[index % DESKTOP_PROMO_BADGES.length];
          const tagline = ratingTagline(item.rating);
          return (
            <article
              key={item.slug}
              className="group flex w-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl bg-offwhite text-left shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              onClick={() => setSelected(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${item.name}`}
            >
              <div className="relative isolate h-[180px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <div className="absolute inset-3 z-0">
                  <div className="relative h-full w-full">
                    <ImageWithShimmer
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 50vw"
                      className="object-contain object-center transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                {promo ? (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-2.5 pt-10">
                    <p className="text-left text-[11px] font-bold uppercase tracking-wide text-white drop-shadow-sm">
                      {promo}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="flex w-full min-w-0 flex-col items-stretch bg-white px-3 pb-4 pt-3">
                <h3 className="text-left text-[17px] font-bold leading-snug tracking-tight text-neutral-900">
                  {item.name}
                </h3>
                <DesktopStarRow rating={item.rating} tagline={tagline} />
                <p className="mt-2 line-clamp-1 text-left text-[13px] font-medium leading-snug text-neutral-500">
                  {item.category}
                </p>
                <p className="mt-1 line-clamp-1 text-left text-[12px] leading-snug text-neutral-400">
                  Planet Cafe · Kerala
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <DishDetailModal dish={selected} onClose={closeModal} />
    </>
  );
}
