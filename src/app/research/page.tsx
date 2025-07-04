"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ResearchPage() {
  const { t } = useLanguage();

  const handleContact = () => {
    const subject = encodeURIComponent("CineLingo Research Opportunities");
    const body = encodeURIComponent(
      "Hello,\n\nI'm interested in research opportunities at CineLingo and would like to learn more.\n\nBest regards,"
    );
    window.location.href = `mailto:mingikwon@cinelingo-labs.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-32 gradient-bg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#5E548E]/10 to-[#9F86C0]/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-[#BE95C4]/10 to-[#E0B1CB]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
                {t('research.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {t('research.hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Papers Section */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* JAM-Flow Paper */}
            <div className="card p-12 mb-24 hover-lift animate-fade-in-up">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5E548E] to-[#9F86C0] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📄</span>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {t('research.jamflow.title')}
                    </h2>
                    <p className="text-lg text-gray-600">{t('research.jamflow.team')}</p>
                  </div>
                </div>
                
                <div className="flex gap-6 text-lg">
                  <a href="https://www.arxiv.org/abs/2506.23552" className="flex items-center gap-2 text-[#5E548E] hover:text-[#231942] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>📚</span>
                    <span>{t('research.jamflow.arxiv')}</span>
                  </a>
                  <a href="https://joonghyuk.com/jamflow-web/" className="flex items-center gap-2 text-[#5E548E] hover:text-[#231942] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>🌐</span>
                    <span>{t('research.jamflow.project')}</span>
                  </a>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#5E548E] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  {t('research.jamflow.abstract.title')}
                </h3>
                <div className="bg-gradient-to-r from-[#5E548E]/5 to-[#9F86C0]/5 p-8 rounded-xl border border-[#5E548E]/10">
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    {t('research.jamflow.abstract.p1')}
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    {t('research.jamflow.abstract.p2')}
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    {t('research.jamflow.abstract.p3')}
                  </p>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#9F86C0] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  {t('research.jamflow.architecture.title')}
                </h3>
                <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover-lift">
                  <img
                    src={process.env.NODE_ENV === 'production' ? '/cinelingo-landing/jamflow_archi.png' : '/jamflow_archi.png'}
                    alt="JAM-Flow Architecture Diagram"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-6 text-lg text-gray-600 italic bg-white p-4 rounded-lg border border-gray-200">
                  <strong>{t('research.jamflow.architecture.description')}</strong>
                </p>
              </div>
            </div>

            {/* TTS-CtrlNet Paper */}
            <div className="card p-12 mb-24 hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#BE95C4] to-[#E0B1CB] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🎤</span>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {t('research.ttsctrlnet.title')}
                    </h2>
                    <p className="text-lg text-gray-600">{t('research.jamflow.team')}</p>
                  </div>
                </div>
                
                <div className="flex gap-6 text-lg">
                  <a href="#" className="flex items-center gap-2 text-[#BE95C4] hover:text-[#9F86C0] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>📚</span>
                    <span>{t('research.jamflow.arxiv')}</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-[#BE95C4] hover:text-[#9F86C0] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>🌐</span>
                    <span>{t('research.jamflow.project')}</span>
                  </a>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#BE95C4] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  {t('research.jamflow.abstract.title')}
                </h3>
                <div className="bg-gradient-to-r from-[#BE95C4]/5 to-[#E0B1CB]/5 p-8 rounded-xl border border-[#BE95C4]/10">
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    {t('research.ttsctrlnet.abstract.p1')}
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    {t('research.ttsctrlnet.abstract.p2')}
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    {t('research.ttsctrlnet.abstract.p3')}
                  </p>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#E0B1CB] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  {t('research.jamflow.architecture.title')}
                </h3>
                <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover-lift">
                  <img
                    src={process.env.NODE_ENV === 'production' ? '/cinelingo-landing/ttsctrlnet_archi.png' : '/ttsctrlnet_archi.png'}
                    alt="TTS-CtrlNet Architecture Diagram"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-6 text-lg text-gray-600 italic bg-white p-4 rounded-lg border border-gray-200">
                  <strong>{t('research.ttsctrlnet.architecture.description')}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-32 gradient-bg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#5E548E]/5 to-[#9F86C0]/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-[#BE95C4]/5 to-[#E0B1CB]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t('research.areas.title')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {t('research.areas.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 hover-lift animate-fade-in-left">
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">01</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">{t('research.areas.agent.title')}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('research.areas.agent.description')}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#5E548E]">
                  <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
                  <span>{t('research.areas.agent.tag')}</span>
                </div>
              </div>

              <div className="card p-8 hover-lift animate-fade-in-right">
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">02</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">{t('research.areas.tts.title')}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('research.areas.tts.description')}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#9F86C0]">
                  <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                  <span>{t('research.areas.tts.tag')}</span>
                </div>
              </div>

              <div className="card p-8 hover-lift animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">03</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">{t('research.areas.lipsync.title')}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('research.areas.lipsync.description')}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#BE95C4]">
                  <div className="w-2 h-2 bg-[#BE95C4] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                  <span>{t('research.areas.lipsync.tag')}</span>
                </div>
              </div>

              <div className="card p-8 hover-lift animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">04</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">{t('research.areas.visual.title')}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('research.areas.visual.description')}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#E0B1CB]">
                  <div className="w-2 h-2 bg-[#E0B1CB] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
                  <span>{t('research.areas.visual.tag')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join us Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="card p-12 hover-lift animate-scale-in">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                {t('research.join.title')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
                {t('research.join.subtitle')}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
                <button
                  onClick={handleContact}
                  className="text-xl md:text-2xl gradient-text font-semibold hover-glow px-6 py-3 rounded-lg transition-all duration-300"
                >
                  {t('research.join.button')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 