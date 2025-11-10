import { Button } from "@/components/ui/button";
import { FlowerOfLife } from "./SacredGeometry";
import heroImage from "@/assets/hero-jewelry-1.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Handgefertigter Pranatropfen Schmuck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/90" />
      </div>

      {/* Sacred Geometry Background */}
      <FlowerOfLife className="absolute top-1/4 right-1/4 w-96 h-96 text-primary opacity-20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-background leading-tight">
          Schmuck mit Bedeutung
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-background/90 max-w-3xl mx-auto font-light">
          Handgefertigte Design-Unikate für bewusste Menschen
        </p>
        <p className="text-base md:text-lg mb-10 text-background/80 max-w-2xl mx-auto">
          Trage, was dich stärkt. Jeder Pranatropfen wird in liebevoller Handarbeit gefertigt – aus Edelsteinen, Edelmetallen und klarem Kunstharz.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="heroPrimary"
            onClick={() => scrollToSection("story")}
          >
            Kollektion entdecken
          </Button>
          <Button
            variant="outline"
            className="bg-background/10 backdrop-blur-sm text-background border-background/30 hover:bg-background/20"
            onClick={() => scrollToSection("handwerk")}
          >
            Über die Handwerkskunst
          </Button>
        </div>
      </div>
    </section>
  );
};
