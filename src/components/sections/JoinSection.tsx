"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Link from "next/link";

export default function JoinSection() {
  const { t } = useLanguage();

  const handleContact = () => {
    const subject = encodeURIComponent("CineLingo Collaboration Inquiry");
    const body = encodeURIComponent(
      "Hello,\n\nI'm interested in learning more about CineLingo and potential collaboration opportunities.\n\nBest regards,"
    );
    window.location.href = `mailto:mingikwon@cinelingo-labs.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          {t('join.title')}
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('join.subtitle')}
        </p>
        <button
          onClick={handleContact}
          className="bg-[#5E548E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4A3F7A] transition-colors duration-300 hover:scale-105 transform"
        >
          {t('join.button')}
        </button>
      </div>
    </section>
  );
} 