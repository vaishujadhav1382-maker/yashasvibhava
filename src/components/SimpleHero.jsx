import React from 'react';

const SimpleHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-[15%] left-[8%] text-4xl animate-bounce" style={{animationDelay: '0s'}}>🎈</div>
      <div className="absolute top-[25%] right-[12%] text-4xl animate-bounce" style={{animationDelay: '2s'}}>🎊</div>
      <div className="absolute top-[65%] left-[3%] text-4xl animate-bounce" style={{animationDelay: '4s'}}>🎉</div>
      <div className="absolute top-[75%] right-[8%] text-4xl animate-bounce" style={{animationDelay: '6s'}}>🎁</div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm mr-4">
                <img src="../logo.jpg" alt="Yashasvibhav Logo" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 font-medium">
                <i className="fas fa-sparkles mr-2 text-yellow-400"></i>
                Trusted by 50,000+ users worldwide
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="text-white block">Yashasvibhav</span>
            <span className="block text-purple-400">Create</span>
            <span className="block text-orange-400">Magical Moments</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl leading-relaxed">
            Transform your celebrations with AI-powered greeting cards. 
            Professional design tools, stunning effects, and endless creativity 
            at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              <i className="fab fa-android mr-3"></i>
              Download for Android
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-play mr-3"></i>
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
            <div className="group">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-check text-green-400"></i>
                </div>
                <span className="text-white/90 font-medium">AI-Powered</span>
              </div>
              <p className="text-white/60 text-sm">Advanced algorithms</p>
            </div>
            <div className="group">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-palette text-blue-400"></i>
                </div>
                <span className="text-white/90 font-medium">Beautiful Design</span>
              </div>
              <p className="text-white/60 text-sm">Stunning visuals</p>
            </div>
            <div className="group">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-infinity text-purple-400"></i>
                </div>
                <span className="text-white/90 font-medium">Unlimited</span>
              </div>
              <p className="text-white/60 text-sm">Creative freedom</p>
            </div>
          </div>
        </div>
        
        {/* Simplified Card Display */}
        <div className="flex justify-center relative">
          <div className="w-64 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center text-white py-8">
              <i className="fas fa-party-horn text-6xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Create Magic</h3>
              <p className="text-sm opacity-80">Beautiful greeting cards</p>
            </div>
          </div>
          
          {/* Floating Indicators */}
          <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
            <div className="flex items-center space-x-2 text-white text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Live Preview</span>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
            <div className="flex items-center space-x-2 text-white text-sm">
              <i className="fas fa-download text-blue-400"></i>
              <span>HD Export</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
