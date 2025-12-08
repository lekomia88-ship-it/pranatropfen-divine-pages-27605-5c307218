import { MoonSymbol, SunSymbol } from "./CelestialSymbols";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

export const StorySection = () => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 bg-gradient-beige relative overflow-hidden">
      {/* Single large decorative sun in corner */}
      <SunSymbol className="absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] text-gold-400 opacity-[0.10]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            Energie trifft Ästhetik
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Jeder Pranatropfen® vereint natürliche Materialien – Kunstharz,
            Edelmetalle und Edelsteine – in einem harmonischen Design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start max-w-7xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] h-[250px] sm:h-[300px]">
              <img
                src={modelImage}
                alt="Model trägt Pranatropfen Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] h-[250px] sm:h-[300px] mt-8 sm:mt-12">
              <img
                src={modelImage2}
                alt="Model mit Pranatropfen Energie-Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Für Menschen, die ihre <span className="font-semibold text-foreground">Energie spüren</span> und ihren <span className="font-semibold text-foreground">Stil leben</span>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Jedes Stück wird mit Intention und Sorgfalt hergestellt – eine perfekte Balance zwischen spiritueller Kraft und zeitlosem Design.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gold-100/60 text-gold-700 font-medium text-xs sm:text-sm">
                ✦ Handcrafted with Love
              </div>
              <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gold-100/60 text-gold-700 font-medium text-xs sm:text-sm">
                ✧ Made in Germany
              </div>
              <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gold-100/60 text-gold-700 font-medium text-xs sm:text-sm">
                ◈ Unique Design
              </div>
              <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gold-100/60 text-gold-700 font-medium text-xs sm:text-sm">
                ☽ Natural Energy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};