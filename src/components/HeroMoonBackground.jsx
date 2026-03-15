import React from 'react';
import { motion } from 'framer-motion';

const HeroMoonBackground = () => {
  const codeSnippets = [
    'const user = { } ;',
    'function buildWeb( ) { }',
    'import React from "react"',
    'async await fetch( )',
    'document.querySelector( )',
    'const state = useState( )',
    'useEffect( ( ) => { } )',
    'const [data, setData] = useState( )',
    'return <Component />',
    'export default App',
    '.then( ).catch( )',
    'git push origin main',
    'npm install --save',
    '<div className="box"></div>',
    'CSS Grid & Flexbox',
  ];

  const floatingCode = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    text: codeSnippets[i % codeSnippets.length],
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 15,
    startX: Math.random() * 100 - 50,
    startY: Math.random() * 100 - 50,
    size: Math.random() * 0.5 + 0.6,
  }));

  return (
    <div className="absolute inset-0 z-0 bg-[#1a1a1a] overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(201, 169, 97, 0.05) 0%, transparent 60%)',
        }}
      />

      {/* Floating Code Snippets */}
      {floatingCode.map((code) => (
        <motion.div
          key={code.id}
          initial={{
            x: code.startX * 100,
            y: code.startY * 100,
            opacity: 0,
          }}
          animate={{
            x: [code.startX * 100, code.startX * 100 + 200, code.startX * 100],
            y: [code.startY * 100, code.startY * 100 - 300, code.startY * 100],
            opacity: [0, 0.3, 0.5, 0.3, 0],
          }}
          transition={{
            duration: code.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: code.delay,
          }}
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            style={{
              fontSize: `${12 * code.size}px`,
              fontFamily: '"Courier New", monospace',
              color: '#c9a961',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              textShadow: '0 0 20px rgba(201, 169, 97, 0.4)',
              letterSpacing: '1px',
            }}
          >
            {code.text}
          </div>
        </motion.div>
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            x: Math.cos((i / 20) * Math.PI * 2) * (150 + Math.sin(i) * 100),
            y: Math.sin((i / 20) * Math.PI * 2) * (150 + Math.cos(i) * 100),
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            width: '4px',
            height: '4px',
            backgroundColor: '#c9a961',
            borderRadius: '50%',
            boxShadow: '0 0 15px rgba(201, 169, 97, 0.5)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Center Glowing Circle */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '2px solid #c9a961',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 60px rgba(201, 169, 97, 0.3), inset 0 0 60px rgba(201, 169, 97, 0.1)',
        }}
      />

      {/* Inner Rotating Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px dashed rgba(201, 169, 97, 0.2)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Outer Pulsing Ring */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '1px solid rgba(201, 169, 97, 0.3)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default HeroMoonBackground;