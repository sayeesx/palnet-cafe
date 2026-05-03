import Image from "next/image";

export function ProductCard({ name, price, imageSrc, imageAlt }) {
  return (
    <article className="w-[145px] max-w-full shrink-0">
      <div className="relative h-[150px] w-full overflow-hidden rounded-[6px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="145px"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 to-transparent px-2 pb-1.5 pt-6">
          <span className="text-[6px] font-bold uppercase tracking-wide text-white">
            {name}
          </span>
          <span className="text-[6px] font-bold text-white">{price}</span>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1.5">
        <button
          type="button"
          className="h-[18px] w-full rounded-full border border-olive/40 bg-offwhite text-[6px] font-bold uppercase tracking-wide text-olive hover:bg-white"
        >
          Add To Cart
        </button>
        <button
          type="button"
          className="h-[18px] w-full rounded-full bg-olive text-[6px] font-bold uppercase tracking-wide text-white hover:bg-olive/90"
        >
          Buy It Now
        </button>
      </div>
    </article>
  );
}
