import { HexagonPattern } from "./SacredGeometry";
import modelImage from "@/assets/model-jewelry-1.jpg";

export const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <HexagonPattern className="absolute top-0 left-0 w-full h-full text-primary" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img
                src={modelImage}
                alt="Model trägt Pranatropfen Schmuck"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Energie trifft Ästhetik
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jeder Pranatropfen® vereint natürliche Materialien – Kunstharz,
              Edelmetalle und Edelsteine – in einem harmonischen Design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Für Menschen, die ihre Energie spüren und ihren Stil leben.
            </p>
            <div className="pt-4">
              <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium">
                ✦ Handcrafted with Love
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
