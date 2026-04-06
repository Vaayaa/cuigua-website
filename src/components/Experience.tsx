import { useEffect, useRef, useState } from 'react'
import { Layers, Zap, Eye, Music } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true) }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isInView }
}

const visualElements = [
  { title: '跳舞的囧恩', titleEn: "Dancing Jiong'en", desc: '节奏律动中展现笨拙而治愈的生命力。一个圆润的、不断变化的形态，在节拍中跳跃、摇摆、呼吸。', color: '#ff6b35' },
  { title: '迷宫头', titleEn: 'Maze Head', desc: '无限延伸的意识迷宫，象征思考的困局与突破。观者在视觉的迷宫中游走，寻找出口，也寻找自己。', color: '#a855f7' },
  { title: '无脸怪兽', titleEn: 'Faceless Monster', desc: '剥离具象特征的情绪载体，先锋怪诞的超现实美感。没有面孔，却能唤起最直接的情感共鸣。', color: '#f472b6' },
]

const experienceFeatures = [
  { icon: Layers, title: '音画同构', titleEn: 'Audio-Visual Synesthesia', desc: '声音与影像不再是平行线，而是同一条河流。频率成为形状，节奏成为运动。' },
  { icon: Zap, title: '沉浸感受', titleEn: 'Immersive Experience', desc: '在黑暗中，声音包裹你，影像吞噬你。你不再是观众，而是体验的一部分。' },
  { icon: Eye, title: '通感漫游', titleEn: 'Synesthetic Odyssey', desc: '一场关于感官的漫游，让听觉看见，让视觉听见，让感知突破边界。' },
  { icon: Music, title: '不完美治愈', titleEn: 'Healing Imperfection', desc: '在缺陷中找到美，在笨拙中发现力量。这不是完美的演出，这是一场真实的治愈。' },
]

export default function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-surface/20 to-void" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block font-mono text-xs text-accent-pink mb-4 tracking-widest">03 / EXPERIENCE</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4"><span className="gradient-text">通感漫游</span></h2>
          <p className="font-body text-text-muted text-lg">Synesthetic Odyssey — 声音与影像的深度缠绕</p>
        </div>

        <div className={`mb-20 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-display font-semibold text-xl mb-8 text-center text-text-muted">原创视觉语言 <span className="text-sm font-mono">/ Visual Vocabulary</span></h3>
          <div className="grid md:grid-cols-3 gap-6">
            {visualElements.map((el, idx) => (
              <div key={el.title} className="group relative p-6 bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-60" style={{ background: `linear-gradient(to right, ${el.color}, transparent)` }} />
                <div className="w-full h-32 rounded-xl mb-6 flex items-center justify-center overflow-hidden" style={{ background: `${el.color}10` }}>
                  <div className="w-16 h-16 rounded-full blur-sm animate-pulse-glow" style={{ background: el.color, opacity: 0.4 }} />
                </div>
                <h4 className="font-display font-semibold text-lg mb-1">{el.title}</h4>
                <p className="font-mono text-xs text-text-muted mb-3">{el.titleEn}</p>
                <p className="font-body text-sm text-text-muted leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {experienceFeatures.map((feature) => (
            <div key={feature.title} className="group p-6 bg-elevated/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-accent-purple/20 transition-all duration-300">
              <feature.icon className="text-accent-purple mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="font-display font-semibold mb-1">{feature.title}</h4>
              <p className="font-mono text-xs text-text-muted mb-3">{feature.titleEn}</p>
              <p className="font-body text-sm text-text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-text-muted mb-4">SOUND STYLE</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Techno', 'Experimental Electronic', 'Ambient', 'Downtempo', 'IDM'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-white/5 font-mono text-xs text-text-muted hover:text-accent-cyan hover:border-accent-cyan/20 transition-colors">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
