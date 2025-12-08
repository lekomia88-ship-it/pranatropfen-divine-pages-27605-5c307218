import { Moon, Truck, Gem, ShieldCheck } from "lucide-react";
import { FlowerOfLife } from "./SacredGeometry";

const usps = [
  {
    icon: Gem,
    title: "Handgefertigt in Deutschland",
    description: "Jedes Stück ein Unikat",
  },
  {
    icon: ShieldCheck,
    title: "30 Tage Rückgabe",
    description: "Risikofrei bestellen",
  },
  {
    icon: Truck,
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
    <section className="py-12 sm:py-14 bg-background relative overflow-hidden">
      {/* Subtle background element */}
      <FlowerOfLife className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] text-gold-200 opacity-[0.06]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-100/50 flex items-center justify-center mb-3 group-hover:bg-gold-100 group-hover:scale-110 transition-all duration-300">
                <usp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600" strokeWidth={1.5} />
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