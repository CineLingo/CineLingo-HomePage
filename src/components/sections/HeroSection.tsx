interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-gray-900 mb-16 leading-[0.85] tracking-tight">
          Bringing language learning to life
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-20 max-w-5xl mx-auto leading-relaxed font-light">
          We believe in a future where learning languages is natural, engaging, and effective. 
          Through AI-powered conversations and immersive experiences, we're making language 
          acquisition as natural as watching your favorite movies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="bg-gray-900 text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Try our demo
          </button>
          <button className="border border-gray-300 text-gray-700 px-12 py-5 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
} 