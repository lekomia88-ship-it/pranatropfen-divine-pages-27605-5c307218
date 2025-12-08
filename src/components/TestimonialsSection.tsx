import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { MoonSymbol } from "./CelestialSymbols";
import pranatropfenProduct from "@/assets/pranatropfen-product-real.jpg";
import pranatropfenDetail from "@/assets/pranatropfen-detail.jpg";
import productZadkiel from "@/assets/product-zadkiel.jpg";

const testimonials = [
  {
    text: "Heute ist mein Pranatropfen angekommen und ich trage ihn ca. 3 Stunden... Ich war schon lange nicht mehr so entspannt und einfach so frei.",
    product: {
      name: "Pranatropfen® Matrix",
      image: pranatropfenProduct,
      link: "https://www.oz-orgonite.de/Pranatropfen-Matrix/018b846c648670cd901fbc15f8941713"
    },
    rating: 5,
  },
  {
    text: "Ich fühle mich ruhiger und ausgeglichener. Mein Vertrauen ist gestiegen. Der Anhänger sieht auch sehr schön aus.",
    product: {
      name: "Pranatropfen® Uriel",
      image: pranatropfenDetail,
      link: "https://www.oz-orgonite.de/Pranatropfen-Uriel/018b846c64c8715cb6f3b0dc75fea9d5"
    },
    rating: 5,
  },
  {
    text: "Ich bin beeindruckt von der Wirkung! Besonders hervorzuheben ist die Schönheit – kleine Kunstwerke. Es zaubert mir jedes Mal ein Lächeln aufs Gesicht.",
    product: {
      name: "Pranatropfen® Zadkiel",
      image: productZadkiel,
      link: "https://www.oz-orgonite.de/Pranatropfen-Zadkiel/018b846c64ba730f8a3f67fd94086f92"
    },
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle moon */}
      <MoonSymbol className="absolute top-[-80px] right-[-70px] w-[200px] h-[200px] text-gold-300 opacity-[0.06]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="subheadline mb-3">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Das sagen unsere <span className="text-gold-600">Kunden</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vielen Dank für euer wunderbares Feedback! Eure Erfahrungen helfen uns, 
            noch besser zu werden und inspirieren andere auf ihrem Weg.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gold-100/80 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Quote */}
                <div className="p-6 pb-4">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground leading-relaxed italic text-base">
                    „{testimonial.text}"
                  </p>
                </div>

                {/* Product Link */}
                <a 
                  href={testimonial.product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-beige-50 border-t border-gold-100/50 hover:bg-beige-100 transition-colors"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-gold-200/30 flex-shrink-0">
                    <img 
                      src={testimonial.product.image} 
                      alt={testimonial.product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">
                      {testimonial.product.name}
                    </p>
                    <span className="text-gold-600 text-xs font-medium inline-flex items-center gap-1 mt-1">
                      Zum Produkt
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
