import { useEffect, useRef, useState } from 'react'
import { Image, Play, Clock } from 'lucide-react'

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

const galleryItems = [
  { id: 1, type: 'photo', label: '演出现场' },
  { id: 2, type: 'photo', label: 'VJ 视觉' },
  { id: 3, type: 'photo', label: '装置艺术' },
  { id: 4, type: 'video', label: '现场录制' },
  { id: 5, type: 'photo', label: '观众互动' },
  { id: 6, type: 'video', label: '幕后花絮' },
]

export default function Gallery() {
  const { ref, isInView } = useInView()

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-orange to-transparent opacity-20" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block font-mono text-xs text-accent-orange mb-4 tracking-widest">04 / GALLERY</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">演出现场 <span className="gradient-text">回顾</span></h2>
          <p className="font-body text-text-muted text-lg max-w-2xl">Show Archive — 记录每一个难忘的瞬间</p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {galleryItems.map((item, index) => (
            <div key={item.id} className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-elevated flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                  {item.type === 'video' ? <Play className="text-text-muted" size={32} /> : <Image className="text-text-muted" size={32} />}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-text-primary">{item.label}</span>
                  {item.type === 'video' && (
                    <div className="flex items-center gap-1 text-text-muted"><Clock size={12} /><span className="font-mono text-xs">Video</span></div>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-void/80 backdrop-blur-sm rounded-full border border-white/10">
                <span className="font-mono text-xs text-accent-orange">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-text-muted">更多现场照片与视频正在整理中...</p>
          <p className="font-mono text-xs text-text-muted/60 mt-2">More photos and videos coming soon</p>
        </div>
      </div>
    </section>
  )
}
