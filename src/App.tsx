import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Visual background layers */}
      <BackgroundEffect />
      
      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue to-primary-purple z-[60] origin-left" 
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

