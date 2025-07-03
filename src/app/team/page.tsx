import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TeamPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Meet Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              CineLingo is led by <a href="https://sites.google.com/view/mingikwon" className="text-[#5E548E] hover:text-[#231942] font-medium">Mingi Kwon</a>, <a href="https://sites.google.com/yonsei.ac.kr/jaeseokjeong" className="text-[#5E548E] hover:text-[#231942] font-medium">Jaeseok Jeong</a>, and a team of creative and a team of creative individuals with a shared passion. We are backed by <a href="https://vilab.yonsei.ac.kr/" className="text-[#5E548E] hover:text-[#231942] font-medium">Youngjung Uh</a> at Yonsei University, Yongjae Lee at UW-Madison and a collection of founders and investors.

                <br/> We have offices in Seoul, Korea. Our team members have long-tenured careers in machine learning, software, and entertainment.

                <p className="text-xl md:text-2xl text-[#5E548E] font-medium leading-relaxed">
                  We strongly believe that a small, focused team with a clear vision can build great things.
                </p>
              </p>
            </div>

            {/* Leadership */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Leadership</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Mingi Kwon</h3>
                  <p className="text-lg text-gray-600 mb-2">Co-founder & CEO</p>
                  <p className="text-sm text-gray-500">Machine Learning • Product Strategy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Photo</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Jaeseok Jeong</h3>
                  <p className="text-lg text-gray-600 mb-2">Co-founder & CTO</p>
                  <p className="text-sm text-gray-500">Software Engineering • AI Research</p>
                </div>
              </div>
            </div>


            {/* Company Info */}
            <div className="mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Location</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      61, Yonsei-ro 2na-gil, Seodaemun-gu, Seoul, Republic of Korea.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Email</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      mingikwon@cinelingolabs.com
                    </p>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 