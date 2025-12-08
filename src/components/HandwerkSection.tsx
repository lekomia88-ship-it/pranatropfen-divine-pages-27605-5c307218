import { FlowerOfLife } from "./SacredGeometry";
import { Sparkles, Hand, Gem } from "lucide-react";
import workshopResinPouring from "@/assets/workshop-resin-pouring.jpg";
import pranatropfenHandReal from "@/assets/pranatropfen-hand-real.jpg";
import workshopSmallGemstones from "@/assets/workshop-small-gemstones.jpg";
import workshopBlackWhiteTurquoise from "@/assets/workshop-black-white-turquoise.jpg";
import workshopEnergyWorkspace from "@/assets/workshop-energy-workspace.jpg";

const highlights = [
  { icon: "✦", title: "Handpoliert", description: "Jede Oberfläche wird von Hand bearbeitet, bis sie perfekt glänzt" },
  { icon: "◈", title: "Energetisch aktiviert", description: "Während der Herstellung wird jedes Stück mit positiver Intention geladen" },
  { icon: "☽", title: "Einzigartig", description: "Keine zwei Pranatropfen sind gleich – jeder trägt seine eigene Geschichte" },
];

export const HandwerkSection = () => {
  return (
    <section id="handwerk" className="py-12 sm:py-16 lg:py-24 bg-beige-50 relative overflow-hidden">
      {/* Sacred geometry */}
      <FlowerOfLife className="absolute top-[-140px] left-[-120px] w-[450px] h-[450px] text-gold-200 opacity-[0.06]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="subheadline mb-3">Der Entstehungsprozess</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Die Kunst des <span className="text-gold-600">Pranatropfens®</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jeder Tropfen durchläuft einen mehrstufigen, präzisen Schöpfungsprozess – 
            vom flüssigen Harz bis zum energetischen Meisterwerk.
          </p>
          <p className="text-base text-muted-foreground mt-2">
            In unserer Werkstatt verbinden wir traditionelles Handwerk mit spiritueller Intention.
          </p>
        </div>

        {/* Hero Image - Der magische Moment */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-200/30 group mb-6">
          <img
            src={workshopResinPouring}
            alt="Präzises Gießen von flüssigem Harz in die Pranatropfen-Form"
            className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 text-shadow">Der magische Moment</h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl">
                Das goldschimmernde Harz fließt sanft über die platzierten Edelsteine und Goldflakes. 
                Schicht für Schicht entsteht die perfekte Tropfenform.
              </p>
            </div>
          </div>
        </div>

        {/* Process Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Die Auswahl */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold-200/30 group">
            <img
              src={workshopSmallGemstones}
              alt="Handwerkliche Auswahl natürlicher Edelsteine"
              className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 text-shadow">Die Auswahl</h3>
                <p className="text-sm sm:text-base text-white/90">
                  Jeder Edelstein wird sorgfältig nach Farbe, Form und energetischer Schwingung ausgewählt.
                </p>
              </div>
            </div>
          </div>

          {/* Die Komposition */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold-200/30 group">
            <img
              src={workshopBlackWhiteTurquoise}
              alt="Kunstvolle Komposition von Edelsteinen"
              className="w-full h-[280px] sm:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 text-shadow">Die Komposition</h3>
                <p className="text-sm sm:text-base text-white/90">
                  Mit Pinzette und ruhiger Hand entsteht ein harmonisches Arrangement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Die Vollendung */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-200/30 group mb-12 lg:mb-16">
          <img
            src={workshopEnergyWorkspace}
            alt="Energetische Aufladung in der Werkstatt"
            className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 text-shadow">Die Vollendung</h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl">
                Nach Tagen des Aushärtens und liebevoller Politur werden die fertigen Pranatropfen energetisch aufgeladen.
              </p>
            </div>
          </div>
        </div>

        {/* Das fertige Meisterwerk */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-200/30">
              <img
                src={pranatropfenHandReal}
                alt="Fertiger Pranatropfen-Anhänger in der Hand"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative corner accent - smaller on mobile */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-20 sm:w-32 h-20 sm:h-32 border-2 border-gold-300/40 rounded-2xl -z-10" />
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
              Das fertige <span className="text-gold-600">Meisterwerk</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Nach mehreren Tagen Aushärtung, präzisem Schleifen und liebevoller Politur entsteht 
              ein Unikat, das Licht einfängt und Energie ausstrahlt.
            </p>
            
            {/* Highlights with symbols */}
            <div className="space-y-4 sm:space-y-5">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 border border-gold-200/50 flex items-center justify-center">
                    <span className="text-lg sm:text-xl text-gold-600">{item.icon}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base mb-0.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
