import { motion } from 'motion/react';

const stats = [
  { label: "Active Nodes", value: "24.8K", prefix: "+" },
  { label: "Data Processed", value: "850", suffix: "PB" },
  { label: "Global Uptime", value: "99.99", suffix: "%" },
  { label: "Open Source", value: "100", suffix: "%" },
];

export const Stats = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all" />
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">System Health</div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-5xl font-bold text-white tracking-tighter">99.99<span className="text-blue-500">%</span></div>
              <div className="text-xs text-slate-400 mt-2 font-medium">Global Network Uptime</div>
            </div>
            <div className="h-16 w-32 flex items-end gap-1.5">
              {[0.4, 0.6, 1, 0.8, 0.9, 0.7].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full bg-blue-500 rounded-t-sm" 
                  style={{ height: `${h * 100}%`, opacity: h }}
                />
              ))}
            </div>
          </div>
        </div>

        {stats.slice(1).map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel rounded-3xl p-8 flex flex-col justify-center text-center"
          >
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</div>
            <div className="text-4xl font-bold text-white tracking-tighter">
              {stat.prefix}{stat.value}<span className="text-purple-500 text-2xl">{stat.suffix}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
