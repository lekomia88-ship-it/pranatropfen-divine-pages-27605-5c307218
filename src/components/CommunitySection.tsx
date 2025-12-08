import { Button } from "@/components/ui/button";
import { Instagram, ArrowRight } from "lucide-react";
import communityBg from "@/assets/community-bg.jpg";

const features = [
  { label: "Liebevolle Handarbeit", description: "Jedes Stück in Deutschland gefertigt" },
  { label: "Echte Edelsteine", description: "Sorgfältig ausgewählte Kristalle" },
  { label: "Energetisch aktiviert", description: "Mit Liebe & Intention geladen" },
  { label: "Schneller Versand", description: "Sicher verpackt zu dir" },
];

export const CommunitySection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={communityBg}
          alt="OZ Orgonite Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/60 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <p className="subheadline mb-3 text-gold-300">Unsere Community</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight text-shadow">
              Werde Teil der{" "}
              <span className="text-gold-400">Gemeinschaft</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto lg:mx-0 mb-6" />
            
            <p className="text-lg text-white/90 mb-4 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Über <span className="font-semibold text-gold-300">20.000 begeisterte Kunden</span> tragen bereits ihre Energie.
            </p>
            <p className="text-base text-white/80 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Lass dich inspirieren, teile deine Erfahrungen und verbinde dich mit Gleichgesinnten. 
              Finde deinen persönlichen Pranatropfen® und überzeuge dich selbst.
            </p>

            {/* Instagram CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-4">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const productSection = document.querySelector('#products');
                  if (productSection) {
                    productSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = 'https://www.oz-orgonite.de/schmuck/pranatropfen/';
                  }
                }}
              >
                Pranatropfen® entdecken
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a 
                  href="https://www.instagram.com/orgonites_of_oz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  @orgonites_of_oz
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
              >
                <p className="font-semibold text-white text-sm mb-1">{feature.label}</p>
                <p className="text-white/70 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
