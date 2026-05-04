import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { ChefSection } from "@/components/ChefSection";
import { DiscoverSection } from "@/components/DiscoverSection";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      {/* Hero: no FadeIn — avoids opacity-0 gate so content shows immediately */}
      <div className="mt-4 md:mt-10">
        <HeroSection />
      </div>

      <FadeIn
        slide={false}
        className="mt-16 w-full min-w-0 overflow-x-visible md:mt-[48px]"
      >
        <ProductSection />
      </FadeIn>

      <FadeIn className="mt-16 w-full min-w-0 md:mt-24">
        <div className="rounded-2xl bg-offwhite px-4 py-10 ring-1 ring-olive/[0.08] sm:rounded-3xl sm:px-6 sm:py-12 md:mx-auto md:max-w-6xl md:px-10 md:py-14 lg:px-12 lg:py-16">
          <ChefSection />
          <div className="my-12 border-t border-olive/10 sm:my-14 md:my-16" aria-hidden />
          <DiscoverSection />
        </div>
      </FadeIn>

      <div className="mt-auto flex min-h-0 w-full min-w-0 flex-1 flex-col pt-10 sm:pt-12 md:pt-14">
        <Footer />
      </div>
    </div>
  );
}
