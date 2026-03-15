import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const HelixStrand = ({ offset, color, direction }) => {
  const groupRef = useRef();
  const spheres = [];

  for (let i = 0; i < 40; i++) {
    const angle = (i / 40) * Math.PI * 4 + offset;
    const x = Math.cos(angle) * 1.5;
    const y = (i / 40) * 4 - 2;
    const z = Math.sin(angle) * 1.5;

    spheres.push({ x, y, z, angle });
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = t * direction * 1.5;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={[sphere.x, sphere.y, sphere.z]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8 + 0.4 * Math.sin(i * 0.5)}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const CentralCore = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.4;

      meshRef.current.scale.x = 1 + 0.15 * Math.sin(t);
      meshRef.current.scale.y = 1 + 0.15 * Math.sin(t + 1);
      meshRef.current.scale.z = 1 + 0.15 * Math.sin(t + 2);
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.6, 2]} />
      <meshStandardMaterial
        color="#8b6f47"
        emissive="#a0826d"
        emissiveIntensity={1.2}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const ConnectorLines = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.2;
    }
  });

  const lines = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    lines.push({
      start: [0, 0, 0],
      end: [Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0],
    });
  }

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => {
        const points = [new THREE.Vector3(...line.start), new THREE.Vector3(...line.end)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#9b8568" linewidth={2} transparent opacity={0.4} />
          </line>
        );
      })}
    </group>
  );
};

const RotatingRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.15;
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.08, 8, 64]} />
        <meshStandardMaterial
          color="#a0826d"
          emissive="#a0826d"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 2.5, 0]}>
        <torusGeometry args={[2, 0.06, 8, 64]} />
        <meshStandardMaterial
          color="#8b6f47"
          emissive="#8b6f47"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};

const HeroHelix3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
        <color attach="background" args={['#faf8f3']} />
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#8b6f47" />
        <pointLight position={[-5, -5, -5]} intensity={2} color="#a0826d" />
        <pointLight position={[0, 0, 8]} intensity={1.5} color="#ffffff" decay={2} />

        <HelixStrand offset={0} color="#8b6f47" direction={1} />
        <HelixStrand offset={Math.PI} color="#a0826d" direction={-1} />
        
        <CentralCore />
        <ConnectorLines />
        <RotatingRings />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroHelix3D;
