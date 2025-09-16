import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DemoVideo = () => {
  const containerRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform background color based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(255, 0, 87)", "rgb(156, 39, 176)", "rgb(255, 126, 41)"]
  );

  // Text reveal animations
  const titleReveal = useScrollReveal({ delay: 0.2 });
  const subtitleReveal = useScrollReveal({ delay: 0.4 });

  const demoVideos = [
    {
      id: 1,
      title: "AI Background Removal",
      videoSrc: "/demo.mp4", // Your demo video
      description: "Watch AI instantly remove backgrounds"
    },
    {
      id: 2,
      title: "3D Card Creation",
      videoSrc: "/demo.mp4", // Can be same video or different
      description: "Create stunning 3D greeting cards"
    },
    {
      id: 3,
      title: "Template Gallery",
      videoSrc: "/demo.mp4",
      description: "Browse 200+ professional templates"
    }
  ];

  const features = [
    "🎬 Live App Demo",
    "🎨 Real-time Editing",
    "📱 Mobile Experience",
    "✨ Interactive UI"
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="py-20 min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Animated Background Elements */}
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
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              ref={titleReveal.ref}
              initial={titleReveal.initial}
              animate={titleReveal.animate}
              transition={titleReveal.transition}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/90 font-medium mb-8">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Live Demo Video
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                See Yashasvibhav
                <span className="block" style={{ color: '#FF7E29' }}>
                  In Action
                </span>
              </h2>
            </motion.div>

            <motion.p
              ref={subtitleReveal.ref}
              initial={subtitleReveal.initial}
              animate={subtitleReveal.animate}
              transition={subtitleReveal.transition}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Watch how Yashasvibhav transforms your celebrations with AI-powered tools and stunning 3D effects in real-time.
            </motion.p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 text-white/90"
                >
                  <span className="text-2xl">{feature.split(' ')[0]}</span>
                  <span className="text-sm font-medium">{feature.substring(2)}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">📱</span>
                  Try Demo Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">🎬</span>
                  Watch Full Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Video Info */}
            <motion.div
              className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center space-x-3 text-white/80 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>HD Quality</span>
                </div>
                <span>•</span>
                <span>2 min demo</span>
                <span>•</span>
                <span>No signup required</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Video Demo */}
          <div className="relative h-[600px] w-full">
            <motion.div
              className="relative w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Video Container */}
              <div className="absolute inset-4 bg-black rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadStart={() => setVideoLoaded(true)}
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Floating UI Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Recording</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="text-xs opacity-80">Live Demo</div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs">Interactive</span>
                </div>
              </motion.div>

              {/* Video Controls Overlay */}
              <motion.div
                className="absolute bottom-4 right-4 flex space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <span className="text-sm">▶️</span>
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <span className="text-sm">🔊</span>
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <span className="text-sm">⛶</span>
                </button>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="absolute bottom-16 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 2, duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Status Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <div className="flex items-center space-x-2 text-sm">
          <span>Add demo.mp4 to public folder for video</span>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DemoVideo;