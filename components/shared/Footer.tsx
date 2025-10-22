import React from "react";
import { Heart, Code, Sparkles, Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              About This Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A modern, responsive portfolio website designed to showcase athletic excellence and career achievements in an engaging and immersive way.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform duration-300"></span>
                  Career Highlights
                </a>
              </li>
              <li>
                <a href="#stats" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover:scale-150 transition-transform duration-300"></span>
                  Statistics
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 group-hover:scale-150 transition-transform duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Follow the journey and stay updated with the latest achievements.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:border-transparent transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:border-transparent transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:border-transparent transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section - Designer Credit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} All rights reserved.
          </div>

          {/* Designer Credit - Featured */}


          {/* Tech Badge */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Code className="w-4 h-4" />
            <span>Built with React </span>
          </div>
        </div>

        {/* Additional Designer Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
            <p className="text-gray-400 text-sm">
              Need a stunning portfolio website for your athletic career?
            </p>
            <a 
              href="#contact" 
              className="text-sm font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Let's work together → olagbemisoyee@gmail.com or +2349065434849
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </footer>
  );
}