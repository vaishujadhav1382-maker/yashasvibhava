import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const VideoPhone = ({ position, rotation, videoSrc, isActive, title = "App Demo" }) => {
  const meshRef = useRef();
  const videoRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Gentle rotation when active
      if (isActive) {
        meshRef.current.rotation.y += 0.005;
      }

      // Hover effect
      const targetScale = hovered ? 1.1 : (isActive ? 1.05 : 1);
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  useEffect(() => {
    if (videoRef.current && isActive) {
      const video = videoRef.current;
      
      // Add event listeners for debugging
      const handleLoadStart = () => console.log('Video load started');
      const handleCanPlay = () => {
        console.log('Video can play');
        setVideoLoaded(true);
      };
      const handleError = (e) => {
        console.error('Video error:', e);
        console.error('Video error details:', video.error);
      };
      
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Attempt to play video
      video.play().catch(error => {
        console.warn('Video autoplay failed:', error);
        // Try to play with user interaction
        const playVideo = () => {
          video.play().catch(e => console.error('Manual play failed:', e));
        };
        document.addEventListener('click', playVideo, { once: true });
      });
      
      return () => {
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    } else if (videoRef.current && !isActive) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Phone Frame */}
      <RoundedBox
        args={[1.8, 3.2, 0.15]}
        radius={0.1}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={isActive ? "#1f2937" : "#374151"}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Screen Bezel */}
      <RoundedBox
        args={[1.6, 2.8, 0.02]}
        radius={0.05}
        position={[0, 0, 0.08]}
      >
        <meshStandardMaterial
          color="#000000"
          emissive={isActive ? "#1a1a2e" : "#0f0f0f"}
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Video Screen Content */}
      <Html
        transform
        distanceFactor={1.5}
        position={[0, 0, 0.1]}
        style={{
          width: '240px',
          height: '420px',
          pointerEvents: 'none',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <div className="w-full h-full relative bg-black rounded-xl overflow-hidden">
          {videoSrc ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => {
                console.log('Video loaded successfully');
                setVideoLoaded(true);
              }}
              onError={(e) => {
                console.error('Video loading error:', e.target.error);
                console.log('Video src:', videoSrc);
              }}
              onLoadStart={() => console.log('Video load started')}
              style={{
                borderRadius: '12px',
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
              {/* Enhanced Fallback content */}
              <div className="w-full h-full bg-gradient-to-br from-pink-600 to-purple-600 flex flex-col items-center justify-center text-white p-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <h3 className="text-sm font-bold mb-2">Video Loading...</h3>
                  <p className="text-xs opacity-80">Please check console for errors</p>
                </div>
              </div>
            </video>
          ) : (
            // ... existing placeholder code ...
            <div className="w-full h-full bg-gradient-to-br from-pink-600 to-purple-600 flex flex-col items-center justify-center text-white p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-sm font-bold mb-2">{title}</h3>
                <p className="text-xs opacity-80">Add demo.mp4 to see video</p>
              </div>
              
              {/* Mock UI Elements */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
          )}

          {/* Video Controls Overlay */}
          {videoSrc && isActive && (
            <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
              <div className="flex items-center justify-between text-white text-xs">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  LIVE DEMO
                </span>
                <span>{title}</span>
              </div>
            </div>
          )}
        </div>
      </Html>

      {/* Floating Label */}
      {isActive && (
        <Html
          position={[0, -2, 0]}
          transform
          style={{ pointerEvents: 'none' }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
            <span className="text-sm font-medium text-gray-800">
              {title}
            </span>
          </div>
        </Html>
      )}

      {/* Enhanced Glow Effect for Video */}
      {isActive && (
        <>
          <pointLight
            position={[0, 0, 1]}
            intensity={0.8}
            color="#FF0057"
            distance={3}
          />
          <pointLight
            position={[1, 1, 0.5]}
            intensity={0.5}
            color="#9C27B0"
            distance={2}
          />
        </>
      )}

      {/* Top Phone Details */}
      <Html
        position={[0, 1.8, 0.1]}
        transform
        style={{ pointerEvents: 'none' }}
      >
        <div className="flex items-center justify-center space-x-1">
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <div className="w-8 h-1 bg-white/30 rounded-full"></div>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
      </Html>

      {/* Home Indicator */}
      <Html
        position={[0, -1.6, 0.1]}
        transform
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-16 h-1 bg-white/40 rounded-full"></div>
      </Html>
    </group>
  );
};

export default VideoPhone;