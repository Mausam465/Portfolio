import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingOrb = ({ position, speed, color, size }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.x = position[0] + Math.sin(t * speed * 0.5) * 1.2;
    meshRef.current.position.y = position[1] + Math.cos(t * speed * 0.4) * 1.2;
    meshRef.current.position.z = position[2] + Math.sin(t * speed * 0.3) * 0.8;

    meshRef.current.scale.x = size + 0.3 * Math.sin(t * speed);
    meshRef.current.scale.y = size + 0.3 * Math.sin(t * speed);
    meshRef.current.scale.z = size + 0.3 * Math.sin(t * speed);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        metalness={0.8}
        roughness={0.2}
        toneMapped={false}
      />
    </mesh>
  );
};

const EnergyLine = ({ start, end, index }) => {
  const lineRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (lineRef.current && lineRef.current.material) {
      lineRef.current.material.opacity = 0.3 + 0.4 * Math.sin(t * 2 + index);
    }
  });

  const points = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...start), new THREE.Vector3(...end)]);

  return (
    <line ref={lineRef} geometry={points}>
      <lineBasicMaterial
        color="#8b6f47"
        linewidth={2}
        transparent
        opacity={0.4}
      />
    </line>
  );
};

const PulsingBackground = () => {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.x += 0.0001;
    groupRef.current.rotation.y += 0.0003;
  });

  return (
    <group ref={groupRef}>
      {/* Stars background */}
      {[...Array(200)].map((_, i) => {
        const x = (Math.random() - 0.5) * 50;
        const y = (Math.random() - 0.5) * 50;
        const z = (Math.random() - 0.5) * 50;
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const CosmicCenter = () => {
  return (
    <group>
      {/* Main central orbs */}
      <FloatingOrb position={[0, 0, 0]} speed={1} color="#a0826d" size={0.6} />
      <FloatingOrb position={[2, 1.5, -1]} speed={1.3} color="#8b6f47" size={0.4} />
      <FloatingOrb position={[-2, -1.5, 1]} speed={0.9} color="#9b8568" size={0.5} />
      <FloatingOrb position={[1.5, -2, 0.5]} speed={1.1} color="#a0826d" size={0.35} />
      <FloatingOrb position={[-1.5, 2, -0.5]} speed={1.4} color="#8b6f47" size={0.4} />

      {/* Energy lines connecting orbs */}
      <EnergyLine start={[0, 0, 0]} end={[2, 1.5, -1]} index={0} />
      <EnergyLine start={[0, 0, 0]} end={[-2, -1.5, 1]} index={1} />
      <EnergyLine start={[0, 0, 0]} end={[1.5, -2, 0.5]} index={2} />
      <EnergyLine start={[0, 0, 0]} end={[-1.5, 2, -0.5]} index={3} />
      <EnergyLine start={[2, 1.5, -1]} end={[-2, -1.5, 1]} index={4} />

      {/* Central glowing core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#8b6f47"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

const HeroCosmic3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={['#faf8f3']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#8b6f47" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a0826d" />
        <pointLight position={[0, 0, 8]} intensity={2.5} color="#9b8568" />

        <PulsingBackground />
        <CosmicCenter />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroCosmic3D;
