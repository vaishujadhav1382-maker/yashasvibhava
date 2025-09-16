import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const logoReveal = useScrollReveal({ delay: 0.2 });
  const linksReveal = useScrollReveal({ delay: 0.4 });
  const socialReveal = useScrollReveal({ delay: 0.6 });

  // Gradient animation
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(30, 27, 75)", "rgb(0, 0, 0)"]
  );

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Templates", href: "#templates" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download", href: "#download" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "API Docs", href: "#api" },
      { name: "Status", href: "#status" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://twitter.com/yashasvibhav',
      color: '#1DA1F2'
    },
    { 
      name: 'Instagram', 
      icon: '📷', 
      url: 'https://instagram.com/yashasvibhav',
      color: '#E4405F'
    },
    { 
      name: 'Facebook', 
      icon: '📘', 
      url: 'https://facebook.com/yashasvibhav',
      color: '#1877F2'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://linkedin.com/company/yashasvibhav',
      color: '#0077B5'
    },
    { 
      name: 'YouTube', 
      icon: '📺', 
      url: 'https://youtube.com/@yashasvibhav',
      color: '#FF0000'
    },
    { 
      name: 'Discord', 
      icon: '🎮', 
      url: 'https://discord.gg/yashasvibhav',
      color: '#7289DA'
    }
  ];

  return (
    <motion.footer
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              ref={logoReveal.ref}
              initial={logoReveal.initial}
              animate={logoReveal.animate}
              transition={logoReveal.transition}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src="/logo.jpg" alt="Yashasvibhav Logo" className="w-full h-full object-cover rounded-xl" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Yashasvibhav</h3>
                  <p className="text-purple-300 text-sm">Create. Celebrate. Share.</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                Transform your ideas into stunning greeting cards and posters with 
                AI-powered design tools. Make every celebration memorable.
              </p>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="#"
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="text-white/80 text-xs">Download on</div>
                    <div className="text-white font-semibold">Google Play</div>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl">🍎</div>
                  <div>
                    <div className="text-white/80 text-xs">Download on</div>
                    <div className="text-white font-semibold">App Store</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              ref={linksReveal.ref}
              initial={{ ...linksReveal.initial, y: 50 }}
              animate={linksReveal.animate}
              transition={{ ...linksReveal.transition, delay: 0.4 + categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold text-lg mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 block py-1"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          ref={socialReveal.ref}
          initial={socialReveal.initial}
          animate={socialReveal.animate}
          transition={socialReveal.transition}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Connect with us
              </h4>
              <p className="text-white/70">
                Join our community and stay updated with the latest features
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", bounce: 0.5 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: `0 10px 25px -5px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="relative z-10">{social.icon}</span>
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${social.color}20` }}
                  />
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {social.name}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-2">
              Stay in the Loop
            </h4>
            <p className="text-white/70 mb-6">
              Get the latest updates, design tips, and exclusive offers delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/60 text-sm">
            <p>© 2024 Yashasvibhav. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span>Version 2.1.0</span>
            </div>
          </div>

          <motion.div
            className="flex items-center space-x-2 text-white/60"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">All systems operational</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-xl hover:shadow-2xl transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        ↑
      </motion.button>
    </motion.footer>
  );
};

export default Footer;