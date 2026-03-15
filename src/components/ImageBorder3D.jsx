import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Starfield background
const StarField = () => {
  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.00005;
    }
  });

  const stars = [];
  for (let i = 0; i < 300; i++) {
    stars.push(
      Math.random() * 120 - 60,
      Math.random() * 120 - 60,
      Math.random() * 120 - 60
    );
  }

  return (
    <points ref={pointsRef} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={300}
          array={new Float32Array(stars)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        color="#ffffff" 
        transparent 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

// Central Moon - The Hero Element
const Moon = ({ isHovered }) => {
  const moonRef = useRef();
  const lightRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.3;
    if (moonRef.current) {
      moonRef.current.rotation.x += 0.0005;
      moonRef.current.rotation.y += 0.001;
      
      // Subtle floating animation
      moonRef.current.position.y = Math.sin(t) * 0.3;
      moonRef.current.position.z = Math.cos(t * 0.7) * 0.2;
    }
  });

  return (
    <group ref={moonRef} position={[0, 0.5, 0]}>
      {/* Main moon sphere with cratered texture appearance */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          color="#e8e8e8"
          metalness={0.1}
          roughness={0.8}
          emissive="#4a4a4a"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Moon glow aura */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#cccccc"
          emissiveIntensity={isHovered ? 0.4 : 0.2}
          transparent
          opacity={0.15}
          side={2}
        />
      </mesh>
    </group>
  );
};



const ImageBorder3D = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        
        {/* Minimal lighting for moon theme */}
        <ambientLight intensity={0.2} />
        <pointLight position={[2, 2, 4]} intensity={2} color="#ffffff" />
        <pointLight position={[-1, 1, 3]} intensity={1} color="#8b8b9a" />

        <StarField />
        <Moon isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

export default ImageBorder3D;
