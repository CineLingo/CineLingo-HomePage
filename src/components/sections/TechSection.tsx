"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function TechSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('tech.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Agent Technology */}
          <div className="card p-8 hover-lift animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5E548E] to-[#9F86C0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🤖</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.agent.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('tech.agent.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#5E548E]">
              <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
              <span>{t('tech.agent.tag')}</span>
            </div>
          </div>

          {/* TTS Technology */}
          <div className="card p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9F86C0] to-[#BE95C4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎤</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.tts.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('tech.tts.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#9F86C0]">
              <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <span>{t('tech.tts.tag')}</span>
            </div>
          </div>

          {/* Lip Sync Technology */}
          <div className="card p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#BE95C4] to-[#E0B1CB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">👄</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.lipsync.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('tech.lipsync.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#BE95C4]">
              <div className="w-2 h-2 bg-[#BE95C4] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <span>{t('tech.lipsync.tag')}</span>
            </div>
          </div>

          {/* Visual Technology */}
          <div className="card p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E0B1CB] to-[#F2E2E2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎨</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.visual.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('tech.visual.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#E0B1CB]">
              <div className="w-2 h-2 bg-[#E0B1CB] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              <span>{t('tech.visual.tag')}</span>
            </div>
          </div>

          {/* Multilingual Technology */}
          <div className="card p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5E548E] to-[#E0B1CB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌍</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.multilingual.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('tech.multilingual.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#5E548E]">
              <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              <span>{t('tech.multilingual.tag')}</span>
            </div>
          </div>

          {/* Quality Technology */}
          <div className="card p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9F86C0] to-[#F2E2E2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⭐</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black">{t('tech.quality.title')}</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('tech.quality.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#9F86C0]">
              <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
              <span>{t('tech.quality.tag')}</span>
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