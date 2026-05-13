import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How secure is Nova's cloud infrastructure?",
    a: "Nova uses ISO 27001 certified data centers with end-to-end TLS 1.3 encryption for all data in transit and AES-256 for data at rest. We also provide dedicated HSMs for Titan customers."
  },
  {
    q: "Can I migrate from AWS or Vercel easily?",
    a: "Absolutely. Our 'Warp-Speed Import' tool allows you to sync your existing projects in minutes. We handle the orchestration abstraction so you can focus on code."
  },
  {
    q: "What frameworks do you support natively?",
    a: "Next.js, Vite, Astro, SvelteKit, and Nuxt are supported with zero configuration. For custom setups, our OCI-compliant engine can run any containerized workload."
  },
  {
    q: "How does the AI Co-pilot work?",
    a: "It analyzes traffic patterns in real-time using ML models to predict surges, automatically pre-warming edge nodes to maintain zero-latency performance."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-4">Support Ops</h3>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs italic">Everything you need to know about the future.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="backdrop-blur-md bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-extrabold text-white text-xl pr-8 uppercase tracking-tight">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === i ? 'rotate-180 text-blue-500' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-6 text-lg font-medium">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
