export default function CollaborationsSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          Collaborations with creators
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-black leading-relaxed mb-12">
            We currently partner with leading science channels such as <strong>Veritasium</strong>, <strong>3Blue1Brown</strong>, <strong>Welch Labs</strong> and <strong>Doctorfriends</strong> making their content accessible to new audiences with high fidelity and care.
          </p>
          
          {/* Logos Slider */}
          <div className="overflow-hidden">
            <div className="flex animate-slide gap-16 items-center">
              {/* Original Logos */}
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/veritasium_logo.jpg"
                  alt="Veritasium"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/3blue1brown_logo.jpg"
                  alt="3Blue1Brown"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/welchlabs_logo.jpeg"
                  alt="Welch Labs"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/doctorfriends_logo.jpg"
                  alt="Doctorfriends"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Korean Logos */}
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/veritasium_ko_logo.jpg"
                  alt="Veritasium Korea"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/3blue1brown_ko_logo.jpg"
                  alt="3Blue1Brown Korea"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/welchlabs_korea_logo.png"
                  alt="Welch Labs Korea"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/doctorfriends_logo.jpg"
                  alt="Doctorfriends"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/veritasium_logo.jpg"
                  alt="Veritasium"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/3blue1brown_logo.jpg"
                  alt="3Blue1Brown"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/welchlabs_logo.jpeg"
                  alt="Welch Labs"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-20 relative flex-shrink-0">
                <img
                  src="/doctorfriends_logo.jpg"
                  alt="Doctorfriends"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 