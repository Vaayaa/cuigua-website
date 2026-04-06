import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#a855f7] flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <span className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors">
              {siteConfig.name}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navigation.map((item: { name: string; nameEn: string; href: string }) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-[#8a8a9a] hover:text-white transition-colors relative group"
            >
              <span className="mr-1">{item.name}</span>
              <span className="text-xs text-[#8a8a9a]/60">{item.nameEn}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#a855f7] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/98 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {siteConfig.navigation.map((item: { name: string; nameEn: string; href: string }) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-white hover:text-[#ff6b35] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-2">{item.name}</span>
              <span className="text-sm text-[#8a8a9a]">{item.nameEn}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
