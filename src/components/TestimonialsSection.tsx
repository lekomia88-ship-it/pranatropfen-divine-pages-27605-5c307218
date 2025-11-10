import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles, Heart } from "lucide-react";
import { MoonSymbol } from "./CelestialSymbols";
import { FlowerOfLife } from "./SacredGeometry";

const testimonials = [
  {
    name: "Sarah M.",
    location: "München",
    text: "Seit ich meinen Pranatropfen trage, fühle ich mich geerdet und gleichzeitig voller Energie. Es ist mehr als Schmuck – es ist ein Teil von mir geworden.",
    rating: 5,
  },
  {
    name: "Julia K.",
    location: "Berlin",
    text: "Die Handwerkskunst ist unglaublich. Man spürt die Liebe zum Detail und die positive Energie, die in jedem Stück steckt. Absolute Herzensempfehlung!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Hamburg",
    text: "Ich war erst skeptisch, aber die Wirkung ist spürbar. Mein Pranatropfen begleitet mich täglich und gibt mir Kraft in herausfordernden Momenten.",
    rating: 5,
  },
  {
    name: "Anna L.",
    location: "Köln",
    text: "Wunderschön und kraftvoll zugleich. Jeder fragt mich, woher ich dieses besondere Schmuckstück habe. Es ist wirklich einzigartig.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary/20 relative overflow-hidden">
      {/* Spiritual Background Elements */}
      <FlowerOfLife className="absolute top-[-100px] right-[-80px] w-[400px] h-[400px] text-primary opacity-[0.04]" />
      <MoonSymbol className="absolute bottom-12 left-[8%] w-16 h-16 text-gold opacity-[0.06]" />
      <Sparkles className="absolute top-1/3 left-[5%] w-12 h-12 text-primary opacity-[0.05]" />
      <Heart className="absolute bottom-1/4 right-[10%] w-10 h-10 text-gold-light opacity-[0.06]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Was unsere Träger sagen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Echte Erfahrungen von Menschen, die ihre Energie gefunden haben
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background/80 backdrop-blur-sm shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Über{" "}
            <span className="font-bold text-primary">20.000 zufriedene Träger</span>{" "}
            weltweit
          </p>
        </div>
      </div>
    </section>
  );
};
