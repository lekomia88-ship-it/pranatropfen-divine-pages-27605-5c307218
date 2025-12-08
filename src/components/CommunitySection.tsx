import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import communityBg from "@/assets/community-bg.jpg";

const features = [
  { label: "Liebevolle Handarbeit", description: "Jedes Stück in Deutschland gefertigt" },
  { label: "Echte Edelsteine", description: "Sorgfältig ausgewählte Kristalle" },
  { label: "Energetisch aktiviert", description: "Mit Liebe & Intention geladen" },
  { label: "Schneller Versand", description: "Sicher verpackt zu dir" },
];

export const CommunitySection = () => {
  return (
    <section className="bg-background">
      {/* Main Community Content */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <p className="subheadline mb-3">Unsere Community</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Werde Teil der <span className="text-gold-600">Gemeinschaft</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-200/30">
              <img
                src={communityBg}
                alt="OZ Orgonite Community – zufriedene Kunden"
                className="w-full h-[350px] sm:h-[420px] object-cover"
              />
            </div>

            {/* Right: Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Über <span className="text-gold-600">20.000</span> begeisterte Kunden
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Lass dich inspirieren, teile deine Erfahrungen und verbinde dich mit Gleichgesinnten.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Finde deinen persönlichen Pranatropfen® und überzeuge dich selbst 
                von der Schönheit dieser einzigartigen Energie-Kunst.
              </p>

              {/* Instagram CTA */}
              <div className="space-y-4">
                <p className="text-gold-600 font-semibold">@orgonites_of_oz</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gold-300 text-gold-700 hover:bg-gold-50"
                  asChild
                >
                  <a 
                    href="https://www.instagram.com/orgonites_of_oz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    Folge uns auf Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-beige-100 border-y border-gold-100/50 py-8 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-foreground text-sm mb-1">{feature.label}</p>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
