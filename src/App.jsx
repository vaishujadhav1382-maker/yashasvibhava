import React from 'react';
import './App.css';

// Simple Components (No 3D animations)
import SimpleNavbar from './components/SimpleNavbar';
import SimpleHero from './components/SimpleHero';
import SimpleStats from './components/SimpleStats';
import SimpleFeatures from './components/SimpleFeatures';
import SimpleDemo from './components/SimpleDemo';
import VideoDemo from './components/VideoDemo';
import SimpleTestimonials from './components/SimpleTestimonials';
import SimplePricing from './components/SimplePricing';
import SimpleContact from './components/SimpleContact';
import SimpleFooter from './components/SimpleFooter';

function App() {
  return (
    <div className="relative min-h-screen animated-gradient overflow-x-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        <SimpleNavbar />
        
        <main>
          <SimpleHero />
          <SimpleStats />
          <SimpleFeatures />
          <SimpleDemo />
          <VideoDemo />
          <SimpleTestimonials />
          <SimplePricing />
          <SimpleContact />
        </main>
        
        <SimpleFooter />
      </div>
    </div>
  );
}

export default App;