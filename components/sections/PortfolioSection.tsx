'use client';

import { portfolioCategories } from '@/constants/projects';
import { Eye, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ProjectDialog } from './ProjectDialog';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('motivational');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const activeData = portfolioCategories.find(cat => cat.id === activeCategory) || portfolioCategories[0];

  return (
    <section id='portfolio' className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">Creative</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my diverse collection of <span className="font-semibold text-purple-600">graphic design projects</span> across
            different categories, each crafted with <span className="font-semibold text-pink-600">passion and precision</span>.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl p-2 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {portfolioCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-2 sm:p-4 rounded-xl transition-all duration-300 text-sm font-medium group ${activeCategory === category.id
                      ? ` text-purple-600 shadow-xl transform scale-105`
                      : 'text-slate-600 hover:text-slate-800'
                      }`}
                  >
                    <Icon
                      size={18}
                      className={`${activeCategory === category.id
                        ? 'text-purple-600'
                        : 'text-slate-500 group-hover:text-slate-700'
                        } transition-colors duration-300`}
                    />
                    <span className="text-xs sm:text-sm font-semibold">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="transition-all duration-500 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {activeData.projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Project Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center `}>
                    <div className="flex items-center space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        onClick={() => setSelectedProject(project)}
                        className="bg-white/40 backdrop-blur-lg rounded-full p-2.5 text-white hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-110"
                      >
                        <Eye size={20} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`font-bold text-black text-xl bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm my-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Subtle hover effect overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog for Project Preview */}
      <ProjectDialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
