import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCrystal = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.35;
      meshRef.current.rotation.z = t * 0.1;
      
      meshRef.current.scale.x = 1 + 0.1 * Math.sin(t * 0.5);
      meshRef.current.scale.y = 1 + 0.1 * Math.sin(t * 0.5 + 1);
      meshRef.current.scale.z = 1 + 0.1 * Math.sin(t * 0.5 + 2);
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <icosahedronGeometry args={[1, 5]} />
      <MeshDistortMaterial
        color="#8b6f47"
        emissive="#a0826d"
        emissiveIntensity={0.8}
        distort={0.3}
        speed={2}
        metalness={0.85}
        roughness={0.15}
      />
    </mesh>
  );
};

const ReflectionRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.05;
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.z = t * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Ring 1 - Outer */}
      <mesh rotation={[Math.PI / 3.5, 0, 0]}>
        <torusGeometry args={[3.5, 0.12, 8, 100]} />
        <meshStandardMaterial
          color="#9b8568"
          emissive="#9b8568"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Ring 2 - Middle */}
      <mesh rotation={[0, Math.PI / 4.5, Math.PI / 5]}>
        <torusGeometry args={[2.8, 0.08, 8, 100]} />
        <meshStandardMaterial
          color="#8b6f47"
          emissive="#8b6f47"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Ring 3 - Inner */}
      <mesh rotation={[Math.PI / 2.2, Math.PI / 3.5, 0]}>
        <torusGeometry args={[2, 0.06, 8, 100]} />
        <meshStandardMaterial
          color="#a0826d"
          emissive="#a0826d"
          emissiveIntensity={0.7}
          metalness={0.75}
          roughness={0.25}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

const AmbientParticles = () => {
  const particlesRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.x = t * 0.01;
      particlesRef.current.rotation.y = t * 0.025;
    }
  });

  const particles = [];
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 8,
      size: Math.random() * 0.08 + 0.02,
    });
  }

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color="#a0826d"
            emissive="#9b8568"
            emissiveIntensity={1.2}
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

const HeroPremium3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={['#faf8f3']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[8, 8, 8]} intensity={3} color="#8b6f47" />
        <pointLight position={[-8, -8, -8]} intensity={2.5} color="#a0826d" />
        <pointLight position={[0, 0, 10]} intensity={2} color="#ffffff" decay={2} />

        <FloatingCrystal />
        <ReflectionRings />
        <AmbientParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroPremium3D;
