import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FluidWaves = () => {
  const meshRef = useRef();
  const geometryRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 50);
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const positionAttribute = geometry.getAttribute('position');
    const initialPositions = geometry.userData.initialPositions || positionAttribute.array.slice();
    geometry.userData.initialPositions = initialPositions;

    for (let i = 0; i < positionAttribute.count; i++) {
      const i3 = i * 3;
      const x = initialPositions[i3];
      const y = initialPositions[i3 + 1];
      const z = initialPositions[i3 + 2];

      const distance = Math.sqrt(x * x + y * y + z * z);
      const wave = Math.sin(distance * 5 - t * 3) * 0.3 + Math.sin(t * 2 + i * 0.1) * 0.2;

      positionAttribute.setXYZ(
        i,
        x * (1 + wave),
        y * (1 + wave),
        z * (1 + wave)
      );
    }
    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhongMaterial
        color="#8b6f47"
        emissive="#a0826d"
        emissiveIntensity={0.5}
        specular="#e8dfd5"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
};

const TracingOrbit = ({ radius, speed, color }) => {
  const groupRef = useRef();
  const trailRef = useRef([]);
  const lineRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle = t * speed;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle * 0.5) * radius * 0.3;
    const z = Math.sin(angle) * radius * 0.6;

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);

      trailRef.current.push(new THREE.Vector3(x, y, z));
      if (trailRef.current.length > 100) {
        trailRef.current.shift();
      }

      if (lineRef.current) {
        lineRef.current.geometry.setFromPoints(trailRef.current);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={color} transparent opacity={0.6} linewidth={2} />
      </line>
    </group>
  );
};

const HeroFluid3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#faf8f3']} />
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#8b6f47" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a0826d" />
        <pointLight position={[0, 8, 3]} intensity={1.5} color="#ffffff" />

        <FluidWaves />
        <TracingOrbit radius={3} speed={0.8} color="#8b6f47" />
        <TracingOrbit radius={2.2} speed={-1.1} color="#a0826d" />
        <TracingOrbit radius={3.5} speed={0.6} color="#9b8568" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroFluid3D;
