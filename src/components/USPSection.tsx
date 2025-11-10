import { Sparkles, Heart, Zap, ShieldCheck } from "lucide-react";

const usps = [
  {
    icon: Sparkles,
    title: "Handgefertigt in Deutschland",
    description: "Jedes Stück ein Unikat",
  },
  {
    icon: Heart,
    title: "30 Tage Rückgabe",
    description: "Risikofrei bestellen",
  },
  {
    icon: Zap,
    title: "Versand ab 70 € gratis",
    description: "Schnelle Lieferung",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Zahlung",
    description: "PayPal & Karte",
  },
];

export const USPSection = () => {
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
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
