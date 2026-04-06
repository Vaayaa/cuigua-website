import { useEffect, useRef, useState } from 'react'
import { Sparkles, Heart, Compass } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isInView }
}

export default function About() {
  const { ref, isInView } = useInView()

  const pillars = [
    { icon: Sparkles, title: 'Pop-Surrealism', titleCn: '波普超现实', desc: '将平凡日常转化为超现实的视觉奇观', color: 'accent-orange' },
    { icon: Heart, title: 'Kidult', titleCn: '成人童心', desc: '接纳笨拙、脆弱与怪癖，在天真中寻找治愈', color: 'accent-pink' },
    { icon: Compass, title: 'Grotesque', titleCn: '怪诞美学', desc: '剥离具象，释放情绪最原始的力量', color: 'accent-purple' },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block font-mono text-xs text-accent-purple mb-4 tracking-widest">01 / ABOUT</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">关于 <span className="gradient-text">锤瓜</span></h2>
          <p className="font-body text-text-muted text-lg max-w-2xl">About CUIGUA — 视听艺术的漫游者</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            <p className="font-body text-lg leading-relaxed text-text-primary">
              <strong className="text-accent-orange">锤瓜（CUIGUA）</strong>是视听艺术厂牌<strong className="text-accent-purple">谱造司（PUZAOSI）</strong>旗下的核心 Audio Visual 演出项目。
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted">
              由声音艺术家 <strong className="text-text-primary">Mr.V</strong> 与视觉艺术家<strong className="text-text-primary"> VJ Mian</strong> 共同驱动，通过声音与影像的<strong className="text-accent-cyan">深度缠绕</strong>，将原创 IP《囧恩的神经漫游记》转化为一部献给<strong className="text-accent-pink"> Kidult（成人童心）</strong>群体的"沉浸式视听绘本"。
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted">
              聚焦于<span className="text-accent-orange font-medium">"不完美治愈力"</span>这一内核，通过接纳个体的笨拙、脆弱与怪癖，在感官的震荡中完成一场关于自我意识的<strong className="text-accent-purple">"漫游"</strong>。
            </p>
          </div>

          <div className="relative h-80 lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-elevated rounded-3xl overflow-hidden border border-white/5">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
                <defs>
                  <linearGradient id="mazeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                {[...Array(12)].map((_, i) => (
                  <line key={`h-${i}`} x1="40" y1={60 + i * 28} x2="360" y2={60 + i * 28} stroke="url(#mazeGrad)" strokeWidth="1" strokeDasharray={i % 3 === 0 ? '0' : '8 12'} />
                ))}
                {[...Array(12)].map((_, i) => (
                  <line key={`v-${i}`} x1={60 + i * 30} y1="40" x2={60 + i * 30} y2="360" stroke="url(#mazeGrad)" strokeWidth="1" strokeDasharray={i % 4 === 0 ? '0' : '8 12'} />
                ))}
                <circle cx="200" cy="200" r="40" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                <circle cx="200" cy="200" r="8" fill="#ff6b35" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group p-8 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/5 transition-all duration-500 hover:scale-[1.02] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-${pillar.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`text-${pillar.color}`} size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-1">{pillar.titleCn}</h3>
              <p className="font-mono text-xs text-text-muted mb-4">{pillar.title}</p>
              <p className="font-body text-sm text-text-muted leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
