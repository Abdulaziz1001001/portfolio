import { Mail, MessageCircle, Heart } from 'lucide-react';

function LinkedinIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 border-t border-white/5 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center">
            <div className="font-[var(--font-heading)] text-xl font-bold mb-2">
              <span className="gradient-text">A</span>
              <span className="text-white">bdulaziz</span>
            </div>
            <p className="text-zinc-500 text-sm text-center">
              © {currentYear} Abdulaziz Al-Akkah. Built with{' '}
              <Heart size={12} className="inline text-amber-400" fill="currentColor" /> & Modern React.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/abdulaziz-alikah-127913289', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:azizshaban73@gmail.com', label: 'Email' },
              { icon: MessageCircle, href: 'https://wa.me/966504600202', label: 'WhatsApp' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-white/10 transition-all shadow-sm"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
