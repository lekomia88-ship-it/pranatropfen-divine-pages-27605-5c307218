import { Heart, Gem, Sparkles, Truck } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  label: string;
  description: string;
}

const features: Feature[] = [
  { icon: Heart, label: "Handmade with Love", description: "Jedes Stück ein Unikat" },
  { icon: Gem, label: "Echte Edelsteine", description: "Sorgfältig ausgewählt" },
  { icon: Sparkles, label: "Energetisch aktiviert", description: "Mit Intention geladen" },
  { icon: Truck, label: "Gratis ab 70€", description: "Schneller Versand" },
];

export const FeatureBanner = () => {
  return (
    <div className="bg-beige-100 border-y border-gold-100/50 py-6 sm:py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-100/60 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-gold-600" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">{feature.label}</p>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
