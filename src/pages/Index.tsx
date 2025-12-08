import { HeroSection } from "@/components/HeroSection";
import { FeatureBanner } from "@/components/FeatureBanner";
import { StorySection } from "@/components/StorySection";
import { HandwerkSection } from "@/components/HandwerkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { CommunitySection } from "@/components/CommunitySection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ========== CHUNK: ABOVE-LISTING ========== */}
      {/* Diese Sektionen kommen ÜBER das Shopware Produkt-Listing */}
      
      <div id="chunk-above-listing" data-chunk="above-listing">
        <section id="pranatropfen-hero" data-section="hero">
          <HeroSection />
        </section>
        
        <section id="pranatropfen-usps" data-section="usps">
          <FeatureBanner />
        </section>
        
        <section id="pranatropfen-vision" data-section="vision">
          <StorySection />
        </section>
      </div>

      {/* ========== SHOPWARE PRODUKT-LISTING HIER ========== */}
      {/* In Shopware: {% sw_include '@Storefront/storefront/component/product/listing.html.twig' %} */}

      {/* ========== CHUNK: BELOW-LISTING ========== */}
      {/* Diese Sektionen kommen UNTER das Shopware Produkt-Listing */}
      
      <div id="chunk-below-listing" data-chunk="below-listing">
        <section id="pranatropfen-handwerk" data-section="handwerk">
          <HandwerkSection />
        </section>
        
        <section id="pranatropfen-testimonials" data-section="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="pranatropfen-community" data-section="community">
          <CommunitySection />
        </section>
        
        <section id="pranatropfen-faq" data-section="faq">
          <FAQSection />
        </section>
        
        <section id="pranatropfen-newsletter" data-section="newsletter">
          <NewsletterSection />
        </section>
        
        <section id="pranatropfen-usps-footer" data-section="usps-footer">
          <FeatureBanner />
        </section>
      </div>
    </main>
  );
};

export default Index;
