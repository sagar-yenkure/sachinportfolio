'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SkillSection from '@/components/sections/SkillSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize smooth scrolling and scroll animations
      const ctx = gsap.context(() => {
        // Parallax effect for hero background
        gsap.to('.hero-bg', {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-bg',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });

        // Fade in sections on scroll
        gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
          gsap.fromTo(section, {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1
            }
          });
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}