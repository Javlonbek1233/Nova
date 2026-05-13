import { motion } from 'motion/react';
import { ArrowRight, Play, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-blue-400 mb-10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        v2.0 Interface Live
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-[9rem] font-extrabold text-center leading-[0.85] max-w-6xl tracking-tighter text-white mb-10 uppercase"
      >
        THE FUTURE <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">IS IMMERSIVE.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-slate-400 text-center max-w-xl mb-12 leading-relaxed"
      >
        Experience the next generation of digital infrastructure. Built for scale, designed for speed, and powered by intelligent automation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="px-10 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:scale-105 transition-transform active:scale-95">
          Start Building Today
        </button>
        <button className="px-10 py-5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all">
          View Documentation
        </button>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 relative w-full max-w-5xl aspect-video rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden group shadow-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2670&auto=format&fit=crop" 
          alt="Interface Preview" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
        
        {/* Floating Stat Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 p-4 glass-panel rounded-2xl hidden md:block"
        >
          <div className="text-xs text-white/40 mb-1">Growth Index</div>
          <div className="text-2xl font-bold">+142.8%</div>
          <div className="w-24 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
            <div className="w-3/4 h-full bg-primary-blue" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
