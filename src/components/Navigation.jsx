import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPath, setCurrentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 py-4 transition-all duration-300 ${
      isScrolled ? '-translate-y-full' : 'translate-y-0'
    }`} style={{
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
          Portfolio
        </div>
        <ul className="flex gap-8 list-none">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => setCurrentPath(item.toLowerCase())}
                className={`text-slate-100 font-medium transition-all duration-300 relative hover:text-blue-500 ${
                  currentPath === item.toLowerCase() ? 'text-blue-500' : ''
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  currentPath === item.toLowerCase() ? 'w-full' : 'w-0 hover:w-full'
                }`} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;