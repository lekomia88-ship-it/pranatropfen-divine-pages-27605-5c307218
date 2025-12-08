import { SunSymbol } from "./CelestialSymbols";
import { Sparkles, Heart, Globe, Leaf } from "lucide-react";
import { LucideIcon } from "lucide-react";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

interface Feature {
  icon: LucideIcon;
  label: string;
}

const features: Feature[] = [
  { icon: Sparkles, label: "Mit Liebe gefertigt" },
  { icon: Globe, label: "Made in Germany" },
  { icon: Heart, label: "Einzigartiges Design" },
  { icon: Leaf, label: "Natürliche Energie" },
];

export const StorySection = () => {
  return (
    <section id="story" className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative sun - hidden on mobile */}
      <SunSymbol className="hidden lg:block absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] text-gold-300 opacity-[0.08]" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        {/* Mobile: Stacked. Tablet/Desktop: Side by side */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          
          {/* Content - appears FIRST on mobile */}
          <div className="order-1 md:order-2 text-center md:text-left w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100/60 border border-gold-200/50 text-gold-700 text-sm font-medium mb-5 sm:mb-6">
              <SunSymbol className="w-4 h-4" />
              <span>Unsere Vision</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-4">
              Energie in die{" "}
              <span className="text-gold-600">Welt tragen</span>
            </h2>

            {/* Gold line */}
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto md:mx-0 mb-5 sm:mb-6" />

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Wir glauben daran, dass jeder Mensch Zugang zu positiver Energie verdient. 
              Mit jedem Pranatropfen® möchten wir ein Stück dieser Kraft weitergeben.
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Unsere Vision: <span className="font-semibold text-foreground">Harmonie und Wohlbefinden</span> in 
              den Alltag bringen.
            </p>

            {/* Feature Pills - Grid on mobile, flex wrap on tablet/desktop */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2 sm:justify-center md:justify-start">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-1.5 px-3 py-2 rounded-full bg-card border border-gold-200/50 text-foreground text-xs font-medium hover:bg-gold-50 transition-colors"
                >
                  <feature.icon className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                  <span className="whitespace-nowrap">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images - appears SECOND on mobile */}
          <div className="order-2 md:order-1 relative w-full max-w-[280px] sm:max-w-sm md:max-w-full mx-auto md:mx-0">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Main large image */}
              <div className="col-span-7 relative">
                <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-gold-200/30">
                  <img
                    src={modelImage}
                    alt="Model trägt Pranatropfen Schmuck"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative corner accent - hidden on tablet and below */}
                <div className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 border-2 border-gold-300/40 rounded-2xl -z-10" />
              </div>
              
              {/* Smaller offset image */}
              <div className="col-span-5 pt-6 sm:pt-12 lg:pt-16">
                <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gold-200/30">
                  <img
                    src={modelImage2}
                    alt="Model mit Pranatropfen Energie-Schmuck"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
