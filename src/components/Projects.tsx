import { motion } from 'framer-motion';
import { ExternalLink, Settings, ShoppingCart, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TiltCard from './ui/TiltCard';

const projects = [
  {
    id: 1,
    title: 'Contracting ERP & HR Architecture',
    subtitle: 'Enterprise Systems Auditing & Workflow Governance',
    description:
      'Formulated, audited, and structured comprehensive functional requirements for a custom Contracting ERP & HR ecosystem. Redesigned multi-departmental approval hierarchies, integrated procurement-to-site workflows, and established strict role-based access governance.',
    role: 'Systems Auditor & Technical Operations Lead',
    tags: ['ERP Architecture', 'Workflow Governance', 'BRD Auditing', 'ConTech Systems'],
    icon: Settings,
    gradient: 'from-electric to-electric-light',
    accentColor: 'text-electric-light',
    impactBadge: 'Governance & Operational Integrity',
    impact: 'Eliminated operational bottlenecks, established full audit compliance, and secured seamless cross-departmental coordination.',
  },
  {
    id: 2,
    title: 'Vendor Delivery & Governance (Value Plus)',
    subtitle: 'Technical Review & Delivery Risk Mitigation',
    description:
      'Steered high-level technical sprint reviews and integration alignment sessions with external development agency Value Plus. Audited code milestones against contractual business specifications, prevented scope creep, and secured seamless departmental data interfaces.',
    role: 'Technical Reviewer & Product Lead',
    tags: ['Vendor Oversight', 'Scope Control', 'Technical Review', 'Contract Governance'],
    icon: Users,
    gradient: 'from-pink to-pink-light',
    accentColor: 'text-pink',
    impactBadge: 'Risk Mitigation & Quality Assurance',
    impact: 'Mitigated delivery risks, safeguarded schedule integrity, and enforced tight architectural compliance across all deliverables.',
  },
  {
    id: 3,
    title: '"Wooden" Interactive 3D Platform',
    subtitle: 'Full-Stack Engineering & 3D Web/Mobile Delivery',
    description:
      'Engineered an end-to-end e-commerce product platform featuring interactive 3D furniture previews and real-time customization. Developed using React Native, TypeScript, Express.js backend, and Supabase for relational data storage and authentication.',
    role: 'Full-Stack Lead & Technical Designer',
    tags: ['React Native', 'TypeScript', 'Supabase', '3D WebGL', 'API Design'],
    icon: ShoppingCart,
    gradient: 'from-cyan to-emerald',
    accentColor: 'text-cyan',
    impactBadge: 'Full-Stack Execution & Innovation',
    impact: 'Demonstrated complete software engineering mastery by merging interactive 3D graphics rendering with high-throughput mobile architecture.',
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-pink text-sm font-semibold tracking-widest uppercase">Strategic Portfolio</span>
            <h2 className="section-title mt-3">
              Featured <span className="gradient-text">Initiatives & Systems</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Real-world systems highlighting technical leadership, enterprise governance, and end-to-end execution.
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <TiltCard className="w-full" maxTilt={4}>
                  <div className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all">
                    <div className="grid md:grid-cols-[1fr_2.2fr] gap-0">
                      {/* Left: Visual */}
                      <div className={`bg-gradient-to-br ${project.gradient} p-8 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden text-center`}>
                        <div
                          className="absolute inset-0 opacity-15"
                          style={{
                            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 50%)`,
                          }}
                        />
                        <project.icon size={48} className="text-white mb-4 relative z-10 drop-shadow-md" />
                        <span className="text-white/90 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/20 relative z-10">
                          {project.impactBadge}
                        </span>
                      </div>

                      {/* Right: Content */}
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-[var(--font-heading)] text-xl font-bold text-white">
                                {project.title}
                              </h3>
                              <span className={`text-xs font-semibold ${project.accentColor}`}>{project.role}</span>
                            </div>
                            <button
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                              aria-label="View project details"
                            >
                              <ExternalLink size={16} className="text-gray-400 hover:text-white transition-colors" />
                            </button>
                          </div>

                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {project.description}
                          </p>

                          <div className="mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2">
                            <ShieldCheck size={16} className={`${project.accentColor} shrink-0 mt-0.5`} />
                            <p className="text-gray-400 text-xs leading-relaxed">
                              <strong className="text-gray-200">Strategic Impact: </strong>
                              {project.impact}
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
