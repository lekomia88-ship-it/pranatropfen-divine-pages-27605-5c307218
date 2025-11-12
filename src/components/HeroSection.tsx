import { Button } from "@/components/ui/button";
import { FlowerOfLife } from "./SacredGeometry";
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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
      </div>

      {/* Sacred Geometry Background - subtle */}
      <FlowerOfLife className="absolute bottom-[-200px] right-1/4 w-[400px] h-[400px] text-background opacity-[0.08]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-background leading-tight animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Trage deine <span className="font-extrabold">Energie</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-background max-w-3xl mx-auto font-medium animate-fade-in-up drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" style={{ animationDelay: "200ms" }}>
          Dein persönlicher <span className="font-bold">Energiebegleiter</span> – handgefertigt mit Intention
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-background/95 max-w-2xl mx-auto font-normal animate-fade-in-up drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" style={{ animationDelay: "400ms" }}>
          Spüre die Verbindung. Jeder Pranatropfen trägt eine <span className="font-semibold">einzigartige Schwingung</span> aus natürlichen Edelsteinen und wird in achtsamer <span className="font-semibold">Handarbeit</span> für dich erschaffen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button
            variant="heroPrimary"
            size="lg"
            onClick={() => scrollToSection("story")}
            className="w-full sm:w-auto"
          >
            Finde deine Energie
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
    </section>
  );
};
