import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

const FloatingBox = ({ position, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += speed * 0.01;
    meshRef.current.rotation.y += speed * 0.015;
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#c9a961"
        emissive="#9b8b7e"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const CenterGeometry = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.2;
    groupRef.current.rotation.z = t * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Center core */}
      <mesh>
        <octahedronGeometry args={[0.8, 3]} />
        <meshStandardMaterial
          color="#c9a961"
          emissive="#9b8b7e"
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting boxes */}
      <FloatingBox position={[2, 0, 0]} speed={1.5} />
      <FloatingBox position={[-2, 0, 0]} speed={1.2} />
      <FloatingBox position={[0, 0, 2]} speed={1.8} />
      <FloatingBox position={[0, 0, -2]} speed={1.3} />

      {/* Wireframe outer sphere */}
      <mesh>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshStandardMaterial
          color="#c9a961"
          wireframe
          transparent
          opacity={0.2}
          emissive="#c9a961"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const HeroCenter3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#c9a961" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#9b8b7e" />
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
          <CenterGeometry />
        </Float>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HeroCenter3D;
