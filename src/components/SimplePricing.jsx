import React from 'react';

const SimplePricing = () => {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 font-medium mb-8">
            <i className="fas fa-gem mr-2 text-purple-400"></i>
            Flexible Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Choose Your Creative Journey</h2>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">Unlock unlimited creativity with our flexible pricing plans designed for every creative need</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Free Plan */}
          <div className="bg-white/95 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Starter</h3>
              <div className="text-5xl font-bold mb-2 text-gray-800">Free
                <span className="text-lg text-gray-500 font-normal block">Forever</span>
              </div>
              <p className="text-gray-600 text-sm">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">5 cards per month</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Basic templates library</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Standard quality export</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Community support</span>
              </li>
            </ul>
            
            <button className="w-full bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-semibold py-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
              Get Started Free
            </button>
          </div>
          
          {/* Premium Plan (Featured) */}
          <div className="bg-white/95 rounded-3xl p-10 transform scale-105 lg:scale-110 relative hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                <i className="fas fa-crown mr-2"></i>
                MOST POPULAR
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-magic text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional</h3>
              <div className="text-5xl font-bold mb-2 text-gray-800">₹199
                <span className="text-lg text-gray-500 font-normal block">/month</span>
              </div>
              <p className="text-gray-600 text-sm">For serious creators</p>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Unlimited magical cards</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">AI background removal</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Premium templates</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">4K Ultra HD export</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Priority support</span>
              </li>
            </ul>
            
            <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white py-4 text-lg font-semibold rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <i className="fas fa-bolt mr-2"></i>
              Upgrade to Pro
            </button>
          </div>
          
          {/* Business Plan */}
          <div className="bg-white/95 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-building text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
              <div className="text-5xl font-bold mb-2 text-gray-800">₹499
                <span className="text-lg text-gray-500 font-normal block">/month</span>
              </div>
              <p className="text-gray-600 text-sm">For teams & businesses</p>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Everything in Professional</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Team collaboration tools</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Custom brand templates</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Dedicated account manager</span>
              </li>
            </ul>
            
            <button className="w-full bg-white/30 backdrop-blur-md border border-gray-300 text-gray-800 font-semibold py-4 rounded-2xl hover:bg-white/50 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">Trusted by Creative Professionals Worldwide</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <i className="fas fa-shield-alt text-green-400 text-xl"></i>
                <span className="font-medium">30-day money back guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <i className="fas fa-times-circle text-red-400 text-xl"></i>
                <span className="font-medium">Cancel anytime, no questions</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <i className="fas fa-headset text-blue-400 text-xl"></i>
                <span className="font-medium">24/7 premium support</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">Join 50,000+ creators who chose Yashasvibhav for their creative needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePricing;
