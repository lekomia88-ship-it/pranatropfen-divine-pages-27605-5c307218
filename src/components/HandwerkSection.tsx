import { SacredTriangles } from "./SacredGeometry";
import workshopImage from "@/assets/workshop-1.jpg";
import productImage from "@/assets/product-zadkiel.jpg";

export const HandwerkSection = () => {
  return (
    <section id="handwerk" className="py-24 bg-background relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <SacredTriangles className="absolute bottom-0 right-0 w-96 h-96 text-primary" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kunsthandwerk aus Kleinrinderfeld
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In unserer Werkstatt entsteht jedes Stück in präziser Handarbeit –
            Schicht für Schicht gegossen, mit Edelsteinen veredelt, von Hand
            poliert. Ein echtes Unikat voller Energie.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Workshop Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={workshopImage}
              alt="Handarbeit in der Werkstatt"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Product Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={productImage}
              alt="Zadkiel Pranatropfen in Gold"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] aspect-video">
            <iframe
              src="https://www.youtube.com/embed/kH0riYCc0dQ"
              title="Pranatropfen Herstellung"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
