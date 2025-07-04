"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function JoinSection() {
  const { t } = useLanguage();

  const handleContact = () => {
    const subject = encodeURIComponent("CineLingo Opportunities");
    const body = encodeURIComponent(
      "Hello,\n\nI'm interested in opportunities at CineLingo and would like to learn more.\n\nBest regards,"
    );
    window.location.href = `mailto:mingikwon@cinelingo-labs.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="card p-12 hover-lift animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            {t('join.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            {t('join.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-3 h-3 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
            <button
              onClick={handleContact}
              className="text-xl md:text-2xl gradient-text font-semibold hover-glow px-6 py-3 rounded-lg transition-all duration-300"
            >
              {t('join.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 