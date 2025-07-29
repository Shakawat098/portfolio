import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:border-blue-500 transition-all duration-500 group">
      <div className="h-48 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-6xl text-white relative overflow-hidden">
        {project.icon}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold mb-4 text-slate-100">{project.title}</h3>
        <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/3 rounded-xl border border-white/5">
          {project.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-black text-blue-500">{metric.value}</div>
              <div className="text-xs text-slate-400 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <button className="text-blue-500 hover:text-emerald-500 font-semibold transition-colors duration-300 flex items-center gap-2">
            <ExternalLink size={16} />
            View Project
          </button>
          <button className="text-blue-500 hover:text-emerald-500 font-semibold transition-colors duration-300">
            Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

// Project Detail Modal Component
const ProjectDetailModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-2">{project.title}</h2>
              <p className="text-slate-400">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              ✕
            </button>
          </div>

          <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
            {['overview', 'process', 'results'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="mb-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Detailed project overview content would go here...
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                      <div className="text-2xl font-black text-blue-500">{metric.value}</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'process' && (
              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Development process and methodology details...
                </p>
              </div>
            )}
            {activeTab === 'results' && (
              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Project results and impact analysis...
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300">
              <Github size={20} />
              View Code
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-slate-100 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              <ExternalLink size={20} />
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      description: "Built an interactive Tableau dashboard tracking KPIs across 5 regions, providing real-time insights that increased sales team efficiency by 32%.",
      icon: "📊",
      category: "dashboard",
      tags: ["Tableau", "SQL", "Excel", "KPIs"],
      metrics: [
        { value: "32%", label: "Efficiency Gain" },
        { value: "5", label: "Regions" },
        { value: "50+", label: "Metrics" }
      ]
    },
    {
      id: 2,
      title: "Financial Performance Analysis",
      description: "Conducted comprehensive financial analysis identifying $2.3M in cost savings opportunities through variance analysis and trend forecasting.",
      icon: "💰",
      category: "analysis",
      tags: ["Excel", "Power BI", "Statistics", "Forecasting"],
      metrics: [
        { value: "$2.3M", label: "Savings ID" },
        { value: "15", label: "Reports" },
        { value: "94%", label: "Accuracy" }
      ]
    },
    {
      id: 3,
      title: "Customer Behavior Analysis",
      description: "Analyzed customer journey data using cohort analysis and RFM segmentation, leading to 25% improvement in customer retention strategies.",
      icon: "👥",
      category: "analysis",
      tags: ["Python", "SQL", "Segmentation", "Visualization"],
      metrics: [
        { value: "25%", label: "Retention" },
        { value: "10K+", label: "Customers" },
        { value: "94%", label: "Accuracy" }
      ]
    },
    {
      id: 4,
      title: "Customer Behavior Analysis",
      description: "Analyzed customer journey data using cohort analysis and RFM segmentation, leading to 25% improvement in customer retention strategies.",
      icon: "👥",
      category: "analysis",
      tags: ["Python", "SQL", "Segmentation", "Visualization"],
      metrics: [
        { value: "25%", label: "Retention" },
        { value: "10K+", label: "Customers" },
        { value: "94%", label: "Accuracy" }
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['all', 'dashboard', 'analysis', 'automation'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
              filter === category
                ? 'bg-blue-500 border-blue-500 text-white'
                : 'border-white/20 text-slate-100 hover:border-blue-500 hover:text-blue-500'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Projects
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export { ProjectsSection, ProjectDetailModal };