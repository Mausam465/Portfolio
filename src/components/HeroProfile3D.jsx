import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedNetwork = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.z = t * 0.15;
    }
  });

  // Create nodes for the network visualization
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i / 20) * Math.PI * 2,
    radius: 0.8 + Math.sin(i * 0.5) * 0.3,
  }));

  return (
    <group>
      {/* Central pulsing core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.6, 2]} />
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={1.5}
          distort={0.3}
          speed={2.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Network nodes */}
      {nodes.map((node) => (
        <NetworkNode key={node.id} node={node} />
      ))}

      {/* Animated orbital particles */}
      {[...Array(8)].map((_, i) => (
        <OrbitalTrail key={i} index={i} />
      ))}

      {/* Outer glow shells */}
      <mesh scale={[1.3, 1.3, 1.3]} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[1, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

const NetworkNode = ({ node }) => {
  const nodeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const x = Math.cos(node.angle) * node.radius;
    const y = Math.sin(node.angle) * node.radius;
    const z = Math.sin(t * 1.5 + node.id) * 0.4;

    nodeRef.current.position.set(x, y, z);

    const scale = 0.06 + 0.03 * Math.sin(t * 2 + node.id * 0.3);
    nodeRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#38bdf8"
        emissiveIntensity={2.5}
        toneMapped={false}
      />
    </mesh>
  );
};

const OrbitalTrail = ({ index }) => {
  const trailRef = useRef();
  const positions = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle1 = (index / 8) * Math.PI * 2 + t * 1.2;
    const angle2 = t * 0.7;

    const x = Math.cos(angle1) * 1.8 * Math.cos(angle2);
    const y = Math.sin(angle1) * 1.8 * Math.cos(angle2);
    const z = Math.sin(angle2) * 1.2;

    if (trailRef.current) {
      trailRef.current.position.set(x, y, z);

      const scale = 0.04 + 0.02 * Math.sin(t * 3);
      trailRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={trailRef}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#38bdf8"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};

const HeroProfile3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#0ea5e9" />
        <pointLight position={[0, 0, 8]} intensity={2.5} color="#ffffff" />
        <Stars radius={80} depth={50} count={3000} factor={4} fade speed={0.5} />
        <AnimatedNetwork />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroProfile3D;
