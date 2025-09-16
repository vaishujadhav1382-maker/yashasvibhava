import React from 'react';

const SimpleTestimonials = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Celebrators Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Arjun Patel</h4>
                <p className="text-gray-600 text-sm">Mumbai</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Yashasvibhav made my daughter's birthday card absolutely magical! The AI background removal is incredible."</p>
          </div>
          
          <div className="bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                <p className="text-gray-600 text-sm">Delhi</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The templates are gorgeous and the effects make every card feel like a work of art. Love it!"</p>
          </div>
          
          <div className="bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Rahul Kumar</h4>
                <p className="text-gray-600 text-sm">Bangalore</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Professional quality cards with zero effort. The reminder feature saved me so many times!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;
