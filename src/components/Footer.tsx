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
    <footer className="relative py-12 border-t border-white/5">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="font-[var(--font-heading)] text-lg font-bold mb-1">
              <span className="gradient-text">A</span>
              <span className="text-white">bdulaziz</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} Abdulaziz Al-Akkah. Built with{' '}
              <Heart size={12} className="inline text-pink" fill="currentColor" /> and React.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: LinkedinIcon, href: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
              { icon: MessageCircle, href: 'https://wa.me/966XXXXXXXXX', label: 'WhatsApp' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
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
