import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import VehiclesSection from "@/components/VehiclesSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <MarqueeBanner />
      <AboutSection />
      <VehiclesSection />
      <ServicesSection />
      <LocationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
