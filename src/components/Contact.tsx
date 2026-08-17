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
    href: 'https://linkedin.com/in/your-profile',
    color: 'hover:text-electric-light hover:border-electric/30',
    description: 'Professional network & advisory',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:your@email.com',
    color: 'hover:text-pink hover:border-pink/30',
    description: 'Direct inquiry & formal briefs',
  },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/966XXXXXXXXX',
    color: 'hover:text-emerald hover:border-emerald/30',
    description: 'Fast strategic correspondence',
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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric text-sm font-semibold tracking-widest uppercase">Initiate Contact</span>
            <h2 className="section-title mt-3">
              Let's Engineer <span className="gradient-text">High-Impact Solutions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Open for enterprise advisory, ConTech transformation initiatives, and technical operations leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-8 border border-white/5">
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-6">
                  Send a Direct Brief
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald/20 flex items-center justify-center mb-4">
                      <Send size={24} className="text-emerald" />
                    </div>
                    <p className="text-white font-semibold mb-2">Message Received</p>
                    <p className="text-gray-400 text-sm">Thank you. I will review your inquiry and follow up promptly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="text-sm text-gray-400 mb-1.5 block">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/30 transition-all"
                        placeholder="e.g. John Doe / Eng. Sarah Al-Otaibi"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-sm text-gray-400 mb-1.5 block">Corporate Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/30 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="text-sm text-gray-400 mb-1.5 block">Project Context & Scope</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/30 transition-all resize-none"
                        placeholder="Briefly outline your systems requirements, timeline, or consultation goals..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send size={16} />
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Social Links Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-2">
                  Direct Channels
                </h3>
                <p className="text-gray-400 text-sm">
                  Feel free to connect via preferred executive communication channels.
                </p>
              </div>

              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className={`glass-card rounded-2xl p-5 flex items-center gap-4 group border border-white/5 ${link.color} transition-all`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <link.icon size={22} className="text-gray-400 group-hover:scale-110 transition-all" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{link.label}</div>
                    <div className="text-gray-500 text-xs">{link.description}</div>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              ))}

              {/* Availability Card */}
              <div className="glass-card rounded-2xl p-6 mt-8 border border-emerald/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-emerald animate-pulse" />
                  <span className="text-emerald text-sm font-semibold">Open for Strategic Opportunities</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Available for technical operations consulting, enterprise systems architecture reviews, and high-impact ConTech advisory.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
