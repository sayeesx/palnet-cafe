import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { MenuExploreClient } from "@/components/MenuExploreClient";
import { PRODUCTS } from "@/data/menuProducts";

export const metadata = {
  title: "Menu | Planet Cafe Bistro",
  description:
    "Browse Planet Cafe Bistro — salads, mains, pasta, and more. Taste made to crave.",
};

export default function MenuPage() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      <main className="mt-6 w-full min-w-0 pb-16 md:mt-8">
        <div className="mx-auto max-w-lg md:max-w-7xl">
          <div className="md:px-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive/70 md:text-neutral-500">
              Planet Cafe Bistro
            </p>
            <h1 className="mt-1 text-[clamp(1.65rem,4vw,2.15rem)] font-bold uppercase leading-[0.95] tracking-tight text-olive md:text-2xl md:font-extrabold md:normal-case md:tracking-tight md:text-neutral-900">
              Menu
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-olive/85 md:max-w-2xl md:text-[15px] md:text-neutral-600">
              Tap a dish for ingredients-style details—visit us for the full board and daily specials.
            </p>
          </div>

          <div className="mt-6 md:mt-8 md:rounded-2xl md:bg-offwhite md:p-6 md:shadow-[0_1px_3px_rgba(0,0,0,0.06)] md:ring-1 md:ring-black/[0.04] lg:p-8">
            <Suspense
              fallback={
                <div
                  className="rounded-2xl border border-olive/10 bg-offwhite/90 py-12 motion-reduce:py-14"
                  aria-busy="true"
                  aria-label="Loading menu"
                >
                  <div className="mx-auto flex max-w-md flex-col gap-3 px-4">
                    <div className="h-10 w-full overflow-hidden rounded-xl bg-olive/[0.08]">
                      <span className="block h-full w-full shimmer-overlay motion-reduce:hidden" aria-hidden />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="h-8 w-16 overflow-hidden rounded-full bg-olive/[0.08] sm:w-20"
                        >
                          <span className="block h-full w-full shimmer-overlay motion-reduce:hidden" aria-hidden />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-28 overflow-hidden rounded-xl border border-olive/10 bg-offwhite/80 sm:h-32"
                        >
                          <span className="block h-full w-full shimmer-overlay motion-reduce:hidden" aria-hidden />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            >
              <MenuExploreClient products={PRODUCTS} />
            </Suspense>
          </div>
        </div>
      </main>

      <div className="mt-auto flex min-h-0 w-full min-w-0 flex-1 flex-col pt-10 sm:pt-12 md:pt-14">
        <Footer />
      </div>
    </div>
  );
}
