import { motion } from "framer-motion";
import showroom from "@/assets/about-showroom.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              About Elizade
            </p>
            <h2 className="text-5xl lg:text-7xl font-display text-foreground leading-none mb-6">
              Nigeria's Leading Toyota Dealer Since 1971
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Elizade (Nigeria) Limited is the brainchild of Chief Michael Ade.Ojo. As Nigeria's premier automobile sales company, 
              we deal exclusively in tropicalized Toyota brands, ensuring every vehicle is built for African roads.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Since securing our Federal Government License in 1976 to distribute Toyota vehicles and spare parts, 
              we've grown into the most trusted name in Nigerian automotive. In 1996, we partnered to establish Toyota Nigeria Limited (TNL), 
              the sole importer of Toyota vehicles in the country.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-display text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-display text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Branches Nationwide</p>
              </div>
              <div>
                <p className="text-4xl font-display text-primary">#1</p>
                <p className="text-sm text-muted-foreground">Toyota Dealer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={showroom}
              alt="Elizade showroom"
              className="w-full h-auto object-contain rounded-sm"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-8 py-6 rounded-sm">
              <p className="text-3xl font-display">Est. 1971</p>
              <p className="text-sm opacity-80">Over 5 decades of trust</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
