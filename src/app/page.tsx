import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import TechSection from "@/components/sections/TechSection";
import JoinSection from "@/components/sections/JoinSection";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CineLingo (씨네링고)",
            "alternateName": "씨네링고",
            "url": "https://cinelingo.com",
            "logo": "https://cinelingo.com/logo.png",
            "description": "AI-powered video localization platform that reconstructs videos with every frame, word, and voice transformed into fluent local experiences.",
            "foundingDate": "2024",
            "sameAs": [
              "https://twitter.com/cinelingo",
              "https://linkedin.com/company/cinelingo"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@cinelingo.com"
            },
            "serviceType": "Video Localization",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Video Localization Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Video Translation",
                    "description": "AI-powered video translation with voice reconstruction"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Multilingual Video Processing",
                    "description": "Transform global content into fluent local experiences"
                  }
                }
              ]
            }
          })
        }}
      />
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
