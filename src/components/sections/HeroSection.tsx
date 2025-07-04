"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5E548E]/10 to-[#9F86C0]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#BE95C4]/10 to-[#E0B1CB]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-12 leading-tight tracking-tight">
            {t('hero.title.line1')}
            <br />
            <span className="gradient-text">{t('hero.title.line2')}</span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
        </div>
        
        <div className="animate-fade-in-up mt-12" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2 hover-glow px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
              <span>{t('hero.tech.lipSync')}</span>
            </div>
            <div className="flex items-center gap-2 hover-glow px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <span>{t('hero.tech.voice')}</span>
            </div>
            <div className="flex items-center gap-2 hover-glow px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-[#BE95C4] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <span>{t('hero.tech.visual')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
} 