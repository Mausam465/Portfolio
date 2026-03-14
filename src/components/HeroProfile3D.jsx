import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Torus, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingRings = () => {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const core = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ring1.current.rotation.x = t * 0.6;
    ring1.current.rotation.y = t * 0.4;
    ring2.current.rotation.x = -t * 0.4;
    ring2.current.rotation.z = t * 0.5;
    ring3.current.rotation.y = -t * 0.3;
    ring3.current.rotation.z = t * 0.6;
    core.current.rotation.x = t * 0.2;
    core.current.rotation.y = t * 0.3;
    // Pulsing core
    const pulse = 1 + 0.1 * Math.sin(t * 2);
    core.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <group>
      {/* Glowing core sphere */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={core}>
          <sphereGeometry args={[0.65, 64, 64]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.8}
            distort={0.35}
            speed={3}
            metalness={1}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Ring 1 - outer cyan */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.4, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Ring 2 - mid teal */}
      <mesh ref={ring2}>
        <torusGeometry args={[1.1, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Ring 3 - inner white */}
      <mesh ref={ring3}>
        <torusGeometry args={[0.9, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Floating dots around it */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 1.7;
        const y = Math.sin(angle) * 1.7;
        return (
          <mesh key={i} position={[x, y, 0]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={1.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const HeroProfile3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0ea5e9" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#ffffff" />
        <Stars radius={80} depth={50} count={3000} factor={4} fade speed={0.5} />
        <RotatingRings />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroProfile3D;
