import React from 'react';

const SimpleFeatures = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 font-medium mb-8">
            <i className="fas fa-magic mr-2 text-purple-400"></i>
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Everything You Need to Create Magic</h2>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">Professional-grade tools and AI-powered features that transform your creative vision into stunning reality</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-rocket text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Background Removal</h3>
            <p className="text-white/75 leading-relaxed mb-6">Advanced TensorFlow Lite technology removes backgrounds with surgical precision, creating perfect compositions every time.</p>
            <div className="flex items-center text-sm text-white/60">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>99.9% accuracy rate</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-robot text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Design Studio</h3>
            <p className="text-white/75 leading-relaxed mb-6">Professional editing suite with cinematic filters, beautiful effects, and animated elements that bring cards to life.</p>
            <div className="flex items-center text-sm text-white/60">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>50+ effects available</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-magic text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Reminders</h3>
            <p className="text-white/75 leading-relaxed mb-6">Never miss a celebration! AI-powered birthday reminders with widget support and intelligent notifications.</p>
            <div className="flex items-center text-sm text-white/60">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>99% reminder accuracy</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-palette text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Templates</h3>
            <p className="text-white/75 leading-relaxed mb-6">Curated collection of 200+ professional templates for birthdays, holidays, weddings, and every celebration imaginable.</p>
            <div className="flex items-center text-sm text-white/60">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>Updated weekly</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-mobile-alt text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Modern Interface</h3>
            <p className="text-white/75 leading-relaxed mb-6">Stunning Material Design 3 interface with fluid animations and intuitive gesture controls for effortless creativity.</p>
            <div className="flex items-center text-sm text-white/60">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>Award-winning UX</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-bullseye text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
            <p className="text-white/75 leading-relaxed mb-6">Bank-grade encryption with secure cloud storage and seamless Razorpay payment integration for peace of mind.</p>
            <div className="flex items-center text-sm text-white/60">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>SOC 2 certified</span>
            </div>
          </div>
        </div>
        
        {/* Feature Highlight */}
        <div className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Why Creative Professionals Choose Yashasvibhav</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <i className="fas fa-rocket text-blue-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">Lightning Fast</h4>
                <p className="text-white/70 text-sm">Optimized performance</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <i className="fas fa-infinity text-green-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">Unlimited Creative Freedom</h4>
                <p className="text-white/70 text-sm">No restrictions</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <i className="fas fa-headset text-purple-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
                <p className="text-white/70 text-sm">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFeatures;
