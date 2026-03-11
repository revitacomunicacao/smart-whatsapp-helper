import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import ParallaxCTA from "@/components/landing/ParallaxCTA";
import HowItWorks from "@/components/landing/HowItWorks";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import AboutUs from "@/components/landing/AboutUs";
import ContactFloat from "@/components/landing/ContactFloat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Benefits />
      <HowItWorks />
      <Features />
      <ParallaxCTA />
      <ContactForm />
      <Footer />
      <ContactFloat />
    </main>
  );
};

export default Index;
