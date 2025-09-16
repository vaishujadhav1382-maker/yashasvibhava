import React from 'react';

const SimpleFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <img src="../logo.jpg" alt="Yashasvibhav Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Yashasvibhav</h3>
                <p className="text-purple-300 text-sm">Create. Celebrate. Share.</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              Transform your ideas into stunning greeting cards and posters with AI-powered design tools. Make every celebration memorable.
            </p>
            
            {/* App Store Badges */}
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300 group max-w-fit">
                <i className="fab fa-google-play text-2xl text-green-400 group-hover:scale-110 transition-transform"></i>
                <div>
                  <div className="text-white/80 text-xs">Download on</div>
                  <div className="text-white font-semibold">Google Play</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300 group max-w-fit">
                <i className="fab fa-apple text-2xl text-white group-hover:scale-110 transition-transform"></i>
                <div>
                  <div className="text-white/80 text-xs">Coming soon on</div>
                  <div className="text-white font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="#templates" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Templates</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="#demo" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Demo</a></li>
              <li><a href="#api" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">API</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#careers" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#press" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Press</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#partners" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Partners</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#help" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact Us</a></li>
              <li><a href="#privacy" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#terms" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Terms of Service</a></li>
              <li><a href="#status" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">System Status</a></li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-envelope-open-text mr-3 text-purple-400"></i>
              Stay Creative
            </h4>
            <p className="text-white/70 mb-8">Get the latest design tips, feature updates, and exclusive templates delivered to your inbox</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <i className="fas fa-paper-plane mr-2"></i>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-white/60 text-sm">
              <p>&copy; 2024 Yashasvibhav. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <span className="flex items-center">
                  <i className="fas fa-heart text-red-400 mr-1"></i>
                  Made with love in India
                </span>
                <span className="hidden lg:block">&bull;</span>
                <span>Version 2.1.0</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-twitter text-blue-400 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-instagram text-pink-400 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-facebook text-blue-500 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-linkedin text-blue-600 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-youtube text-red-500 group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-white/60">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 z-50 group hover:scale-110"
      >
        <i className="fas fa-chevron-up text-xl group-hover:scale-110 transition-transform"></i>
      </button>
    </footer>
  );
};

export default SimpleFooter;
