import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ApproachSection from "@/components/home/ApproachSection";
import CloudMigrationSection from "@/components/home/CloudMigrationSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "iCopilot - IT Infrastructure Automation & DevOps";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <CloudMigrationSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
