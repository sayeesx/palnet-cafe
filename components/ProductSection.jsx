import { ProductCard } from "@/components/ProductCard";

const PRODUCTS = [
  {
    name: "Grilled Veggie Protein Bowl",
    price: "$7.99",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777783510/Screenshot_20260503_100949_Instagram_uepeng.png",
    imageAlt: "Grilled Veggie Protein Bowl",
  },
  {
    name: "Mix Fruit & Vegetable Salad",
    price: "$8.50",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777800444/hand_2_1_mryjwa.webp",
    imageAlt: "Mix Fruit and Vegetable Salad",
  },
  {
    name: "Baked Chicken Nuggets",
    price: "$6.25",
    imageSrc:
      "https://res.cloudinary.com/dhh2nd2bg/image/upload/v1777747115/1777744203283_fd0nsa.png",
    imageAlt: "Baked Chicken Nuggets",
  },
];

export function ProductSection() {
  return (
    <section
      id="menu"
      className="box-border w-full min-w-0 scroll-mt-24 md:mx-auto md:max-w-5xl md:px-0"
    >
      <div className="flex w-full flex-nowrap items-center justify-between gap-2 px-3 sm:gap-3 sm:px-0 md:justify-center md:gap-10 md:px-0">
        <h2 className="min-w-0 flex-1 text-[clamp(1.125rem,4.2vw+0.4rem,1.9375rem)] font-bold uppercase leading-[0.95] text-olive sm:flex-none sm:text-[31px] md:flex-none md:text-center">
          TASTE MADE TO CRAVE
        </h2>
        <button
          type="button"
          className="h-[40px] w-[100px] shrink-0 rounded-full bg-olive text-[10px] font-bold uppercase tracking-wide text-white hover:bg-olive/90"
        >
          SEE MENU
        </button>
      </div>

      {/* Mobile: true viewport-width strip so cards never sit "under" page padding.
          Uses margin-left: calc(50% - 50vw) + width: 100vw (w-screen). sm+: normal flow. */}
      <div className="mt-8 max-sm:ml-[calc(50%_-_50vw)] max-sm:w-screen max-sm:min-w-0 sm:ml-0 sm:w-full">
        <div
          className="box-border flex min-h-0 min-w-0 max-w-none flex-nowrap justify-start gap-4 overflow-x-auto pb-4 pl-3 pr-0 max-sm:[-ms-overflow-style:none] max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden max-sm:touch-pan-x sm:grid sm:w-full sm:grid-cols-2 sm:items-stretch sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-6"
        >
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="flex h-full w-[260px] shrink-0 sm:w-auto sm:min-w-0"
            >
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
