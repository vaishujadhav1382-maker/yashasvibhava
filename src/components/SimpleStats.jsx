import React from 'react';

const SimpleStats = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Creative Professionals</h2>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">Join thousands of users who create stunning celebrations with Yashasvibhav</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-download text-3xl text-white"></i>
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">50K+</div>
              <div className="text-white/80 font-medium text-lg">Downloads</div>
              <div className="text-white/60 text-sm mt-1">Worldwide installs</div>
            </div>
            
            <div className="text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-users text-3xl text-white"></i>
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">15K+</div>
              <div className="text-white/80 font-medium text-lg">Active Users</div>
              <div className="text-white/60 text-sm mt-1">Daily creators</div>
            </div>
            
            <div className="text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-star text-3xl text-white"></i>
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">4.8</div>
              <div className="text-white/80 font-medium text-lg">App Rating</div>
              <div className="text-white/60 text-sm mt-1">Average score</div>
            </div>
            
            <div className="text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <i className="fas fa-palette text-3xl text-white"></i>
              </div>
              <div className="text-5xl font-bold text-white mb-3 font-mono">100K+</div>
              <div className="text-white/80 font-medium text-lg">Cards Created</div>
              <div className="text-white/60 text-sm mt-1">Total designs</div>
            </div>
          </div>
          
          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center space-x-3">
              <i className="fas fa-award text-yellow-400"></i>
              <span className="text-white font-medium">Editor's Choice</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center space-x-3">
              <i className="fas fa-shield-alt text-green-400"></i>
              <span className="text-white font-medium">Secure & Private</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center space-x-3">
              <i className="fas fa-bolt text-blue-400"></i>
              <span className="text-white font-medium">Lightning Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleStats;
