import { Button } from "@/components/ui/button";
import { FlowerOfLife } from "./SacredGeometry";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jewelry-1.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Handgefertigter Pranatropfen Schmuck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Sacred Geometry Background - subtle */}
      <FlowerOfLife className="absolute bottom-[-200px] right-1/4 w-[400px] h-[400px] text-gold-200 opacity-[0.08]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center lg:text-left max-w-6xl">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="subheadline mb-3 text-gold-300 animate-fade-in">
            Handgefertigt mit Intention
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-white leading-tight animate-fade-in-up text-shadow">
            Trage deine <span className="text-gold-300">Energie</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Jeder Pranatropfen trägt eine einzigartige Schwingung aus natürlichen Edelsteinen 
            und wird in achtsamer Handarbeit für dich erschaffen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button
              variant="heroPrimary"
              size="lg"
              onClick={() => scrollToSection("story")}
              className="w-full sm:w-auto"
            >
              Kollektion entdecken
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="heroSecondary"
              size="lg"
              onClick={() => scrollToSection("handwerk")}
              className="w-full sm:w-auto"
            >
              Wie sie entstehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};