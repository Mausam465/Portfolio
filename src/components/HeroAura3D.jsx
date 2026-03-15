import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const LightTrail = ({ index }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle = (index / 8) * Math.PI * 2 + t * 1.5;
    const x = Math.cos(angle) * 2.5;
    const y = Math.sin(angle) * 2.5;
    const z = Math.sin(t * 0.8 + index) * 1.5;

    meshRef.current.position.set(x, y, z);

    const scale = 0.08 + 0.04 * Math.sin(t * 2 + index * 0.5);
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#9b8568"
        emissive="#9b8568"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};

const MorphingSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.material.distort = 0.4 + 0.2 * Math.sin(t * 0.5);
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <icosahedronGeometry args={[1, 5]} />
      <MeshDistortMaterial
        color="#c9a961"
        emissive="#9b8b7e"
        emissiveIntensity={1.2}
        distort={0.4}
        speed={3}
        metalness={0.9}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const AuraRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.1;
    groupRef.current.rotation.y = t * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.06, 8, 100]} />
        <meshStandardMaterial
          color="#9b8b7e"
          emissive="#9b8b7e"
          emissiveIntensity={0.6}
          wireframe={false}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Ring 2 */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.5, 0.04, 8, 100]} />
        <meshStandardMaterial
          color="#c9a961"
          emissive="#c9a961"
          emissiveIntensity={0.7}
          wireframe={false}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Ring 3 */}
      <mesh rotation={[Math.PI / 2.5, Math.PI / 3, 0]}>
        <torusGeometry args={[2.2, 0.05, 8, 100]} />
        <meshStandardMaterial
          color="#7a7a8a"
          emissive="#7a7a8a"
          emissiveIntensity={0.5}
          wireframe={false}
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
};

const HeroAura3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#c9a961" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#9b8b7e" />
        <pointLight position={[0, 0, 10]} intensity={2} color="#7a7a8a" />

        {/* Main scene */}
        <AuraRings />
        <MorphingSphere />

        {/* Light trails */}
        {[...Array(8)].map((_, i) => (
          <LightTrail key={i} index={i} />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroAura3D;
