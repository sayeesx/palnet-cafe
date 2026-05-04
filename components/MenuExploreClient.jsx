"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DishDetailModal } from "@/components/DishDetailModal";

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
      <div className="-mx-3 border-b border-olive/10 bg-offwhite px-3 py-2 sm:-mx-4 sm:px-4 md:-mx-5 md:px-5 md:py-3">
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

      <div className="mt-6 flex flex-col gap-4 sm:gap-5">
        {filtered.map((item) => (
          <article
            key={item.slug}
            className="flex gap-3 overflow-hidden rounded-2xl border border-olive/10 bg-white p-3 shadow-sm ring-1 ring-black/[0.03] transition hover:shadow-md sm:gap-4 sm:p-4"
          >
            <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-xl bg-offwhite sm:h-[112px] sm:w-[112px]">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
              <div>
                <div className="flex items-start gap-2">
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
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-olive/75 sm:text-[13px]">
                  {item.shortDescription}
                </p>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-olive">{item.price}</span>
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

      <DishDetailModal dish={selected} onClose={closeModal} />
    </>
  );
}
