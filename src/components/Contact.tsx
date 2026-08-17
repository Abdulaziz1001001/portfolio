import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

function LinkedinIcon({ size = 22, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { useScrollReveal } from '../hooks/useScrollReveal';

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/abdulaziz-alikah-127913289',
    description: 'Professional network & advisory',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:azizshaban73@gmail.com',
    description: 'azizshaban73@gmail.com',
  },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/966504600202',
    description: '+966 50 460 0202',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Initiate Contact</span>
            <h2 className="section-title mt-3">
              Let's Engineer <span className="gradient-text">High-Impact Solutions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Open for enterprise advisory, ConTech transformation initiatives, and technical operations leadership.
            </p>
          </div>

          {/* Centered Direct Channels Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bento-card rounded-3xl p-6 flex flex-col items-center text-center group border border-white/10 hover:border-amber-500/40 transition-all shadow-xl hover:scale-105"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:bg-amber-500/20 transition-colors shadow-md text-amber-400">
                  <link.icon size={22} className="group-hover:scale-110 transition-all" />
                </div>
                <div className="text-white font-bold text-base mb-1 flex items-center gap-1.5 justify-center">
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-amber-300 transition-colors" />
                </div>
                <div className="text-zinc-400 text-xs">{link.description}</div>
              </motion.a>
            ))}
          </div>

          {/* Centered Availability Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bento-card rounded-2xl p-4 max-w-2xl mx-auto border border-emerald/20 text-center flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
              <span className="text-emerald text-sm font-semibold">Available for Strategic Opportunities</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-400 text-xs sm:text-sm">Technical Operations & ConTech Advisory</span>
          </motion.div>

          {/* Centered Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bento-card rounded-3xl p-8 sm:p-10 border border-white/10 text-center shadow-2xl">
              <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-2 text-center">
                Send a Direct Brief
              </h3>
              <p className="text-zinc-400 text-sm mb-8 text-center">
                Briefly outline your systems requirements, consultation goals, or project scope.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald/20 flex items-center justify-center mb-4">
                    <Send size={24} className="text-emerald" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Message Received</p>
                  <p className="text-zinc-400 text-sm">Thank you. I will review your inquiry and follow up promptly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-center">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300 mb-2 block text-center">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-center placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all text-sm"
                      placeholder="e.g. Eng. Sarah Al-Otaibi / John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300 mb-2 block text-center">Corporate Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-center placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300 mb-2 block text-center">Project Context & Scope</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-center placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none text-sm"
                      placeholder="Briefly outline your systems requirements, timeline, or consultation goals..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-base shadow-lg shadow-amber-500/25">
                    <Send size={18} />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
