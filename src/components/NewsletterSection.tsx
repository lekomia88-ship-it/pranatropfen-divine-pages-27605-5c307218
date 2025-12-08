import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SunSymbol } from "./CelestialSymbols";
import { Moon, Sparkles, Gem, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Moon, label: "Vollmond-Rituale" },
  { icon: Sparkles, label: "Exklusive Einblicke" },
  { icon: Gem, label: "Neue Kollektionen" },
];

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
    <section className="py-14 lg:py-18 bg-beige-50 relative overflow-hidden">
      {/* Decorative element */}
      <SunSymbol className="absolute top-[-70px] left-[-60px] w-[180px] h-[180px] text-gold-300 opacity-[0.09]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <p className="subheadline mb-2">Newsletter</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Bleib mit uns verbunden
          </h2>
          <div className="gold-line mb-4" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Erhalte Inspiration, Vollmond-Rituale und exklusive Einblicke 
            in neue Kollektionen – direkt in dein Postfach.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Deine E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-11 px-5 rounded-full border-gold-200 bg-card focus:border-gold-400 focus:ring-gold-400"
            />
            <Button
              type="submit"
              variant="default"
              size="default"
              className="sm:w-auto w-full"
            >
              Anmelden
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Trust Message */}
          <p className="text-xs text-muted-foreground mb-8">
            Kein Spam. Nur gute Energie. Abmeldung jederzeit möglich.
          </p>

          {/* Benefits */}
          <div className="flex justify-center gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-gold-100/50 flex items-center justify-center mx-auto">
                  <benefit.icon className="w-5 h-5 text-gold-600" />
                </div>
                <p className="text-xs font-medium text-foreground">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};