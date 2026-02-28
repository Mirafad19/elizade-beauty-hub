import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h2 className="text-5xl lg:text-7xl font-display text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Ready to find your perfect Toyota? Our team is here to help with sales, after-sales, and spare parts.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-8 border border-border rounded-sm">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+234-8100291243</p>
            <p className="text-sm text-muted-foreground">+234-7082424087</p>
          </div>
          <div className="text-center p-8 border border-border rounded-sm">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">info@elizade.net</p>
            <p className="text-sm text-muted-foreground">sales@elizade.net</p>
          </div>
          <div className="text-center p-8 border border-border rounded-sm">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
            <p className="text-sm text-muted-foreground">Mon – Fri: 8am – 5pm</p>
            <p className="text-sm text-muted-foreground">Sat: 9am – 2pm</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
