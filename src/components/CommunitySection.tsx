import { Button } from "@/components/ui/button";
import { HexagonPattern } from "./SacredGeometry";
import { Instagram, Heart, Users } from "lucide-react";
import communityBg from "@/assets/community-bg.jpg";

export const CommunitySection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Sacred Geometry Background */}
      <HexagonPattern className="absolute inset-0 w-full h-full text-gold-100 opacity-[0.10] z-[1]" />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={communityBg}
          alt="Pranatropfen Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight text-shadow-gold">
            Werde Teil unserer Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
            Über 20.000 Menschen tragen bereits ihre Energie. Lass dich inspirieren, 
            teile deine Erfahrungen und verbinde dich mit Gleichgesinnten.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="space-y-1 sm:space-y-2">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold-300 mx-auto" strokeWidth={1.5} />
              <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">20.000+</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Träger weltweit</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gold-300 mx-auto" strokeWidth={1.5} />
              <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">100%</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Handgefertigt</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-gold-300 mx-auto" strokeWidth={1.5} />
              <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">15k+</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Follower</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant="heroPrimary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Zur Kollektion
            </Button>
            <Button
              variant="heroSecondary"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Folge uns auf Instagram</span>
              </a>
            </Button>
          </div>

          {/* Instagram Hashtag */}
          <p className="mt-6 text-primary-foreground/70 text-sm">
            Teile deine Energie mit{" "}
            <span className="font-semibold text-gold-300">#pranatropfen</span>
          </p>
        </div>
      </div>
    </section>
  );
};