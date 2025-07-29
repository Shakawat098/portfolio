import React, { useState } from 'react';
import "./index.css"
import './styles/globals.css';

// Import all components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import { ProjectsSection, ProjectDetailModal } from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { AboutSection, StatsSection, BackToTopButton } from './components/AdditionalComponents';

// Main App Component
const App = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <ProjectsSection />
            <ContactSection />
          </>
        );
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return (
          <>
            <AboutSection />
            <StatsSection />
          </>
        );
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <ProjectsSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      <Navigation currentPath={currentPath} setCurrentPath={setCurrentPath} />
      
      <main className="pt-20">
        {renderCurrentPage()}
      </main>
      
      <BackToTopButton />
      
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;