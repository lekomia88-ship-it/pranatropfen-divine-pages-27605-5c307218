import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ScrollToProductsButton = () => {
  const goToShop = () => {
    window.location.href = "https://www.oz-orgonite.de/schmuck/pranatropfen/";
  };

  return (
    <Button
      variant="default"
      size="lg"
      onClick={goToShop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 shadow-glow animate-fade-in"
    >
      Jetzt entdecken
      <ArrowRight className="w-4 h-4" />
    </Button>
  );
};
