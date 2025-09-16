import React from 'react';

const SimpleDemo = () => {
  return (
    <section id="demo" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience the Magic</h2>
          <p className="text-xl text-white/90">Watch Yashasvibhav transform celebrations into unforgettable moments</p>
        </div>
        
        {/* Simplified Phone Display */}
        <div className="flex justify-center">
          <div className="relative w-80 h-[600px]">
            {/* Main Phone */}
            <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-4 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="bg-white rounded-[2.5rem] h-full overflow-hidden relative">
                {/* Phone Screen Content */}
                <div className="h-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-6">
                  <div className="text-center text-white py-8">
                    <h3 className="text-2xl font-bold mb-4">Yashasvibhav</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/20 backdrop-blur rounded-xl h-24 flex items-center justify-center text-3xl">🎉</div>
                      <div className="bg-white/20 backdrop-blur rounded-xl h-24 flex items-center justify-center text-3xl">🎂</div>
                      <div className="bg-white/20 backdrop-blur rounded-xl h-24 flex items-center justify-center text-3xl">💖</div>
                      <div className="bg-white/20 backdrop-blur rounded-xl h-24 flex items-center justify-center text-3xl">✨</div>
                    </div>
                    <div className="bg-white/30 backdrop-blur rounded-xl p-4">
                      <p className="text-sm font-medium">AI Magic in Progress...</p>
                      <div className="bg-white/40 rounded-full h-2 mt-2 overflow-hidden">
                        <div className="bg-white h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Feature Pills */}
            <div className="absolute -top-10 -left-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              🤖 AI Powered
            </div>
            <div className="absolute -top-10 -right-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              🎨 Creative Tools
            </div>
            <div className="absolute -bottom-10 -left-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              🔒 Secure
            </div>
            <div className="absolute -bottom-10 -right-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium">
              ✨ HD Export
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleDemo;
