import { SunSymbol } from "./CelestialSymbols";
import { Sparkles, Heart, Globe, Leaf } from "lucide-react";
import modelImage from "@/assets/model-jewelry-1.jpg";
import modelImage2 from "@/assets/model-jewelry-2.jpg";

const features = [
  { icon: Sparkles, label: "Mit Liebe gefertigt" },
  { icon: Globe, label: "Made in Germany" },
  { icon: Heart, label: "Einzigartiges Design" },
  { icon: Leaf, label: "Natürliche Energie" },
];

export const StorySection = () => {
  return (
    <section id="story" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative sun */}
      <SunSymbol className="absolute bottom-[-100px] right-[-80px] w-[240px] h-[240px] text-gold-300 opacity-[0.08]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Images with staggered layout */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main large image */}
              <div className="col-span-7 relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gold-200/30">
                  <img
                    src={modelImage}
                    alt="Model trägt Pranatropfen Schmuck"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative corner accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-gold-300/40 rounded-2xl -z-10" />
              </div>
              
              {/* Smaller offset image */}
              <div className="col-span-5 pt-16">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gold-200/30">
                  <img
                    src={modelImage2}
                    alt="Model mit Pranatropfen Energie-Schmuck"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100/60 border border-gold-200/50 text-gold-700 text-sm font-medium mb-6">
              <SunSymbol className="w-4 h-4" />
              <span>Unsere Vision</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
              Energie trifft{" "}
              <span className="text-gold-600">Ästhetik</span>
            </h2>

            {/* Gold line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto lg:mx-0 mb-6" />

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
              Jeder Pranatropfen® vereint natürliche Materialien – Kunstharz,
              Edelmetalle und Edelsteine – in einem harmonischen Design.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Für Menschen, die ihre <span className="font-semibold text-foreground">Energie spüren</span> und ihren <span className="font-semibold text-foreground">Stil leben</span>. Jedes Stück wird mit Intention und Sorgfalt hergestellt.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-card border border-gold-200/50 text-foreground text-sm font-medium hover:bg-gold-50 transition-colors"
                >
                  <feature.icon className="w-4 h-4 text-gold-500" />
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
