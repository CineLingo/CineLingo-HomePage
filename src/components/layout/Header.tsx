interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-black">CineLingo</h1>
          </div>

          {/* Navigation - Only Research and Team like Sesame */}
          <nav className="hidden md:flex space-x-12">
            <a 
              href="#research" 
              className="text-black hover:text-[#5E548E] transition-colors duration-200 text-base font-medium"
            >
              Research
            </a>
            <a 
              href="#team" 
              className="text-black hover:text-[#5E548E] transition-colors duration-200 text-base font-medium"
            >
              Team
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-black hover:text-[#5E548E] hover:bg-gray-100 transition-colors duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 