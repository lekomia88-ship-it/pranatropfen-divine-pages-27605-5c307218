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
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Subtle Sacred Geometry */}
      <FlowerOfLife className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] text-primary opacity-[0.12]" />
      <FlowerOfLife className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] text-primary opacity-[0.12]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-glow)]">
                <usp.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {usp.title}
              </h3>
              <p className="text-sm text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
