import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: '关于 About' },
  { href: '#members', label: '成员 Members' },
  { href: '#experience', label: '体验 Experience' },
  { href: '#gallery', label: '回顾 Gallery' },
  { href: '#contact', label: '联系 Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-void/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-2xl gradient-text">锤瓜</span>
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-orange transition-colors">CUIGUA</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm text-text-muted hover:text-text-primary transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-purple group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block px-5 py-2 bg-gradient-to-r from-accent-orange to-accent-purple text-white font-display font-medium text-sm rounded-full hover:opacity-90 transition-opacity">预约演出</a>

          <button className="md:hidden text-text-primary" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-void/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="font-body text-lg text-text-muted hover:text-text-primary transition-colors">{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setIsMobileOpen(false)} className="px-5 py-3 bg-gradient-to-r from-accent-orange to-accent-purple text-white font-display font-medium text-center rounded-full">预约演出</a>
        </div>
      </div>
    </nav>
  )
}
