import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SunSymbol } from "./CelestialSymbols";
import { Mail, ArrowRight } from "lucide-react";

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
      title: "Willkommen in der Community!",
      description: "Du erhältst bald Post von uns.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-beige-50 relative overflow-hidden">
      {/* Decorative element */}
      <SunSymbol className="absolute top-[-70px] left-[-60px] w-[180px] h-[180px] text-gold-300 opacity-[0.08]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100/60 border border-gold-200/50 text-gold-700 text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              <span>Newsletter</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Bleib mit uns{" "}
              <span className="text-gold-600">verbunden</span>
            </h2>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto lg:mx-0 mb-6" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
              Erfahre als Erste/r von neuen Kreationen, erhalte Inspiration 
              für deinen spirituellen Alltag und exklusive Einblicke hinter die Kulissen.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Wir teilen Vollmond-Rituale, Pflegetipps für deine Pranatropfen 
              und Geschichten aus unserer Werkstatt.
            </p>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-2xl border border-gold-100/80 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
              Jetzt anmelden
            </h3>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Kein Spam. Nur gute Energie.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Deine E-Mail Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-5 rounded-full border-gold-200 bg-background focus:border-gold-400 focus:ring-gold-400"
              />
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                Anmelden
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
