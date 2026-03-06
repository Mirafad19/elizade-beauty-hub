import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqsLeft = [
  {
    question: "What Toyota models are available at Elizade?",
    answer: "We offer the full range of Toyota vehicles including the Corolla, Camry, RAV4, Hilux, Land Cruiser, Prado, Fortuner, Hiace, and more. Visit any of our showrooms or contact us for current availability.",
  },
  {
    question: "Do you offer vehicle financing options?",
    answer: "Yes, we partner with leading financial institutions to provide flexible financing and leasing options. Our sales team can guide you through the process and help find a plan that suits your budget.",
  },
  {
    question: "How do I book a test drive?",
    answer: "You can book a test drive by calling any of our branches, visiting our showroom, or filling out the contact form on this website. We'll schedule a convenient time for you.",
  },
  {
    question: "What warranty comes with a new Toyota?",
    answer: "All new Toyota vehicles purchased from Elizade come with the manufacturer's warranty. Specific terms vary by model — our sales advisors will provide full warranty details at the time of purchase.",
  },
];

const faqsRight = [
  {
    question: "Where are your service centres located?",
    answer: "We have service centres in Lagos, Abuja, Ibadan, Ondo, and other major cities across Nigeria. Check our Locations section for full addresses and contact details.",
  },
  {
    question: "Do you sell genuine Toyota spare parts?",
    answer: "Absolutely. We are an authorized Toyota dealer and only stock and sell 100% genuine Toyota parts and accessories to ensure the longevity and safety of your vehicle.",
  },
  {
    question: "Can I trade in my old vehicle?",
    answer: "Yes, we accept trade-ins. Bring your vehicle to any of our branches for a professional valuation, and we can apply the value towards your new Toyota purchase.",
  },
  {
    question: "How often should I service my Toyota?",
    answer: "Toyota recommends servicing every 5,000 km or 3 months, whichever comes first. Regular maintenance at an authorized service centre keeps your warranty valid and your vehicle in peak condition.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Support
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get instant answers to the most common questions about our vehicles, services, and dealership.
          </p>
        </div>

        {/* FAQ Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
            <Accordion key={columnIndex} type="single" collapsible className="w-full">
              {faqColumn.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`col${columnIndex}-item${i}`}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
