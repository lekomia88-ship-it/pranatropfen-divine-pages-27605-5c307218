import { HeroSection } from "@/components/HeroSection";
import { USPSection } from "@/components/USPSection";
import { StorySection } from "@/components/StorySection";
import { ProductShowcase } from "@/components/ProductShowcase";
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
      <USPSection />
      <StorySection />
      <ProductShowcase />
      <HandwerkSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CommunitySection />
      <ScrollToProductsButton />
    </main>
  );
};

export default Index;
