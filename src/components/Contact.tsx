import { useEffect, useRef, useState } from 'react'
import { Send, Mail, MapPin, MessageCircle } from 'lucide-react'

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

export default function Contact() {
  const { ref, isInView } = useInView()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-surface/10 to-void" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block font-mono text-xs text-accent-cyan mb-4 tracking-widest">05 / CONTACT</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">预约 <span className="gradient-text">演出</span></h2>
          <p className="font-body text-text-muted text-lg max-w-xl mx-auto">Book a Show — 合作、演出、媒体 inquiries</p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-8">
            <div className="p-6 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/5">
              <h3 className="font-display font-semibold text-xl mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center"><Mail className="text-accent-purple" size={18} /></div>
                  <div><p className="font-mono text-xs text-text-muted">Email</p><p className="font-body text-text-primary">booking@puzaosi.com</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center"><MapPin className="text-accent-orange" size={18} /></div>
                  <div><p className="font-mono text-xs text-text-muted">Base</p><p className="font-body text-text-primary">上海 Shanghai</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center"><MessageCircle className="text-accent-cyan" size={18} /></div>
                  <div><p className="font-mono text-xs text-text-muted">WeChat</p><p className="font-body text-text-primary">puzaosi</p></div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-accent-purple/10 to-accent-orange/10 rounded-2xl border border-white/5">
              <p className="font-mono text-xs text-text-muted mb-2">PRESENTED BY</p>
              <h3 className="font-display font-bold text-2xl gradient-text mb-2">谱造司 PUZAOSI</h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">专注于 Audio Visual 艺术的实验厂牌。探索声音与影像的无限可能，创造独特的沉浸式体验。</p>
            </div>
          </div>

          <div className="p-8 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/5">
            <h3 className="font-display font-semibold text-xl mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-text-muted mb-2">姓名 / Name</label>
                <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 bg-elevated/50 border border-white/5 rounded-xl text-text-primary font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent-purple/50 transition-colors" placeholder="你的名字" />
              </div>
              <div>
                <label className="block font-mono text-xs text-text-muted mb-2">邮箱 / Email</label>
                <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 bg-elevated/50 border border-white/5 rounded-xl text-text-primary font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent-purple/50 transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block font-mono text-xs text-text-muted mb-2">消息 / Message</label>
                <textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 bg-elevated/50 border border-white/5 rounded-xl text-text-primary font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent-purple/50 transition-colors resize-none" placeholder="关于合作、演出、媒体合作等..." />
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-display font-semibold flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'bg-surface/80 text-text-muted cursor-not-allowed' : submitted ? 'bg-green-500/20 text-green-400' : 'bg-gradient-to-r from-accent-orange to-accent-purple text-white hover:opacity-90'}`}>
                {isSubmitting ? (<><span className="w-4 h-4 border-2 border-text-muted/30 border-t-text-muted rounded-full animate-spin" />发送中...</>) : submitted ? '✓ 消息已发送' : (<><Send size={18} />发送消息</>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
