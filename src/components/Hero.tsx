import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Code2, ShieldCheck, GitBranch, Cpu } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = [
  'Technical Product & Operations Lead',
  'ConTech Systems Architect',
  'Enterprise ERP Auditor',
  'Full-Stack Solutions Engineer',
  'Operational Governance Specialist',
];

export default function Hero() {
  const typedText = useTypewriter(roles, 80, 50, 2000);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-28 md:py-36">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-amber-500/30 text-xs sm:text-sm text-zinc-300 mb-8 shadow-lg shadow-black/50"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
          <span className="text-zinc-200">Available for Strategic Initiatives & Enterprise Advisory</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-[var(--font-heading)] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text text-glow-gold">Abdulaziz</span>
        </motion.h1>

        {/* Typewriter text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-2xl text-zinc-300 mb-6 h-9 font-medium flex items-center justify-center"
        >
          <span>{typedText}</span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-center"
        >
          Bridging high-stakes enterprise operations with resilient digital architectures. Driving digital
          transformation, ERP systems governance, and ConTech innovation in turnkey contracting.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            <Code2 size={18} />
            <span>Explore Strategic Work</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            <Briefcase size={18} />
            <span>Initiate Conversation</span>
          </a>
        </motion.div>

        {/* 3-Pillar Symmetrical Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl bento-card rounded-3xl p-6 sm:p-8 text-center shadow-2xl"
        >
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-md">
              <ShieldCheck size={20} className="text-amber-400" />
            </div>
            <div>
              <div className="text-white text-sm font-bold">Governance</div>
              <div className="text-zinc-400 text-xs mt-1">Risk mitigation & vendor audits</div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 rounded-2xl bg-zinc-800/80 border border-white/10 flex items-center justify-center shadow-md">
              <GitBranch size={20} className="text-zinc-300" />
            </div>
            <div>
              <div className="text-white text-sm font-bold">Alignment</div>
              <div className="text-zinc-400 text-xs mt-1">Cross-departmental synergy</div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-md">
              <Cpu size={20} className="text-amber-400" />
            </div>
            <div>
              <div className="text-white text-sm font-bold">Architecture</div>
              <div className="text-zinc-400 text-xs mt-1">Scalable ERP & full-stack core</div>
            </div>
          </div>
        </motion.div>

        {/* Centered Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-zinc-500 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-zinc-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
