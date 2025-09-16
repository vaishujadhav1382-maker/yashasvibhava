import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import axios from 'axios';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'contact' // contact or subscription
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const endpoint = formData.type === 'subscription' 
        ? 'http://localhost:8080/api/subscribe'
        : 'http://localhost:8080/api/contact';
      
      const response = await axios.post(endpoint, formData);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          type: 'contact'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-white/80 text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            placeholder="Enter your full name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-white/80 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            placeholder="your@email.com"
          />
        </motion.div>
      </div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-white/80 text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
          placeholder="What's this about?"
        />
      </motion.div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-white/80 text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
          placeholder="Tell us more about your inquiry..."
        />
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            'Send Message'
          )}
        </motion.button>

        <motion.button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, type: 'subscription' }))}
          className="flex-1 px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Subscribe to Updates
        </motion.button>
      </motion.div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-200"
        >
          🎉 Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-red-200"
        >
          ❌ Something went wrong. Please try again later.
        </motion.div>
      )}
    </motion.form>
  );
};

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleReveal = useScrollReveal({ delay: 0.2 });
  const subtitleReveal = useScrollReveal({ delay: 0.4 });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(88, 28, 135)", "rgb(59, 130, 246)", "rgb(16, 185, 129)"]
  );

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Drop us a line anytime",
      contact: "hello@yashasvibhav.com",
      color: "#8b5cf6"
    },
    {
      icon: "📱",
      title: "Call Us",
      description: "Speak with our team",
      contact: "+91 98765 43210",
      color: "#06b6d4"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant support",
      contact: "Available 24/7",
      color: "#10b981"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Our office location",
      contact: "Mumbai, India",
      color: "#f59e0b"
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor, position: 'relative' }}
      className="relative min-h-screen py-20 overflow-hidden"
    >

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
              Let's{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Connect
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
              Have questions about Yashasvibhav? Want to partner with us? 
              We'd love to hear from you and help you create something amazing!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${method.color}20` }}
                >
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {method.title}
                  </h4>
                  <p className="text-white/70 text-sm mb-1">
                    {method.description}
                  </p>
                  <p className="text-white font-medium">
                    {method.contact}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '🐦', url: '#' },
                  { name: 'Instagram', icon: '📷', url: '#' },
                  { name: 'Facebook', icon: '📘', url: '#' },
                  { name: 'LinkedIn', icon: '💼', url: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How do I get started with Yashasvibhav?",
                a: "Simply download the app, create an account, and start designing your first greeting card with our AI-powered templates!"
              },
              {
                q: "Can I use my own images in the designs?",
                a: "Absolutely! You can upload your own photos and customize templates with personal images and text."
              },
              {
                q: "Is there a limit on downloads?",
                a: "Free users get 5 downloads per month. Pro and Business plans offer unlimited downloads with premium features."
              },
              {
                q: "Do you offer custom design services?",
                a: "Yes! Our Business plan includes custom template creation and dedicated design support for your brand."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="text-left p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                <p className="text-white/70 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;