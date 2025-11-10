import { HeroSection } from "@/components/HeroSection";
import { USPSection } from "@/components/USPSection";
import { StorySection } from "@/components/StorySection";
import { HandwerkSection } from "@/components/HandwerkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CommunitySection } from "@/components/CommunitySection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <USPSection />
      <StorySection />
      <HandwerkSection />
      <TestimonialsSection />
      <FAQSection />
      <CommunitySection />
    </main>
  );
};

export default Index;
