import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function ResearchPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* JAM-Flow Paper */}
            <div className="mb-32">
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                  [Paper] JAM-Flow: Joint Audio-Motion Synthesis with Flow Matching
                </h1>
                <p className="text-lg text-gray-600 mb-4">CineLingo Research Team</p>
                <p className="text-lg text-gray-600 mb-8">Seoul, South Korea</p>
                <div className="flex gap-4 text-lg">
                  <a href="https://www.arxiv.org/abs/2506.23552" className="text-[#5E548E] hover:text-[#231942] font-medium">arXiv</a>
                  <a href="https://joonghyuk.com/jamflow-web/" className="text-[#5E548E] hover:text-[#231942] font-medium">Project Page</a>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Abstract</h2>
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

              {/* Architecture Diagram */}
              <div className="mb-16">
                <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/jamflow_archi.png"
                    alt="JAM-Flow Architecture Diagram"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-8 text-lg text-gray-600 italic">
                  <b>The training and inference pipeline of the JAM-Flow framework.</b> Our joint MM-DiT comprises a Motion-DiT for facial expression keypoints and an Audio-DiT for mel-spectrograms, coupled via joint attention. The model is trained with an inpainting-style flow matching objective on masked inputs and various conditions (text, reference audio/motion). At inference, it flexibly generates synchronized audio-visual outputs from partial inputs.
                </p>
              </div>
            </div>

            {/* TTS-CtrlNet Paper */}
            <div className="mb-32">
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                  [Paper] TTS-CtrlNet: Time varying emotion aligned text-to-speech generation with ControlNet
                </h1>
                <p className="text-lg text-gray-600 mb-4">CineLingo Research Team</p>
                <p className="text-lg text-gray-600 mb-8">Seoul, South Korea</p>
                <div className="flex gap-4 text-lg">
                  <a href="#" className="text-[#5E548E] hover:text-[#231942] font-medium">arXiv</a>
                  <a href="#" className="text-[#5E548E] hover:text-[#231942] font-medium">Project Page</a>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Abstract</h2>
                <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                  Recent advances in text-to-speech (TTS) have enabled natural speech synthesis, but fine-grained, time-varying emotion control remains challenging. Existing methods often allow only utterance-level control, require full model fine-tuning with a large emotion speech dataset, which can degrade performance.
                </p>
                <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                  Inspired by ControlNet for text-to-image generation, we propose the first ControlNet-based approach for controlling flow-matching TTS (TTS-CtrlNet), which freezes the original model and makes a trainable copy of it to process additional condition. We show that TTS-CtrlNet can boost the pretrained large TTS model by adding intuitive, scalable, and time-varying emotion control while inheriting the ability of the original model (e.g., zero-shot voice cloning & naturalness).
                </p>
                <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                  Furthermore, we provide practical recipes for adding emotion control: 1) optimal architecture design choice with block analysis, 2) emotion-specific flow step, and 3) flexible control scale. Experiments show that TTS-CtrlNet can effectively adds an emotion controller to existing TTS, and achieves state-of-the-art performance with emotion similarity scores: Emo-SIM and Aro-Val SIM.
                </p>
              </div>
            </div>

            {/* TTS-CtrlNet Architecture Diagram */}
            <div className="mb-16">
              <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/ttsctrlnet_archi.png"
                  alt="TTS-CtrlNet Architecture Diagram"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-8 text-lg text-gray-600 italic">
                <b>The training and inference pipeline of the TTS-CtrlNet framework.</b>Controlling signal is processed through ControlNet and fed into the subset of blocks in original model.
              </p>
            </div>

            {/* Research Areas */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Our Research Areas</h2>
              
              <div className="grid md:grid-cols-2 gap-8">

              <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-gray-200">01</div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">Agent-based Translation</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture. Our agents understand the broader context of the content and make intelligent decisions about localization strategies.
                  </p>
                </div>



                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-gray-200">02</div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">Text-to-Speech (TTS)</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency. We leverage large language models and advanced audio synthesis to create voices that sound natural and culturally appropriate.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-gray-200">03</div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">Lip-sync Modeling</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We build models that align facial movements with translated speech — frame-accurate and emotion-preserving. Our approach uses advanced computer vision and speech synthesis to ensure that every lip movement matches the spoken words naturally.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-gray-200">04</div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">On-Screen Text Translation</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations. Our system can detect, translate, and replace text in videos while maintaining visual coherence and readability.
                  </p>
                </div>


              </div>
            </div>

            {/* Join us */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Join us</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you're excited about building the most natural, delightful, and culturally sensitive video localization systems out there, reach out—we're hiring.
              </p>
              <a href="#" className="inline-block text-[#5E548E] hover:text-[#231942] text-lg font-medium">
                Check our open roles →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 