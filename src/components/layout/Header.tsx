"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
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
            
            {/* Service Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                onBlur={() => setTimeout(() => setIsServiceDropdownOpen(false), 150)}
                className="text-gray-700 hover:text-[#5E548E] transition-colors flex items-center gap-1"
              >
                {t('nav.service')}
                <svg 
                  className={`w-4 h-4 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServiceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="https://myvoice.cinelingo-labs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#5E548E] transition-colors"
                  >
                    9 Seconds
                  </a>
                </div>
              )}
            </div>
            
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
              
              {/* Mobile Service Section */}
              <div className="flex flex-col gap-2">
                <span className="text-gray-700 font-medium">{t('nav.service')}</span>
                <a
                  href="https://myvoice.cinelingo-labs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#5E548E] transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  9 Seconds
                </a>
              </div>
              
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