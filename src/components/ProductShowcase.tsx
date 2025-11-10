import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <section id="kollektion" className="py-16 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Die Kollektion
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jeder Pranatropfen trägt seine eigene energetische Signatur. Welche Energie ruft dich?
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-background/80 backdrop-blur-sm shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:scale-[1.02] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={`Pranatropfen ${product.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 space-y-3">
                {/* Name */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Stones */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Edelsteine
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {product.stones}
                  </p>
                </div>

                {/* Energy */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Energetische Qualität
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {product.energy}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {product.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Entdecke alle Unikate in unserer Kollektion
          </p>
          <Button variant="hero" size="lg">
            Zum Shop
          </Button>
        </div>
      </div>
    </section>
  );
};
