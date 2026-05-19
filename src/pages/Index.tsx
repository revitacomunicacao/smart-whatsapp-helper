import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import AboutUs from "@/components/landing/AboutUs";
import ContactFloat from "@/components/landing/ContactFloat";
import SuporteHumanizadoAlt from "@/components/landing/SuporteHumanizadoAlt";
import VideoCarousel from "@/components/landing/VideoCarousel";
import FAQ from "@/components/landing/FAQ";
import { useHomePageContentResolved } from "@/hooks/useHomePageContent";

const Index = () => {
  const { content } = useHomePageContentResolved();

  return (
    <main className="min-h-screen overflow-x-hidden max-lg:scroll-pt-20">
      <Navbar />
      <VideoCarousel />
      <Hero content={content.hero} />
      <AboutUs content={content.about} />
      <Benefits content={content.benefits} />
      <HowItWorks content={content.howItWorks} />
      <SuporteHumanizadoAlt content={content.suporte} />
      <FAQ content={content.faq} />
      <ContactForm />
      <Footer />
      <ContactFloat />
    </main>
  );
};

export default Index;
