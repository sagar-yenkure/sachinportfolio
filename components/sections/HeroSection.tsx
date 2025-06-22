
import React from 'react';
import { ArrowDown, Palette, Mail, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';


function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-slate-50 relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <div
          className="inline-block mb-6"
        >
          <span className="px-6 py-3 my-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-space-grotesk font-semibold tracking-wide uppercase border border-purple-200">
            ✨ Available for new projects
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-800">Hi, I'm </span>
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Sachin Yenkure
          </span>
          <br />
          <span className="text-gray-700 text-3xl sm:text-5xl lg:text-6xl font-light">
            Graphic Designer
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforming ideas into stunning visual experiences through
          <span className="font-semibold text-purple-600"> creative design</span> and
          <span className="font-semibold text-pink-600"> digital artistry</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            <Palette size={20} />
            <span>View My Work</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Link target='_blank' href="https://www.linkedin.com/in/sachin-yenkure/" className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Linkedin size={20} />
          </Link>
          <Link target='_blank' href="mailto:sachinyenkure20@gmail.com" className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Mail size={20} />
          </Link>
          <Link target='_blank' href="https://www.instagram.com/sachin_yenkure__/?igsh=MW5tbHE4ejVlbWYwZA%3D%3D" className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Instagram size={20} />
          </Link>

        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 text-gray-700 hover:text-purple-600 transition-colors duration-600"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}

export default App;