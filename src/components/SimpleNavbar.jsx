import React, { useState } from 'react';

const SimpleNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <img src="../logo.jpg" alt="Yashasvibhav Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Yashasvibhav</h1>
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#demo" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
            Demo
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            <i className="fas fa-download mr-2"></i>
            Download
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-purple-300 transition-colors"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/10 backdrop-blur-md border border-white/20 mx-4 rounded-2xl mt-2 p-6">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-white/80 hover:text-white transition-colors font-medium">Features</a>
            <a href="#demo" className="text-white/80 hover:text-white transition-colors font-medium">Demo</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors font-medium">Pricing</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SimpleNavbar;
