import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';

type Category = 'all' | 'show' | 'installation' | 'behind' | 'animation' | 'poster' | 'merch';

const categoryLabels: Record<Category, string> = { all: '全部', show: '现场演出', installation: '视觉装置', behind: '幕后花絮', animation: '囧恩动画', poster: '演出海报', merch: '周边产品' };
const categoryEmojis: Record<string, string> = { show: '🎭', installation: '🖼️', behind: '📸', animation: '🎬', poster: '🎨', merch: '🎁' };
const gradients = ['from-[#ff6b35]/30 to-[#a855f7]/30', 'from-[#a855f7]/30 to-[#22d3ee]/30', 'from-[#22d3ee]/30 to-[#f472b6]/30', 'from-[#f472b6]/30 to-[#ff6b35]/30', 'from-[#ff6b35]/20 to-[#22d3ee]/30', 'from-[#a855f7]/20 to-[#f472b6]/30'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const filteredItems = activeCategory === 'all' ? siteConfig.gallery.items : siteConfig.gallery.items.filter((item) => item.category === activeCategory);
  const categories: Category[] = ['all', 'show', 'installation', 'behind', 'animation', 'poster', 'merch'];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-sm text-[#f472b6] font-mono tracking-widest mb-4 block">{siteConfig.gallery.titleEn}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.gallery.title}</h2>
          <p className="text-[#8a8a9a]">{siteConfig.gallery.description}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f472b6] to-[#a855f7] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-gradient-to-r from-[#f472b6] to-[#a855f7] text-white' : 'bg-[#1a1a24] text-[#8a8a9a] hover:text-white hover:bg-[#1a1a24]/80'}`}>{categoryLabels[category]}</button>
          ))}
        </div>

        <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item: { id: number; title: string; titleEn: string; category: string }, index: number) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} transition-transform duration-500 group-hover:scale-110`}>
                <div className="absolute inset-0 flex items-center justify-center"><span className="text-6xl opacity-30">{categoryEmojis[item.category] || '📁'}</span></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-white/60 text-sm">{item.titleEn}</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm"><span className="text-xs text-white/80">即将上线</span></div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && <div className="text-center py-20"><p className="text-[#8a8a9a]">该分类暂无内容</p></div>}
      </div>
    </section>
  );
}
