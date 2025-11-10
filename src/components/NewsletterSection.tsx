import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MoonSymbol } from "./CelestialSymbols";
import { Sparkles } from "lucide-react";

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

    // Here you would normally send to your newsletter service
    toast({
      title: "Willkommen in der Community! ✨",
      description: "Du erhältst bald Post von uns mit allen Updates und Inspirationen.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <MoonSymbol className="absolute top-12 right-16 w-20 h-20 text-gold opacity-[0.06]" />
      <Sparkles className="absolute bottom-16 left-12 w-16 h-16 text-gold-light opacity-[0.08]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bleib mit uns verbunden
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Erhalte Inspiration, Vollmond-Rituale, Pflegetipps und exklusive Einblicke 
              in neue Kollektionen – direkt in dein Postfach.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Deine E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-6 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm focus:border-primary focus:ring-primary"
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
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Kein Spam. Nur gute Energie. Abmeldung jederzeit möglich.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-2xl">🌙</span>
              </div>
              <p className="text-sm font-medium text-foreground">Vollmond-Rituale</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-sm font-medium text-foreground">Exklusive Einblicke</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-2xl">💎</span>
              </div>
              <p className="text-sm font-medium text-foreground">Neue Kollektionen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
