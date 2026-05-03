import Image from "next/image";

export function ChefSection() {
  return (
    <section className="mt-[78px] w-full" aria-labelledby="chef-title">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full lg:w-[48%] lg:max-w-[48%]">
          <p className="inline-block rounded-full border border-olive px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-olive">
            MEET OUR CHEFS
          </p>
          <h2
            id="chef-title"
            className="mt-4 text-[31px] font-bold uppercase leading-[0.95] text-olive"
          >
            EVERY PLATE
            <br />
            HANDLED
            <br />
            WITH LOVE
            <br />
            &amp; SKILL
          </h2>
          <p className="mt-4 max-w-[170px] text-[7px] leading-relaxed text-olive/85">
            Our chefs plate every dish with care — fresh ingredients, steady hands,
            and respect for the craft you can taste in every bite.
          </p>
          <button
            type="button"
            className="mt-6 h-[28px] w-[100px] rounded-full bg-olive text-[7px] font-bold uppercase tracking-wide text-white hover:bg-olive/90"
          >
            READ MORE
          </button>
        </div>

        <div className="relative mx-auto h-[315px] w-[235px] max-w-full shrink-0 overflow-hidden rounded-[6px] lg:mx-0 lg:ml-auto">
          <Image
            src="/images/chef.jpg"
            alt="Chef preparing food"
            fill
            className="object-cover"
            sizes="235px"
          />
        </div>
      </div>
    </section>
  );
}
