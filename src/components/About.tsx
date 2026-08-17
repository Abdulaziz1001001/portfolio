import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric text-sm font-semibold tracking-widest uppercase">Executive Profile</span>
            <h2 className="section-title mt-3">
              About <span className="gradient-text">Abdulaziz</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A high-impact Technical Product & Operations Lead translating enterprise business needs into bulletproof digital architectures.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Photo Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="gradient-border">
                <div className="aspect-[4/5] rounded-2xl bg-dark-700 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile photo */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-electric to-pink flex items-center justify-center mb-4 shadow-lg shadow-electric/20">
                      <span className="text-5xl font-bold font-[var(--font-heading)] text-white">A</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Abdulaziz Al-Akkah</p>
                    <p className="text-gray-500 text-xs mt-1">Operations & Tech Lead</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 flex items-center gap-3 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-electric/20 flex items-center justify-center">
                  <Building2 size={20} className="text-electric-light" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">AMD United</div>
                  <div className="text-gray-400 text-xs">IT & Technical Operations</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6 text-center flex flex-col items-center"
            >
              <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white leading-snug text-center">
                Transforming Operational Complexity into Scalable Digital Engines
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base text-center">
                I operate at the strategic convergence of enterprise business logic, software engineering, and turnkey contracting. Within the IT & Technical Operations leadership at AMD United Contracting Company, I eliminate the friction between corporate vision and technical delivery.
              </p>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base text-center">
                My primary focus centers on end-to-end system governance: auditing bespoke ERP and HR functional requirements, engineering robust multi-department workflows, and actively steering external vendor development to mitigate scope drift and ensure architectural compliance.
              </p>

              {/* Core Competency Bullets */}
              <div className="space-y-2.5 pt-2 flex flex-col items-center w-full">
                <div className="flex items-center justify-center gap-2.5 text-sm text-gray-300 text-center">
                  <CheckCircle2 size={16} className="text-emerald shrink-0" />
                  <span>Strategic vendor management & architectural review</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 text-sm text-gray-300 text-center">
                  <CheckCircle2 size={16} className="text-emerald shrink-0" />
                  <span>Turnkey contracting workflow & ERP/HR auditing</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 text-sm text-gray-300 text-center">
                  <CheckCircle2 size={16} className="text-emerald shrink-0" />
                  <span>Full-Stack product delivery (React Native, TypeScript, Supabase)</span>
                </div>
              </div>

              {/* Info Tags */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-xs md:text-sm text-gray-300 border border-white/5">
                  <MapPin size={14} className="text-pink" />
                  Riyadh, Saudi Arabia
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-xs md:text-sm text-gray-300 border border-white/5">
                  <GraduationCap size={14} className="text-electric-light" />
                  King Saud University
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-center w-full">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  Connect Directly
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
