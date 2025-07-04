"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                {t('team.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('team.description')}
                <br/> {t('team.location')}

                <p className="text-xl md:text-2xl text-[#5E548E] font-medium leading-relaxed">
                  {t('team.belief')}
                </p>
              </p>
            </div>

            {/* Team Photos Slider */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">{t('team.photos.title')}</h2>
              <div className="overflow-hidden">
                <div className="flex animate-slide gap-8 items-center">
                  {/* First set of photos */}
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo0.jpg"
                      alt="Team Photo 1"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo1.png"
                      alt="Team Photo 2"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo2.jpg"
                      alt="Team Photo 3"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo3.png"
                      alt="Team Photo 4"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo4.png"
                      alt="Team Photo 5"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo5.png"
                      alt="Team Photo 6"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo0.jpg"
                      alt="Team Photo 7"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo1.png"
                      alt="Team Photo 8"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo2.jpg"
                      alt="Team Photo 9"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo3.png"
                      alt="Team Photo 10"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo4.png"
                      alt="Team Photo 11"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo5.png"
                      alt="Team Photo 12"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo0.jpg"
                      alt="Team Photo 13"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo1.png"
                      alt="Team Photo 14"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo2.jpg"
                      alt="Team Photo 15"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo3.png"
                      alt="Team Photo 16"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo4.png"
                      alt="Team Photo 17"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                  <div className="w-80 h-60 relative flex-shrink-0">
                    <img
                      src="/photo5.png"
                      alt="Team Photo 18"
                      className="w-full h-full object-cover rounded-lg shadow-lg hover-lift"
                    />
                  </div>
                </div>
              </div>
              
              {/* Photo counter */}
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-4 text-gray-600">
                  <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
                  <span className="text-lg">{t('team.photos.scroll')}</span>
                  <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('team.info.location.title')}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t('team.info.location.address')}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">{t('team.info.email.title')}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      mingikwon@cinelingo-labs.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 