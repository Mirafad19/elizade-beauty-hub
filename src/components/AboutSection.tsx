import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import showroom from "@/assets/about-showroom.jpg";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, target, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsubscribe;
  }, [rounded]);

  return <p ref={ref} className="text-4xl font-display text-primary">0</p>;
}

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
                <CountUp target={50} suffix="+" />
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <CountUp target={10} suffix="+" />
                <p className="text-sm text-muted-foreground">Branches Nationwide</p>
              </div>
              <div>
                <CountUp target={1} prefix="#" />
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
