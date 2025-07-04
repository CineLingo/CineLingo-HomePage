"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black hover:text-[#5E548E] transition-colors">
            CineLingo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#5E548E] transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/research" className="text-gray-700 hover:text-[#5E548E] transition-colors">
              {t('nav.research')}
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-[#5E548E] transition-colors">
              {t('nav.team')}
            </Link>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#5E548E] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#5E548E] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/research" 
                className="text-gray-700 hover:text-[#5E548E] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.research')}
              </Link>
              <Link 
                href="/team" 
                className="text-gray-700 hover:text-[#5E548E] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.team')}
              </Link>
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 