import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GeometricWave = () => {
  const groupRef = useRef();
  const blocks = useMemo(() => {
    const arr = [];
    for (let x = -2; x <= 8; x++) {
      for (let z = -4; z <= 4; z++) {
        arr.push({ x, z, id: `${x}-${z}` });
      }
    }
    return arr;
  }, []);

  const meshRefs = useRef({});

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    blocks.forEach((block) => {
      const meshRef = meshRefs.current[block.id];
      if (meshRef) {
        const distance = Math.sqrt(block.x * block.x + block.z * block.z);
        const wave = Math.sin(distance * 1.5 - t * 3) * 1.5 + Math.sin(t * 2) * 0.5;
        meshRef.position.y = wave;

        const rotationWave = Math.sin(t * 2 + distance) * 0.3;
        meshRef.rotation.x = rotationWave;
        meshRef.rotation.z = rotationWave;

        const scale = 0.8 + 0.4 * Math.sin(distance * 2 + t);
        meshRef.scale.set(scale, scale, scale);

        const colorIntensity = 0.5 + 0.5 * Math.sin(distance * 2 - t * 2);
        meshRef.material.emissiveIntensity = colorIntensity;
      }
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {blocks.map((block) => (
        <mesh
          key={block.id}
          ref={(el) => (meshRefs.current[block.id] = el)}
          position={[block.x, 0, block.z]}
        >
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial
            color="#c9a961"
            emissive="#9b8b7e"
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

const BackgroundGrid = () => {
  const gridRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.rotation.x = t * 0.05;
    }
  });

  const gridLines = [];
  for (let i = -10; i <= 10; i++) {
    // X-axis lines
    const points1 = [
      new THREE.Vector3(-10, 0, i),
      new THREE.Vector3(10, 0, i),
    ];
    gridLines.push(points1);

    // Z-axis lines
    const points2 = [
      new THREE.Vector3(i, 0, -10),
      new THREE.Vector3(i, 0, 10),
    ];
    gridLines.push(points2);
  }

  return (
    <group ref={gridRef}>
      {gridLines.map((points, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#7a7a8a"
              transparent
              opacity={0.15}
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
};

const HeroAbstract3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [8, 10, 8], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#c9a961" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#9b8b7e" />
        <pointLight position={[0, 15, 0]} intensity={2} color="#ffffff" />
        <fog attach="fog" args={['#1a1a1a', 5, 30]} />

        <BackgroundGrid />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </div>
  );
};

export default HeroAbstract3D;
