import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { DiscountBanner } from "@/components/DiscountBanner";
import { ChefSection } from "@/components/ChefSection";
import { DiscoverSection } from "@/components/DiscoverSection";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <div className="flex w-full max-w-none min-w-0 flex-col px-3 pb-10 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
      <Header />

      <FadeIn className="mt-4 md:mt-10">
        <HeroSection />
      </FadeIn>

      <FadeIn
        slide={false}
        className="mt-16 w-full min-w-0 overflow-x-visible md:mt-[48px]"
      >
        <ProductSection />
      </FadeIn>

      <FadeIn className="mt-14 w-full min-w-0">
        <DiscountBanner />
      </FadeIn>

      <FadeIn>
        <ChefSection />
      </FadeIn>

      <FadeIn>
        <DiscoverSection />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}
