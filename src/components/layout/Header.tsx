interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">CineLingo</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
            >
              Home
            </a>
            <a 
              href="#research" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
            >
              Research
            </a>
            <a 
              href="#team" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
            >
              Team
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 