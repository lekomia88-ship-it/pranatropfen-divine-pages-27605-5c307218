import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SacredTriangles } from "./SacredGeometry";

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
      "Dein Pranatropfen ist pflegeleicht: Reinige ihn gelegentlich mit einem weichen, leicht angefeuchteten Tuch. Vermeide direkten Kontakt mit Parfum, Cremes oder Reinigungsmitteln. Bei Bedarf kannst du ihn energetisch reinigen, indem du ihn für einige Stunden auf eine Amethyst-Druse legst oder mit Palo Santo Rauch umhüllst.",
  },
  {
    question: "Was bedeutet 'energetisch aufgeladen'?",
    answer:
      "Nach der Fertigstellung wird jeder Pranatropfen in unserer Werkstatt mit positiver Intention aufgeladen. Wir nutzen Klangschalen, umgeben ihn mit kraftvollen Edelsteinen und setzen bewusste Absichten. Dies verstärkt die natürliche Energie der verwendeten Materialien und gibt jedem Stück seine einzigartige Schwingung.",
  },
  {
    question: "Wie lange dauert die Herstellung?",
    answer:
      "Von der ersten Edelstein-Auswahl bis zum fertigen Pranatropfen vergehen etwa 5-7 Tage. Das Harz benötigt mehrere Tage zum vollständigen Aushärten. Anschließend folgen das Schleifen, Polieren und die energetische Aufladung. Jedes Stück bekommt die Zeit, die es braucht – Qualität vor Geschwindigkeit.",
  },
  {
    question: "Sind die Pranatropfen wasserfest?",
    answer:
      "Ja, dein Pranatropfen ist wasserfest und kann beim Händewaschen oder Duschen getragen werden. Wir empfehlen jedoch, ihn beim Schwimmen im Chlor- oder Salzwasser abzulegen, da dies die Oberfläche auf Dauer angreifen kann. Die Edelsteine und das Harz selbst sind vollständig versiegelt.",
  },
  {
    question: "Wie finde ich den richtigen Pranatropfen für mich?",
    answer:
      "Vertraue deiner Intuition! Oft fühlen wir uns zu bestimmten Farben, Steinen oder Designs hingezogen, die genau das tragen, was wir gerade brauchen. Du kannst dich auch über die Bedeutung der einzelnen Edelsteine informieren – jeder Stein hat seine eigene energetische Qualität. Wir beraten dich auch gerne persönlich.",
  },
  {
    question: "Kann ich einen individuellen Pranatropfen bestellen?",
    answer:
      "Ja! Wir bieten auch Auftragsarbeiten an. Du kannst deine Wunsch-Edelsteine, Farben und Größe wählen. Kontaktiere uns einfach, und wir besprechen gemeinsam dein persönliches Unikat. Jeder individuelle Pranatropfen wird mit besonderer Aufmerksamkeit und deiner persönlichen Intention gefertigt.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Single subtle background geometry */}
      <SacredTriangles className="absolute bottom-[-120px] right-[-100px] w-[380px] h-[380px] text-gold-400 opacity-[0.08]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Häufige Fragen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Alles, was du über die Herstellung, Materialien und Pflege wissen möchtest
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 bg-beige-100/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold text-foreground hover:text-gold-600 transition-colors py-4 sm:py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-6 pt-1 sm:pt-2 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            Noch Fragen?{" "}
            <a
              href="#"
              className="text-gold-600 font-semibold hover:text-gold-700 hover:underline transition-all"
            >
              Kontaktiere uns gerne
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};