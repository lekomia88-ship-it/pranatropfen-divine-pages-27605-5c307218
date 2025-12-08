import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToProductsButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="default"
      size="lg"
      onClick={scrollToProducts}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 shadow-glow animate-fade-in"
    >
      Zu den Produkten
      <ArrowDown className="w-4 h-4" />
    </Button>
  );
};