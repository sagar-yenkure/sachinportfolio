'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { portfolioCategories } from '@/constants/projects';
import React from 'react';
import { PortfolioGrid } from './PortfolioGrid';

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
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

        {/* Tabs */}
        <Tabs defaultValue="festival" className="w-full ">
          <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 h-full bg-white/80 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl0 mb-12 p-2">
            {portfolioCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex flex-col sm:flex-row items-center gap-1 text-xs sm:text-sm font-medium
             text-slate-600 data-[state=active]:text-purple-600
             data-[state=active]:bg-purple-100/50 data-[state=active]:border data-[state=active]:border-purple-300
             data-[state=active]:shadow-lg data-[state=active]:font-bold
             transition-all rounded-xl px-3 md:py-2"
                >
                  <Icon size={18} className="mr-1" />
                  {cat.name.replace('color', 'colour')} {/* if dynamic or literal */}
                </TabsTrigger>

              );
            })}
          </TabsList>

          {portfolioCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <PortfolioGrid projects={cat.projects} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* CSS Animations */}
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
      `}</style>
    </section>
  );
}
