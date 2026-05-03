import Image from "next/image";

export function DiscountBanner() {
  return (
    <section className="mt-14 w-full" aria-label="Discount offers">
      <div className="flex min-h-[245px] w-full flex-col overflow-hidden rounded-[5px] bg-mustard p-6 md:h-[245px] md:flex-row md:items-center md:gap-6">
        <div className="relative mx-auto h-[210px] w-[210px] shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/discount-salad.png"
            alt="Fresh salad"
            fill
            className="object-cover"
            sizes="210px"
          />
        </div>

        <div className="mt-4 flex min-w-0 flex-1 flex-col justify-center sm:mt-0">
          <p className="text-[34px] font-bold uppercase leading-[0.95]">
            <span className="text-red">10%</span>
            <span className="text-olive"> </span>
            <span className="text-olive">DISCOUNT</span>
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <div className="flex flex-col items-start">
              <div className="relative h-[65px] w-[95px] overflow-hidden rounded-[4px]">
                <span className="absolute right-1 top-1 z-10 rounded bg-white/95 px-1 py-0.5 text-[5px] font-bold uppercase text-olive shadow-sm">
                  OFFER
                </span>
                <Image
                  src="/images/offer-burger.jpg"
                  alt="Burger offer"
                  fill
                  className="object-cover"
                  sizes="95px"
                />
              </div>
              <button
                type="button"
                className="mt-2 h-[24px] w-[105px] rounded-full bg-olive text-[7px] font-bold uppercase tracking-wide text-white hover:bg-olive/90"
              >
                ORDER NOW
              </button>
            </div>

            <div className="flex flex-col items-start">
              <div className="relative h-[65px] w-[95px] overflow-hidden rounded-[4px]">
                <span className="absolute right-1 top-1 z-10 rounded bg-white/95 px-1 py-0.5 text-[5px] font-bold uppercase text-olive shadow-sm">
                  OFFER
                </span>
                <Image
                  src="/images/offer-chicken.jpg"
                  alt="Chicken offer"
                  fill
                  className="object-cover"
                  sizes="95px"
                />
              </div>
              <button
                type="button"
                className="mt-2 h-[24px] w-[105px] rounded-full bg-olive text-[7px] font-bold uppercase tracking-wide text-white hover:bg-olive/90"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
