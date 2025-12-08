import { Button } from "@/components/ui/button";
import { Instagram, ArrowRight } from "lucide-react";
import communityBg from "@/assets/community-bg.jpg";

export const CommunitySection = () => {
  const goToShop = () => {
    window.location.href = "https://www.oz-orgonite.de/schmuck/pranatropfen/";
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <p className="subheadline mb-2 sm:mb-3 text-xs sm:text-sm">Unsere Community</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            Werde Teil der <span className="text-gold-600">Gemeinschaft</span>
          </h2>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        {/* Two Column Layout - grid starts at md */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-gold-200/30 w-full">
            <img
              src={communityBg}
              alt="OZ Orgonite Community – zufriedene Kunden"
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Über <span className="text-gold-600">20.000</span> begeisterte Kunden
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg mx-auto md:mx-0">
              Lass dich inspirieren, teile deine Erfahrungen und verbinde dich mit Gleichgesinnten.
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Finde deinen persönlichen Pranatropfen® und überzeuge dich selbst 
              von der Schönheit dieser einzigartigen Energie-Kunst.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
              <Button
                variant="default"
                size="lg"
                onClick={goToShop}
                className="shadow-glow"
              >
                Pranatropfen® entdecken
                <ArrowRight className="w-4 h-4" />
              </Button>
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
                  @orgonites_of_oz
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
