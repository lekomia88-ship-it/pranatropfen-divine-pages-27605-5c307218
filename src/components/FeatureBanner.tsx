const features = [
  { label: "Liebevolle Handarbeit", description: "Jedes Stück in Deutschland gefertigt" },
  { label: "Echte Edelsteine", description: "Sorgfältig ausgewählte Kristalle" },
  { label: "Energetisch aktiviert", description: "Mit Liebe & Intention geladen" },
  { label: "Schneller Versand", description: "Sicher verpackt zu dir" },
];

export const FeatureBanner = () => {
  return (
    <div className="bg-beige-100 border-y border-gold-100/50 py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold text-foreground text-sm mb-1">{feature.label}</p>
              <p className="text-muted-foreground text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
