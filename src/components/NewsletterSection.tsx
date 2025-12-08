import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SunSymbol } from "./CelestialSymbols";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Bitte gib deine E-Mail an",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Willkommen in der Community! ✨",
      description: "Du erhältst bald Post von uns mit allen Updates und Inspirationen.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-beige relative overflow-hidden">
      {/* Single decorative element */}
      <SunSymbol className="absolute top-[-70px] left-[-60px] w-[180px] h-[180px] text-gold-300 opacity-[0.09]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Bleib mit uns verbunden
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Erhalte Inspiration, Vollmond-Rituale, Pflegetipps und exklusive Einblicke 
              in neue Kollektionen – direkt in dein Postfach.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Deine E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-11 sm:h-12 px-5 sm:px-6 rounded-full border-gold-300/30 bg-card/80 backdrop-blur-sm focus:border-gold-500 focus:ring-gold-500"
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="sm:w-auto w-full rounded-full"
            >
              Anmelden
            </Button>
          </form>

          {/* Trust Message */}
          <p className="text-center mt-5 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
            Kein Spam. Nur gute Energie. Abmeldung jederzeit möglich.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
            <div className="text-center space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center mx-auto">
                <span className="text-lg sm:text-2xl">🌙</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground">Vollmond-Rituale</p>
            </div>
            <div className="text-center space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center mx-auto">
                <span className="text-lg sm:text-2xl">✨</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground">Exklusive Einblicke</p>
            </div>
            <div className="text-center space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center mx-auto">
                <span className="text-lg sm:text-2xl">💎</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground">Neue Kollektionen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};