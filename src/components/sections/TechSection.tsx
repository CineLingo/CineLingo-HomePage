"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function TechSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('tech.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#5E548E] transition-colors">
                {t('tech.agent.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('tech.agent.description')}
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#5E548E] transition-colors">
                {t('tech.lipSync.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('tech.lipSync.description')}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#5E548E] transition-colors">
                {t('tech.tts.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('tech.tts.description')}
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#5E548E] transition-colors">
                {t('tech.visual.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('tech.visual.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
            "{t('tech.quote')}"
          </blockquote>
        </div>
      </div>
    </section>
  );
} 