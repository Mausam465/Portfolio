import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';

const FloatingSkill = ({ position, skill, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += speed * 0.01;
    meshRef.current.rotation.y += speed * 0.015;
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.3;
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial
          color="#8b6f47"
          emissive="#a0826d"
          emissiveIntensity={0.8}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      <Text
        position={[0, 0, 0.3]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1}
        overflowWrap="break-word"
      >
        {skill}
      </Text>
    </group>
  );
};

const Skills3DScene = () => {
  const groupRef = useRef();
  const allSkills = [
    'HTML/CSS',
    'JavaScript',
    'React.js',
    'Tailwind',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Git',
    'Figma',
    'Vite',
    'Three.js',
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.1;
    groupRef.current.rotation.y = t * 0.15;
  });

  // Position skills in a sphere
  const positions = allSkills.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / allSkills.length);
    const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
    const radius = 3;

    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.cos(phi),
      radius * Math.sin(theta) * Math.sin(phi),
    ];
  });

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh>
        <octahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial
          color="#8b6f47"
          emissive="#a0826d"
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting skill boxes */}
      {allSkills.map((skill, idx) => (
        <FloatingSkill
          key={idx}
          position={positions[idx]}
          skill={skill}
          speed={1 + idx * 0.2}
        />
      ))}

      {/* Wireframe sphere */}
      <mesh>
        <icosahedronGeometry args={[3.3, 2]} />
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

const Skills3D = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#faf8f3']} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#8b6f47" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a0826d" />
        <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <Skills3DScene />
        </Float>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Skills3D;
