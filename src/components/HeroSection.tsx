import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry-1.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-beige-50 via-background to-beige-100/50 pt-8 pb-12 sm:py-0">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Bild - auf Mobile kleiner und zentriert */}
          <div className="relative order-1 lg:order-1 animate-fade-in">
            <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
              <img
                src={heroImage}
                alt="Pranatropfen Schmuck in eleganter Geschenkbox"
                className="w-full h-full object-cover rounded-2xl shadow-xl border border-gold-200/30"
              />
              {/* Dekorative Ecken - auf Mobile kleiner */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-b-2 border-gold-300/50 rounded-br-2xl" />
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-gold-300/50 rounded-tl-2xl" />
            </div>
          </div>

          {/* Text rechts */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gold-100/60 border border-gold-200/50 mb-4 sm:mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600" />
              <span className="text-xs sm:text-sm font-medium text-gold-700">Schmuck</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 text-foreground leading-tight animate-fade-in-up">
              Pranatropfen® –{" "}
              <span className="text-gold-600">Energie zum Tragen</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Handgefertigter Orgonit-Schmuck mit echten Edelsteinen. 
              Dein achtsamer Begleiter für innere Balance und positive Schwingung.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection("story")}
                className="w-full sm:w-auto shadow-glow"
              >
                Kollektion entdecken
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("handwerk")}
                className="w-full sm:w-auto"
              >
                Wie sie entstehen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
