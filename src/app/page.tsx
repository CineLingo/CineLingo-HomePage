import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import GoalsSection from "@/components/sections/GoalsSection";
import JoinSection from "@/components/sections/JoinSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative bg-white">
        <HeroSection />
        <GoalsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
