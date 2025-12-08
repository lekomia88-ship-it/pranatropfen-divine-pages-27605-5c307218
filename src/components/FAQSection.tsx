import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SacredTriangles } from "./SacredGeometry";
import { ArrowRight } from "lucide-react";

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
  {
    question: "Wie finde ich den richtigen Pranatropfen für mich?",
    answer:
      "Vertraue deiner Intuition! Oft fühlen wir uns zu bestimmten Farben, Steinen oder Designs hingezogen, die genau das tragen, was wir gerade brauchen.",
  },
  {
    question: "Kann ich einen individuellen Pranatropfen bestellen?",
    answer:
      "Ja! Wir bieten auch Auftragsarbeiten an. Du kannst deine Wunsch-Edelsteine, Farben und Größe wählen. Kontaktiere uns einfach.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-14 lg:py-18 bg-background relative overflow-hidden">
      {/* Background geometry */}
      <SacredTriangles className="absolute bottom-[-120px] right-[-100px] w-[380px] h-[380px] text-gold-200 opacity-[0.08]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="subheadline mb-2">Wissenswertes</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <div className="gold-line mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            Alles über Herstellung, Materialien und Pflege
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gold-100/80 rounded-2xl px-5 bg-card shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-gold-600 transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            Noch Fragen?{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
            >
              Kontaktiere uns
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};