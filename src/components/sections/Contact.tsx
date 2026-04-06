import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';
import { Instagram, Globe, Video, Send, Check, Loader2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Instagram, Globe, Video };
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const inquiryTypes = [
    { value: 'performance', label: '演出邀约 / Performance Booking' },
    { value: 'collaboration', label: '项目合作 / Collaboration' },
    { value: 'press', label: '媒体采访 / Press Inquiry' },
    { value: 'other', label: '其他 / Other' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = '请输入您的姓名';
    if (!formData.email.trim()) newErrors.email = '请输入您的邮箱';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = '请输入有效的邮箱地址';
    if (!formData.type) newErrors.type = '请选择咨询类型';
    if (!formData.message.trim()) newErrors.message = '请输入您的留言';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setTimeout(() => { setStatus('idle'); setFormData({ name: '', email: '', type: '', message: '' }); }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-sm text-[#ff6b35] font-mono tracking-widest mb-4 block">{siteConfig.contact.titleEn}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.contact.title}</h2>
          <p className="text-[#8a8a9a] max-w-xl mx-auto">{siteConfig.contact.description}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b35] to-[#f472b6] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">邮箱</h3>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#ff6b35] hover:text-[#ff8555] transition-colors text-lg">{siteConfig.contact.email}</a>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">社交媒体</h3>
              <div className="space-y-4">
                {siteConfig.contact.social.map((social: { name: string; url: string; icon: string }) => {
                  const Icon = iconMap[social.icon] || Globe;
                  return <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#8a8a9a] hover:text-white transition-colors"><Icon size={20} /><span>{social.name}</span></a>;
                })}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">厂牌</h3>
              <p className="text-[#8a8a9a]">{siteConfig.footer.label}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">姓名 <span className="text-[#ff6b35]">*</span></label>
                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-[#1a1a24] border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-[#8a8a9a]/50 focus:outline-none focus:border-[#ff6b35] transition-colors`} placeholder="您的姓名" />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">邮箱 <span className="text-[#ff6b35]">*</span></label>
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-[#1a1a24] border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-[#8a8a9a]/50 focus:outline-none focus:border-[#ff6b35] transition-colors`} placeholder="your@email.com" />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-white mb-2">咨询类型 <span className="text-[#ff6b35]">*</span></label>
                <select id="type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-[#1a1a24] border ${errors.type ? 'border-red-500' : 'border-white/10'} text-white focus:outline-none focus:border-[#ff6b35] transition-colors`}>
                  <option value="" className="text-[#8a8a9a]">选择咨询类型</option>
                  {inquiryTypes.map((type) => <option key={type.value} value={type.value}>{type.label}</option>)}
                </select>
                {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">留言 <span className="text-[#ff6b35]">*</span></label>
                <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className={`w-full px-4 py-3 rounded-xl bg-[#1a1a24] border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white placeholder-[#8a8a9a]/50 focus:outline-none focus:border-[#ff6b35] transition-colors resize-none`} placeholder="请输入您的留言内容..." />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === 'loading' || status === 'success'} className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-[#ff6b35] to-[#f472b6] text-white hover:opacity-90'} disabled:opacity-50 disabled:cursor-not-allowed`}>
                {status === 'idle' && <><Send size={18} /><span>发送消息</span></>}
                {status === 'loading' && <><Loader2 size={18} className="animate-spin" /><span>发送中...</span></>}
                {status === 'success' && <><Check size={18} /><span>发送成功！</span></>}
                {status === 'error' && <><span>发送失败，请重试</span></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
