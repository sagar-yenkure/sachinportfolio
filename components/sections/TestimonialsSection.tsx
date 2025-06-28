'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden py-20">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-200/10 to-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">What</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">People Say</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear from  <span className="font-semibold text-purple-600">clients and colleagues</span>  about their experience working with me.
          </p>
        </div>

        {/* Enhanced Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 border border-white/40 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-6 md:p-10">

                  {/* Testimonial Content */}
                  <blockquote className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed text-center font-medium">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Client Information */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <Image
                          width={80}
                          height={80}
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Client Details */}
                    <div className="text-center md:text-left space-y-3">
                      <div>
                        <div className="font-bold text-xl text-slate-900 mb-1">
                          {currentTestimonial.name}
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-600 mb-2">
                          <Briefcase className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{currentTestimonial.role}</span>
                        </div>
                        <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {currentTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-lg border-white/40 hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Enhanced Dots Indicator */}
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-lg rounded-full px-6 py-3 border border-white/40 shadow-lg">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative transition-all duration-300 ${index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full hover:scale-125'
                    }`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-lg border-white/40 hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="text-sm text-slate-500 bg-white/60 backdrop-blur-lg rounded-full px-4 py-2 border border-white/40">
              {currentIndex + 1} of {testimonials.length}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-section {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}