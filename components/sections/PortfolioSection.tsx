'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Sparkles, Star, Eye } from 'lucide-react';
import { portfolioCategories } from '@/constants';


export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('festival');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="portfolio" className="fade-in-section py-24 bg-gradient-to-br from-white via-slate-50 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-space-grotesk font-semibold tracking-wide uppercase border border-purple-200 flex items-center">
              <Sparkles size={16} className="mr-2" />
              My Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-black mb-6"
          >
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative
            </span>{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-inter leading-relaxed"
          >
            Explore my diverse collection of <span className="font-bold text-purple-600">graphic design projects</span> across
            different categories and styles, each crafted with <span className="font-semibold text-pink-600">passion and precision</span>.
          </motion.p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <TabsList className="grid w-full grid-cols-2 p-3 md:grid-cols-5 bg-white/80 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl">
              {portfolioCategories.map((category, index) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`flex items-center gap-2 text-xs md:text-sm font-space-grotesk font-medium rounded-xl transition-all duration-300 ${activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                    : 'text-slate-600 hover:text-slate-800'
                    }`}
                >
                  <category.icon size={16} />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onHoverStart={() => setHoveredProject(project.title)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${category.bgGradient} group relative`}>
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              className="flex items-center space-x-4"
                            >
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-white/20 backdrop-blur-lg rounded-full p-4 text-white hover:bg-white/30 transition-colors duration-200 border border-white/30"
                              >
                                <Eye size={24} />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-white/20 backdrop-blur-lg rounded-full p-4 text-white hover:bg-white/30 transition-colors duration-200 border border-white/30"
                              >
                                <ExternalLink size={24} />
                              </motion.button>
                            </motion.div>
                          </div>

                          {/* Category badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-xs font-space-grotesk font-semibold rounded-full shadow-lg`}>
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <CardContent className="p-6 relative z-10">
                          <h3 className={`font-playfair font-bold text-xl mb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                            {project.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-4 font-inter leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: tagIndex * 0.1 }}
                                className="px-3 py-1 bg-white/80 text-slate-700 rounded-full text-xs font-space-grotesk font-medium border border-slate-200 hover:border-purple-300 transition-colors duration-200"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </CardContent>

                        {/* Hover effect overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-slate-600 font-inter">
            <Star size={20} className="text-yellow-500" />
            <span>Want to see more projects?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200"
            >
              Get in touch!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}