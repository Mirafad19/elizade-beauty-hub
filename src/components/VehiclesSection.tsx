import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroLandCruiser from "@/assets/hero-landcruiser.jpg";
import heroHilux from "@/assets/hero-hilux.jpg";
import heroCorolla from "@/assets/hero-corolla.jpg";

const categories = [
  {
    name: "Sedans & Saloons",
    models: "Yaris • Rush • Corolla • Avensis • Camry",
    image: heroCorolla,
  },
  {
    name: "SUVs & 4x4",
    models: "RAV4 • Fortuner • Prado • Land Cruiser",
    image: heroLandCruiser,
  },
  {
    name: "Pickups & Trucks",
    models: "Hilux • LC 70 • Dyna",
    image: heroHilux,
  },
];

const VehiclesSection = () => {
  return (
    <section id="vehicles" className="section-dark py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Fleet
          </p>
          <h2 className="text-5xl lg:text-7xl font-display text-surface-dark-foreground">
            Toyota Vehicle Lineup
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-display text-surface-dark-foreground mb-1">
                  {cat.name}
                </h3>
                <p className="text-surface-dark-foreground/60 text-sm mb-4">
                  {cat.models}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
