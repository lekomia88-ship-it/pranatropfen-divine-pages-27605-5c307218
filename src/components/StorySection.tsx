import { MoonSymbol, SunSymbol } from "./CelestialSymbols";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

export const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle celestial symbols - non-intrusive */}
      <MoonSymbol className="absolute top-32 right-12 w-20 h-20 text-gold opacity-15" />
      <SunSymbol className="absolute bottom-32 left-12 w-24 h-24 text-gold-light opacity-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Images */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img
                src={modelImage}
                alt="Model trägt Pranatropfen Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img
                src={modelImage2}
                alt="Model mit Pranatropfen Energie-Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Energie trifft Ästhetik
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jeder Pranatropfen® vereint natürliche Materialien – Kunstharz,
              Edelmetalle und Edelsteine – in einem harmonischen Design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Für Menschen, die ihre <span className="font-semibold text-foreground">Energie spüren</span> und ihren <span className="font-semibold text-foreground">Stil leben</span>.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                ✦ Handcrafted with Love
              </div>
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                ✧ Made in Germany
              </div>
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                ◈ Unique Design
              </div>
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                ☽ Natural Energy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
