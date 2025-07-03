export default function AboutSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          About CineLingo
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-black leading-relaxed">
          <p>
            CineLingo is an AI startup specializing in video content localization.
          </p>
          
          <p>
            We build end-to-end systems that transform global YouTube videos into native-level Korean, Japanese and various languages.
          </p>
          
          <p>
            Our work goes beyond dubbing — we aim to synchronize speech, facial motion, and on-screen text, creating videos that feel truly local, powered by our in-house TTS, lip-sync, and screen translation models.
          </p>
          
          <p>
            To ensure precision and fluency, we leverage agent-based translation pipelines that adapt to linguistic nuances and cultural contexts.
          </p>
        </div>
      </div>
    </section>
  );
} 