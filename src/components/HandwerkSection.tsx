import { FlowerOfLife } from "./SacredGeometry";
import { Sparkles, Hand, Gem } from "lucide-react";
import workshopResinPouring from "@/assets/workshop-resin-pouring.jpg";
import pranatropfenHandReal from "@/assets/pranatropfen-hand-real.jpg";
import workshopSmallGemstones from "@/assets/workshop-small-gemstones.jpg";
import workshopBlackWhiteTurquoise from "@/assets/workshop-black-white-turquoise.jpg";
import workshopEnergyWorkspace from "@/assets/workshop-energy-workspace.jpg";

const highlights = [
  { icon: Hand, title: "Handpoliert", description: "Jede Oberfläche wird von Hand bearbeitet" },
  { icon: Sparkles, title: "Energetisch aktiviert", description: "Mit positiver Intention geladen" },
  { icon: Gem, title: "Einzigartig", description: "Keine zwei Pranatropfen sind gleich" },
];

export const HandwerkSection = () => {
  return (
    <section id="handwerk" className="py-14 lg:py-18 bg-background relative overflow-hidden">
      {/* Sacred geometry */}
      <FlowerOfLife className="absolute top-[-140px] left-[-120px] w-[450px] h-[450px] text-gold-200 opacity-[0.08]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="subheadline mb-2">Der Entstehungsprozess</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Die Kunst des Pranatropfens®
          </h2>
          <div className="gold-line mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            Jeder Tropfen durchläuft einen mehrstufigen Schöpfungsprozess – 
            vom flüssigen Harz bis zum energetischen Meisterwerk.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border border-gold-200/30 group lg:col-span-2">
            <img
              src={workshopResinPouring}
              alt="Präzises Gießen von flüssigem Harz"
              className="w-full h-[280px] sm:h-[380px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 text-shadow">Der magische Moment</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-xl">
                  Das goldschimmernde Harz fließt sanft über die platzierten Edelsteine und Goldflakes.
                </p>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-gold-200/30 group">
            <img
              src={workshopSmallGemstones}
              alt="Auswahl natürlicher Edelsteine"
              className="w-full h-[240px] sm:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 text-shadow">Die Auswahl</h3>
                <p className="text-xs sm:text-sm text-white/90">
                  Jeder Edelstein wird sorgfältig nach Farbe und Schwingung ausgewählt.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-gold-200/30 group">
            <img
              src={workshopBlackWhiteTurquoise}
              alt="Komposition der Edelsteine"
              className="w-full h-[240px] sm:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 text-shadow">Die Komposition</h3>
                <p className="text-xs sm:text-sm text-white/90">
                  Mit Pinzette und ruhiger Hand entsteht ein harmonisches Arrangement.
                </p>
              </div>
            </div>
          </div>

          {/* Final Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border border-gold-200/30 group lg:col-span-2">
            <img
              src={workshopEnergyWorkspace}
              alt="Energetische Aufladung"
              className="w-full h-[280px] sm:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 text-shadow">Die Vollendung</h3>
                <p className="text-sm sm:text-base text-white/90 max-w-xl">
                  Nach liebevoller Politur werden die fertigen Pranatropfen energetisch aufgeladen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Product */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border border-gold-200/30">
            <img
              src={pranatropfenHandReal}
              alt="Fertiger Pranatropfen-Anhänger"
              className="w-full h-[350px] sm:h-[450px] object-cover"
            />
          </div>

          <div className="space-y-5 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Das fertige Meisterwerk</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nach mehreren Tagen Aushärtung, präzisem Schleifen und liebevoller Politur entsteht 
              ein Unikat, das Licht einfängt und Energie ausstrahlt.
            </p>
            
            <div className="space-y-4 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-100/50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};