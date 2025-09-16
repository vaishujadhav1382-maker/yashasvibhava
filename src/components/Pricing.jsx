import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal, useStaggerAnimation } from '../hooks/useScrollReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ConfettiBurst = ({ isActive }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      // Create confetti particles
      const confettiColors = ['#FFD700', '#FF69B4', '#00CED1', '#98FB98', '#DDA0DD'];
      const particles = [];

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
          top: 50%;
          left: 50%;
          pointer-events: none;
          border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        `;
        containerRef.current.appendChild(particle);
        particles.push(particle);
      }

      // Animate confetti
      particles.forEach((particle, index) => {
        gsap.set(particle, {
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5,
        });

        gsap.to(particle, {
          duration: 2 + Math.random() * 2,
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 400,
          rotation: Math.random() * 720,
          opacity: 0,
          scale: 0,
          ease: "power2.out",
          delay: index * 0.02,
          onComplete: () => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }
        });
      });
    }
  }, [isActive]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
};

const PricingCard = ({ plan, index, isPopular = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const cardRef = useRef(null);

  const cardReveal = useScrollReveal({ 
    delay: index * 0.2,
    threshold: 0.1
  });

  const handleGetStarted = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <motion.div
      ref={cardReveal.ref}
      initial={cardReveal.initial}
      animate={cardReveal.animate}
      transition={cardReveal.transition}
      className={`relative ${isPopular ? 'transform scale-105 z-10' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          🎉 Most Popular
        </motion.div>
      )}

      <motion.div
        ref={cardRef}
        className={`relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 h-full ${
          isPopular
            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-yellow-400/50 shadow-2xl'
            : 'bg-white/10 border-white/20 hover:bg-white/15'
        }`}
        whileHover={{ 
          scale: 1.02,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Plan Icon */}
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl mb-6 mx-auto"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          {plan.icon}
        </motion.div>

        {/* Plan Name */}
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          {plan.name}
        </h3>

        {/* Plan Description */}
        <p className="text-white/70 text-center mb-6">
          {plan.description}
        </p>

        {/* Price */}
        <div className="text-center mb-8">
          <motion.div
            className="flex items-baseline justify-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-white/60 text-lg">₹</span>
            <span className="text-4xl lg:text-5xl font-bold text-white">
              {plan.price}
            </span>
            <span className="text-white/60 text-lg ml-1">
              /{plan.period}
            </span>
          </motion.div>
          {plan.originalPrice && (
            <div className="text-white/50 line-through text-lg mt-1">
              ₹{plan.originalPrice}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + featureIndex * 0.1 }}
            >
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/90">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleGetStarted}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
            isPopular
              ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-black hover:shadow-2xl hover:scale-105'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">
            {plan.ctaText}
          </span>
          {isPopular && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
          )}
        </motion.button>

        {/* Confetti Effect */}
        <ConfettiBurst isActive={showConfetti} />

        {/* Decorative Elements */}
        {isHovered && (
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  const containerRef = useRef(null);
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleReveal = useScrollReveal({ delay: 0.2 });
  const subtitleReveal = useScrollReveal({ delay: 0.4 });

  // GSAP ScrollTrigger for confetti burst
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "center center",
      onEnter: () => {
        setTriggerConfetti(true);
        setTimeout(() => setTriggerConfetti(false), 2000);
      },
      once: true
    });

    return () => trigger.kill();
  }, []);

  const plans = [
    {
      name: "Free",
      icon: "🎨",
      description: "Perfect for personal use and getting started",
      price: "0",
      period: "forever",
      ctaText: "Get Started Free",
      features: [
        "5 cards per month",
        "Basic templates",
        "Standard quality exports",
        "Watermark included",
        "Community support"
      ]
    },
    {
      name: "Pro",
      icon: "⭐",
      description: "Ideal for frequent users and small businesses",
      price: "199",
      originalPrice: "299",
      period: "month",
      ctaText: "Start Pro Trial",
      isPopular: true,
      features: [
        "Unlimited cards & posters",
        "Premium templates",
        "HD quality exports",
        "No watermarks",
        "AI-powered suggestions",
        "Priority support",
        "Advanced editing tools"
      ]
    },
    {
      name: "Business",
      icon: "🚀",
      description: "For teams and professional designers",
      price: "499",
      originalPrice: "699",
      period: "month",
      ctaText: "Contact Sales",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Brand kit & assets",
        "Custom templates",
        "Analytics dashboard",
        "API access",
        "Dedicated account manager"
      ]
    }
  ];

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(49, 46, 129)", "rgb(76, 29, 149)", "rgb(126, 34, 206)"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
              Choose Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Celebration
              </span>{' '}
              Plan
            </h2>
          </motion.div>

          <motion.div
            ref={subtitleReveal.ref}
            initial={subtitleReveal.initial}
            animate={subtitleReveal.animate}
            transition={subtitleReveal.transition}
          >
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Unlock unlimited creativity with our flexible pricing plans.
              Start free and upgrade as you grow!
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-2 text-white/70">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 support</span>
            </div>
          </div>

          <p className="text-white/60 text-sm">
            Join 10,000+ creators who chose Yashasvibhav for their celebration needs
          </p>
        </motion.div>

        {/* Global Confetti Trigger */}
        <ConfettiBurst isActive={triggerConfetti} />
      </div>
    </motion.section>
  );
};

export default Pricing;