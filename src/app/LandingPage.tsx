// src/app/LandingPage.tsx
'use client';

import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SpendLens
          </div>
          
          {/* Navigation Links - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex space-x-8 text-gray-600">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
            <a href="#audit" className="hover:text-indigo-600 transition">Audit</a>
          </div>
          
          {/* CTA Button in Navbar - Visible on larger screens */}
          <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
            Get Started
          </button>
          
          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          {/* Badge / Small tagline */}
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            🚀 AI Stack Optimization
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Stop Overspending on{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Instantly audit your AI stack and discover hidden savings.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Audit →
            </button>
            <button className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition shadow-md hover:shadow-lg">
              Watch Demo
            </button>
          </div>
          
          {/* Hero Image Placeholder - Illustration */}
          <div className="mt-16 md:mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-32 bottom-0 z-10"></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-2xl border border-indigo-100 p-1 overflow-hidden">
              <div className="bg-white rounded-xl p-4 flex justify-center items-center gap-4 flex-wrap">
                {['OpenAI', 'Anthropic', 'Midjourney', 'Copilot'].map((tool) => (
                  <div key={tool} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                    <span className="text-sm font-medium text-gray-700">{tool}</span>
                    <span className="text-xs text-gray-400">$</span>
                  </div>
                ))}
                <div className="bg-indigo-100 px-4 py-2 rounded-full text-sm font-semibold text-indigo-700">
                  + 12 more
                </div>
              </div>
              {/* Chart placeholder */}
              <div className="mt-6 bg-gray-50 p-5 rounded-xl">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Monthly Spend ($)</span>
                  <span className="text-red-500">-23% potential savings</span>
                </div>
                <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>Current: $1,240</span>
                  <span>Optimized: $955</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See where every dollar goes
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Comprehensive audit and actionable insights for your AI tool stack.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Usage Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Track every API call and user seat. Identify underutilized subscriptions and unused licenses.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cost Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Get AI-powered recommendations to reduce costs by up to 35% without sacrificing performance.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Security First</h3>
              <p className="text-gray-600 leading-relaxed">
                Read-only access mode. We never store your API keys or sensitive data. Enterprise-grade encryption.
              </p>
            </div>
          </div>
          
          {/* Optional: Extra small stat row */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-indigo-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">$2.4M</div>
              <div className="text-sm text-gray-600">Saved by customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">1,200+</div>
              <div className="text-sm text-gray-600">AI tools analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">89%</div>
              <div className="text-sm text-gray-600">find savings in first audit</div>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
              Run Free Audit →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Brand Column */}
            <div className="space-y-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SpendLens
              </div>
              <p className="text-sm max-w-xs">
                Stop overspending. Start optimizing. The intelligent audit for your AI stack.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 cursor-pointer transition">🐦</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 cursor-pointer transition">🔗</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 cursor-pointer transition">📘</div>
              </div>
            </div>
            
            {/* Links Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="hover:text-white transition">Features</a></li>
                  <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition">Audit Report</a></li>
                  <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 SpendLens. All rights reserved. ✨ Smart AI cost management.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;