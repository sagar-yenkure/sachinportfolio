import React, { useState } from 'react';
import {
  Send,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Create
            </span>{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your <span className="font-semibold text-purple-600">creative vision</span> to life?
            Let's discuss your next <span className="font-semibold text-pink-600">design project</span>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="relative mb-8">
            <div className="bg-white/80 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
              <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col lg:flex-row lg:items-end gap-4 w-full"
              >
                {/* Email Input */}
                <div className="w-full flex-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Message Textarea */}
                <div className="w-full flex-1">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={1}
                    placeholder="Let's work together..."
                    className="w-full px-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full lg:w-auto">
                  <button
                    type="submit"
                    className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    <span>Send</span>
                  </button>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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