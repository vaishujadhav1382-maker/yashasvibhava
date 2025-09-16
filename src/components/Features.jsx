import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal, use3DTilt, useParallax } from '../hooks/useScrollReveal';

const Features = () => {
  const { ref: sectionRef, controls, variants } = useScrollReveal();
  const parallaxRef = useParallax(0.3);

  const features = [
    {
      icon: '🤖',
      title: 'AI Background Removal',
      description: 'Advanced TensorFlow Lite U2Net technology removes backgrounds with magical precision, creating perfect compositions every time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'Celebration Templates',
      description: '200+ stunning templates for birthdays, holidays, weddings, and every special moment worth celebrating.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '✨',
      title: '3D Effects Studio',
      description: 'Professional editing suite with magical filters, depth effects, and animated elements that bring cards to life.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎂',
      title: 'Smart Reminders',
      description: 'Never miss a celebration! AI-powered birthday reminders with widget support and notification magic.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📱',
      title: 'Material Magic UI',
      description: 'Stunning Material Design 3 interface with smooth animations and intuitive gesture controls.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security with encrypted storage and secure Razorpay payment integration.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const FeatureCard = ({ feature, index }) => {
    const tiltRef = use3DTilt({ strength: 8 });
    
    return (
      <motion.div
        ref={tiltRef}
        className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.23, 1, 0.320, 1]
        }}
        viewport={{ once: true, margin: '-100px' }}
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3 }
        }}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
        
        {/* Icon */}
        <motion.div
          className="text-6xl mb-6"
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.5 }
          }}
        >
          {feature.icon}
        </motion.div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-white/80 leading-relaxed">
          {feature.description}
        </p>
        
        {/* Hover Effect Lines */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500 rounded-full" />
      </motion.div>
    );
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.23, 1, 0.320, 1] }
              }
            }}
          >
            Magical Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
              Every Celebration
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
          >
            Unleash your creativity with AI-powered tools and stunning 3D effects that transform ordinary moments into extraordinary memories.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          className="mt-20 glass rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1] }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Built with Cutting-Edge Technology
            </h3>
            <p className="text-lg text-white/80">
              Yashasvibhav leverages the latest Android development practices and AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤖', title: 'TensorFlow Lite', desc: 'AI-powered background removal' },
              { icon: '📱', title: 'Material Design 3', desc: 'Modern Android UI standards' },
              { icon: '⚡', title: 'Optimized Performance', desc: 'ProGuard optimization & efficient memory' },
              { icon: '🔒', title: 'Enterprise Security', desc: 'Encrypted data & secure payments' }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{tech.title}</h4>
                <p className="text-sm text-white/70">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;