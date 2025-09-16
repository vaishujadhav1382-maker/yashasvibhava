import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Phone = ({ position, rotation, screenshot, isActive }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

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

      {/* Screen */}
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

      {/* Screen Content */}
      <Html
        transform
        distanceFactor={1.5}
        position={[0, 0, 0.1]}
        style={{
          width: '200px',
          height: '350px',
          pointerEvents: 'none',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-white p-4"
          style={{
            background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
          }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-sm font-bold mb-2">{screenshot.title}</h3>
            <p className="text-xs opacity-80">{screenshot.description}</p>
          </div>
          
          {/* Mock UI Elements */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
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
              {screenshot.title}
            </span>
          </div>
        </Html>
      )}

      {/* Glow Effect */}
      {isActive && (
        <pointLight
          position={[0, 0, 1]}
          intensity={0.5}
          color="#8b5cf6"
          distance={3}
        />
      )}
    </group>
  );
};

const PhoneCarousel = ({ screenshots }) => {
  const groupRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const { viewport } = useThree();

  // Setup global rotation function for GSAP ScrollTrigger
  useEffect(() => {
    window.phoneCarouselRotation = (progress) => {
      if (groupRef.current) {
        // Rotate the entire carousel based on scroll progress
        groupRef.current.rotation.y = progress * Math.PI * 2;
        
        // Update active phone based on rotation
        const newActiveIndex = Math.floor(progress * screenshots.length) % screenshots.length;
        setActiveIndex(newActiveIndex);
      }
    };

    return () => {
      delete window.phoneCarouselRotation;
    };
  }, [screenshots.length]);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle bobbing motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Subtle overall rotation when not controlled by scroll
      if (!window.phoneCarouselRotation) {
        groupRef.current.rotation.y += 0.003;
      }
    }
  });

  // Calculate positions for phones in a circle
  const radius = 3;
  const angleStep = (Math.PI * 2) / screenshots.length;

  return (
    <group ref={groupRef}>
      {screenshots.map((screenshot, index) => {
        const angle = index * angleStep;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const rotationY = angle + Math.PI; // Face inward

        return (
          <Phone
            key={screenshot.id}
            position={[x, 0, z]}
            rotation={[0, rotationY, 0]}
            screenshot={screenshot}
            isActive={index === activeIndex}
          />
        );
      })}

      {/* Central Glow */}
      <pointLight
        position={[0, 0, 0]}
        intensity={0.3}
        color="#ffffff"
        distance={6}
      />

      {/* Ambient particles */}
      {[...Array(15)].map((_, i) => (
        <group key={i}>
          <mesh
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 10,
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial
              color="#8b5cf6"
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default PhoneCarousel;