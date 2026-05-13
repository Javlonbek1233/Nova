import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: "Explorer",
    price: "0",
    description: "For individuals exploring the digital frontier.",
    features: ["Global Delivery Network", "Community Support", "1 Project Slot", "Standard Latency"],
    isPopular: false
  },
  {
    name: "Pioneer",
    price: "49",
    description: "Performance for high-growth startups.",
    features: ["Dedicated Infrastructure", "Priority Support", "Unlimited Projects", "Enhanced Analytics", "SSO Integration"],
    isPopular: true
  },
  {
    name: "Titan",
    price: "Custom",
    description: "Absolute control for the modern enterprise.",
    features: ["White-glove Concierge", "Custom SLAs", "Isolated Clouds", "Early Access Program", "Audit Logs"],
    isPopular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-4 bg-gradient-to-b from-transparent to-blue-900/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">Pricing Plans</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase italic">Simple. <span className="text-slate-600">Transparent.</span></h3>
          </div>
          <p className="text-slate-400 text-lg max-w-xs leading-relaxed">No hidden fees. Scale your infrastructure as your ambitions evolve.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-10 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-[3rem] transition-all group ${plan.isPopular ? 'ring-2 ring-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.2)]' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg shadow-blue-600/30">
                  <Zap className="w-3 h-3 fill-white" /> Recommended
                </div>
              )}

              <div className="mb-10">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">{plan.name} Tier</div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-extrabold text-white tracking-tighter">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">/ Month</span>}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/10 transition-colors">
                      <Check className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all active:scale-95 ${plan.isPopular ? 'bg-white text-black shadow-xl shadow-white/5 hover:bg-slate-200' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Join the Frontier'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
