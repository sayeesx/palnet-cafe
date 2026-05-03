import Image from "next/image";
import Link from "next/link";

const COLS = [
  {
    title: "MENU",
    links: ["View Menu", "Combo", "Healthy Foods", "Dishes"],
  },
  {
    title: "SERVICE",
    links: ["Order Tracking", "FAQs", "Return & Refunds"],
  },
  {
    title: "ABOUT",
    links: ["About Us", "Privacy & Policy", "Our Chefs", "Terms & Privacy"],
  },
];

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-[10px] text-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-[70px] min-h-[210px] w-full bg-olive px-[18px] pb-6 pt-[22px] text-white"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
        <div className="w-full lg:w-[58%]">
          <h2 className="max-w-[280px] text-[30px] font-bold uppercase leading-[0.95]">
            SIGN UP FOR OUR
            <br />
            NEWSLETTER
          </h2>

          <form
            className="mt-4 flex w-[240px] max-w-full overflow-hidden rounded-[4px] bg-offwhite shadow-inner"
            aria-label="Newsletter"
          >
            <label htmlFor="newsletter" className="sr-only">
              Register now
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="Register now"
              className="h-[30px] min-w-0 flex-1 border-0 bg-transparent px-2 text-[7px] text-olive placeholder:text-olive/50 focus:outline-none"
              autoComplete="email"
            />
            <button
              type="button"
              className="flex w-8 shrink-0 items-center justify-center bg-olive text-white hover:bg-olive/90"
              aria-label="Submit"
            >
              →
            </button>
          </form>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {COLS.map((col) => (
              <div key={col.title}>
                <p className="text-[7px] font-bold uppercase tracking-widest">
                  {col.title}
                </p>
                <ul className="mt-2 space-y-1">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-[6px] text-white/75 hover:text-white"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[42%] lg:justify-end">
          <div className="relative h-[130px] w-[195px] max-w-full overflow-hidden rounded-[4px]">
            <Image
              src="/images/footer-pizza.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="195px"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
        <p className="text-[6px] text-white/60">
          © {new Date().getFullYear()} Planet Cafe Bistro. All rights reserved.
        </p>
        <div className="flex gap-2 self-end sm:self-auto">
          <SocialIcon label="Instagram">IG</SocialIcon>
          <SocialIcon label="Facebook">f</SocialIcon>
          <SocialIcon label="Twitter">𝕏</SocialIcon>
        </div>
      </div>
    </footer>
  );
}
