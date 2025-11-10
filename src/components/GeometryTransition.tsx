import { FlowerOfLife, HexagonPattern } from "./SacredGeometry";

export const GeometryTransition = () => {
  return (
    <div className="relative w-full h-32 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      {/* Subtle sacred geometry in transition area */}
      <FlowerOfLife className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 text-gold opacity-20" />
      <HexagonPattern className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 text-gold-light opacity-15" />
    </div>
  );
};
