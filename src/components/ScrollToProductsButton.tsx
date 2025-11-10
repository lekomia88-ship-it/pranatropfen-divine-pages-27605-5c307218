import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToProductsButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when user scrolls past 80vh
      setIsVisible(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    // Scroll to bottom of page where products would be
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="heroPrimary"
      size="lg"
      onClick={scrollToProducts}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 shadow-[var(--shadow-glow)] animate-fade-in gap-2 text-sm sm:text-base"
    >
      Zu den Produkten
      <ArrowDown className="w-4 h-4" />
    </Button>
  );
};
