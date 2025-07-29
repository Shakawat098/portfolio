import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white/2 rounded-3xl p-16 mx-8 my-16 border border-white/10 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
          Let's Transform Your Data
        </h2>
        <p className="text-lg mb-8 text-slate-400">
          Ready to unlock the insights hidden in your data? Let's collaborate to turn 
          your business questions into data-driven answers.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="mailto:shakawat@email.com" className="flex items-center gap-2 text-slate-100 hover:text-blue-500 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1">
            <Mail size={20} />
            shakawat@email.com
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-100 hover:text-blue-500 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1">
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-100 hover:text-blue-500 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1">
            <Github size={20} />
            GitHub
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-100 hover:text-blue-500 font-semibold transition-all duration-300 hover:transform hover:-translate-y-1">
            <FileText size={20} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;