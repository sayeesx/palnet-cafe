import { Suspense } from "react";
import { Header } from "@/components/Header";
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
    <div className="flex min-h-[100dvh] min-h-screen w-full max-w-none min-w-0 flex-col px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
      <Header />

      <main className="mt-6 w-full min-w-0 pb-16 md:mt-8">
        <div className="mx-auto max-w-lg md:max-w-2xl">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive/70">
              Planet Cafe Bistro
            </p>
            <h1 className="mt-1 text-[clamp(1.65rem,4vw,2.15rem)] font-bold uppercase leading-[0.95] tracking-tight text-olive">
              Menu
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-olive/85">
              Tap a dish for ingredients-style details—visit us for the full board and daily specials.
            </p>
          </div>

          <div className="mt-6">
            <Suspense
              fallback={
                <div className="animate-pulse rounded-2xl border border-olive/10 bg-white/80 py-16 text-center text-sm text-olive/50">
                  Loading menu…
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
