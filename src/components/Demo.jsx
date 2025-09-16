import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal, useGSAPScrollTrigger } from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform background color based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(99, 102, 241)", "rgb(147, 51, 234)", "rgb(219, 39, 119)"]
  );

  // Text reveal animations
  const titleReveal = useScrollReveal({ delay: 0.2 });
  const subtitleReveal = useScrollReveal({ delay: 0.4 });

  // GSAP ScrollTrigger for 3D carousel rotation
  useGSAPScrollTrigger(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          // This will be used by the PhoneCarousel component
          if (window.phoneCarouselRotation) {
            window.phoneCarouselRotation(self.progress);
          }
        }
      }
    });
    return tl;
  }, []);

  const screenshots = [
    {
      id: 1,
      title: "Create Beautiful Cards",
      image: "/api/placeholder/300/600",
      description: "Design stunning greeting cards with AI assistance"
    },
    {
      id: 2,
      title: "AI-Powered Templates",
      image: "/api/placeholder/300/600",
      description: "Choose from thousands of AI-generated templates"
    },
    {
      id: 3,
      title: "Custom Posters",
      image: "/api/placeholder/300/600",
      description: "Create personalized posters for any occasion"
    },
    {
      id: 4,
      title: "Share & Celebrate",
      image: "/api/placeholder/300/600",
      description: "Share your creations across social platforms"
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
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
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <motion.div
              ref={titleReveal.ref}
              initial={titleReveal.initial}
              animate={titleReveal.animate}
              transition={titleReveal.transition}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Experience the{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Magic
                </span>
              </h2>
            </motion.div>

            <motion.div
              ref={subtitleReveal.ref}
              initial={subtitleReveal.initial}
              animate={subtitleReveal.animate}
              transition={subtitleReveal.transition}
            >
              <p className="text-xl text-white/80 leading-relaxed">
                Watch how Yashasvibhav transforms your ideas into stunning visual stories.
                Our AI-powered platform makes creating professional-grade greeting cards
                and posters as easy as a few taps.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {[
                "🎨 AI-Powered Design Assistant",
                "📱 Real-time Preview & Editing",
                "🎭 Thousands of Templates",
                "🚀 One-Click Sharing"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 text-white/90"
                >
                  <span className="text-2xl">{feature.split(' ')[0]}</span>
                  <span className="text-lg">{feature.substring(2)}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full text-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Try Demo Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </div>

          {/* Screenshot Gallery */}
          <div className="relative h-[600px] w-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.id}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="text-lg font-semibold mb-2">{screenshot.title}</h3>
                    <p className="text-sm text-white/80">{screenshot.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating UI Elements */}
            <motion.div
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live Demo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Demo;