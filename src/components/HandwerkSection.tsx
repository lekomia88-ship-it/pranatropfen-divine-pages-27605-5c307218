import { FlowerOfLife } from "./SacredGeometry";
import workshopResinPouring from "@/assets/workshop-resin-pouring.jpg";
import pranatropfenHandReal from "@/assets/pranatropfen-hand-real.jpg";
import workshopSmallGemstones from "@/assets/workshop-small-gemstones.jpg";
import workshopBlackWhiteTurquoise from "@/assets/workshop-black-white-turquoise.jpg";
import workshopEnergyWorkspace from "@/assets/workshop-energy-workspace.jpg";

export const HandwerkSection = () => {
  return (
    <section id="handwerk" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Single large sacred geometry */}
      <FlowerOfLife className="absolute top-[-140px] left-[-120px] w-[450px] h-[450px] text-gold-400 opacity-[0.09]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Die Kunst des Pranatropfens®
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-3 sm:mb-4">
            Jeder Tropfen durchläuft einen mehrstufigen, präzisen Schöpfungsprozess – 
            vom flüssigen Harz bis zum energetischen Meisterwerk.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
            In unserer Werkstatt in Kleinrinderfeld verbinden wir traditionelles Handwerk 
            mit spiritueller Intention. Entdecke, wie dein einzigartiger Pranatropfen entsteht.
          </p>
        </div>

        {/* The Process - Visual Story */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {/* Hero Image - The Pour */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-large)] group lg:col-span-2">
            <img
              src={workshopResinPouring}
              alt="Präzises Gießen von flüssigem Harz in die Pranatropfen-Form mit sichtbaren Edelsteinen"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3 text-shadow-gold">Der magische Moment</h3>
                <p className="text-base sm:text-lg text-primary-foreground/90 max-w-2xl">
                  Das goldschimmernde Harz fließt sanft über die platzierten Edelsteine und Goldflakes. 
                  Schicht für Schicht entsteht die perfekte Tropfenform – ein faszinierender Prozess voller Präzision.
                </p>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={workshopSmallGemstones}
              alt="Handwerkliche Auswahl natürlicher Edelsteine und Kristalle"
              className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-1 sm:mb-2 text-shadow-gold">Die Auswahl</h3>
                <p className="text-sm sm:text-base text-primary-foreground/90">
                  Jeder Edelstein wird sorgfältig nach Farbe, Form und energetischer Schwingung ausgewählt – intuitiv und mit Bedacht.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={workshopBlackWhiteTurquoise}
              alt="Kunstvolle Komposition von Edelsteinen mit Goldakzenten in der Tropfenform"
              className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-1 sm:mb-2 text-shadow-gold">Die Komposition</h3>
                <p className="text-sm sm:text-base text-primary-foreground/90">
                  Mit Pinzette und ruhiger Hand entsteht ein harmonisches Arrangement – jeder Stein findet seinen perfekten Platz.
                </p>
              </div>
            </div>
          </div>

          {/* Final Moment - Full Width */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-large)] group lg:col-span-2">
            <img
              src={workshopEnergyWorkspace}
              alt="Energetische Aufladung in der Werkstatt mit Edelsteinen und Klangschale"
              className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3 text-shadow-gold">Die Vollendung</h3>
                <p className="text-base sm:text-lg text-primary-foreground/90 max-w-2xl">
                  Nach Tagen des Aushärtens und liebevoller Politur werden die fertigen Pranatropfen in unserer Werkstatt energetisch aufgeladen. 
                  Umgeben von Edelsteinen und mit achtsamer Intention erhält jedes Stück seine einzigartige energetische Signatur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-7xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-large)]">
            <img
              src={pranatropfenHandReal}
              alt="Echter handgefertigter Pranatropfen-Anhänger in der Hand gehalten"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
            />
          </div>

          <div className="space-y-5 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Das fertige Meisterwerk</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Nach mehreren Tagen Aushärtung, präzisem Schleifen und liebevoller Politur entsteht 
              ein Unikat, das Licht einfängt und Energie ausstrahlt.
            </p>
            
            <div className="space-y-4 pt-2 sm:pt-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">✦</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1">Handpoliert</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Jede Oberfläche wird von Hand bearbeitet, bis sie perfekt glänzt</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">◈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1">Energetisch aktiviert</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Während der Herstellung wird jedes Stück mit positiver Intention geladen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">☽</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1">Einzigartig</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Keine zwei Pranatropfen sind gleich – jeder trägt seine eigene Geschichte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};