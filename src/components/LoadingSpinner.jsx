import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LoadingSpinner = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      style={{ pointerEvents: 'none' }}
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Loading Magic...
        </motion.h2>
        <motion.p
          className="text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Preparing your celebration experience ✨
        </motion.p>
      </div>
    </motion.div>
  );
};

// Placeholder components for now
export const Stats = () => {
  const { ref, controls, variants } = useScrollReveal();
  
  return (
    <motion.section 
      ref={ref}
      className="py-16"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Trusted by Millions of Celebrators
          </h2>
          {/* Stats content will go here */}
        </div>
      </div>
    </motion.section>
  );
};

export const Demo = () => (
  <section id="demo" className="py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold text-white mb-6">Experience the Magic</h2>
      {/* Demo content will go here */}
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold text-white mb-6">What Celebrators Say</h2>
      {/* Testimonials content will go here */}
    </div>
  </section>
);

export const Pricing = () => (
  <section id="pricing" className="py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold text-white mb-6">Choose Your Celebration Plan</h2>
      {/* Pricing content will go here */}
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold text-white mb-6">Let's Create Magic Together</h2>
      {/* Contact content will go here */}
    </div>
  </section>
);

export const Footer = () => (
  <footer className="py-16">
    <div className="glass mx-4 lg:mx-auto max-w-7xl rounded-3xl p-12">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-white mb-4">🎨 Yashasvibhav</h3>
        <p className="text-white/80">Creating magical celebrations with AI-powered tools</p>
      </div>
    </div>
  </footer>
);

export default LoadingSpinner;