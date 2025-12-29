import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import ParallaxCTA from "@/components/landing/ParallaxCTA";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import AboutUs from "@/components/landing/AboutUs";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Benefits />
      <Features />
      <ParallaxCTA />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
