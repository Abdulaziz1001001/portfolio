import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Building2, CheckCircle2, ShieldCheck, Cpu, GitBranch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[180px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-electric text-sm font-semibold tracking-widest uppercase">Executive Profile</span>
            <h2 className="section-title mt-3">
              About <span className="gradient-text">Abdulaziz</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A high-impact Technical Product & Operations Lead translating enterprise business needs into bulletproof digital architectures.
            </p>
          </div>

          {/* Unified Centered Executive Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 sm:p-12 text-center relative border border-white/10 shadow-2xl max-w-4xl mx-auto"
          >
            {/* Centered Avatar / Title Header */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-electric via-pink to-electric-dark p-1 shadow-xl shadow-electric/25 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                    <span className="text-4xl font-bold font-[var(--font-heading)] gradient-text">A</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-dark-900/90 border border-white/15 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                  <span className="text-[11px] font-medium text-gray-300">Verified Lead</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
                <Building2 size={14} className="text-electric-light" />
                <span>AMD United Contracting Company • IT & Technical Operations</span>
              </div>

              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-white leading-snug max-w-2xl mx-auto">
                Transforming Operational Complexity into Scalable Digital Engines
              </h3>
            </div>

            {/* Centered Lead Copy */}
            <div className="space-y-4 max-w-3xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed mb-10">
              <p>
                I operate at the strategic convergence of enterprise business logic, software engineering, and turnkey contracting. Within the IT & Technical Operations leadership at AMD United Contracting Company, I eliminate the friction between corporate vision and technical delivery.
              </p>
              <p className="text-gray-400">
                My primary focus centers on end-to-end system governance: auditing bespoke ERP and HR functional requirements, engineering robust multi-department workflows, and actively steering external vendor development to mitigate scope drift and ensure architectural compliance.
              </p>
            </div>

            {/* Centered 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-center">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald/15 flex items-center justify-center text-emerald mb-2.5">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-white text-sm font-semibold mb-1">Vendor Oversight</div>
                <div className="text-gray-400 text-xs">Architectural audits & QA enforcement</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center text-electric-light mb-2.5">
                  <GitBranch size={20} />
                </div>
                <div className="text-white text-sm font-semibold mb-1">Workflow Auditing</div>
                <div className="text-gray-400 text-xs">Turnkey contracting & ERP/HR BRD</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-pink/15 flex items-center justify-center text-pink mb-2.5">
                  <Cpu size={20} />
                </div>
                <div className="text-white text-sm font-semibold mb-1">Full-Stack Delivery</div>
                <div className="text-gray-400 text-xs">React Native, TypeScript & Supabase</div>
              </div>
            </div>

            {/* Centered Location & Education Badges */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-xs sm:text-sm text-gray-300 border border-white/5">
                <MapPin size={15} className="text-pink" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-xs sm:text-sm text-gray-300 border border-white/5">
                <GraduationCap size={15} className="text-electric-light" />
                <span>King Saud University</span>
              </div>
            </div>

            {/* Centered CTA Button */}
            <div className="flex justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-8 py-3"
              >
                Connect Directly
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
