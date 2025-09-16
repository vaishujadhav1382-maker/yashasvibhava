import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCard = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const cardRef = useRef();
  const textRef = useRef();

  useFrame((state) => {
    if (cardRef.current) {
      const time = state.clock.elapsedTime;
      cardRef.current.rotation.y = rotation[1] + time * 0.3;
      cardRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group ref={cardRef} position={position}>
      {/* Card Base */}
      <RoundedBox
        args={[2, 3, 0.1]}
        radius={0.1}
        smoothness={4}
        material={
          <meshStandardMaterial
            color="#667eea"
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.1}
          />
        }
      />
      
      {/* Card Front */}
      <RoundedBox
        args={[1.8, 2.8, 0.05]}
        radius={0.08}
        position={[0, 0, 0.06]}
        material={
          <meshStandardMaterial
            color="#f093fb"
            transparent
            opacity={0.8}
          />
        }
      />
      
      {/* Celebration Icon */}
      <Text
        ref={textRef}
        position={[0, 0, 0.11]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        🎉
      </Text>
      
      {/* Ambient Light */}
      <pointLight
        position={[0, 0, 1]}
        intensity={0.5}
        color="#fbbf24"
      />
    </group>
  );
};

export default FloatingCard;