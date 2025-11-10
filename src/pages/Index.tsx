import { HeroSection } from "@/components/HeroSection";
import { USPSection } from "@/components/USPSection";
import { StorySection } from "@/components/StorySection";
import { HandwerkSection } from "@/components/HandwerkSection";
import { CommunitySection } from "@/components/CommunitySection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <USPSection />
      <StorySection />
      <HandwerkSection />
      <CommunitySection />
    </main>
  );
};

export default Index;
