import { HeroSection } from "@/components/HeroSection";
import { FeatureBanner } from "@/components/FeatureBanner";
import { StorySection } from "@/components/StorySection";
import { HandwerkSection } from "@/components/HandwerkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ScrollToProductsButton } from "@/components/ScrollToProductsButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureBanner />
      <StorySection />
      <HandwerkSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CommunitySection />
      <FeatureBanner />
      <ScrollToProductsButton />
    </main>
  );
};

export default Index;
