"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function CollaborationsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          {t('collaborations.title')}
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-black leading-relaxed mb-12">
            {t('collaborations.subtitle')}
          </p>
          
          {/* Logos Slider */}
          <div className="overflow-hidden">
            <div className="flex animate-slide gap-16 items-center">
              {/* Original Logos */}
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/veritasium_logo.jpg"
                  alt="Veritasium"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/3blue1brown_logo.jpg"
                  alt="3Blue1Brown"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/welchlabs_logo.jpeg"
                  alt="Welch Labs"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/doctorfriends_logo.jpg"
                  alt="Doctorfriends"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              
              {/* Korean Logos */}
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/veritasium_ko_logo.jpg"
                  alt="Veritasium Korea"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/3blue1brown_ko_logo.jpg"
                  alt="3Blue1Brown Korea"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/welchlabs_korea_logo.png"
                  alt="Welch Labs Korea"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/doctorfriends_logo.jpg"
                  alt="Doctorfriends"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/veritasium_logo.jpg"
                  alt="Veritasium"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/3blue1brown_logo.jpg"
                  alt="3Blue1Brown"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/welchlabs_logo.jpeg"
                  alt="Welch Labs"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <Image
                  src="/doctorfriends_logo.jpg"
                  alt="Doctorfriends"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 