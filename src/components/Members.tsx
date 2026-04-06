import { useEffect, useRef, useState } from 'react'
import { Disc, Monitor } from 'lucide-react'

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

const members = [
  {
    name: 'Mr.V', role: '声音艺术家 / Sound Artist', label: 'SOUND', icon: Disc, color: 'accent-orange',
    desc: '电子音乐制作人，专注于 Techno、Experimental Electronic、Ambient、Downtempo 与 IDM。将声音作为雕塑材料，在频率的褶皱中寻找不完美的美。',
    aesthetic: '深邃的低频脉冲，与视觉同步呼吸',
  },
  {
    name: 'VJ Mian', role: '视觉艺术家 / Visual Artist', label: 'VISUAL', icon: Monitor, color: 'accent-purple',
    desc: 'VJ 与视觉设计师，创造了跳舞的囧恩、迷宫头、无脸怪兽等原创视觉语言。以波普超现实主义手法，将情绪转化为可游走的视觉空间。',
    aesthetic: '流动的像素迷宫，先锋而温柔',
  },
]

export default function Members() {
  const { ref, isInView } = useInView()

  return (
    <section id="members" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block font-mono text-xs text-accent-cyan mb-4 tracking-widest">02 / MEMBERS</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">核心 <span className="gradient-text">成员</span></h2>
          <p className="font-body text-text-muted text-lg max-w-2xl">The Creators — 声音与影像的双重驱动</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`group relative p-8 bg-surface/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br from-${member.color}/0 via-${member.color}/20 to-${member.color}/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              <div className="relative">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-${member.color}/20 to-${member.color}/5 border border-${member.color}/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <member.icon className={`text-${member.color}`} size={40} />
                </div>
                <span className={`inline-block px-3 py-1 rounded-full bg-${member.color}/10 text-${member.color} font-mono text-xs mb-4`}>{member.label}</span>
                <h3 className="font-display font-bold text-3xl mb-1">{member.name}</h3>
                <p className="font-body text-text-muted text-sm mb-6">{member.role}</p>
                <p className="font-body text-base text-text-primary/90 leading-relaxed mb-6">{member.desc}</p>
                <div className={`flex items-center gap-2 text-sm text-${member.color}/80 font-body italic`}>
                  <span className={`w-8 h-px bg-${member.color}/40`} />
                  {member.aesthetic}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-text-muted mb-2">UNDER THE UMBRELLA OF</p>
          <h3 className="font-display font-bold text-2xl gradient-text">谱造司 PUZAOSI</h3>
          <p className="font-body text-sm text-text-muted mt-2">视听艺术厂牌 / Audio Visual Label</p>
        </div>
      </div>
    </section>
  )
}
