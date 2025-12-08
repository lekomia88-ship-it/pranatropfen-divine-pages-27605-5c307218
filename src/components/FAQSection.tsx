import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SacredTriangles } from "./SacredGeometry";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Wie wird jeder Pranatropfen hergestellt?",
    answer:
      "Jeder Pranatropfen durchläuft einen mehrstufigen Prozess: Zuerst wählen wir intuitiv die passenden Edelsteine aus. Diese werden sorgfältig in der Tropfenform platziert. Dann gießen wir das hochwertige Kunstharz mit Goldflakes schichtweise darüber. Nach mehreren Tagen Aushärtung wird jedes Stück von Hand geschliffen, poliert und energetisch aufgeladen.",
  },
  {
    question: "Welche Materialien werden verwendet?",
    answer:
      "Wir verwenden ausschließlich hochwertige, natürliche Materialien: Echte Edelsteine (wie Amethyst, Rosenquarz, Türkis), Edelmetall-Flakes (Gold, Silber, Kupfer) und klares, hochwertiges Epoxidharz. Jeder Pranatropfen ist nickelfrei und hautfreundlich.",
  },
  {
    question: "Wie pflege ich meinen Pranatropfen?",
    answer:
      "Dein Pranatropfen ist pflegeleicht: Reinige ihn gelegentlich mit einem weichen, leicht angefeuchteten Tuch. Vermeide direkten Kontakt mit Parfum, Cremes oder Reinigungsmitteln.",
  },
  {
    question: "Was bedeutet 'energetisch aufgeladen'?",
    answer:
      "Nach der Fertigstellung wird jeder Pranatropfen in unserer Werkstatt mit positiver Intention aufgeladen. Wir nutzen Klangschalen, umgeben ihn mit kraftvollen Edelsteinen und setzen bewusste Absichten.",
  },
  {
    question: "Wie lange dauert die Herstellung?",
    answer:
      "Von der ersten Edelstein-Auswahl bis zum fertigen Pranatropfen vergehen etwa 5-7 Tage. Das Harz benötigt mehrere Tage zum vollständigen Aushärten.",
  },
  {
    question: "Sind die Pranatropfen wasserfest?",
    answer:
      "Ja, dein Pranatropfen ist wasserfest und kann beim Händewaschen oder Duschen getragen werden. Wir empfehlen jedoch, ihn beim Schwimmen im Chlor- oder Salzwasser abzulegen.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-24 bg-beige-50 relative overflow-hidden">
      {/* Background geometry - hidden on mobile */}
      <SacredTriangles className="hidden sm:block absolute bottom-[-120px] right-[-100px] w-[380px] h-[380px] text-gold-200 opacity-[0.05]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gold-100/60 border border-gold-200/50 text-gold-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Wissenswertes</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight">
              Häufige{" "}
              <span className="text-gold-600">Fragen</span>
            </h2>
            
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto lg:mx-0 mb-4 sm:mb-6" />
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-8">
              Alles über Herstellung, Materialien und Pflege.
            </p>

            {/* Contact CTA */}
            <div className="hidden lg:block">
              <p className="text-muted-foreground text-sm mb-3">
                Noch Fragen?
              </p>
              <a
                href="https://www.oz-orgonite.de/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-300 text-gold-700 font-medium hover:bg-gold-50 transition-colors text-sm"
              >
                Kontaktiere uns
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gold-100/80 rounded-2xl px-6 bg-card shadow-sm hover:shadow-md transition-all duration-300 data-[state=open]:shadow-md data-[state=open]:border-gold-200/80"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-gold-600 transition-colors py-5 hover:no-underline gap-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Mobile Contact CTA */}
            <div className="lg:hidden text-center mt-8">
              <a
                href="https://www.oz-orgonite.de/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-300 text-gold-700 font-medium hover:bg-gold-50 transition-colors text-sm"
              >
                Noch Fragen? Kontaktiere uns
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
