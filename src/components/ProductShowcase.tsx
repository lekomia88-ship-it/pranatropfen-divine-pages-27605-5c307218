import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pranatropfenProduct from "@/assets/pranatropfen-product-real.jpg";
import pranatropfenDetail from "@/assets/pranatropfen-detail.jpg";
import pranatropfenHand from "@/assets/pranatropfen-hand-real.jpg";
import productZadkiel from "@/assets/product-zadkiel.jpg";

const products = [
  {
    name: "Zadkiel",
    image: productZadkiel,
    stones: "Amethyst, Bergkristall, Goldflakes",
    energy: "Transformation & Spirituelle Klarheit",
    description: "Verbindet dich mit höheren Ebenen und fördert innere Weisheit",
  },
  {
    name: "Luna",
    image: pranatropfenHand,
    stones: "Mondstein, Rosenquarz, Silberflakes",
    energy: "Intuition & Emotionale Balance",
    description: "Stärkt deine Verbindung zu deinem inneren Rhythmus",
  },
  {
    name: "Gaia",
    image: pranatropfenDetail,
    stones: "Türkis, Aventurin, Kupferflakes",
    energy: "Erdung & Herzöffnung",
    description: "Bringt dich in Einklang mit der Kraft der Erde",
  },
  {
    name: "Sol",
    image: pranatropfenProduct,
    stones: "Citrin, Bernstein, Goldflakes",
    energy: "Lebensfreude & Manifestation",
    description: "Aktiviert deine schöpferische Kraft und innere Sonne",
  },
];

export const ProductShowcase = () => {
  return (
    <section id="kollektion" className="py-14 lg:py-18 bg-beige-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="subheadline mb-2">Unsere Kreationen</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Die Kollektion
          </h2>
          <div className="gold-line mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            Jeder Pranatropfen trägt seine eigene energetische Signatur. Welche Energie ruft dich?
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group border border-gold-100/80 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={`Pranatropfen ${product.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="p-5 space-y-2">
                {/* Name */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>

                {/* Stones */}
                <div className="space-y-0.5">
                  <p className="subheadline text-xs">Edelsteine</p>
                  <p className="text-xs text-muted-foreground">
                    {product.stones}
                  </p>
                </div>

                {/* Energy */}
                <div className="space-y-0.5">
                  <p className="subheadline text-xs">Energetische Qualität</p>
                  <p className="text-xs font-medium text-foreground">
                    {product.energy}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  {product.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3"
                >
                  Mehr erfahren
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-4">
            Entdecke alle Unikate in unserer Kollektion
          </p>
          <Button variant="default" size="lg">
            Zum Shop
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
