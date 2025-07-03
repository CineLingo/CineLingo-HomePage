export default function TechSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          Tech
        </h2>
        
        <p className="text-lg md:text-xl text-black text-center mb-16 leading-relaxed">
          We develop AI technologies that push the boundaries of video localization.
        </p>
        
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-8 h-8 bg-[#5E548E] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Agent-based Translation Systems
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-8 h-8 bg-[#5E548E] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Lip-sync Modeling
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We build models that align facial movements with translated speech — frame-accurate and emotion-preserving.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-8 h-8 bg-[#5E548E] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                Text-to-Speech (TTS)
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-8 h-8 bg-[#5E548E] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">4</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                On-Screen Text Translation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-[#5E548E] font-medium">
            We aim not just to translate — but to create videos that look, sound, and feel native
          </p>
        </div>
      </div>
    </section>
  );
} 