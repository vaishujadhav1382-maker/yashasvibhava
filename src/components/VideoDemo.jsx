import React from 'react';

const VideoDemo = () => {
  return (
    <section id="video-demo" className="py-20 relative z-10 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 font-medium mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              Live Demo Video
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              See Yashasvibhav
              <span className="block text-orange-400">In Action</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Watch how Yashasvibhav transforms your celebrations with AI-powered tools and stunning effects in real-time.
            </p>
            
            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-white/90">
                <span className="text-2xl">🎬</span>
                <span className="text-sm font-medium">Live App Demo</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <span className="text-2xl">🎨</span>
                <span className="text-sm font-medium">Real-time Editing</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <span className="text-2xl">📱</span>
                <span className="text-sm font-medium">Mobile Experience</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-medium">Interactive UI</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white text-lg px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <i className="fas fa-mobile-alt mr-2"></i>
                Try Demo Now
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                <i className="fas fa-play mr-2"></i>
                Watch Full Demo
              </button>
            </div>
            
            {/* Video Info */}
            <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
              <div className="flex items-center space-x-3 text-white/80 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>HD Quality</span>
                </div>
                <span>•</span>
                <span>2 min demo</span>
                <span>•</span>
                <span>No signup required</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Mobile with Video */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-[600px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-4 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="bg-black rounded-[2.5rem] h-full overflow-hidden relative">
                  {/* Video Content */}
                  <video 
                    className="w-full h-full object-cover rounded-[2rem]" 
                    muted 
                    loop 
                    playsInline
                    preload="metadata"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF0057;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%239C27B0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF7E29;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='600' fill='url(%23grad)'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='white' font-family='Arial' font-size='24' font-weight='bold'%3EYashasvibhav%3C/text%3E%3Ctext x='200' y='320' text-anchor='middle' fill='white' font-family='Arial' font-size='16' opacity='0.8'%3EDemo Video%3C/text%3E%3Ccircle cx='200' cy='360' r='30' fill='white' opacity='0.2'/%3E%3Cpolygon points='190,350 190,370 210,360' fill='white'/%3E%3C/svg%3E"
                  >
                    <source src="./public/demo.mp4" type="video/mp4" />
                    <source src="./demo.webm" type="video/webm" />
                    {/* Fallback content */}
                    <div className="w-full h-full bg-gradient-to-br from-pink-600 to-purple-600 flex flex-col items-center justify-center text-white p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full mb-6 flex items-center justify-center animate-pulse">
                          <i className="fas fa-exclamation-triangle text-3xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Video Not Available</h3>
                        <p className="text-sm opacity-80 mb-6">Check console for error details</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/20 backdrop-blur rounded-xl h-16 flex items-center justify-center text-2xl">🎨</div>
                          <div className="bg-white/20 backdrop-blur rounded-xl h-16 flex items-center justify-center text-2xl">🎉</div>
                          <div className="bg-white/20 backdrop-blur rounded-xl h-16 flex items-center justify-center text-2xl">📱</div>
                          <div className="bg-white/20 backdrop-blur rounded-xl h-16 flex items-center justify-center text-2xl">✨</div>
                        </div>
                      </div>
                    </div>
                  </video>
                  
                  {/* Video Overlay Controls */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                        <span>LIVE DEMO</span>
                      </div>
                      <span>Yashasvibhav</span>
                    </div>
                  </div>
                  
                  {/* Phone Details */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-white">
                    <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                    <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
              
              {/* Floating Indicators */}
              <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-white text-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-1 animate-pulse"></div>
                <div className="text-xs">LIVE</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-white text-center">
                <div className="text-xs mb-1">HD Quality</div>
                <div className="flex space-x-1 justify-center">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm">
            <i className="fas fa-info-circle mr-2"></i>
            Add your demo.mp4 file to the project root to show your app demo
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
