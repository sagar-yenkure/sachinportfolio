'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import sendmail from '@/actions/sendEmail';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await sendmail(formData.email, formData.message);
      setFormData({ email: '', message: '' });
      setStatus('success');
      // toast.success('Message sent successfully!');
    } catch (error) {
      setStatus('error');
      // toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">Let's Create</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your <span className="font-semibold text-purple-600">creative vision</span> to life?
            Let's discuss your next <span className="font-semibold text-pink-600">design project</span>.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto relative mb-8">
          <div className="bg-white/80 backdrop-blur-lg border border-purple-100 rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center lg:flex-row gap-4 w-full">
              <div className="w-full flex-1 mb-1.5">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700 placeholder-slate-400"
                />
              </div>

              <div className="w-full flex-1">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={1}
                  placeholder="Let's work together..."
                  className="w-full px-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700 placeholder-slate-400 resize-none"
                />
              </div>

              <div className="w-full lg:w-auto mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  <span>{loading ? 'Sending...' : 'Send'}</span>
                </button>
              </div>
            </form>

            {/* Feedback Message */}
            {status === 'success' && (
              <p className="text-green-600 text-sm mt-4 text-center">✅ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-4 text-center">❌ Failed to send. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
