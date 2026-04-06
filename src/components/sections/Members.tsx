import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '../../config/site';

export default function Members() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="members" className="py-24 md:py-32 bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-[#a855f7] font-mono tracking-widest mb-4 block">
            THE ARTISTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            核心成员
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] mx-auto rounded-full" />
        </motion.div>

        {/* Members grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.members.map((member: { id: string; name: string; role: string; roleEn: string; description: string; descriptionEn: string; accent: string }, index: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 group-hover:scale-[1.02] ${
                  member.accent === 'orange'
                    ? 'bg-gradient-to-br from-[#1a1a24] to-[#12121a] border border-[#ff6b35]/20 group-hover:border-[#ff6b35]/40'
                    : 'bg-gradient-to-br from-[#1a1a24] to-[#12121a] border border-[#a855f7]/20 group-hover:border-[#a855f7]/40'
                }`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    member.accent === 'orange'
                      ? 'bg-gradient-to-r from-[#ff6b35]/10 to-transparent'
                      : 'bg-gradient-to-r from-[#a855f7]/10 to-transparent'
                  }`}
                />

                {/* Avatar */}
                <div className="flex items-center gap-6 mb-6">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center ${
                      member.accent === 'orange'
                        ? 'bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/5'
                        : 'bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5'
                    }`}
                  >
                    <span className="text-4xl">
                      {member.id === 'mr-v' ? '🎛️' : '👁️'}
                    </span>
                  </motion.div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                    <p
                      className={`text-sm font-medium ${
                        member.accent === 'orange' ? 'text-[#ff6b35]' : 'text-[#a855f7]'
                      }`}
                    >
                      {member.role}
                    </p>
                    <p className="text-xs text-[#8a8a9a]">{member.roleEn}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#8a8a9a] leading-relaxed mb-4">
                  {member.description}
                </p>
                <p className="text-[#8a8a9a]/60 leading-relaxed text-sm mb-6">
                  {member.descriptionEn}
                </p>

                {/* Decorative element */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${
                    member.accent === 'orange' ? 'bg-[#ff6b35]' : 'bg-[#a855f7]'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection line between members */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="relative flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent" />
            <span className="text-[#8a8a9a] text-sm">声音 × 视觉</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
