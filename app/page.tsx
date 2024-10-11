import Hero from "@/components/Hero";
import AboutSection from "@/components/LandingPage/AboutSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <div className="min-h-screen">
    <Navbar />
    <Hero />
    <AboutSection />
    <FeatureSection />
    <Footer/>
   </div>
  );
}
