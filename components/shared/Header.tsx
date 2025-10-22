import React, { useState } from 'react';
import { Menu, X, Trophy, Target, Award } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-br  text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Header */}
      <div className="relative container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name with Enhanced Design */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-white via-gray-600 to-black rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/50 transform hover:scale-105 transition-transform">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Jordan Davis
              </h1>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                <Trophy size={14} className="text-yellow-500" />
                Professional Track Athlete
              </p>
            </div>
          </div>

          {/* Desktop Navigation with Icons */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#about" className="px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-all font-medium hover:text-blue-400">
              About
            </a>
            <a href="#achievements" className="px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-all font-medium hover:text-blue-400 flex items-center gap-2">
              <Award size={16} />
              Achievements
            </a>
            <a href="#stats" className="px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-all font-medium hover:text-blue-400 flex items-center gap-2">
              <Target size={16} />
              Stats
            </a>
            <a href="#gallery" className="px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-all font-medium hover:text-blue-400">
              Gallery
            </a>
            <a href="#contact" className="ml-2 bg-gradient-to-r from-gray-600 to-white hover:white px-6 py-2 rounded-full transition-all font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 hover:bg-slate-800/70 rounded-xl transition-all relative z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay with Fade Animation */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          <nav className="flex flex-col items-center space-y-6 w-full max-w-sm">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium hover:text-blue-400 transition-colors py-3 w-full text-center hover:bg-slate-800/30 rounded-xl"
            >
              About
            </a>
            <a 
              href="#achievements" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium hover:text-blue-400 transition-colors py-3 w-full text-center hover:bg-slate-800/30 rounded-xl flex items-center justify-center gap-3"
            >
              <Award size={24} />
              Achievements
            </a>
            <a 
              href="#stats" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium hover:text-blue-400 transition-colors py-3 w-full text-center hover:bg-slate-800/30 rounded-xl flex items-center justify-center gap-3"
            >
              <Target size={24} />
              Stats
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium hover:text-blue-400 transition-colors py-3 w-full text-center hover:bg-slate-800/30 rounded-xl"
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-gray-600 to-white hover:white px-12 py-4 rounded-full transition-all font-medium text-xl shadow-lg shadow-blue-500/50 w-full text-center"
            >
              Contact
            </a>
          </nav>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Enhanced Accent Line */}
      <div className="h-1 bg-gradient-to-r from-gray-500 via-white-500 to-gray-500 shadow-lg shadow-purple-500/50"></div>
    </header>
  );
};

export default Header;