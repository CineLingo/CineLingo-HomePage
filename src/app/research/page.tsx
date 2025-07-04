import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ResearchPage() {
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
                Research
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Advancing the frontiers of AI-powered video localization through cutting-edge research
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
                      JAM-Flow: Joint Audio-Motion Synthesis with Flow Matching
                    </h2>
                    <p className="text-lg text-gray-600">CineLingo Research Team • Seoul, South Korea</p>
                  </div>
                </div>
                
                <div className="flex gap-6 text-lg">
                  <a href="https://www.arxiv.org/abs/2506.23552" className="flex items-center gap-2 text-[#5E548E] hover:text-[#231942] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>📚</span>
                    <span>arXiv</span>
                  </a>
                  <a href="https://joonghyuk.com/jamflow-web/" className="flex items-center gap-2 text-[#5E548E] hover:text-[#231942] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>🌐</span>
                    <span>Project Page</span>
                  </a>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#5E548E] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Abstract
                </h3>
                <div className="bg-gradient-to-r from-[#5E548E]/5 to-[#9F86C0]/5 p-8 rounded-xl border border-[#5E548E]/10">
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    The intrinsic link between facial motion and speech is often overlooked in video localization, where lip-sync, text-to-speech (TTS), and visual text translation are typically addressed as separate tasks. This paper introduces CineLingo, a unified framework to simultaneously synthesize and condition on both facial motion, speech, and visual elements for seamless video localization.
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    Our approach leverages advanced AI models and a novel Multi-Modal Localization Transformer (MM-LT) architecture, integrating specialized Lip-Sync, TTS, and Visual Translation modules. These are coupled via selective joint attention layers and incorporate key architectural choices, such as temporally aligned positional embeddings and localized joint attention masking, to enable effective cross-modal interaction while preserving modality-specific strengths.
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    Trained with an end-to-end objective, CineLingo supports a wide array of conditioning inputs—including text, reference audio, and reference motion—facilitating tasks such as synchronized talking head generation from text, audio-driven animation, automated dubbing, and much more, within a single, coherent model. CineLingo significantly advances multi-modal generative modeling by providing a practical solution for holistic video localization.
                  </p>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#9F86C0] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Architecture
                </h3>
                <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover-lift">
                  <img
                    src="/jamflow_archi.png"
                    alt="JAM-Flow Architecture Diagram"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-6 text-lg text-gray-600 italic bg-white p-4 rounded-lg border border-gray-200">
                  <strong>The training and inference pipeline of the JAM-Flow framework.</strong> Our joint MM-DiT comprises a Motion-DiT for facial expression keypoints and an Audio-DiT for mel-spectrograms, coupled via joint attention. The model is trained with an inpainting-style flow matching objective on masked inputs and various conditions (text, reference audio/motion). At inference, it flexibly generates synchronized audio-visual outputs from partial inputs.
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
                      TTS-CtrlNet: Time varying emotion aligned text-to-speech generation with ControlNet
                    </h2>
                    <p className="text-lg text-gray-600">CineLingo Research Team • Seoul, South Korea</p>
                  </div>
                </div>
                
                <div className="flex gap-6 text-lg">
                  <a href="#" className="flex items-center gap-2 text-[#BE95C4] hover:text-[#9F86C0] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>📚</span>
                    <span>arXiv</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-[#BE95C4] hover:text-[#9F86C0] font-medium hover-glow px-4 py-2 rounded-lg transition-all duration-300">
                    <span>🌐</span>
                    <span>Project Page</span>
                  </a>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#BE95C4] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Abstract
                </h3>
                <div className="bg-gradient-to-r from-[#BE95C4]/5 to-[#E0B1CB]/5 p-8 rounded-xl border border-[#BE95C4]/10">
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    Recent advances in text-to-speech (TTS) have enabled natural speech synthesis, but fine-grained, time-varying emotion control remains challenging. Existing methods often allow only utterance-level control, require full model fine-tuning with a large emotion speech dataset, which can degrade performance.
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                    Inspired by ControlNet for text-to-image generation, we propose the first ControlNet-based approach for controlling flow-matching TTS (TTS-CtrlNet), which freezes the original model and makes a trainable copy of it to process additional condition. We show that TTS-CtrlNet can boost the pretrained large TTS model by adding intuitive, scalable, and time-varying emotion control while inheriting the ability of the original model (e.g., zero-shot voice cloning & naturalness).
                  </p>
                  <p className="text-lg md:text-xl text-black leading-relaxed">
                    Furthermore, we provide practical recipes for adding emotion control: 1) optimal architecture design choice with block analysis, 2) emotion-specific flow step, and 3) flexible control scale. Experiments show that TTS-CtrlNet can effectively adds an emotion controller to existing TTS, and achieves state-of-the-art performance with emotion similarity scores: Emo-SIM and Aro-Val SIM.
                  </p>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#E0B1CB] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Architecture
                </h3>
                <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover-lift">
                  <img
                    src="/ttsctrlnet_archi.png"
                    alt="TTS-CtrlNet Architecture Diagram"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-6 text-lg text-gray-600 italic bg-white p-4 rounded-lg border border-gray-200">
                  <strong>The training and inference pipeline of the TTS-CtrlNet framework.</strong> Controlling signal is processed through ControlNet and fed into the subset of blocks in original model.
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
                Our Research Areas
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We focus on four key areas that form the foundation of our video localization technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 hover-lift animate-fade-in-left">
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">01</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">Agent-based Translation</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture. Our agents understand the broader context of the content and make intelligent decisions about localization strategies.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#5E548E]">
                  <div className="w-2 h-2 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
                  <span>Context-aware AI</span>
                </div>
              </div>

              <div className="card p-8 hover-lift animate-fade-in-right">
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">02</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">Text-to-Speech (TTS)</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency. We leverage large language models and advanced audio synthesis to create voices that sound natural and culturally appropriate.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#9F86C0]">
                  <div className="w-2 h-2 bg-[#9F86C0] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                  <span>Native-level voices</span>
                </div>
              </div>

              <div className="card p-8 hover-lift animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">03</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">Lip-sync Modeling</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We build models that align facial movements with translated speech — frame-accurate and emotion-preserving. Our approach uses advanced computer vision and speech synthesis to ensure that every lip movement matches the spoken words naturally.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#BE95C4]">
                  <div className="w-2 h-2 bg-[#BE95C4] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                  <span>Frame-accurate sync</span>
                </div>
              </div>

              <div className="card p-8 hover-lift animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">04</div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">On-Screen Text Translation</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations. Our system can detect, translate, and replace text in videos while maintaining visual coherence and readability.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#E0B1CB]">
                  <div className="w-2 h-2 bg-[#E0B1CB] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
                  <span>Visual reconstruction</span>
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
                Join us
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
                If you&apos;re excited about building the most natural, delightful, and culturally sensitive video localization systems out there, reach out—we&apos;re hiring.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-[#5E548E] rounded-full animate-pulse-slow"></div>
                <a 
                  href="mailto:mingikwon@cinelingo-labs.com?subject=Interested in CineLingo Research Opportunities&body=Hi,%0D%0A%0D%0AI'm interested in research opportunities at CineLingo and would like to learn more.%0D%0A%0D%0ABest regards"
                  className="text-xl md:text-2xl gradient-text font-semibold hover-glow px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 