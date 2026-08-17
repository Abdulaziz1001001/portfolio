import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: Record<string, unknown>) => void;
    pJSDom?: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
  }
}

export default function ParticlesBackground() {
  const initParticles = useCallback(() => {
    // Clean up old canvas instances if any
    const oldCanvas = document.querySelector('#particles-js canvas');
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach((p) => {
        if (p?.pJS?.fn?.vendors?.destroypJS) {
          p.pJS.fn.vendors.destroypJS();
        }
      });
      window.pJSDom = [];
    }

    if (!window.particlesJS) return;

    // Harmonized with site palette: Dark Monochromatic + Amber / Gold
    const colors = {
      particles: '#F59E0B',
      lines: '#D97706',
      accent: '#FBBF24',
    };

    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 65,
          density: { enable: true, value_area: 900 },
        },
        color: { value: colors.particles },
        shape: {
          type: 'circle',
          stroke: { width: 0.5, color: colors.accent },
        },
        opacity: {
          value: 0.45,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.1 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true, speed: 1.2, size_min: 0.5 },
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: colors.lines,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: { opacity: 0.5 },
          },
          push: { particles_nb: 3 },
          repulse: { distance: 140, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if particles.js script is already loaded
    const existingScript = document.getElementById('particles-js-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'particles-js-script';
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;

      script.onload = () => {
        initParticles();
      };

      document.body.appendChild(script);
    } else {
      initParticles();
    }

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((p) => {
          if (p?.pJS?.fn?.vendors?.destroypJS) {
            p.pJS.fn.vendors.destroypJS();
          }
        });
        window.pJSDom = [];
      }
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-70"
    />
  );
}
