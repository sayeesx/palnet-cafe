import Image from "next/image";

export function ProductCard({ name, price, imageSrc, imageAlt }) {
  return (
    <article className="flex h-full min-h-0 w-full flex-col rounded-xl border border-olive/20 bg-white/90 p-3 shadow-sm">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </div>

      <div className="mt-3 flex min-h-[2.75rem] items-start justify-between gap-2">
        <span className="line-clamp-2 flex-1 text-xs font-semibold leading-snug text-olive">
          {name}
        </span>
        <span className="shrink-0 pt-0.5 text-xs font-bold text-olive">{price}</span>
      </div>

      <div className="mt-auto flex flex-col gap-2 pt-3">
        <button
          type="button"
          className="h-10 w-full shrink-0 rounded-md border border-olive/40 bg-offwhite text-xs font-bold uppercase tracking-wide text-olive hover:bg-white"
        >
          Add To Cart
        </button>
        <button
          type="button"
          className="h-10 w-full shrink-0 rounded-md bg-olive text-xs font-bold uppercase tracking-wide text-white hover:bg-olive/90"
        >
          Buy It Now
        </button>
      </div>
    </article>
  );
}
