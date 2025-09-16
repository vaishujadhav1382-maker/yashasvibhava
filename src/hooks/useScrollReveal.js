import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Utility to detect mobile devices
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Utility to get reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Custom hook for scroll-reveal animations
export const useScrollReveal = (options = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: isMobile() ? 0.05 : 0.1,
    triggerOnce: true,
    ...options
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const baseTransition = {
    duration: isMobile() ? 0.4 : 0.6,
    ease: [0.23, 1, 0.320, 1],
    ...options.transition
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: isMobile() ? 30 : 50,
      scale: prefersReducedMotion() ? 1 : 0.95,
      ...options.hidden
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: baseTransition,
      ...options.visible
    }
  };

  return { ref, controls, variants };
};

// Hook for GSAP scroll-triggered animations
export const useGSAPScrollTrigger = (animationCallback, dependencies = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => animationCallback(element, 'enter'),
      onLeave: () => animationCallback(element, 'leave'),
      onEnterBack: () => animationCallback(element, 'enterBack'),
      onLeaveBack: () => animationCallback(element, 'leaveBack'),
    });

    return () => trigger.kill();
  }, dependencies);

  return elementRef;
};

// Hook for 3D tilt effect on mouse move (disabled on mobile)
export const use3DTilt = (options = {}) => {
  const elementRef = useRef(null);
  const { strength = 10, perspective = 1000 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isMobile() || prefersReducedMotion()) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / strength;
      const rotateY = (centerX - x) / strength;
      
      gsap.to(element, {
        duration: 0.3,
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: perspective,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, perspective]);

  return elementRef;
};

// Hook for parallax scrolling
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const y = self.progress * speed * 100;
        gsap.set(element, { y: -y });
      }
    });

    return () => scrollTrigger.kill();
  }, [speed]);

  return elementRef;
};

// Hook for staggered animations
export const useStaggerAnimation = (delay = 0.1) => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && containerRef.current) {
      const children = containerRef.current.children;
      
      gsap.fromTo(children, 
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: delay,
          ease: 'power2.out'
        }
      );
    }
  }, [inView, delay]);

  return { ref, containerRef };
};