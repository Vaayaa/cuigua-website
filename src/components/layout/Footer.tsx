import { siteConfig } from '../../config/site';
import { Instagram, Globe, Video } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  Globe,
  Video,
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#a855f7] flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-lg font-bold text-white">{siteConfig.name}</span>
            </div>
            <span className="text-sm text-[#8a8a9a]">{siteConfig.footer.label}</span>
          </div>

          <div className="flex items-center gap-6">
            {siteConfig.contact.social.map((social: { name: string; url: string; icon: string }) => {
              const Icon = iconMap[social.icon] || Globe;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8a8a9a] hover:text-[#ff6b35] transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <div className="text-sm text-[#8a8a9a]">
            {siteConfig.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
