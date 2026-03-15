import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';

const FloatingGeo = ({ position, type, speed, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += speed * 0.01;
    meshRef.current.rotation.y += speed * 0.012;
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 0.3) * 0.8;
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.25) * 0.6;
  });

  const GeometryComponent = {
    box: Box,
    sphere: Sphere,
    torus: Torus,
  }[type];

  return (
    <mesh ref={meshRef} position={position}>
      {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {type === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
      {type === 'torus' && <torusGeometry args={[0.7, 0.2, 16, 100]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.6}
        roughness={0.4}
        wireframe={false}
      />
    </mesh>
  );
};

const GeoPattern = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.05;
    groupRef.current.rotation.z = t * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Central torus */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#8b6f47"
          emissive="#a0826d"
          emissiveIntensity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Floating geometry pieces */}
      <FloatingGeo position={[3, 1, 0]} type="box" speed={2} color="#a0826d" />
      <FloatingGeo position={[-3, -1, 0]} type="sphere" speed={1.5} color="#8b6f47" />
      <FloatingGeo position={[0, 3, 2]} type="torus" speed={1.8} color="#9b8568" />
      <FloatingGeo position={[2, -2, -2]} type="box" speed={1.2} color="#a0826d" />
      <FloatingGeo position={[-2, 2, 2]} type="sphere" speed={2.2} color="#8b6f47" />
      <FloatingGeo position={[1, -3, 1]} type="torus" speed={1.6} color="#9b8568" />

      {/* Outer wireframe structure */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[3, 1]} />
        <meshStandardMaterial
          color="#8b6f47"
          wireframe
          transparent
          opacity={0.15}
          emissive="#8b6f47"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

const HeroGeo3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#faf8f3']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[15, 15, 15]} intensity={2.5} color="#8b6f47" />
        <pointLight position={[-15, -15, -15]} intensity={2} color="#a0826d" />
        <pointLight position={[0, 0, 15]} intensity={1.5} color="#9b8568" />
        <GeoPattern />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroGeo3D;
