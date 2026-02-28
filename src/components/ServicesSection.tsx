import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Car, Cog } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Repair & Maintenance",
    description: "Comprehensive automotive repair, preventative maintenance, and engine diagnostics by certified technicians.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Spare Parts",
    description: "Only authentic Toyota spare parts with verified serial numbers, quality packaging, and the signature deep red color.",
  },
  {
    icon: Car,
    title: "Body Work & Painting",
    description: "Professional body repair, panel beating, and factory-grade painting to restore your vehicle to showroom condition.",
  },
  {
    icon: Cog,
    title: "Transmission & AC Services",
    description: "Expert transmission servicing, air conditioning repair, cooling systems, belts, hoses, and fluid replacement.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            After-Sales
          </p>
          <h2 className="text-5xl lg:text-7xl font-display text-foreground">
            World-Class Service
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-border rounded-sm hover:border-primary/30 transition-colors"
            >
              <service.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
