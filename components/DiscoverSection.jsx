import Image from "next/image";

const TAGS = [
  "FLAVOR NOTES",
  "BEHIND THE SCENES",
  "FRESH EVERY DAY",
  "PORTION LOVE",
  "SOURCED RIGHT",
  "SPICE LEVELS",
  "LITTLE FOOD JOYS",
  "MOOD FOR FOOD",
];

export function DiscoverSection() {
  return (
    <section className="mt-[75px] w-full" aria-labelledby="discover-title">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="relative h-[250px] w-[245px] max-w-full overflow-hidden rounded-[6px]">
            <Image
              src="/images/lifestyle-table.jpg"
              alt="Table with food"
              fill
              className="object-cover"
              sizes="245px"
            />
          </div>
          <div className="grid w-[245px] max-w-full grid-cols-2 gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                type="button"
                className="flex h-[24px] items-center justify-center rounded-[2px] border border-mustard bg-offwhite px-1 text-[6px] font-bold uppercase leading-tight text-olive hover:bg-mustard/15"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:pl-2">
          <h2
            id="discover-title"
            className="mt-[30px] text-[30px] font-bold uppercase leading-[0.95] text-olive lg:mt-0"
          >
            DISCOVER MORE
            <br />
            TO FLAVOR,
            <br />
            MORE TO LOVE!
          </h2>
          <div className="relative mt-6 h-[220px] w-[235px] max-w-full overflow-hidden rounded-[6px]">
            <Image
              src="/images/dining-people.jpg"
              alt="Dining together"
              fill
              className="object-cover"
              sizes="235px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
