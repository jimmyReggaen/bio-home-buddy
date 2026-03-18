import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I visit?",
    a: "Yes. Tours are held on Fridays and require onboarding. Schedule your visit through our contact form.",
  },
  {
    q: "Can I rent a space?",
    a: "Definitely. Explore long-term office options and let us know what you need.",
  },
  {
    q: "Is my privacy protected in a fully biometric building?",
    a: "Completely. We go beyond GDPR requirements with biometric data decoupling, minimal data storage, and secure on-device camera processing to keep your personal information safe.",
  },
  {
    q: "Do I have control over how my biometric data is used?",
    a: "Yes, it's entirely up to you. You can give consent for seamless hands-free access, or withhold consent — your biometric data is then anonymized and used only for essential security checks.",
  },
  {
    q: "Will I be safe in the building?",
    a: "Absolutely. The building features real-time zone surveillance, intrusion detection, and automated security alerts.",
  },
  {
    q: "Will my workspace be comfortable and healthy?",
    a: "Yes. Smart systems continuously monitor air quality, humidity, lighting, and more, ensuring your workspace is both energy-efficient and optimized for your health and comfort.",
  },
  {
    q: "Is parking available?",
    a: "Yes, and it's fully biometric. You drive in, the gate recognizes you, and you're good to go.",
  },
  {
    q: "Where is the building located?",
    a: "The new Innovatrics HQ is located 15 minutes from Bratislava city center, right next to the Vinohrady train station, with a direct connection to city public transport.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding border-t border-white/10">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="mb-16"
      >
        <span className="label-tech mb-4 block">// System.FAQ</span>
        <h2 className="heading-section text-foreground">
          Got Questions?
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-1">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <AccordionItem value={`faq-${i}`} className="border border-white/10 px-6 bg-card">
              <AccordionTrigger className="font-display text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
