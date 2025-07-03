import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-black hover:text-[#5E548E] transition-colors">
            CineLingo
          </Link>
          
          <nav className="flex space-x-8">
            <Link href="/" className="text-black hover:text-[#5E548E] text-sm transition-colors">
              Home
            </Link>
            <Link href="/research" className="text-black hover:text-[#5E548E] text-sm transition-colors">
              Research
            </Link>
            <Link href="/team" className="text-black hover:text-[#5E548E] text-sm transition-colors">
              Team
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 