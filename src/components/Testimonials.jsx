import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal, useStaggerAnimation } from '../hooks/useScrollReveal';


const SpeechBubble = ({ testimonial, index, isVisible }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: isLeft ? -100 : 100,
        scale: 0.8 
      }}
      animate={isVisible ? {
        opacity: 1,
        x: 0,
        scale: 1
      } : {
        opacity: 0,
        x: isLeft ? -100 : 100,
        scale: 0.8
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        bounce: 0.4
      }}
      className={`relative p-6 max-w-md ${
        isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'
      }`}
    >
      {/* Speech Bubble */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
        {/* Quote */}
        <div className="flex items-start space-x-3">
          <div className="text-4xl text-yellow-400 leading-none">"</div>
          <div>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              {testimonial.quote}
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tail */}
        <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
          isLeft 
            ? '-right-3 border-l-[20px] border-l-white/10 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent'
            : '-left-3 border-r-[20px] border-r-white/10 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent'
        }`}></div>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-yellow-400 text-xl"
            >
              ⭐
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleReveal = useScrollReveal({ delay: 0.2 });
  const subtitleReveal = useScrollReveal({ delay: 0.4 });

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Event Planner",
      quote: "Yashasvibhav transformed how I create invitations. The AI suggestions are spot-on, and my clients love the professional quality!",
      avatarColor: "#8b5cf6",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      quote: "Creating promotional posters has never been this easy. I saved hours of design work and the results look amazing!",
      avatarColor: "#06b6d4",
      rating: 5
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Social Media Manager",
      quote: "The variety of templates is incredible. I can create stunning cards for every festival and occasion in minutes!",
      avatarColor: "#10b981",
      rating: 5
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Teacher",
      quote: "My students love the certificates and achievement cards I create. The app makes professional design accessible to everyone!",
      avatarColor: "#f59e0b",
      rating: 5
    }
  ];

  // Background color transform
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(30, 27, 75)", "rgb(67, 56, 202)", "rgb(99, 102, 241)"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

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
              Stories of{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
          </motion.div>

          <motion.div
            ref={subtitleReveal.ref}
            initial={subtitleReveal.initial}
            animate={subtitleReveal.animate}
            transition={subtitleReveal.transition}
          >
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover how thousands of users are creating magical moments with Yashasvibhav
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <SpeechBubble
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={scrollYProgress >= 0.5}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-lg opacity-80">Happy Users</div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-4xl font-bold mb-2">4.9★</div>
            <div className="text-lg opacity-80">App Rating</div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Join the Celebration Community
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full text-black font-semibold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
              Start Creating Today
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              View All Reviews
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;