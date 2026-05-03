import { ProductCard } from "@/components/ProductCard";

const PRODUCTS = [
  {
    name: "Greek Salad",
    price: "$12.00",
    imageSrc: "/images/salad-green.jpg",
    imageAlt: "Greek salad",
  },
  {
    name: "Avocado Bowl",
    price: "$14.50",
    imageSrc: "/images/avocado-bowl.jpg",
    imageAlt: "Avocado bowl",
  },
  {
    name: "Crispy Nuggets",
    price: "$11.00",
    imageSrc: "/images/nuggets.jpg",
    imageAlt: "Crispy nuggets",
  },
];

export function ProductSection() {
  return (
    <section id="menu" className="w-full scroll-mt-24">
      <div id="reviews" aria-hidden className="h-0 w-0 overflow-hidden" />
      <div className="flex items-start justify-between gap-3">
        <h2 className="w-[70%] text-[36px] font-bold uppercase leading-[0.95] text-olive">
          TASTE MADE TO
          <br />
          CRAVE
        </h2>
        <button
          type="button"
          className="mt-1 h-[30px] w-[90px] shrink-0 rounded-full bg-olive text-[7px] font-bold uppercase tracking-wide text-white hover:bg-olive/90"
        >
          SEE MENU
        </button>
      </div>

      <div className="mt-6 grid w-full grid-cols-1 justify-items-center gap-5 sm:grid-cols-3 sm:justify-between">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
