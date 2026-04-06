import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = []
    const colors = ['#ff6b35', '#a855f7', '#22d3ee', '#f472b6']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(8, 8, 12, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + '40'
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-white/5 mb-8">
          <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
          <span className="font-mono text-xs text-text-muted">AUDIO VISUAL / 视听演出</span>
        </div>

        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-6">
          <span className="gradient-text">锤瓜</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl text-text-primary mt-2 font-medium">CUIGUA</span>
        </h1>

        <p className="font-body text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-8">
          通感漫游 <span className="text-accent-purple">Synesthetic Odyssey</span>
        </p>

        <p className="font-body text-base text-text-muted/80 max-w-xl mx-auto mb-12 leading-relaxed">
          不完美治愈力 · The Healing Power of Imperfection
          <br />
          <span className="text-sm">献给每一个 Kidult（成人童心）</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#experience" className="px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-purple text-white font-display font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105">探索体验</a>
          <a href="#about" className="px-8 py-4 bg-surface/50 backdrop-blur-sm border border-white/10 text-text-primary font-display font-medium rounded-full hover:bg-surface/70 transition-colors">了解更多</a>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 animate-bounce" style={{ animationDuration: '2s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(255, 107, 53, 0.3)' }}>
          <span className="text-4xl md:text-5xl">囧</span>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted animate-bounce" style={{ animationDuration: '2s' }}>
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
