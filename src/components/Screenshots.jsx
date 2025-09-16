import React, { useState } from 'react';
import { motion } from './Motion';

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock screenshots data - in a real app, these would be actual app screenshots
  const screenshots = [
    {
      title: "Home Screen",
      description: "Beautiful Material Design interface with dynamic content sections",
      image: "/api/placeholder/300/600",
      category: "Interface"
    },
    {
      title: "AI Background Removal",
      description: "TensorFlow Lite powered background removal in real-time",
      image: "/api/placeholder/300/600",
      category: "AI Features"
    },
    {
      title: "Card Editor",
      description: "Professional editing tools with filters and effects",
      image: "/api/placeholder/300/600",
      category: "Editing"
    },
    {
      title: "Template Gallery",
      description: "200+ templates for all occasions and festivals",
      image: "/api/placeholder/300/600",
      category: "Templates"
    },
    {
      title: "Birthday Reminders",
      description: "Smart notification system with widget support",
      image: "/api/placeholder/300/600",
      category: "Features"
    },
    {
      title: "Export Options",
      description: "HD quality export with sharing capabilities",
      image: "/api/placeholder/300/600",
      category: "Export"
    }
  ];

  // Create placeholder images with different gradients
  const createPlaceholderContent = (index) => {
    const gradients = [
      'from-blue-400 to-purple-500',
      'from-green-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-yellow-400 to-red-500',
      'from-indigo-400 to-cyan-500',
      'from-pink-400 to-rose-500'
    ];

    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradients[index]} flex flex-col items-center justify-center text-white`}>
        <div className="text-4xl mb-4">
          {index === 0 ? '🏠' : index === 1 ? '🤖' : index === 2 ? '✨' : index === 3 ? '🎨' : index === 4 ? '🎂' : '💾'}
        </div>
        <h3 className="text-lg font-bold text-center px-4">{screenshots[index].title}</h3>
        <p className="text-sm text-center px-4 mt-2 opacity-90">{screenshots[index].description}</p>
      </div>
    );
  };

  return (
    <section id="screenshots" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            See Yashasvibhav in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the intuitive interface and powerful features that make card creation effortless and enjoyable
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Screenshot Display */}
            <div className="relative mx-auto w-72 lg:w-80">
              <div className="relative bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="relative h-[480px] lg:h-[560px]">
                    {createPlaceholderContent(selectedImage)}
                  </div>
                </div>
                
                {/* Phone details */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-500 rounded-xl p-3 shadow-lg hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-white text-sm font-medium">AI Powered</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-green-500 rounded-xl p-3 shadow-lg hidden lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="text-white text-sm font-medium">HD Export</span>
            </motion.div>
          </motion.div>

          {/* Screenshot Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <div className="space-y-4">
              {screenshots.map((screenshot, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    selectedImage === index
                      ? 'bg-primary-50 border-2 border-primary-200'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                      selectedImage === index ? 'bg-primary-100' : 'bg-white'
                    }`}>
                      {index === 0 ? '🏠' : index === 1 ? '🤖' : index === 2 ? '✨' : index === 3 ? '🎨' : index === 4 ? '🎂' : '💾'}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 ${
                        selectedImage === index ? 'text-primary-900' : 'text-gray-900'
                      }`}>
                        {screenshot.title}
                      </h3>
                      <p className={`text-sm ${
                        selectedImage === index ? 'text-primary-700' : 'text-gray-600'
                      }`}>
                        {screenshot.description}
                      </p>
                      <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${
                        selectedImage === index 
                          ? 'bg-primary-200 text-primary-800' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {screenshot.category}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl text-white"
            >
              <h3 className="text-lg font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-sm opacity-90 mb-4">
                Download Yashasvibhav now and start creating beautiful greeting cards with AI-powered tools.
              </p>
              <a
                href="#download"
                className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="mr-2">📱</span>
                Download Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;