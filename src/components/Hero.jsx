import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const scrollCueRef = useRef(null);

  useEffect(() => {
    // Scroll cue animation
    gsap.to(scrollCueRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.320, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.23, 1, 0.320, 1]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Logo and Headline */}
          <motion.div
            className="flex flex-col items-center mb-8"
            variants={textVariants}
          >
            <motion.div
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/logo.jpg" alt="Yashasvibhav Logo" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            variants={textVariants}
          >
            <span className="block">Yashasvibhav</span>
            <span className="block" style={{ color: '#9C27B0' }}>
              Celebrate Every
            </span>
            <span className="block" style={{ color: '#FF7E29' }}>
              Moment ✨
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Create magical greeting cards with AI-powered tools. Transform your celebrations 
            into unforgettable memories with stunning 3D effects and professional templates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.button
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold glow-effect"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              📱 Download for Android
            </motion.button>
            
            <motion.button
              className="glass text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Explore Magic
            </motion.button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {['AI-Powered Magic', '3D Celebrations', 'Infinite Joy'].map((feature) => (
              <motion.div
                key={feature}
                className="glass px-6 py-3 rounded-full text-white/90 text-sm font-medium"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.23, 1, 0.320, 1] }
                  }
                }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <span className="mr-2">✨</span>
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          ref={scrollCueRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;