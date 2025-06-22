import { experiences } from '@/constants';
import { Briefcase, Calendar, CheckCircle, MapPin, Star, Zap } from 'lucide-react';
import CTA from './CTA';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl opacity-50"></div>


        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg rotate-45 opacity-10"></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rotate-12 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A blend of <span className="font-semibold text-purple-600">real-world experience</span> and
            <span className="font-semibold text-pink-600"> creative education</span> that shaped my design journey
          </p>
        </div>

        {/* Experience Cards - Streamlined */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50 backdrop-blur-sm`}>


                {/* Title and Company */}
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                  {exp.title}
                </h3>

                {/* Details */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Briefcase size={12} className="text-purple-500" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin size={12} className="text-pink-500" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Calendar size={12} className="text-blue-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{exp.description}</p>

                {/* Skills - Reduced */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                    <Zap size={14} className="text-purple-500 mr-1" />
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-2 bg-gradient-to-r ${exp.gradient} text-white rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CTA />
      </div>
    </section>
  );
}
