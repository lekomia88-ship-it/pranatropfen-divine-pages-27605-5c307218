import { SacredTriangles, FlowerOfLife } from "./SacredGeometry";
import workshopImage from "@/assets/workshop-gemstones.jpg";
import workshopResin from "@/assets/workshop-resin-pour.jpg";

export const HandwerkSection = () => {
  return (
    <section id="handwerk" className="py-24 bg-background relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <SacredTriangles className="absolute bottom-0 right-0 w-[600px] h-[600px] text-gold opacity-20" />
      <FlowerOfLife className="absolute top-10 left-10 w-[500px] h-[500px] text-gold-dark opacity-25" />

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
          {/* Workshop Image - Gemstones */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={workshopImage}
              alt="Edelsteine und Materialien für die Pranatropfen"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Workshop Image - Resin Pouring */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)] group">
            <img
              src={workshopResin}
              alt="Kunstharz-Guss in der Herstellung"
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
