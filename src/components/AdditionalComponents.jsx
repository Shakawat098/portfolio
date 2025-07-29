import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// About Section Component
const AboutSection = () => {
  const skills = [
    { icon: '📊', name: 'Excel/VBA' },
    { icon: '🗃️', name: 'SQL' },
    { icon: '🐍', name: 'Python' },
    { icon: '📈', name: 'Tableau' },
    { icon: '📊', name: 'Power BI' },
    { icon: '📋', name: 'Google Analytics' }
  ];

  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            I'm a dedicated data analyst, turning raw data into 
            compelling stories that drive business growth. I specialize in statistical analysis, 
            data visualization, and creating automated reporting solutions.
          </p>
          <p>
            My expertise lies in identifying trends, uncovering hidden patterns, and presenting 
            complex findings in clear, digestible formats that enable stakeholders to make 
            informed, data-driven decisions.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-xl text-center border border-white/10 hover:bg-blue-500/10 hover:border-blue-500 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <div className="text-sm">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { number: '150+', label: 'Reports Created' },
    { number: '500M+', label: 'Data Points Analyzed' },
    { number: '40+', label: 'Dashboards Built' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="bg-white/3 rounded-3xl p-16 mx-8 my-16 border border-white/10">
      <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="p-8">
            <span className="text-5xl font-black bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent block mb-2">
              {stat.number}
            </span>
            <span className="text-lg text-slate-400 font-semibold">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} className="mx-auto" />
    </button>
  );
};

export { AboutSection, StatsSection, BackToTopButton };