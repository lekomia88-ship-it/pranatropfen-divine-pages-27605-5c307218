import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry-1.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-beige-50 via-background to-beige-100/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Bild links */}
          <div className="relative order-1 lg:order-1 animate-fade-in">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={heroImage}
                alt="Pranatropfen Schmuck in eleganter Geschenkbox"
                className="w-full h-full object-cover rounded-2xl shadow-xl border border-gold-200/30"
              />
              {/* Dekorative Ecke */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-gold-300/50 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold-300/50 rounded-tl-2xl" />
            </div>
          </div>

          {/* Text rechts */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100/60 border border-gold-200/50 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium text-gold-700">Schmuck</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-foreground leading-tight animate-fade-in-up">
              Pranatropfen® – <br className="hidden sm:block" />
              <span className="text-gold-600">Energie zum Tragen</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Handgefertigter Orgonit-Schmuck mit echten Edelsteinen. 
              Dein achtsamer Begleiter für innere Balance, Erdung und positive Schwingung im Alltag.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
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
