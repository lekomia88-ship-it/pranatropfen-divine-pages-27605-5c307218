import { Button } from "@/components/ui/button";
import { HexagonPattern } from "./SacredGeometry";
import { Instagram, Heart, Users, ArrowRight } from "lucide-react";
import communityBg from "@/assets/community-bg.jpg";

const stats = [
  { icon: Users, value: "20.000+", label: "Träger weltweit" },
  { icon: Heart, value: "100%", label: "Handgefertigt" },
  { icon: Instagram, value: "15k+", label: "Follower" },
];

export const CommunitySection = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
      {/* Sacred Geometry Background */}
      <HexagonPattern className="absolute inset-0 w-full h-full text-gold-200 opacity-[0.10] z-[1]" />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={communityBg}
          alt="Pranatropfen Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-6xl">
        <div className="max-w-2xl mx-auto">
          <p className="subheadline mb-2 text-gold-300">Community</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight text-shadow">
            Werde Teil unserer Community
          </h2>
          <div className="w-24 h-px mx-auto mb-4 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <p className="text-sm sm:text-base text-white/90 mb-8 leading-relaxed">
            Über 20.000 Menschen tragen bereits ihre Energie. Lass dich inspirieren 
            und verbinde dich mit Gleichgesinnten.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-300 mx-auto" strokeWidth={1.5} />
                <p className="text-xl sm:text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              variant="heroPrimary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Zur Kollektion
              <ArrowRight className="w-4 h-4" />
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
                <Instagram className="w-4 h-4" />
                Folge uns auf Instagram
              </a>
            </Button>
          </div>

          {/* Hashtag */}
          <p className="mt-6 text-white/70 text-sm">
            Teile deine Energie mit{" "}
            <span className="font-semibold text-gold-300">#pranatropfen</span>
          </p>
        </div>
      </div>
    </section>
  );
};