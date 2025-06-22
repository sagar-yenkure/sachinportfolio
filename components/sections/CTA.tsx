import { Award } from 'lucide-react'
import React from 'react'

const CTA = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-white/50">
                <Award size={24} className="text-purple-500" />
                <span className="text-lg font-medium text-gray-700">Inspired by my journey?</span>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                    Let's Collaborate!
                </button>
            </div>
        </div>
    )
}

export default CTA