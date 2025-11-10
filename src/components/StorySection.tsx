import { MoonSymbol, SunSymbol } from "./CelestialSymbols";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

export const StorySection = () => {
  return (
    <section id="story" className="py-16 bg-gradient-to-br from-secondary/40 via-secondary/25 to-background relative overflow-hidden">
      {/* Large decorative moon */}
      <MoonSymbol className="absolute top-[-80px] right-[-60px] w-[280px] h-[280px] text-gold opacity-[0.18]" />
      
      {/* Playful moon hanging on a chain in background */}
      <div className="absolute top-20 left-1/4 opacity-[0.20]">
        <svg width="80" height="120" viewBox="0 0 80 120" className="text-gold">
          {/* Delicate chain */}
          <line x1="40" y1="0" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Small hook at top */}
          <path d="M 37 0 Q 40 -2 43 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Moon hanging */}
          <g transform="translate(40, 60)">
            <MoonSymbol className="w-16 h-16" />
          </g>
        </svg>
      </div>

      {/* Sun symbols scattered */}
      <SunSymbol className="absolute top-32 left-24 w-20 h-20 text-gold-light opacity-[0.25]" />
      <SunSymbol className="absolute bottom-[-40px] right-20 w-[180px] h-[180px] text-gold opacity-[0.15]" />

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
