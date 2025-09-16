import React from 'react';

const GiftCardBox = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="relative">
        {/* Gift Card Box - Exact replica */}
        <div className="w-80 h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl"></div>
          
          {/* Content - Centered exactly as in image */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
            <i className="fas fa-gift text-6xl text-white mb-4"></i>
            <h2 className="text-xl font-bold text-white mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
              Create Magic
            </h2>
            
            <p className="text-white/80 text-sm">
              Beautiful greeting cards
            </p>
          </div>
        </div>
        
        {/* Simple shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default GiftCardBox;
