// src/app/LandingPage.tsx
"use client";

import React from "react";
import AuditForm from "../components/forms/audit-form";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SpendLens
          </div>

          {/* Navigation */}
          <div className="hidden md:flex space-x-8 text-gray-600">
            <a
              href="#features"
              className="hover:text-indigo-600 transition"
            >
              Features
            </a>

            <a
              href="#audit"
              className="hover:text-indigo-600 transition"
            >
              Audit
            </a>

            <a
              href="#footer"
              className="hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </div>

          {/* CTA */}
          <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
            Start Audit
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 text-center">
        <div className="container mx-auto max-w-5xl">

          {/* Badge */}
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            🚀 AI Stack Optimization
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Stop Overspending on{" "}
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

            <a href="#audit">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Free Audit →
              </button>
            </a>

            <button className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition shadow-md hover:shadow-lg">
              See Sample Audit
            </button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 md:mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-32 bottom-0 z-10"></div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-2xl border border-indigo-100 p-1 overflow-hidden">

              {/* Tool Pills */}
              <div className="bg-white rounded-xl p-4 flex justify-center items-center gap-4 flex-wrap">
                {[
                  "OpenAI",
                  "Anthropic",
                  "Midjourney",
                  "Copilot",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full shadow-sm"
                  >
                    <div className="w-3 h-3 rounded-full bg-indigo-400"></div>

                    <span className="text-sm font-medium text-gray-700">
                      {tool}
                    </span>

                    <span className="text-xs text-gray-400">$</span>
                  </div>
                ))}

                <div className="bg-indigo-100 px-4 py-2 rounded-full text-sm font-semibold text-indigo-700">
                  + 12 more
                </div>
              </div>

              {/* Spend Bar */}
              <div className="mt-6 bg-gray-50 p-5 rounded-xl">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Monthly Spend ($)</span>

                  <span className="text-red-500">
                    -23% potential savings
                  </span>
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

      {/* Audit Section */}
      <section
        id="audit"
        className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              AI Audit Tool
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Analyze Your AI Stack
            </h2>

            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Add your tools, spending, and team details to uncover
              optimization opportunities instantly.
            </p>
          </div>

          {/* Audit Form */}
          <AuditForm />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-20 bg-white px-6"
      >
        <div className="container mx-auto max-w-6xl">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              See where every dollar goes
            </h2>

            <p className="text-gray-600 text-lg mt-4">
              Comprehensive audit and actionable insights for your
              AI tool stack.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                📊
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Usage Analytics
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Track every API call and user seat usage across your
                AI stack.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                💰
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Cost Optimization
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Get recommendations to reduce unnecessary spending
                instantly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                🔒
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Security First
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Your data stays private. No API keys or sensitive
                credentials stored.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-indigo-100">

            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">
                $2.4M
              </div>

              <div className="text-sm text-gray-600">
                Saved by customers
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">
                1,200+
              </div>

              <div className="text-sm text-gray-600">
                AI tools analyzed
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">
                89%
              </div>

              <div className="text-sm text-gray-600">
                Find savings in first audit
              </div>
            </div>

            <a href="#audit">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
                Run Free Audit →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-gray-900 text-gray-300 py-12 px-6"
      >
        <div className="container mx-auto max-w-6xl">

          <div className="flex flex-col md:flex-row justify-between gap-10">

            {/* Brand */}
            <div className="space-y-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SpendLens
              </div>

              <p className="text-sm max-w-xs">
                Stop overspending. Start optimizing. Smart AI cost
                management for modern teams.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

              <div>
                <h4 className="text-white font-semibold mb-4">
                  Product
                </h4>

                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-white transition"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#audit"
                      className="hover:text-white transition"
                    >
                      Audit
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">
                  Company
                </h4>

                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">
                  Legal
                </h4>

                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>
              © 2026 SpendLens. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;