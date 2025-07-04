"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          {t('about.title')}
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-black leading-relaxed">
          <p>
            {t('about.p1')}
          </p>
          
          <p>
            {t('about.p2')}
          </p>
          
          <p>
            {t('about.p3')}
          </p>
          
          <p>
            {t('about.p4')}
          </p>
        </div>
      </div>
    </section>
  );
} 