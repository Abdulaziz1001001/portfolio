import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ui/ParticlesBackground';

export default function App() {
  return (
    <div className="noise-overlay min-h-screen w-full overflow-x-hidden flex flex-col bg-dark-900 text-slate-100 relative">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
