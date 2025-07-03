export default function TechSection() {
  return (
    <section className="py-32 gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#5E548E]/5 to-[#9F86C0]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-[#BE95C4]/5 to-[#E0B1CB]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Tech
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We develop AI technologies that push the boundaries of video localization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card p-8 hover-lift animate-fade-in-left">
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">01</div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">Agent-based Translation Systems</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#5E548E]">
              <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
              <span>Context-aware AI</span>
            </div>
          </div>
          
          <div className="card p-8 hover-lift animate-fade-in-right">
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">02</div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">Lip-sync Modeling</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We build models that align facial movements with translated speech — frame-accurate and emotion-preserving.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#9F86C0]">
              <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <span>Frame-accurate sync</span>
            </div>
          </div>
          
          <div className="card p-8 hover-lift animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">03</div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">Text-to-Speech (TTS)</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#BE95C4]">
              <div className="w-2 h-2 bg-[#BE95C4] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <span>Native-level voices</span>
            </div>
          </div>
          
          <div className="card p-8 hover-lift animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-5xl md:text-6xl font-bold gradient-text">04</div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">On-Screen Text Translation</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#E0B1CB]">
              <div className="w-2 h-2 bg-[#E0B1CB] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              <span>Visual reconstruction</span>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block p-8 bg-white rounded-2xl shadow-lg border border-[#5E548E]/10 hover-lift">
            <p className="text-2xl md:text-3xl gradient-text font-semibold leading-relaxed">
              We aim not just to translate — but to create videos that look, sound, and feel native
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 