import { SacredTriangles, FlowerOfLife } from "./SacredGeometry";
import { MoonSymbol, SunSymbol } from "./CelestialSymbols";
import pranatropfenPour from "@/assets/workshop-pranatropfen-pour.jpg";
import pranatropfenCollection from "@/assets/workshop-pranatropfen-collection.jpg";
import pranatropfenDetail from "@/assets/pranatropfen-detail.jpg";
import workshopImage from "@/assets/workshop-gemstones.jpg";

export const HandwerkSection = () => {
  return (
    <section id="handwerk" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Subtle celestial symbols */}
      <MoonSymbol className="absolute top-16 left-12 w-16 h-16 text-gold opacity-8" />
      <SunSymbol className="absolute bottom-24 right-16 w-14 h-14 text-gold-light opacity-6" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Die Kunst des Pranatropfens®
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Jeder Tropfen durchläuft einen mehrstufigen, präzisen Schöpfungsprozess – 
            vom flüssigen Harz bis zum energetischen Meisterwerk.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed">
            In unserer Werkstatt in Kleinrinderfeld verbinden wir traditionelles Handwerk 
            mit spiritueller Intention. Entdecke, wie dein einzigartiger Pranatropfen entsteht.
          </p>
        </div>

        {/* The Process - Visual Story */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* Hero Image - The Pour */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-large)] group lg:col-span-2">
            <img
              src={pranatropfenPour}
              alt="Präzises Gießen des Pranatropfens mit Goldflakes und Edelsteinen"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-3xl font-bold text-background mb-3">Der magische Moment</h3>
                <p className="text-lg text-background/90 max-w-2xl">
                  Kristallklares Harz trifft auf funkelnde Goldflakes und sorgfältig ausgewählte Edelsteine. 
                  Jede Schicht wird mit Bedacht gegossen, um die perfekte Tropfenform zu kreieren.
                </p>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={workshopImage}
              alt="Handverlesene Edelsteine und Materialien"
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-background mb-2">Schritt 1: Auswahl</h3>
                <p className="text-base text-background/90">
                  Jeder Edelstein wird intuitiv ausgewählt – für seine energetische Qualität und Schönheit.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={pranatropfenCollection}
              alt="Vielfalt an Pranatropfen in verschiedenen Farben und mit unterschiedlichen Edelsteinen"
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-background mb-2">Schritt 2: Vielfalt</h3>
                <p className="text-base text-background/90">
                  Von Amethyst bis Rosenquarz – jede Farbe trägt ihre eigene energetische Signatur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-large)]">
            <img
              src={pranatropfenDetail}
              alt="Detailaufnahme eines fertigen Pranatropfen-Anhängers mit Amethyst und Goldverzierungen"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Das fertige Meisterwerk</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nach mehreren Tagen Aushärtung, präzisem Schleifen und liebevoller Politur entsteht 
              ein Unikat, das Licht einfängt und Energie ausstrahlt.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">✦</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Handpoliert</h4>
                  <p className="text-sm text-muted-foreground">Jede Oberfläche wird von Hand bearbeitet, bis sie perfekt glänzt</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">◈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Energetisch aktiviert</h4>
                  <p className="text-sm text-muted-foreground">Während der Herstellung wird jedes Stück mit positiver Intention geladen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">☽</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Einzigartig</h4>
                  <p className="text-sm text-muted-foreground">Keine zwei Pranatropfen sind gleich – jeder trägt seine eigene Geschichte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Erlebe die Herstellung live
            </h3>
            <p className="text-lg text-muted-foreground">
              Tauche ein in den faszinierenden Schöpfungsprozess eines Pranatropfens
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-large)] aspect-video">
            <iframe
              src="https://www.youtube.com/embed/kH0riYCc0dQ"
              title="Pranatropfen Herstellung – Der vollständige Prozess"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
