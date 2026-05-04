import Link from "next/link";
import { ImageWithShimmer } from "@/components/ImageWithShimmer";
import { Reveal } from "@/components/Reveal";

const IMG = {
  mustTry:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/f_auto,q_auto:eco,w_400,c_limit/v1777783510/Screenshot_20260503_100949_Instagram_uepeng.webp",
  favouriteDessert:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/f_auto,q_auto:eco,w_400,c_limit/v1777747115/1777744203283_fd0nsa.webp",
  tryItNow:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/f_auto,q_auto:eco,w_400/v1777784908/hand_1_wqfhxi.webp",
  /** Lighter delivery + capped dimensions so the hero decodes faster with less CLS */
  mexicanJackSalad:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/f_auto,q_auto:eco,w_960,c_limit/v1777800444/hand_2_1_mryjwa.webp",
};

function ArrowCircle() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10 md:h-12 md:w-12"
      aria-hidden
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <path
        d="M17 31l14-14m0 0h-8m8 0v8"
        stroke="#34392b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="w-full max-md:relative max-md:isolate max-md:overflow-x-clip max-md:pb-1"
      aria-label="Hero"
    >
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-stretch md:gap-4 lg:gap-5">
        {/* Left Column */}
        <Reveal delay={0} className="flex min-h-0 min-w-0 w-full flex-col gap-4 md:flex-1 md:basis-0">
          {/* Customer Favorite — Large */}
          <div className="relative aspect-[1/1] w-full min-h-[220px] flex-1 overflow-hidden rounded-2xl bg-black sm:min-h-[260px] md:aspect-auto md:min-h-[min(26vh,220px)] lg:min-h-[min(28vh,240px)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777798004/hero-poster_rd7bma.jpg"
              preload="auto"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ backgroundColor: 'black' }}
            >
              <source
                media="(max-width: 767px)"
                src="https://res.cloudinary.com/dhh2nd2bg/video/upload/v1777798005/hero-mobile_ktupcx.mp4"
                type="video/mp4"
              />
              <source
                media="(min-width: 768px)"
                src="https://res.cloudinary.com/dhh2nd2bg/video/upload/v1777798006/hero_tyn4d3.mp4"
                type="video/mp4"
              />
            </video>
            {/* SIGNATURE label */}
            <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase leading-tight tracking-wide text-olive sm:left-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-[11px] md:text-[12px]">
              Signature
            </span>
            {/* Grilled Fish text */}
            <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pb-5 sm:p-5 sm:pb-6 md:p-6">
              <h2 className="text-[31px] font-bold uppercase leading-[0.95] text-white">
                Grilled Fish
              </h2>
              <p className="mt-1.5 whitespace-nowrap text-[11px] leading-snug text-white/90 sm:text-xs">
                Clean, bright & simple — grilled fish with lemon butter sauce.
              </p>
            </div>
          </div>

          {/* Must Try & Special */}
          <div className="grid min-h-0 w-full grid-cols-2 items-start gap-2 sm:gap-3 md:gap-4">
            <div className="relative flex h-[110px] w-full items-center overflow-hidden rounded-2xl bg-red/[0.09] ring-1 ring-red/10 sm:h-[120px] md:h-[130px]">
              <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-white/95 px-2 py-0.5 text-[8px] font-bold uppercase leading-tight tracking-wide text-olive sm:left-2 sm:top-2 sm:px-2.5 sm:py-1 sm:text-[9px] md:text-[10px]">
                Must Try
              </span>
              <div className="flex flex-1 flex-col justify-center pl-3 pr-1 sm:pl-4">
                <p className="text-[10px] font-bold uppercase leading-tight tracking-wide text-olive sm:text-[11px] md:text-xs">
                  Alfredo Chicken
                </p>
              </div>
              <div className="relative h-full w-[45%]">
                <ImageWithShimmer
                  src={IMG.mustTry}
                  alt="Must try dish"
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  className="object-contain object-right"
                  sizes="(min-width: 768px) 148px, 124px"
                />
              </div>
            </div>
            <div className="relative flex h-[110px] w-full items-center overflow-hidden rounded-2xl bg-[#ebe4dc] ring-1 ring-[#c4a574]/15 sm:h-[120px] md:h-[130px]">
              <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-white/95 px-2 py-0.5 text-[8px] font-bold uppercase leading-tight tracking-wide text-olive sm:left-2 sm:top-2 sm:px-2.5 sm:py-1 sm:text-[9px] md:text-[10px]">
                Desserts
              </span>
              <div className="flex flex-1 flex-col justify-center pl-3 pr-1 sm:pl-4">
                <p className="text-[10px] font-bold uppercase leading-tight tracking-wide text-olive sm:text-[11px] md:text-xs">
                  Lotus Biscoff Cheesecake
                </p>
              </div>
              <div className="relative h-full w-[45%]">
                <ImageWithShimmer
                  src={IMG.favouriteDessert}
                  alt="Special dish"
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  className="object-contain object-right"
                  sizes="(min-width: 768px) 148px, 124px"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column */}
        <Reveal delay={0.06} className="flex min-h-0 min-w-0 w-full flex-col gap-4 md:basis-0 md:flex-1 lg:max-w-none">
          {/* Mexican Jack Salad — stable column heights (no flex-1 on copy) so the image decode cannot resize the card */}
          <div className="relative flex aspect-[1/1] min-h-[180px] flex-col overflow-hidden rounded-2xl bg-[#e4efc8] px-4 pt-4 pb-4 max-md:overflow-visible max-md:pt-3 max-md:pb-3 sm:min-h-[240px] md:aspect-auto md:min-h-[400px] md:flex-row md:items-stretch md:gap-5 md:overflow-hidden md:px-6 md:pt-6 md:pb-0 lg:min-h-[420px]">
            <Link
              href="/menu"
              className="absolute right-3 top-3 z-10 rounded-full border border-olive/15 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-olive shadow-sm hover:bg-white/95 sm:right-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-[11px] md:right-5 md:top-5 md:text-[12px]"
            >
              Special
            </Link>
            <div className="relative z-[1] mt-4 flex shrink-0 flex-col justify-start pr-0 max-md:mt-3 md:mt-0 md:max-w-[48%] md:justify-start md:self-start md:pr-2 lg:max-w-[45%]">
              <h2 className="text-[31px] font-bold uppercase leading-[0.95] text-olive">
                Mexican Jack Salad
              </h2>
              <p className="mt-2 text-[11px] font-semibold text-olive/85 sm:text-xs">
                ★ 5.0 (1k reviews)
              </p>
              <p className="mt-3 max-w-[140px] text-[11px] leading-snug text-olive/90 sm:mt-4 sm:max-w-prose sm:text-xs">
                Fresh,<br className="sm:hidden" /> and boldly layered.<br className="sm:hidden" /> Our Mexican Jack<br className="sm:hidden" /> Salad—a vibrant<br className="sm:hidden" /> crunch of texture<br className="sm:hidden" /> and flavor.
              </p>
            </div>
            {/* Fixed-size media column so layout does not depend on image decode */}
            <div className="relative z-0 mx-auto mt-2 min-h-0 w-full max-w-[min(100%,300px)] shrink-0 overflow-visible rounded-2xl max-md:mb-0 max-md:mt-2 max-md:max-w-[min(100%,272px)] max-md:translate-x-2 sm:mt-3 sm:max-w-[min(100%,320px)] md:mx-0 md:ml-auto md:mr-0 md:mt-0 md:mb-0 md:h-full md:min-h-[280px] md:w-[58%] md:max-w-[min(58%,400px)] md:flex-shrink-0 md:-translate-x-2 md:translate-y-3 md:self-stretch md:overflow-visible md:rounded-xl lg:max-w-[min(60%,440px)] lg:w-[60%] lg:translate-x-1 lg:translate-y-4 xl:translate-x-3 xl:translate-y-4">
              <div className="relative w-full max-md:aspect-[5/4] md:h-full">
                <div className="absolute inset-0 md:hidden">
                  <ImageWithShimmer
                    src={IMG.mexicanJackSalad}
                    alt="Mexican Jack Salad bowl"
                    fill
                    priority
                    loading="eager"
                    fetchPriority="high"
                    className="object-contain object-right max-md:translate-x-12 max-md:-translate-y-16 max-md:-mt-4 sm:max-md:translate-x-14 sm:max-md:-translate-y-18 sm:max-md:-mt-6"
                    sizes="(max-width: 767px) 280px, 240px"
                  />
                </div>
                <div className="hidden md:absolute md:inset-0 md:block">
                  <ImageWithShimmer
                    src={IMG.mexicanJackSalad}
                    alt="Mexican Jack Salad bowl"
                    fill
                    priority
                    loading="eager"
                    fetchPriority="high"
                    className="object-contain object-right object-bottom md:-translate-x-4 md:translate-y-2 lg:-translate-x-6 lg:translate-y-3 xl:-translate-x-8"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, 236px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Food Lover's Paradise */}
          <div className="relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl bg-olive px-5 pb-5 pt-5 max-md:flex-none sm:min-h-[260px] md:min-h-[280px] md:flex-1">
            <span className="inline-block w-fit rounded-full border border-white/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white sm:text-[11px]">
              Best Food Forever
            </span>
            <Link
              href="/menu"
              className="absolute right-4 top-4"
              aria-label="View full menu"
            >
              <ArrowCircle />
            </Link>
            <div className="mt-6 pr-14">
              <p className="text-[31px] font-bold uppercase leading-[0.95] text-white">
                Food Lover&apos;s
                <br />
                Paradise
              </p>
            </div>
            <div className="mt-auto pt-8">
              <Link
                href="/menu"
                className="inline-flex rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wide text-olive shadow-sm transition hover:bg-offwhite sm:text-sm"
              >
                View Menu
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
