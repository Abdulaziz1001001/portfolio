import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Code2, Layers, ShieldCheck, GitBranch, Cpu } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink/20 rounded-full blur-[120px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          Available for Strategic Initiatives & Advisory
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text text-glow-blue">Abdulaziz</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 h-9 font-medium"
        >
          <span>{typedText}</span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Bridging high-stakes enterprise operations with resilient technical systems. Driving digital
          transformation, ERP architecture, and vendor governance in turnkey contracting.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary flex items-center gap-2"
          >
            <Code2 size={18} />
            Explore Strategic Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline flex items-center gap-2"
          >
            <Briefcase size={18} />
            Initiate Conversation
          </a>
        </motion.div>

        {/* Strategic Focus Pillars Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto glass-card rounded-2xl p-6 text-left"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-electric/15 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck size={18} className="text-electric-light" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Governance</div>
              <div className="text-gray-400 text-xs mt-0.5">Risk mitigation & vendor audits</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-pink/15 flex items-center justify-center shrink-0 mt-0.5">
              <GitBranch size={18} className="text-pink" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Alignment</div>
              <div className="text-gray-400 text-xs mt-0.5">Cross-departmental synergy</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald/15 flex items-center justify-center shrink-0 mt-0.5">
              <Cpu size={18} className="text-emerald" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Architecture</div>
              <div className="text-gray-400 text-xs mt-0.5">Scalable ERP & full-stack core</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-1/3 left-[10%] hidden lg:block text-electric/30"
      >
        <Layers size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 right-[8%] hidden lg:block text-pink/30"
      >
        <Code2 size={48} />
      </motion.div>
    </section>
  );
}
