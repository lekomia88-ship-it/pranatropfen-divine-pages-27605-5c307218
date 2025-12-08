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
    <section className="py-14 lg:py-18 bg-beige-50 relative overflow-hidden">
      {/* Subtle moon */}
      <MoonSymbol className="absolute top-[-80px] right-[-70px] w-[200px] h-[200px] text-gold-300 opacity-[0.08]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="subheadline mb-2">Kundenstimmen</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Was unsere Träger sagen
          </h2>
          <div className="gold-line mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            Echte Erfahrungen von Menschen, die ihre Energie gefunden haben
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gold-100/80 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-5 italic text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-100/50 flex items-center justify-center">
                    <span className="text-gold-700 font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            Über{" "}
            <span className="font-semibold text-gold-600">20.000 zufriedene Träger</span>{" "}
            weltweit
          </p>
        </div>
      </div>
    </section>
  );
};