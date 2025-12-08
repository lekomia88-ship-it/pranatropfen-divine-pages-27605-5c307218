import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SunSymbol } from "./CelestialSymbols";
import { Mail, ArrowRight } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export const NewsletterSection = () => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load reCAPTCHA script only once
    if (!scriptLoaded.current && !document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      scriptLoaded.current = true;
    }
  }, []);

  return (
    <section className="py-10 sm:py-14 lg:py-24 bg-beige-50 relative overflow-hidden">
      {/* Decorative element - hidden on mobile */}
      <SunSymbol className="hidden sm:block absolute top-[-70px] left-[-60px] w-[180px] h-[180px] text-gold-300 opacity-[0.08]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gold-100/60 border border-gold-200/50 text-gold-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Newsletter</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
              Bleib mit uns{" "}
              <span className="text-gold-600">verbunden</span>
            </h2>
            
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto md:mx-0 mb-4 sm:mb-6" />
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 max-w-lg mx-auto md:mx-0">
              Erfahre als Erste/r von neuen Kreationen und erhalte Inspiration 
              für deinen spirituellen Alltag.
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 hidden sm:block">
              Wir teilen Vollmond-Rituale, Pflegetipps und Geschichten aus unserer Werkstatt.
            </p>
          </div>

          {/* Right: Form - CleverReach Integration */}
          <div className="bg-card rounded-2xl border border-gold-100/80 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
              Jetzt anmelden
            </h3>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Kein Spam. Nur gute Energie.
            </p>
            
            {/* CleverReach Form */}
            <form 
              className="layout_form cr_form cr_font space-y-4" 
              action="https://mailings.oz-orgonite.de/f/418339-407805/wcs/" 
              method="post" 
              target="_blank"
            >
              <div className="cr_body cr_page cr_font">
                <div className="editable_content space-y-4">
                  {/* Email Input */}
                  <div className="cr_form-component cr_form-component--email cr_ipe_item musthave">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Deine E-Mail Adresse"
                      required
                      className="h-12 px-5 rounded-full border-gold-200 bg-background focus:border-gold-400 focus:ring-gold-400 cr_form-input"
                    />
                  </div>
                  
                  {/* reCAPTCHA */}
                  <div className="cr_ipe_item musthave flex justify-center">
                    <div 
                      ref={recaptchaRef}
                      className="g-recaptcha" 
                      data-theme="light" 
                      data-size="normal" 
                      data-sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className="cr_form-component cr_form-component--submit submit_container">
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full cr_form-block cr_button"
                    >
                      Anmelden
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
