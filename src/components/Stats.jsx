import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CounterNumber = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime = null;
          
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatCard = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardReveal = useScrollReveal({ delay: index * 0.2 });

  return (
    <motion.div
      ref={cardReveal.ref}
      initial={cardReveal.initial}
      animate={cardReveal.animate}
      transition={cardReveal.transition}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center overflow-hidden"
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${stat.gradient[0]}, ${stat.gradient[1]})`
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-3xl"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {stat.icon}
        </motion.div>

        {/* Number */}
        <motion.div
          className="relative z-10 text-4xl lg:text-5xl font-bold text-white mb-2"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <CounterNumber 
            end={stat.number} 
            suffix={stat.suffix} 
            prefix={stat.prefix}
            duration={2.5}
          />
        </motion.div>

        {/* Label */}
        <motion.h3
          className="relative z-10 text-lg font-semibold text-white/90 mb-2"
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {stat.label}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="relative z-10 text-white/70 text-sm"
          animate={{
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        >
          {stat.description}
        </motion.p>

        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  y: [0, -20, -40],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        )}

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
          style={{
            background: `linear-gradient(135deg, ${stat.gradient[0]}, ${stat.gradient[1]})`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Stats = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleReveal = useScrollReveal({ delay: 0.2 });
  const subtitleReveal = useScrollReveal({ delay: 0.4 });

  // Background color transform
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(67, 56, 202)", "rgb(99, 102, 241)", "rgb(124, 58, 237)"]
  );

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  const stats = [
    {
      number: 50000,
      suffix: "+",
      label: "Happy Users",
      description: "Creative minds using our platform daily",
      icon: "👥",
      gradient: ["#8b5cf6", "#06b6d4"]
    },
    {
      number: 500000,
      suffix: "+",
      label: "Cards Created",
      description: "Beautiful designs brought to life",
      icon: "🎨",
      gradient: ["#06b6d4", "#10b981"]
    },
    {
      number: 1000,
      suffix: "+",
      label: "Templates",
      description: "AI-powered designs for every occasion",
      icon: "📄",
      gradient: ["#10b981", "#f59e0b"]
    },
    {
      number: 4.9,
      label: "App Rating",
      description: "Loved by users worldwide",
      icon: "⭐",
      gradient: ["#f59e0b", "#ef4444"]
    },
    {
      number: 25,
      suffix: "+",
      label: "Countries",
      description: "Global reach across continents",
      icon: "🌍",
      gradient: ["#ef4444", "#ec4899"]
    },
    {
      number: 99.9,
      suffix: "%",
      label: "Uptime",
      description: "Reliable service you can count on",
      icon: "⚡",
      gradient: ["#ec4899", "#8b5cf6"]
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleReveal.ref}
            initial={titleReveal.initial}
            animate={titleReveal.animate}
            transition={titleReveal.transition}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Celebrating{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Success
              </span>{' '}
              Together
            </h2>
          </motion.div>

          <motion.div
            ref={subtitleReveal.ref}
            initial={subtitleReveal.initial}
            animate={subtitleReveal.animate}
            transition={subtitleReveal.transition}
          >
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of users who have transformed their creative ideas into 
              stunning visual stories with Yashasvibhav
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            {
              icon: "🏆",
              title: "App of the Year",
              description: "Recognized for innovation in creative design",
              year: "2024"
            },
            {
              icon: "🎯",
              title: "99% User Satisfaction",
              description: "Consistently rated as the best design app",
              year: "2024"
            },
            {
              icon: "🚀",
              title: "Fastest Growing",
              description: "Leading the creative technology revolution",
              year: "2024"
            }
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {achievement.title}
              </h3>
              <p className="text-white/70 text-sm mb-2">
                {achievement.description}
              </p>
              <span className="text-purple-300 text-xs font-medium">
                {achievement.year}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full text-black font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Creating Now
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Success Stories
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stats;