import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const articles = [
  {
    title: 'Why Generalist ERPs Fail in Turnkey Contracting',
    excerpt:
      'Generic corporate ERP suites struggle with change orders, retention bonds, and subcontractor variances. Here is how custom workflow governance fixes the rift.',
    category: 'ConTech Strategy',
    date: 'Upcoming',
    readTime: '6 min read',
    gradient: 'from-electric/30 to-pink/30',
  },
  {
    title: 'Vendor Governance: Mitigating Scope Creep in External Dev Teams',
    excerpt:
      'A practical framework for IT leaders to audit outsourced agency code, enforce architectural integrity, and eliminate costly milestone overruns.',
    category: 'Technical Leadership',
    date: 'Upcoming',
    readTime: '8 min read',
    gradient: 'from-pink/30 to-cyan/30',
  },
  {
    title: 'From Blueprint to Cloud: Digitalization in Heavy Contracting',
    excerpt:
      'Bridging the chasm between physical AutoCAD elevations, site manpower logistics, and real-time database transactions in capital projects.',
    category: 'Systems Architecture',
    date: 'Upcoming',
    readTime: '7 min read',
    gradient: 'from-cyan/30 to-emerald/30',
  },
];

export default function Blog() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" className="py-24 md:py-32 relative w-full overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-pink text-sm font-semibold tracking-widest uppercase">Executive Insights</span>
            <h2 className="section-title mt-3">
              Strategic Perspectives & <span className="gradient-text-reverse">Analysis</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Dispatches on construction-tech, enterprise systems governance, and building high-resilience software.
            </p>
          </div>

          {/* Article Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${article.gradient} flex items-center justify-center relative p-4`}>
                    <div className="absolute inset-0 bg-dark-900/50" />
                    <span className="relative z-10 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/20 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-3 group-hover:text-electric-light transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-gray-500 group-hover:text-electric-light group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
