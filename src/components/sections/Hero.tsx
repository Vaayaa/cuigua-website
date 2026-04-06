import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#ff6b35]/30"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`purple-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[#a855f7]/30"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#ff6b35]/30 text-sm text-[#ff6b35] font-mono">
            {siteConfig.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-8xl md:text-9xl font-bold mb-4"
        >
          <span className="gradient-text">{siteConfig.hero.title}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-white/90 mb-6 tracking-widest"
        >
          {siteConfig.hero.titleEn}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-[#8a8a9a] mb-2">{siteConfig.hero.subtitle}</p>
          <p className="text-lg text-[#8a8a9a]/60">{siteConfig.hero.subtitleEn}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">{siteConfig.tagline}</p>
          <p className="text-lg text-[#a855f7]">{siteConfig.taglineEn}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-[#8a8a9a] max-w-2xl mx-auto"
        >
          {siteConfig.hero.description}
          <br />
          <span className="text-[#8a8a9a]/60">{siteConfig.hero.descriptionEn}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#experience" className="px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#a855f7] text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
            探索体验
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
            联系合作
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-20 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#ff6b35" strokeWidth="2" strokeDasharray="5 3" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
          <motion.circle cx="50" cy="50" r="30" fill="none" stroke="#a855f7" strokeWidth="1.5" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
          <motion.ellipse cx="40" cy="45" rx="5" ry="7" fill="#ff6b35" animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.ellipse cx="60" cy="45" rx="5" ry="7" fill="#ff6b35" animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.1 }} />
          <motion.path d="M 35 60 Q 50 70 65 60" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" animate={{ d: ["M 35 60 Q 50 70 65 60", "M 35 60 Q 50 55 65 60", "M 35 60 Q 50 70 65 60"] }} transition={{ duration: 1, repeat: Infinity }} />
        </svg>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#8a8a9a] flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest">SCROLL</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
