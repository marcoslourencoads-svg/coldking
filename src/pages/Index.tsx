import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <BenefitsSection />
        <ExperienceSection />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
