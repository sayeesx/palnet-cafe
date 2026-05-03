import Image from "next/image";
import Link from "next/link";

export function ProductCard({ name, price, imageSrc, imageAlt, viewMenuOnly = false }) {
  return (
    <article className="flex h-full min-h-0 w-full flex-col rounded-xl border border-olive/20 bg-white/90 p-2 shadow-sm sm:p-3">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 45vw, 25vw"
        />
      </div>

      <div className="mt-2 flex min-h-[2.5rem] items-start justify-between gap-1.5 max-sm:min-h-[2.25rem] sm:mt-3 sm:min-h-[2.75rem] sm:gap-2">
        <span className="line-clamp-2 flex-1 text-[11px] font-semibold leading-snug text-olive max-sm:text-[10px] sm:text-xs">
          {name}
        </span>
        <span className="shrink-0 pt-0.5 text-[11px] font-bold text-olive max-sm:text-[10px] sm:text-xs">
          {price}
        </span>
      </div>

      <div className="mt-auto flex flex-col gap-1.5 pt-2 max-sm:gap-1.5 max-sm:pt-2 sm:gap-2 sm:pt-3">
        {viewMenuOnly ? (
          <Link
            href="/menu"
            className="flex h-9 w-full shrink-0 items-center justify-center rounded-md bg-olive text-center text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-olive/90 max-sm:h-8 max-sm:text-[9px] sm:h-10 sm:text-xs"
          >
            View Menu
          </Link>
        ) : (
          <>
            <button
              type="button"
              className="h-9 w-full shrink-0 rounded-md border border-olive/40 bg-offwhite text-[10px] font-bold uppercase tracking-wide text-olive hover:bg-white max-sm:h-8 max-sm:text-[9px] sm:h-10 sm:text-xs"
            >
              Add To Cart
            </button>
            <button
              type="button"
              className="h-9 w-full shrink-0 rounded-md bg-olive text-[10px] font-bold uppercase tracking-wide text-white hover:bg-olive/90 max-sm:h-8 max-sm:text-[9px] sm:h-10 sm:text-xs"
            >
              Buy It Now
            </button>
          </>
        )}
      </div>
    </article>
  );
}
