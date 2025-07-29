import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// Particles Component
const Particles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-60"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }}
    />
  ));

  return <div className="particles">{particles}</div>;
};

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Data Analyst & Business Intelligence Specialist',
    'Turning Numbers into Insights',
    'Creating Data-Driven Solutions',
    'Building Interactive Dashboards',
    'Uncovering Business Opportunities'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <Particles />
      </div>
      
      <div className="text-center z-10 max-w-4xl px-8">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent animate-slide-up">
          Md Shakawat Hossain
        </h1>
        <p className="text-xl text-slate-400 mb-8 animate-slide-up-delay-1 min-h-[1.5rem]">
          {titles[currentTitle]}
        </p>
        <p className="text-lg mb-12 opacity-90 animate-slide-up-delay-2">
          Transforming complex data into clear, actionable insights that drive strategic 
          business decisions through advanced analytics, visualization, and reporting.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up-delay-3">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-500/30">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-white/20 text-slate-100 font-semibold rounded-full hover:bg-white/10 hover:border-blue-500 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 text-2xl animate-bounce">
        <ChevronDown />
      </div>
    </section>
  );
};

export default HeroSection;