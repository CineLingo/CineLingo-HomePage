import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import TechSection from "@/components/sections/TechSection";
import JoinSection from "@/components/sections/JoinSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollaborationsSection />
        <TechSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
