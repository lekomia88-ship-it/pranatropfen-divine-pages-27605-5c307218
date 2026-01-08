import { Heart, Gem, Sparkles, Truck } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  label: string;
  description: string;
}

const features: Feature[] = [
  { icon: Heart, label: "Handmade", description: "Jedes Stück ein Unikat" },
  { icon: Gem, label: "Echte Edelsteine", description: "Sorgfältig ausgewählt" },
  { icon: Sparkles, label: "Aktiviert", description: "Energetisch geladen" },
  { icon: Truck, label: "Gratis Versand", description: "ab 70€ gratis" },
];

export const FeatureBanner = () => {
  return (
    <div className="bg-beige-100 border-y border-gold-100/50 py-5 sm:py-6 lg:py-8">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Mobile: 2x2 Grid, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 sm:gap-3 lg:justify-center"
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-100/60 flex items-center justify-center">
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" strokeWidth={1.5} />
              </div>
              <div className="text-left min-w-0">
                <p className="font-semibold text-foreground text-xs sm:text-sm leading-tight">{feature.label}</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
