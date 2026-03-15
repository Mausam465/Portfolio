import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const AnimatedShape = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#a0826d"
          attach="material"
          distort={0.5}
          speed={2.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#8b6f47"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Profile3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-10 cursor-pointer pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#8b6f47" />
        <AnimatedShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default Profile3D;
