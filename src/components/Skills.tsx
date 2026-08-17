import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Code2, Database, Settings, Palette, Users, Server,
  Smartphone, FileCode, Box, PenTool, Cpu, ShieldCheck
} from 'lucide-react';

/* ─── Skill Categories ─── */
const skillCategories = [
  {
    title: 'Enterprise Systems & Operations',
    icon: Settings,
    skills: [
      { name: 'ERP & HR Auditing', level: 95 },
      { name: 'Workflow & Role Governance', level: 90 },
      { name: 'Vendor Delivery Oversight', level: 90 },
      { name: 'Business Requirements Spec (BRD)', level: 85 },
    ],
  },
  {
    title: 'Full-Stack & Product Engineering',
    icon: Code2,
    skills: [
      { name: 'React Native & Mobile Architecture', level: 90 },
      { name: 'TypeScript & Type Systems', level: 85 },
      { name: 'Express.js & REST APIs', level: 85 },
      { name: 'Supabase & PostgreSQL Modeling', level: 85 },
    ],
  },
  {
    title: 'ConTech & Technical Visualization',
    icon: Palette,
    skills: [
      { name: 'AutoCAD 2D Elevations & 3D', level: 85 },
      { name: 'Interactive 3D Web Displays', level: 80 },
      { name: 'ConTech Systems Alignment', level: 90 },
      { name: 'Integration Auditing & QA', level: 85 },
    ],
  },
];

/* ─── Tech Stack Icons ─── */
const techStack = [
  { name: 'React Native', icon: Smartphone },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Express.js', icon: Server },
  { name: 'Supabase', icon: Database },
  { name: 'AutoCAD', icon: PenTool },
  { name: 'Node.js', icon: Cpu },
  { name: '3D WebGL / Canvas', icon: Box },
  { name: 'Enterprise ERP', icon: Settings },
  { name: 'Vendor Audit', icon: ShieldCheck },
  { name: 'Project Governance', icon: Users },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300 font-medium">{name}</span>
        <span className="text-amber-400 font-mono text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-800/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: `${level}%` }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-sm shadow-amber-500/50"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Core Domains</span>
            <h2 className="section-title mt-3">
              Strategic Skills & <span className="gradient-text">Tech Arsenal</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A comprehensive toolkit bridging enterprise operations, architectural precision, and modern software engineering.
            </p>
          </div>

          {/* Three Domain Bento Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.15 }}
                className="bento-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between text-center shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 shadow-lg text-amber-400">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-6 leading-snug text-center">{cat.title}</h3>
                  <div className="space-y-4 text-left">
                    {cat.skills.map((skill, i) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.3 + i * 0.1} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div className="text-center mb-8">
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-white">Technologies & Methodologies</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                className="bento-card rounded-2xl p-4 flex flex-col items-center gap-3 group cursor-default border border-white/5 hover:border-amber-500/30 transition-all shadow-md hover:scale-105"
              >
                <tech.icon size={26} className="text-zinc-400 group-hover:text-amber-400 group-hover:scale-120 transition-all duration-300" />
                <span className="text-zinc-300 text-xs font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
