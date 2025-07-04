"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-gray-900 shadow-sm"
      aria-label={`Switch to ${language === 'en' ? 'Korean' : 'English'}`}
    >
      <span className="font-semibold">
        {language === 'en' ? '한국어' : 'English'}
      </span>
    </button>
  );
} 