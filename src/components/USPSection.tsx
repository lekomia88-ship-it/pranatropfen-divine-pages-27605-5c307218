import { Moon, Waves, Gem, Shield } from "lucide-react";
import { FlowerOfLife } from "./SacredGeometry";

const usps = [
  {
    icon: Gem,
    title: "Handgefertigt in Deutschland",
    description: "Jedes Stück ein Unikat",
  },
  {
    icon: Shield,
    title: "30 Tage Rückgabe",
    description: "Risikofrei bestellen",
  },
  {
    icon: Waves,
    title: "Versand ab 70 € gratis",
    description: "Schnelle Lieferung",
  },
  {
    icon: Moon,
    title: "Energetisch aufgeladen",
    description: "Mit Intention gefertigt",
  },
];

export const USPSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-background relative overflow-hidden">
      {/* Subtle background element - hidden on mobile */}
      <FlowerOfLife className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] text-gold-400 opacity-[0.06]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-100/50 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gold-200/60 group-hover:scale-110 transition-all duration-300 shadow-[var(--shadow-soft)] group-hover:shadow-glow">
                <usp.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                {usp.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};