import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-elizade.png";

const vehicleCategories = [
  {
    label: "SUVs",
    models: ["RAV4", "Rush", "Fortuner", "Prado", "Land Cruiser 300"],
  },
  {
    label: "Sedans",
    models: ["Corolla", "Camry", "Yaris", "Avensis"],
  },
  {
    label: "Pickup & Trucks",
    models: ["Hilux", "Land Cruiser 70", "Dyna"],
  },
  {
    label: "Buses",
    models: ["Coaster", "HiAce Bus", "Rumion"],
  },
  {
    label: "Commercial",
    models: ["HiAce Van", "Dyna Truck", "Starlet"],
  },
  {
    label: "JAC Motors",
    models: ["JAC T9 Pickup", "JS8 Pro SUV"],
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vehicles", href: "#vehicles", hasDropdown: true },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [vehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);
  const [mobileVehicleOpen, setMobileVehicleOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVehicleDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVehicleDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setVehicleDropdownOpen(false), 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="#home" className="flex-shrink-0">
          <img src={logo} alt="Elizade Toyota" className="h-12 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${vehicleDropdownOpen ? "rotate-180" : ""}`} />
                </a>

                <AnimatePresence>
                  {vehicleDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-popover border border-border rounded-md shadow-xl min-w-[560px] p-5"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {vehicleCategories.map((cat) => (
                          <div key={cat.label}>
                            <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                              {cat.label}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {cat.models.map((model) => (
                                <a
                                  key={model}
                                  href="#vehicles"
                                  className="text-sm text-foreground/60 hover:text-primary transition-colors py-0.5"
                                  onClick={() => setVehicleDropdownOpen(false)}
                                >
                                  {model}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-border">
                        <a
                          href="#vehicles"
                          className="text-xs font-semibold text-primary uppercase tracking-wider hover:text-primary/80 transition-colors flex items-center gap-1"
                          onClick={() => setVehicleDropdownOpen(false)}
                        >
                          View All Vehicles <ChevronRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+2348100291243"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileVehicleOpen(!mobileVehicleOpen)}
                      className="flex items-center justify-between w-full text-sm font-medium text-foreground/70 hover:text-primary uppercase tracking-wide"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileVehicleOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileVehicleOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-1 pl-3 flex flex-col gap-3">
                            {vehicleCategories.map((cat) => (
                              <div key={cat.label}>
                                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                                  {cat.label}
                                </p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                  {cat.models.map((model) => (
                                    <a
                                      key={model}
                                      href="#vehicles"
                                      onClick={() => { setOpen(false); setMobileVehicleOpen(false); }}
                                      className="text-sm text-foreground/50 hover:text-primary transition-colors"
                                    >
                                      {model}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-foreground/70 hover:text-primary uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="tel:+2348100291243"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-sm text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
