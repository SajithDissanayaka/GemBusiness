import CutPolishSection from "@/src/components/CutPolishSection";
import FeaturedGems from "@/src/components/FeaturedGems";
import Hero from "@/src/components/Hero";
import InquirySection from "@/src/components/InquirySection";
import ShopByGemType from "@/src/components/ShopByGemType";
import StoreSection from "@/src/components/StoreSection";
import WhyChooseUs from "@/src/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeaturedGems />

      <ShopByGemType />

      <WhyChooseUs />

      <CutPolishSection />

      <InquirySection />

      <StoreSection />
    </main>
  );
}