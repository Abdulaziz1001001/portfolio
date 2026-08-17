import { motion } from 'framer-motion';
import { Dumbbell, ShieldAlert, Cpu } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const pillars = [
  {
    icon: Dumbbell,
    title: 'Disciplined Execution',
    text: 'A relentless commitment cultivated through years of strength training. Success in complex operations requires showing up daily, methodically removing bottlenecks, and holding high standards.',
    color: 'text-pink',
    bg: 'bg-pink/10',
  },
  {
    icon: Cpu,
    title: 'Structural Integrity',
    text: 'Whether evaluating 3D architectural elevations in AutoCAD or modeling relational databases in Supabase, the principle remains constant: architect a foundation built to sustain heavy operational load.',
    color: 'text-electric-light',
    bg: 'bg-electric/10',
  },
  {
    icon: ShieldAlert,
    title: 'Governance & Risk Control',
    text: 'Preventing scope creep and technical debt through rigorous requirements auditing, objective vendor review criteria, and uncompromising cross-departmental alignment.',
    color: 'text-emerald',
    bg: 'bg-emerald/10',
  },
];

export default function Philosophy() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="philosophy" className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-pink text-sm font-semibold tracking-widest uppercase">Guiding Philosophy</span>
            <h2 className="section-title mt-3">
              Execution Discipline & <span className="gradient-text-reverse">Operational Rigor</span>
            </h2>
            <p className="section-subtitle mx-auto">
              In enterprise operations and high-stakes contracting, systems fail not from a lack of ambition, but from weak architecture and undisciplined execution.
            </p>
          </div>

          {/* Quote Block */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 sm:p-12 text-center mb-12 relative border border-white/10 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="text-5xl text-electric/30 font-serif leading-none mb-3">"</div>
            <p className="text-lg sm:text-xl text-gray-200 italic leading-relaxed max-w-2xl mx-auto relative z-10 font-normal">
              The exact rigor I cultivate in weightlifting translates directly into tech leadership: showing up consistently, methodically eliminating operational friction, and ensuring enterprise architectures{' '}
              <span className="gradient-text font-semibold not-italic">never buckle under load</span>.
            </p>
            <div className="mt-6 text-gray-400 text-sm font-medium">— Abdulaziz Al-Akkah</div>
          </motion.blockquote>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="glass-card rounded-3xl p-8 text-center group border border-white/5 hover:border-white/20 transition-all shadow-xl"
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl ${pillar.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <pillar.icon size={24} className={pillar.color} />
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
