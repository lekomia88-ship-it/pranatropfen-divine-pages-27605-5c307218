import { Button } from "@/components/ui/button";
import { HexagonPattern } from "./SacredGeometry";
import communityBg from "@/assets/community-bg.jpg";

export const CommunitySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Sacred Geometry Background */}
      <HexagonPattern className="absolute inset-0 w-full h-full text-background opacity-[0.10] z-[1]" />
      
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-6 leading-tight">
            Willst auch du Teil der Community werden?
          </h2>
          <p className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed">
            Bereits über 20.000 Menschen sind von unseren Prana-Produkten
            fasziniert. Werde auch Du Teil unserer Gemeinschaft und finde deinen
            persönlichen Pranakristall® oder Pranatropfen®.
          </p>

          <Button
            variant="hero"
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Jetzt entdecken
          </Button>
        </div>
      </div>
    </section>
  );
};
