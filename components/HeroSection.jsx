import Image from "next/image";
import Link from "next/link";

const IMG = {
  mustTry:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777783510/Screenshot_20260503_100949_Instagram_uepeng.png",
  favouriteDessert:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747115/1777744203283_fd0nsa.png",
  tryItNow:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777784908/hand_1_wqfhxi.png",
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
    <section id="home" className="w-full" aria-label="Hero">
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-stretch md:gap-4 lg:gap-5">
        {/* Left Column */}
        <div className="flex min-h-0 min-w-0 w-full flex-col gap-4 md:flex-1 md:basis-0">
          {/* Customer Favorite — Large */}
          <div className="relative aspect-[1/1] w-full min-h-[220px] flex-1 overflow-hidden rounded-2xl bg-black sm:min-h-[260px] md:aspect-auto md:min-h-[min(26vh,220px)] lg:min-h-[min(28vh,240px)]">
            {/* Mobile video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777798004/hero-poster_rd7bma.jpg"
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover md:hidden"
              style={{ backgroundColor: 'black' }}
            >
              <source
                src="https://res.cloudinary.com/dhh2nd2bg/video/upload/v1777798005/hero-mobile_ktupcx.mp4"
                type="video/mp4"
              />
            </video>
            {/* Desktop video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777798004/hero-poster_rd7bma.jpg"
              preload="metadata"
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              style={{ backgroundColor: 'black' }}
            >
              <source
                src="https://res.cloudinary.com/dhh2nd2bg/video/upload/v1777798006/hero_tyn4d3.mp4"
                type="video/mp4"
              />
            </video>
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
                <Image
                  src={IMG.mustTry}
                  alt="Must try dish"
                  fill
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
                <Image
                  src={IMG.favouriteDessert}
                  alt="Special dish"
                  fill
                  className="object-contain object-right"
                  sizes="(min-width: 768px) 148px, 124px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex min-h-0 min-w-0 w-full basis-0 flex-col gap-4 md:flex-1 lg:max-w-none">
          {/* Hummus Crunch Salad */}
          <div className="relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl bg-[#e4efc8] px-4 pb-4 pt-4 sm:min-h-[296px] md:min-h-[380px] md:flex-row md:items-stretch md:gap-5 md:px-6 md:pb-6 md:pt-6 lg:min-h-[420px]">
            <Link
              href="#menu"
              className="absolute right-4 top-4 z-10 rounded-full border border-olive/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-olive shadow-sm hover:bg-white/95 sm:text-[11px] md:right-5 md:top-5"
            >
              Special
            </Link>
            <div className="mt-4 flex flex-1 flex-col justify-start pr-0 md:mt-0 md:max-w-[48%] md:justify-start md:self-start md:pr-2 lg:max-w-[45%]">
              <h2 className="text-2xl font-bold uppercase leading-[1.05] text-olive sm:text-3xl md:text-[32px] lg:text-[36px]">
                Grilled Fish
              </h2>
              <p className="mt-2 text-[11px] font-semibold text-olive/85 sm:text-xs">
                ★ 5.0 (1k reviews)
              </p>
              <p className="mt-2 max-w-prose text-[11px] leading-snug text-olive/90 sm:text-xs">
                Clean, bright, and perfectly simple. Our grilled fish finished with a vibrant lemon butter sauce.
              </p>
            </div>
            <div className="relative mx-auto mt-4 aspect-[4/5] w-full max-w-[210px] shrink-0 overflow-hidden rounded-2xl sm:mt-5 sm:max-w-[236px] md:mx-0 md:mt-0 md:ml-auto md:aspect-auto md:h-full md:min-h-[260px] md:max-h-none md:max-w-[min(52%,340px)] md:w-[52%] md:self-stretch md:rounded-xl lg:max-w-[min(50%,380px)]">
              <Image
                src={IMG.tryItNow}
                alt="Hummus Crunch Salad bowl"
                fill
                className="object-contain object-[100%_100%]"
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 320px, 236px"
              />
            </div>
          </div>

          {/* Food Lover's Paradise */}
          <div className="relative flex min-h-[240px] flex-1 flex-col overflow-hidden rounded-2xl bg-olive px-5 pb-5 pt-5 sm:min-h-[260px] md:min-h-[280px]">
            <span className="inline-block w-fit rounded-full border border-white/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white sm:text-[11px]">
              Best Food Forever
            </span>
            <button
              type="button"
              className="absolute right-4 top-4"
              aria-label="Open offer"
            >
              <ArrowCircle />
            </button>
            <div className="mt-6 pr-14">
              <p className="text-3xl font-bold uppercase leading-[0.95] text-white sm:text-4xl lg:text-[42px] lg:leading-[1]">
                Food Lover&apos;s
                <br />
                Paradise
              </p>
            </div>
            <div className="mt-auto pt-8">
              <button
                type="button"
                className="rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wide text-olive shadow-sm hover:bg-offwhite sm:text-sm"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
