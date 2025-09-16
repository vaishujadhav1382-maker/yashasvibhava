import React from 'react';

const SimpleContact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white/90 font-medium mb-8">
            <i className="fas fa-envelope mr-2 text-blue-400"></i>
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's Create Something Amazing Together</h2>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">Have questions about Yashasvibhav? Want to partner with us? We'd love to hear from you.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-white/70 mb-2">Drop us a line anytime</p>
                  <a href="mailto:hello@yashasvibhav.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">hello@yashasvibhav.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-phone text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-white/70 mb-2">Speak with our team</p>
                  <a href="tel:+919876543210" className="text-green-400 hover:text-green-300 transition-colors font-medium">+91 98765 43210</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-comments text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Live Chat</h4>
                  <p className="text-white/70 mb-2">Get instant support</p>
                  <span className="text-purple-400 font-medium">Available 24/7</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-map-marker-alt text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Visit Us</h4>
                  <p className="text-white/70 mb-2">Our headquarters</p>
                  <span className="text-amber-400 font-medium">Mumbai, India</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold text-lg mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-twitter text-blue-400 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-instagram text-pink-400 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-facebook text-blue-500 group-hover:scale-110 transition-transform"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 group">
                  <i className="fab fa-linkedin text-blue-600 group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Your Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300" />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                <input type="text" placeholder="What's this about?" className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300" />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea placeholder="Tell us more about your inquiry..." rows="6" className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white py-4 text-lg font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
                <button type="button" className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <i className="fas fa-envelope-open mr-2"></i>
                  Subscribe to Updates
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">Quick answers to common questions about Yashasvibhav</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300">
              <h4 className="text-white font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                <i className="fas fa-question-circle text-purple-400 mr-2"></i>
                How do I get started with Yashasvibhav?
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">Simply download the app from Google Play Store, create your account, and start designing your first greeting card with our AI-powered templates and tools!</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300">
              <h4 className="text-white font-semibold mb-3 group-hover:text-blue-300 transition-colors">
                <i className="fas fa-question-circle text-blue-400 mr-2"></i>
                Can I use my own images in designs?
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">Absolutely! You can upload your own photos, apply AI background removal, and customize templates with personal images and text to create unique designs.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300">
              <h4 className="text-white font-semibold mb-3 group-hover:text-green-300 transition-colors">
                <i className="fas fa-question-circle text-green-400 mr-2"></i>
                Is there a limit on downloads?
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">Free users get 5 downloads per month. Professional and Enterprise plans offer unlimited downloads with premium features and HD quality exports.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300">
              <h4 className="text-white font-semibold mb-3 group-hover:text-amber-300 transition-colors">
                <i className="fas fa-question-circle text-amber-400 mr-2"></i>
                Do you offer custom design services?
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">Yes! Our Enterprise plan includes custom template creation, brand asset management, and dedicated design support for your business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContact;
