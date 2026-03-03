import logo from "@/assets/logo-elizade.png";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-surface-dark-foreground/10 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logo} alt="Elizade Toyota" className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm text-surface-dark-foreground/50 leading-relaxed">
              Nigeria's leading Toyota dealer since 1971. Driven by excellence, powered by trust.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-surface-dark-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">About Us</a>
              <a href="#vehicles" className="text-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">Vehicles</a>
              <a href="#services" className="text-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">Services</a>
              <a href="#locations" className="text-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">Locations</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-surface-dark-foreground mb-4 text-sm uppercase tracking-wider">Vehicles</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-surface-dark-foreground/50">Land Cruiser</span>
              <span className="text-sm text-surface-dark-foreground/50">Hilux</span>
              <span className="text-sm text-surface-dark-foreground/50">Corolla</span>
              <span className="text-sm text-surface-dark-foreground/50">Prado</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-surface-dark-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-surface-dark-foreground/50">info@elizade.net</span>
              <span className="text-sm text-surface-dark-foreground/50">+234-8100291243</span>
              <span className="text-sm text-surface-dark-foreground/50">322A Ikorodu Road, Anthony, Lagos</span>
            </div>
          </div>
        </div>
        <div className="border-t border-surface-dark-foreground/10 pt-6 text-center">
          <p className="text-xs text-surface-dark-foreground/30">
            © 2026 Elizade (Nigeria) Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
