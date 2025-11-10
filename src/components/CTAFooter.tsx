import { Button } from "@/components/ui/button";
import { FlowerOfLife } from "./SacredGeometry";

export const CTAFooter = () => {
  return (
    <section className="relative py-24 bg-secondary/20 overflow-hidden">
      {/* Sacred Geometry Background */}
      <FlowerOfLife className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-gold opacity-[0.18]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bereit für dein Unikat?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entdecke die Kollektion und finde deinen persönlichen Pranatropfen®
          </p>

          <Button variant="hero" size="lg">
            Zur Kollektion
          </Button>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              AGB
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            © 2025 Pranatropfen® · Handgefertigte Energiekunst aus Kleinrinderfeld
          </p>
        </div>
      </div>
    </section>
  );
};
