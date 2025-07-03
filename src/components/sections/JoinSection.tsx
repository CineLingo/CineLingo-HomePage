import Link from "next/link";

export default function JoinSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Join us
        </h2>
        
        <p className="text-xl md:text-2xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
          We&apos;re always looking for passionate researchers, engineers, creators, and designers.
        </p>

        <button className="bg-[#231942] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#5E548E] transition-colors mb-12">
          Get in touch
        </button>
        
        <div className="flex justify-center gap-8 text-base text-black">
          <Link href="/" className="hover:text-[#5E548E]">Home</Link>
          <Link href="/research" className="hover:text-[#5E548E]">Research</Link>
          <Link href="/team" className="hover:text-[#5E548E]">Team</Link>
          <Link href="#" className="hover:text-[#5E548E]">Contact us</Link>
        </div>
      </div>
    </section>
  );
} 