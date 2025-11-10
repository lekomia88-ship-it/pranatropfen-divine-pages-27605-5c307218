import { MoonSymbol, SunSymbol } from "./CelestialSymbols";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

export const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-secondary/30 to-secondary/10 relative overflow-hidden">
      {/* Single large decorative sun in corner */}
      <SunSymbol className="absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] text-gold opacity-[0.10]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Energie trifft Ästhetik
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jeder Pranatropfen® vereint natürliche Materialien – Kunstharz,
            Edelmetalle und Edelsteine – in einem harmonischen Design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] h-[300px]">
              <img
                src={modelImage}
                alt="Model trägt Pranatropfen Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] h-[300px] mt-12">
              <img
                src={modelImage2}
                alt="Model mit Pranatropfen Energie-Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Für Menschen, die ihre <span className="font-semibold text-foreground">Energie spüren</span> und ihren <span className="font-semibold text-foreground">Stil leben</span>.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Jedes Stück wird mit Intention und Sorgfalt hergestellt – eine perfekte Balance zwischen spiritueller Kraft und zeitlosem Design.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
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
