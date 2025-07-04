"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function TechSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#5E548E]/5 to-[#9F86C0]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-[#BE95C4]/5 to-[#E0B1CB]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('tech.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8 hover-lift animate-fade-in-left">
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">01</div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.agent.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tech.agent.description')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#5E548E]">
              <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
              <span>{t('tech.agent.tag')}</span>
            </div>
          </div>

          <div className="card p-8 hover-lift animate-fade-in-right">
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">02</div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.tts.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tech.tts.description')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#9F86C0]">
              <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <span>{t('tech.tts.tag')}</span>
            </div>
          </div>

          <div className="card p-8 hover-lift animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">03</div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.lipSync.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tech.lipSync.description')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#BE95C4]">
              <div className="w-2 h-2 bg-[#BE95C4] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <span>{t('tech.lipSync.tag')}</span>
            </div>
          </div>

          <div className="card p-8 hover-lift animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">04</div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.visual.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('tech.visual.description')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#E0B1CB]">
              <div className="w-2 h-2 bg-[#E0B1CB] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              <span>{t('tech.visual.tag')}</span>
            </div>
          </div>

        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#5E548E]/5 to-[#9F86C0]/5 p-8 rounded-xl border border-[#5E548E]/10">
            <blockquote className="text-xl md:text-2xl text-black italic leading-relaxed">
              &ldquo;{t('tech.quote')}&rdquo;
            </blockquote>
            <p className="mt-4 text-lg text-gray-600 font-medium">
              {t('tech.quote.author')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 