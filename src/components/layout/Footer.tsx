interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-white border-t border-gray-200 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-base text-black mb-4 md:mb-0">
            Copyright © 2025 CineLingo Inc. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex space-x-8 text-base text-black">
            <a href="/privacy" className="hover:text-[#5E548E] transition-colors duration-200">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[#5E548E] transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 