import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <div className="w-5 h-5 bg-white/20 rounded-sm" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white uppercase">VELOCITY</span>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed italic text-lg">
            Architecting the next standard of digital reality. Built for the thinkers, the designers, and the pioneers of the new web.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-400">Platform</h4>
          <ul className="space-y-5 text-sm font-bold text-slate-500 uppercase tracking-tight">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Core Engine</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Global Network</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">AI Co-pilot</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-400">Company</h4>
          <ul className="space-y-5 text-sm font-bold text-slate-500 uppercase tracking-tight">
            <li><a href="#" className="hover:text-purple-500 transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Manifesto</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Changelog</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-white/5">
        <div className="text-xs font-bold text-slate-600 uppercase tracking-widest font-mono">
          © 2026 VELOCITY LABS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-10">
          <Twitter className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" />
          <Github className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" />
          <Instagram className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};
