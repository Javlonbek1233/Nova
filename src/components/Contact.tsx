import { motion } from 'motion/react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Connect with Us</h2>
          <h3 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white uppercase italic leading-[0.85] mb-10">THE NEXT <br/><span className="text-slate-600">FRONTIER.</span></h3>
          <p className="text-slate-400 text-xl max-w-md mb-12 leading-relaxed">
            Ready to transcend the ordinary? Our team is waiting to help you navigate the next generation of digital infrastructure.
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500">
                <Mail className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Direct Transmission</div>
                <div className="text-2xl font-bold text-white tracking-tight">hello@velocity.digital</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-500">
                <MapPin className="w-7 h-7 text-purple-500" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Base Location</div>
                <div className="text-2xl font-bold text-white tracking-tight">Neo-Tokyo, Sector 7</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px]" />
          
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Identifier</label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-white/10 text-white font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Communications</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-white/10 text-white font-medium"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Mission Parameters</label>
              <textarea 
                rows={4} 
                placeholder="Describe your vision..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-white/10 text-white font-medium resize-none"
              />
            </div>

            <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-slate-200 active:scale-95 transition-all shadow-2xl shadow-white/5 group">
               Initiate Connection
               <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
