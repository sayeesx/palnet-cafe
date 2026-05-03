import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const LOCATIONS = [
  "Perinthalmnna",
  "Malappuram",
  "Manjeri",
  "Edappal",
  "Kottakkal",
];

export function DiscoverSection() {
  return (
    <section className="w-full" aria-labelledby="discover-title">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:gap-x-14">
        <Reveal
          subtle
          delay={0}
          className="order-1 self-start md:order-none md:col-start-2 md:row-start-1"
        >
          <h2
            id="discover-title"
            className="text-[clamp(1.65rem,3.8vw,2.35rem)] font-bold uppercase leading-[0.95] tracking-tight text-olive"
          >
            DISCOVER MORE
            <br />
            TO FLAVOR,
            <br />
            MORE TO LOVE!
          </h2>
        </Reveal>

        <Reveal
          subtle
          delay={0.05}
          className="relative order-2 flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-xl bg-offwhite sm:min-h-[280px] md:order-none md:col-start-1 md:row-start-1 md:min-h-[min(52vh,420px)]"
        >
          <Image
            src="/exterior.webp"
            alt="Planet Cafe exterior"
            width={1200}
            height={900}
            className="h-auto max-h-[min(56vh,520px)] w-full object-contain object-center md:max-h-[min(60vh,560px)]"
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </Reveal>

        <Reveal
          subtle
          delay={0.1}
          className="order-3 grid w-full max-w-full grid-cols-2 gap-2 sm:gap-2.5 md:col-span-2 md:row-start-2 md:max-w-none"
        >
          {LOCATIONS.map((t) => (
            <button
              key={t}
              type="button"
              className="flex min-h-[40px] items-center justify-center rounded-lg border border-mustard/80 bg-mustard/25 px-2 py-2 text-center text-[10px] font-semibold leading-snug tracking-wide text-olive transition hover:bg-mustard/40 sm:text-[11px] md:min-h-[44px] md:text-xs"
            >
              {t}
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
