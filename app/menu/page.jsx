import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
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

      <main className="mt-8 w-full min-w-0 pb-16 md:mt-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-olive/70">
            Planet Cafe Bistro
          </p>
          <h1 className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-olive">
            Our menu
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-olive/85 sm:text-[15px]">
            Highlights from our kitchen—visit us for the full selection and daily specials.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 xl:grid-cols-2">
            {PRODUCTS.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full border border-olive/30 bg-offwhite px-6 text-xs font-bold uppercase tracking-wide text-olive transition hover:bg-white"
            >
              ← Back home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-olive px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-olive/90"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>

      <div className="mt-auto flex min-h-0 w-full min-w-0 flex-1 flex-col pt-10 sm:pt-12 md:pt-14">
        <Footer />
      </div>
    </div>
  );
}
