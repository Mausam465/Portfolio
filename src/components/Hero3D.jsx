import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const InteractiveParticles = (props) => {
  const ref = useRef();
  // Generate random particles within a sphere area
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    // Slowly rotate the entire particle system
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Slight interactivity: gently move based on mouse position
    const { mouse } = state;
    ref.current.rotation.x += (mouse.y * 0.05 - ref.current.rotation.x) * 0.1;
    ref.current.rotation.y += (mouse.x * 0.05 - ref.current.rotation.y) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b6f47"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <Suspense fallback={null}>
          <InteractiveParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}
