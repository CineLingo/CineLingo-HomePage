interface JoinSectionProps {
  className?: string;
}

export default function JoinSection({ className = "" }: JoinSectionProps) {
  return (
    <section id="team" className={`py-40 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-10 leading-tight">
            Join CineLingo
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-black mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            CineLingo is an interdisciplinary team focused on making language learning 
            accessible, engaging, and effective for everyone. Learn more about our team 
            and mission.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-20">
          <button className="bg-[#231942] text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-[#5E548E] transition-colors duration-200">
            Careers at CineLingo
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-10 text-base text-black">
          <a href="#home" className="hover:text-[#5E548E] transition-colors duration-200">
            Home
          </a>
          <a href="#research" className="hover:text-[#5E548E] transition-colors duration-200">
            Research
          </a>
          <a href="#team" className="hover:text-[#5E548E] transition-colors duration-200">
            Team
          </a>
          <a href="#contact" className="hover:text-[#5E548E] transition-colors duration-200">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
} 