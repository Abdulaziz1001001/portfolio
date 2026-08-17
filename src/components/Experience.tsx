import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const timelineItems = [
  {
    type: 'work' as const,
    title: 'IT Operations & Systems Architecture Lead',
    org: 'AMD United Contracting Company',
    period: 'Present',
    description:
      'Directing corporate technology operations, proprietary ERP/HR auditing, and vendor engineering reviews with Value Plus. Governing cross-functional integration across construction, procurement, and administrative branches.',
    highlights: ['ERP Governance', 'Vendor Audits', 'Operations Strategy', 'Cross-Branch Alignment'],
    icon: Briefcase,
    color: 'electric',
  },
  {
    type: 'project' as const,
    title: 'Lead Product Engineer & Technical Designer',
    org: '"Wooden" Interactive E-Commerce',
    period: 'Recent',
    description:
      'Architected an end-to-end commercial product featuring interactive 3D furniture customization and spatial previews, developed using React Native, TypeScript, Express.js, and Supabase.',
    highlights: ['React Native', 'Express APIs', 'Supabase', '3D WebGL'],
    icon: Award,
    color: 'pink',
  },
  {
    type: 'education' as const,
    title: 'Diploma in Programming & Database Systems',
    org: 'King Saud University — Applied College',
    period: 'Current',
    description:
      'Rigorous academic study in relational database modeling, algorithms, and software engineering principles, forming the basis for scalable systems architecture.',
    highlights: ['Database Architecture', 'Software Engineering', 'Applied CS'],
    icon: GraduationCap,
    color: 'cyan',
  },
  {
    type: 'education' as const,
    title: 'Bachelor in Applied Computing (Bridge Track)',
    org: 'King Saud University',
    period: 'Upcoming',
    description:
      'Advancing towards a full bachelor’s degree in Applied Computing, focusing on enterprise software architecture, cloud computing paradigms, and intelligent system design.',
    highlights: ['Enterprise Architecture', 'Cloud Systems', 'Advanced Computing'],
    icon: GraduationCap,
    color: 'emerald',
  },
];

const colorMap: Record<string, { dot: string; bg: string; text: string; border: string }> = {
  electric: { dot: 'bg-electric', bg: 'bg-electric/10', text: 'text-electric-light', border: 'border-electric/20' },
  pink: { dot: 'bg-pink', bg: 'bg-pink/10', text: 'text-pink', border: 'border-pink/20' },
  cyan: { dot: 'bg-cyan', bg: 'bg-cyan/10', text: 'text-cyan', border: 'border-cyan/20' },
  emerald: { dot: 'bg-emerald', bg: 'bg-emerald/10', text: 'text-emerald', border: 'border-emerald/20' },
};

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32 relative w-full overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric text-sm font-semibold tracking-widest uppercase">Career Trajectory</span>
            <h2 className="section-title mt-3">
              Experience & <span className="gradient-text">Milestones</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A progressive journey of operational leadership, technical mastery, and continuous academic elevation.
            </p>
          </div>

          {/* Centered Milestones Stream */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {timelineItems.map((item, i) => {
              const colors = colorMap[item.color];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="w-full"
                >
                  <div className={`glass-card rounded-3xl p-6 sm:p-8 border ${colors.border} hover:border-white/20 transition-all text-center flex flex-col items-center shadow-xl relative overflow-hidden`}>
                    {/* Header with Icon & Org Badge */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 text-center">
                      <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center shadow-md`}>
                        <item.icon size={20} className={colors.text} />
                      </div>
                      <div className="flex items-center gap-2 text-center flex-wrap justify-center">
                        <span className={`text-xs sm:text-sm font-semibold ${colors.text} px-3 py-1 rounded-full bg-white/5 border border-white/10`}>
                          {item.period}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm font-medium">
                          {item.org}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-white mb-3 text-center">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 text-center max-w-2xl mx-auto">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
