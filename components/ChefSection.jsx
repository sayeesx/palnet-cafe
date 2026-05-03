import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function ChefSection() {
  return (
    <section className="w-full" aria-labelledby="chef-title">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-14">
        <Reveal
          subtle
          delay={0}
          className="w-full max-w-xl shrink-0 md:w-[46%] md:max-w-none lg:max-w-[520px]"
        >
          <p className="inline-flex rounded-full border border-olive/35 bg-white/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-olive sm:text-[11px]">
            MEET OUR CHEFS
          </p>
          <h2
            id="chef-title"
            className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-[0.95] tracking-tight text-olive md:mt-6"
          >
            EVERY PLATE
            <br />
            HANDLED
            <br />
            WITH LOVE
            <br />
            &amp; SKILL
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-olive/85 sm:text-[15px]">
            Our expert chefs prepare every single dish with care — tasty, balanced,
            and healthy.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex h-11 min-w-[120px] items-center justify-center rounded-full bg-olive px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-olive/90"
          >
            READ MORE
          </button>
        </Reveal>

        <Reveal
          subtle
          delay={0.07}
          className="relative mx-auto aspect-square w-full max-w-[min(100%,380px)] shrink-0 overflow-hidden rounded-xl sm:max-w-[420px] md:mx-0 md:ml-auto md:aspect-[5/6] md:max-w-[min(100%,480px)] lg:max-w-[520px]"
        >
          <Image
            src="/chef.webp"
            alt="Chef presenting a colorful salad"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </Reveal>
      </div>
    </section>
  );
}
