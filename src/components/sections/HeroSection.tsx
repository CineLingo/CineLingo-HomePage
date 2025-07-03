interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-black mb-16 leading-[0.85] tracking-tight">
          Bringing language learning to life
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-black mb-20 max-w-5xl mx-auto leading-relaxed font-light">
          We believe in a future where learning languages is natural, engaging, and effective. 
          Through AI-powered conversations and immersive experiences, we're making language 
          acquisition as natural as watching your favorite movies.
        </p>

        {/* No CTA buttons - just empty space like Sesame */}
      </div>
    </section>
  );
} 