import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at Nexus AI",
    content: "Nova completely transformed how our team deploys infrastructure. The interface is light years ahead of anything else on the market.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Lead Architect, FlowState",
    content: "The glassmorphic design and intuitive workflows make Nova a joy to use daily. It's not just a tool, it's a productivity enhancer.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Zenith Labs",
    content: "We've seen a 40% reduction in deployment errors since switching to Nova's orchestration engine. It's robust and reliable.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-500 mb-4">Wall of Love</h2>
            <h3 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white uppercase italic leading-[0.9]">
              TRUSTED BY<br/>
              <span className="text-slate-600">THE VISIONARIES.</span>
            </h3>
          </div>
          <div className="flex gap-4">
             <div className="px-8 py-4 glass-panel rounded-2xl flex items-center gap-3">
               <Star className="w-5 h-5 fill-purple-500 text-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
               <span className="font-extrabold text-xl">4.9/5</span>
               <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Global Rating</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass-panel rounded-[3rem] relative group border-white/5 hover:border-white/20 transition-all"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-white/[0.03] group-hover:text-purple-500/10 transition-colors" />
              <p className="text-slate-300 text-lg leading-relaxed relative z-10 italic mb-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
                   <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full border border-black" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-tight">{t.name}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
