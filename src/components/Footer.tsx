import { Globe, Music } from 'lucide-react'

const socialLinks = [
  { icon: Globe, label: 'Social', href: '#' },
  { icon: Music, label: 'Bandcamp', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl gradient-text">锤瓜</span>
              <span className="font-mono text-xs text-text-muted">CUIGUA</span>
            </div>
            <p className="font-mono text-xs text-text-muted">谱造司 PUZAOSI</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="w-10 h-10 rounded-full bg-surface/80 flex items-center justify-center text-text-muted hover:text-accent-orange hover:bg-surface transition-colors" aria-label={link.label}>
                <link.icon size={18} />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-xs text-text-muted">© {new Date().getFullYear()} 锤瓜 CUIGUA</p>
            <p className="font-mono text-xs text-text-muted/60 mt-1">不完美治愈力 · All Rights Reserved</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="font-display text-sm text-text-muted/60 italic">通感漫游 · Synesthetic Odyssey</p>
        </div>
      </div>
    </footer>
  )
}
