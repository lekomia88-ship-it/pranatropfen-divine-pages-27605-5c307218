import { SunSymbol } from "./CelestialSymbols";
import { Sparkles, Heart, Globe, Leaf } from "lucide-react";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

const features = [
  { icon: Sparkles, label: "Handcrafted with Love" },
  { icon: Globe, label: "Made in Germany" },
  { icon: Heart, label: "Unique Design" },
  { icon: Leaf, label: "Natural Energy" },
];

export const StorySection = () => {
  return (
    <section id="story" className="py-14 lg:py-18 bg-beige-50 relative overflow-hidden">
      {/* Decorative sun */}
      <SunSymbol className="absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] text-gold-300 opacity-[0.10]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-12">
          <p className="subheadline mb-2">Unsere Vision</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
            Energie trifft Ästhetik
          </h2>
          <div className="gold-line lg:gold-line-left lg:mx-0 mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            Jeder Pranatropfen® vereint natürliche Materialien – Kunstharz,
            Edelmetalle und Edelsteine – in einem harmonischen Design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-gold-200/30 h-[220px] sm:h-[280px]">
              <img
                src={modelImage}
                alt="Model trägt Pranatropfen Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-gold-200/30 h-[220px] sm:h-[280px] mt-8 sm:mt-12">
              <img
                src={modelImage2}
                alt="Model mit Pranatropfen Energie-Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Für Menschen, die ihre <span className="font-semibold text-foreground">Energie spüren</span> und ihren <span className="font-semibold text-foreground">Stil leben</span>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Jedes Stück wird mit Intention und Sorgfalt hergestellt – eine perfekte Balance zwischen spiritueller Kraft und zeitlosem Design.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gold-100/50 border border-gold-200/50 text-gold-700 text-xs sm:text-sm font-medium"
                >
                  <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};