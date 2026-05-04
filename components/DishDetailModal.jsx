"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function DishDetailModal({ dish, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!dish) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-olive/50 backdrop-blur-[2px]"
        aria-label="Close dish details"
        onClick={onClose}
      />
      {/* Single scroll column: image + copy stay uncropped; scrollbar hidden */}
      <div
        className="scrollbar-none relative z-10 mx-auto flex max-h-[min(90dvh,720px)] w-full max-w-[min(100%,22rem)] flex-col overflow-y-auto overscroll-y-contain rounded-t-3xl bg-white shadow-2xl sm:max-h-[min(88vh,760px)] sm:max-w-md sm:rounded-3xl md:max-h-[min(90vh,820px)] md:max-w-lg"
      >
        <div className="relative shrink-0 bg-offwhite px-3 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-16 md:px-6 md:pb-6 md:pt-[4.25rem]">
          <div className="relative mx-auto aspect-square w-full max-w-[17.5rem] sm:max-w-sm md:aspect-[4/3] md:max-h-[min(52vh,480px)] md:max-w-md md:min-h-[280px]">
            <Image
              src={dish.imageSrc}
              alt={dish.imageAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 512px"
              priority
            />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-olive shadow-md ring-1 ring-olive/10 transition hover:bg-white md:right-4 md:top-4"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          {dish.isVeg !== undefined && (
            <span
              className={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm ring-1 md:left-4 md:top-4 ${
                dish.isVeg
                  ? "bg-white/95 text-green-700 ring-green-600/25"
                  : "bg-white/95 text-red ring-red/30"
              }`}
            >
              <span
                className={`inline-block h-2.5 w-2.5 rounded-sm border-2 ${
                  dish.isVeg ? "border-green-700 bg-green-600" : "border-red bg-red"
                }`}
                aria-hidden
              />
              {dish.isVeg ? "Veg" : "Non-veg"}
            </span>
          )}
        </div>

        <div className="shrink-0 border-t border-olive/10 px-4 pb-6 pt-4 sm:px-6 sm:pb-7 sm:pt-5 md:px-7 md:pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-olive/55">
                  {dish.category}
                </p>
                <h2
                  id="dish-modal-title"
                  className="mt-1 text-lg font-bold uppercase leading-tight text-olive sm:text-xl md:text-2xl"
                >
                  {dish.name}
                </h2>
              </div>
              <p className="shrink-0 text-base font-bold text-olive sm:text-lg md:text-xl">{dish.price}</p>
            </div>

            {dish.rating && (
              <p className="text-sm font-semibold text-olive/85 md:text-[15px]">{dish.rating}</p>
            )}

            {dish.shortDescription &&
              dish.shortDescription !== dish.detailDescription && (
                <p className="text-sm font-medium leading-relaxed text-olive/90 md:text-[15px]">
                  {dish.shortDescription}
                </p>
              )}

            <p className="text-sm leading-relaxed text-olive/85 md:text-[15px] md:leading-relaxed">
              {dish.detailDescription}
            </p>

            <p className="mt-1 rounded-xl bg-offwhite px-3 py-2.5 text-xs leading-relaxed text-olive/75 ring-1 ring-olive/8 md:text-[13px]">
              Visit us in-store for the full menu, combos, and daily specials. Prices may vary by location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
