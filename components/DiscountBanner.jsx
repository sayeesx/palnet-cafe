import Image from "next/image";

const IMG = {
  salad:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777800444/hand_2_1_mryjwa.webp",
  burger:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777784908/hand_1_wqfhxi.png",
  chicken:
    "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777783510/Screenshot_20260503_100949_Instagram_uepeng.png",
};

function OfferCard({ imageSrc, alt, label }) {
  return (
    <article className="flex min-w-0 w-full max-w-full flex-col overflow-hidden rounded-xl border border-olive/20 bg-white/95 p-3 shadow-md">
      <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg bg-offwhite">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 42vw, 240px"
        />
      </div>
      <p className="mt-3 break-words text-center text-[11px] font-semibold leading-snug text-olive sm:text-xs">
        {label}
      </p>
      <button
        type="button"
        className="mt-3 h-10 w-full shrink-0 rounded-lg bg-olive text-[10px] font-bold uppercase tracking-wide text-white shadow-sm hover:bg-olive/90"
      >
        ORDER NOW
      </button>
    </article>
  );
}

export function DiscountBanner() {
  return (
    <section
      className="mt-14 w-full min-w-0 max-sm:-mx-3 md:mx-auto md:max-w-5xl"
      aria-label="Discount offers"
    >
      {/* Mobile: overflow-hidden stops shadows / subpixels from widening the page.
          md+: overflow-visible so the salad can overlap the bar edge. */}
      <div className="overflow-hidden rounded-2xl bg-mustard shadow-sm ring-1 ring-olive/10 max-sm:rounded-xl md:overflow-visible">
        <div className="flex min-w-0 max-w-full flex-col items-stretch md:flex-row md:items-center md:gap-2 md:pr-10 md:pl-4 lg:gap-6 lg:pr-14">
          <div className="relative z-10 flex min-w-0 justify-center px-3 pt-6 sm:px-5 sm:pt-8 md:-ml-8 md:w-[40%] md:max-w-[min(360px,42vw)] md:shrink-0 md:justify-end md:px-0 md:pt-0 lg:-ml-12">
            <div className="relative aspect-square w-full max-w-[200px] min-w-0 overflow-hidden rounded-full border-4 border-white/90 shadow-lg max-sm:max-w-[min(220px,72vw)] sm:max-w-[220px] md:max-w-[min(300px,100%)] md:border-[6px]">
              <Image
                src={IMG.salad}
                alt="Fresh salad bowl"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 280px"
                priority={false}
              />
            </div>
          </div>

          <div className="flex min-w-0 max-w-full flex-1 flex-col px-3 pb-8 pt-1 sm:px-5 md:py-10 md:pl-2 md:pr-0">
            <h2 className="text-center text-[clamp(1.75rem,6vw+0.5rem,3.25rem)] font-bold uppercase leading-[0.95] tracking-tight text-red md:text-left">
              10% DISCOUNT
            </h2>

            <div className="mt-6 grid w-full min-w-0 max-w-full grid-cols-1 gap-4 justify-items-stretch sm:mt-8 sm:grid-cols-2 sm:gap-5 md:mt-10 md:max-w-xl">
              <OfferCard
                imageSrc={IMG.burger}
                alt="Burger and fries"
                label="$12.00 Burger & Fries"
              />
              <OfferCard
                imageSrc={IMG.chicken}
                alt="Fried chicken plate"
                label="$12.00 Fried Chicken"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
