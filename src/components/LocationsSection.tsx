import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import elizadeBuilding from "@/assets/elizade-building.jpg";

const locations = [
  { name: "Head Office (HQ)", address: "Elizade – Toyota Plaza, 322A Ikorodu Road, Anthony, Lagos" },
  { name: "Ogba Office", address: "Plot 24 & 25, Block A, Acme Road, Ogba Industrial Estate, Ikeja, Lagos" },
  { name: "Abuja Branch", address: "Plot 596, Independence Av., Opp. Bolingo Hotel, CBD, Abuja" },
  { name: "Port Harcourt", address: "Plot 114, Trans Amadi, Industrial Layout, Port Harcourt" },
  { name: "Lekki Branch", address: "2nd Roundabout, ELF Bus Stop, Lekki-Epe Express Way, Lagos" },
  { name: "Victoria Island", address: "34B, Akin Adesola Street, Victoria Island, Lagos" },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="section-dark py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Find Us
            </p>
            <h2 className="text-5xl lg:text-7xl font-display text-surface-dark-foreground mb-10">
              Our Locations
            </h2>

            <div className="space-y-6">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-surface-dark-foreground">{loc.name}</p>
                    <p className="text-sm text-surface-dark-foreground/60">{loc.address}</p>
                  </div>
                </motion.div>
              ))}
              <p className="text-sm text-surface-dark-foreground/50 pt-2">
                Also in: Akure, Ibadan, Uyo, Umuahia, Kano, Asaba, Owerri
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={elizadeBuilding}
              alt="Elizade Nigeria headquarters"
              className="w-full h-[500px] object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
