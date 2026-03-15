import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroMoonBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Geometric shapes with rotation animations
  const shapes = [
    { id: 1, size: 200, delay: 0, duration: 10, color: '#c9a961', rotation: 1 },
    { id: 2, size: 280, delay: 0.3, duration: 14, color: '#9b8b7e', rotation: -1 },
    { id: 3, size: 140, delay: 0.6, duration: 8, color: '#c9a961', rotation: 1 },
    { id: 4, size: 160, delay: 1, duration: 12, color: '#a89968', rotation: -1 },
  ];

  const bTechSubjects = [
    'Data Structures',
    'Algorithms',
    'Database',
    'Web Dev',
    'Cloud Computing',
    'Machine Learning',
  ];

  // Additional floating elements for depth
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #242424 50%, #1a1a1a 100%)',
    }}>
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, rgba(201, 169, 97, 0.05) 0%, transparent 70%)',
      }} />

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Orbiting Shapes */}
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            initial={{ rotate: 0 }}
            animate={{ rotate: shape.rotation * 360 }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: shape.delay,
            }}
            className="absolute"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              border: `2px solid ${shape.color}`,
              borderRadius: shape.id % 2 === 0 ? '50%' : '0%',
              opacity: 0.12,
              transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
              transition: 'transform 0.4s ease-out',
              boxShadow: `0 0 30px rgba(201, 169, 97, 0.1)`,
            }}
          />
        ))}

        {/* Center Core Element - Enhanced */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute"
          style={{
            width: '100px',
            height: '100px',
            border: '3px solid #c9a961',
            borderRadius: '50%',
            boxShadow: '0 0 60px rgba(201, 169, 97, 0.4), inset 0 0 60px rgba(201, 169, 97, 0.15), 0 0 100px rgba(201, 169, 97, 0.2)',
            background: 'radial-gradient(circle, rgba(201, 169, 97, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Inner Core Ring */}
        <motion.div
          animate={{
            rotate: 360,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
          style={{
            width: '60px',
            height: '60px',
            border: '1px dashed rgba(201, 169, 97, 0.3)',
            borderRadius: '50%',
          }}
        />

        {/* Floating Particles with BTech Subjects */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <motion.div
            key={`particle-${idx}`}
            animate={{
              x: Math.cos((idx / 6) * Math.PI * 2) * 180,
              y: Math.sin((idx / 6) * Math.PI * 2) * 180,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute flex flex-col items-center gap-3"
          >
            {/* Glow Halo */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 15px rgba(201, 169, 97, 0.3)',
                  '0 0 30px rgba(201, 169, 97, 0.6)',
                  '0 0 15px rgba(201, 169, 97, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#c9a961',
                borderRadius: '50%',
                opacity: 0.8,
              }}
            />
            
            {/* BTech Subject Text */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-xs md:text-sm font-bold whitespace-nowrap"
              style={{
                color: '#c9a961',
                textShadow: '0 0 15px rgba(201, 169, 97, 0.7), 0 2px 10px rgba(0, 0, 0, 0.5)',
                letterSpacing: '0.5px',
                fontWeight: '600',
              }}
            >
              {bTechSubjects[idx]}
            </motion.div>
          </motion.div>
        ))}

        {/* Ambient Particles */}
        {floatingElements.map((elem) => (
          <motion.div
            key={`ambient-${elem.id}`}
            animate={{
              x: Math.cos((elem.id / 12) * Math.PI * 2) * (200 + Math.sin(elem.id) * 50),
              y: Math.sin((elem.id / 12) * Math.PI * 2) * (200 + Math.cos(elem.id) * 50),
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: elem.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: elem.delay,
            }}
            className="absolute rounded-full"
            style={{
              width: `${elem.size}px`,
              height: `${elem.size}px`,
              backgroundColor: '#c9a961',
              boxShadow: `0 0 ${elem.size * 2}px rgba(201, 169, 97, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(201, 169, 97, 0.02) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(155, 139, 126, 0.02) 0%, transparent 50%)',
      }} />
    </div>
  );
};

export default HeroMoonBackground;