import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { MoonSymbol } from "./CelestialSymbols";

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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-beige relative overflow-hidden">
      {/* Single subtle moon */}
      <MoonSymbol className="absolute top-[-80px] right-[-70px] w-[200px] h-[200px] text-gold-400 opacity-[0.08]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Was unsere Träger sagen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Echte Erfahrungen von Menschen, die ihre Energie gefunden haben
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/80 backdrop-blur-sm shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-5 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-100/60 flex items-center justify-center">
                    <span className="text-gold-700 font-semibold text-base sm:text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            Über{" "}
            <span className="font-bold text-gold-600">20.000 zufriedene Träger</span>{" "}
            weltweit
          </p>
        </div>
      </div>
    </section>
  );
};