import { motion } from 'motion/react';
import { Shield, Zap, Globe, Layers, Cpu, Code } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Latency",
    description: "Edge-optimized delivery ensuring sub-50ms global response times for every interaction.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Military Grade",
    description: "Isolated sandbox environments with multi-layered encryption for ultimate data sovereignty.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Deploy effortlessly to 40+ regions with automated routing and failover protocols.",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Stack",
    description: "Native support for all major frameworks with zero-config deployment workflows.",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Co-pilot",
    description: "Built-in intelligence that optimizes compute resources based on real-time traffic patterns.",
    gradient: "from-red-500 to-orange-400"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Dynamic APIs",
    description: "Generate type-safe API layers automatically from your database schema in seconds.",
    gradient: "from-blue-600 to-indigo-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Core Infrastructure</h2>
          <h3 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white">ENGINEERED FOR <br/><span className="text-slate-500 uppercase">THE BOLD.</span></h3>
        </div>
        <p className="text-slate-400 text-lg max-w-xs leading-relaxed">Nova provides the foundation for decentralized, high-performance applications that demand absolute precision.</p>
      </div>

      <div className="grid md:grid-cols-6 gap-6">
        {/* Large Bento Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="md:col-span-4 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group"
        >
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/30">
               <Cpu className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-4 uppercase tracking-tight">Advanced Analytics & Orchestration</h3>
            <p className="text-slate-400 mb-10 max-w-md text-lg">Predictive modeling and real-time visualization at your fingertips. Nova orchestrates your entire stack with surgical precision.</p>
            
            <div className="mt-auto">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 max-w-sm space-y-4">
                <div className="flex justify-between items-center text-xs uppercase font-bold tracking-widest">
                  <span className="text-slate-500">Live Optimization</span>
                  <span className="text-purple-400">+42% Efficiency</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
        </motion.div>

        {/* Small Bento Cards */}
        {features.slice(1, 3).map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="md:col-span-2 glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/30 transition-all">
                {feature.icon}
             </div>
             <div>
               <h4 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">{feature.title}</h4>
               <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
             </div>
          </motion.div>
        ))}

        {/* Bottom Small Cards */}
        {features.slice(3).map((feature, index) => (
          <motion.div
            key={index + 3}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index + 3) * 0.1 }}
            className="md:col-span-2 glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group"
          >
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/10 transition-all">
                {feature.icon}
             </div>
             <div>
               <h4 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">{feature.title}</h4>
               <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
