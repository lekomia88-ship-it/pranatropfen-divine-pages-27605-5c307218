import { SunSymbol } from "./CelestialSymbols";
import { Eye } from "lucide-react";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

const features = [
  "Made in Germany",
  "Einzigartiges Design",
  "Natürliche Energie",
];

export const StorySection = () => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative sun - hidden on mobile/tablet */}
      <SunSymbol className="hidden lg:block absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] text-gold-300 opacity-[0.08]" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        {/* Mobile/Tablet: Stacked. Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Content - appears FIRST on mobile/tablet */}
          <div className="order-1 lg:order-2 text-center lg:text-left w-full max-w-xl mx-auto lg:max-w-none">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100/60 border border-gold-200/50 text-gold-700 text-sm font-medium mb-5 sm:mb-6">
              <Eye className="w-4 h-4" />
              <span>Unsere Vision</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-4">
              Energie in die{" "}
              <span className="text-gold-600">Welt tragen</span>
            </h2>

            {/* Gold line */}
            <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto lg:mx-0 mb-5 sm:mb-6" />

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Wir glauben daran, dass jeder Mensch Zugang zu positiver Energie verdient. 
              Mit jedem Pranatropfen® möchten wir ein Stück dieser Kraft weitergeben.
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Unsere Vision: <span className="font-semibold text-foreground">Harmonie und Wohlbefinden</span> in 
              den Alltag bringen.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 sm:px-4 py-1.5 rounded-full bg-beige-100/80 border border-gold-200/50 text-xs sm:text-sm text-foreground font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Images - appears SECOND on mobile/tablet */}
          <div className="order-2 lg:order-1 relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-full mx-auto lg:mx-0">
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
