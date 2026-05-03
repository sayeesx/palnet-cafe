import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS } from "@/data/menuProducts";

export function ProductSection() {
  return (
    <section
      id="menu"
      className="box-border w-full min-w-0 scroll-mt-24 md:mx-auto md:max-w-5xl md:px-0"
    >
      <Reveal subtle delay={0} className="flex w-full flex-nowrap items-center justify-between gap-2 px-0 sm:gap-3 md:justify-center md:gap-10 md:px-0">
        <h2 className="min-w-0 flex-1 text-[clamp(1.125rem,4.2vw+0.4rem,1.9375rem)] font-bold uppercase leading-[0.95] text-olive sm:flex-none sm:text-[31px] md:flex-none md:text-center">
          TASTE MADE TO CRAVE
        </h2>
        <Link
          href="/menu"
          className="inline-flex h-[40px] w-[100px] shrink-0 items-center justify-center rounded-full bg-olive text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-olive/90"
        >
          SEE MENU
        </Link>
      </Reveal>

      {/* Mobile: break out past page padding so the strip scrolls full-bleed; inner px-3 insets card row. Desktop: normal width inside max-w-5xl section. */}
      <div className="mt-8 w-full min-w-0 max-md:relative max-md:-mx-3 max-md:w-[calc(100%+1.5rem)] max-md:sm:-mx-4 max-md:sm:w-[calc(100%+2rem)] md:mx-0 md:w-full">
        <div
          className="box-border flex min-h-0 w-full min-w-0 flex-nowrap justify-start gap-3 overflow-x-auto overflow-y-visible px-3 pb-4 overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:gap-4 md:overflow-visible md:px-0 md:pb-4 lg:gap-6"
        >
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              subtle
              delay={i * 0.055}
              className="flex h-full w-[200px] shrink-0 md:w-auto md:min-w-0 md:flex-1 md:basis-0"
            >
              <ProductCard {...p} viewMenuOnly />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
