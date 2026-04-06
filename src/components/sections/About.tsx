import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '../../config/site';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="text-sm text-[#ff6b35] font-mono tracking-widest mb-4 block">{siteConfig.about.titleEn}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.about.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#a855f7] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#a855f7] flex items-center justify-center">
                  <span className="text-white text-xl">💫</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{siteConfig.about.philosophy.title}</h3>
                  <span className="text-xs text-[#8a8a9a]">{siteConfig.about.philosophy.titleEn}</span>
                </div>
              </div>
              <p className="text-[#8a8a9a] leading-relaxed mb-4">{siteConfig.about.philosophy.text}</p>
              <p className="text-[#8a8a9a]/60 leading-relaxed text-sm">{siteConfig.about.philosophy.textEn}</p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a855f7] to-[#22d3ee] flex items-center justify-center">
                  <span className="text-white text-xl">🎧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{siteConfig.about.concept.title}</h3>
                  <span className="text-xs text-[#8a8a9a]">{siteConfig.about.concept.titleEn}</span>
                </div>
              </div>
              <p className="text-[#8a8a9a] leading-relaxed mb-4">{siteConfig.about.concept.text}</p>
              <p className="text-[#8a8a9a]/60 leading-relaxed text-sm">{siteConfig.about.concept.textEn}</p>
            </div>

            <motion.blockquote initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="border-l-4 border-[#ff6b35] pl-6 py-2">
              <p className="text-2xl font-bold text-white mb-2">{siteConfig.tagline}</p>
              <p className="text-[#a855f7]">{siteConfig.taglineEn}</p>
            </motion.blockquote>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="relative h-[400px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <motion.path d="M 200 50 L 100 200 L 200 350 L 300 200 Z" fill="none" stroke="#ff6b35" strokeWidth="1" strokeDasharray="5 5" className="flowing-edge" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 0.5 }} />
              <motion.path d="M 200 50 L 300 200" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="5 5" className="flowing-edge" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 0.7 }} />
              <motion.path d="M 100 200 L 300 200" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="5 5" className="flowing-edge" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5, delay: 0.9 }} />
            </svg>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="absolute top-4 left-1/2 -translate-x-1/2 glass rounded-xl px-6 py-4">
              <p className="text-white font-bold">囧恩的神经漫游记</p>
              <p className="text-xs text-[#8a8a9a]">Jon's Neuron Odyssey</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.7 }} className="absolute top-1/2 left-4 -translate-y-1/2 glass rounded-xl px-6 py-4">
              <p className="text-white font-bold">谱造司</p>
              <p className="text-xs text-[#8a8a9a]">PUZAOSI</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.9 }} className="absolute top-1/2 right-4 -translate-y-1/2 glass rounded-xl px-6 py-4">
              <p className="text-white font-bold">通感漫游</p>
              <p className="text-xs text-[#8a8a9a]">Synesthetic Odyssey</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 1.1 }} className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-6 py-4">
              <p className="text-white font-bold">Kidult 群体</p>
              <p className="text-xs text-[#8a8a9a]">Adults with Childlike Hearts</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
