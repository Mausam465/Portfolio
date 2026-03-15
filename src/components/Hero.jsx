import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const shapesContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  // Handle mouse movement for 3D shapes
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePos({ x, y });

      if (shapesContainerRef.current) {
        shapesContainerRef.current.style.transform = `perspective(1200px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll for text visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (textContainerRef.current) {
        const opacity = Math.min(window.scrollY / 200, 1);
        textContainerRef.current.style.opacity = opacity;
        textContainerRef.current.style.transform = `translateY(${Math.max(0, 100 - window.scrollY / 2)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-[#1a1a1a] overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(201, 169, 97, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 min-h-screen flex items-center justify-center">
        {/* Main Section - Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 -mt-16 md:-mt-24" style={{ perspective: '1200px' }}>
          
          {/* Futuristic Gyroscope - Left Side */}
          <motion.div
            ref={shapesContainerRef}
            className="relative flex items-center justify-center lg:order-1 lg:ml-20"
            style={{
              width: '500px',
              height: '500px',
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              flexShrink: 0,
            }}
          >
            {/* Outer Ring */}
            <motion.div
              animate={{ rotateX: 360, rotateY: 180 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full shadow-[0_0_30px_rgba(201,169,97,0.2)]"
              style={{ 
                width: '380px', 
                height: '380px', 
                border: '1px solid rgba(201, 169, 97, 0.3)',
                borderTop: '4px solid #c9a961',
                borderBottom: '4px solid #c9a961' 
              }}
            />

            {/* Middle Ring */}
            <motion.div
              animate={{ rotateX: 180, rotateY: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full"
              style={{ 
                width: '300px', 
                height: '300px', 
                border: '1px dashed rgba(155, 139, 126, 0.5)',
                borderLeft: '4px solid #9b8b7e',
                borderRight: '4px solid #9b8b7e'
              }}
            />

            {/* Inner Ring - Glowing */}
            <motion.div
              animate={{ rotateX: -360, rotateZ: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full shadow-[0_0_50px_rgba(201,169,97,0.4)]"
              style={{ 
                width: '220px', 
                height: '220px', 
                border: '2px solid rgba(201, 169, 97, 0.2)',
                borderTop: '6px solid #c9a961',
              }}
            />

            {/* Core Sphere */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bg-gradient-to-br from-[#c9a961] to-[#5a4a2a] rounded-full shadow-[0_0_80px_rgba(201,169,97,0.6)] flex items-center justify-center"
              style={{ width: '80px', height: '80px' }}
            >
              <div className="w-full h-full rounded-full opacity-50 bg-[#c9a961] animate-ping" />
            </motion.div>
            
            {/* Orbiting Particles */}
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ rotateZ: 360, rotateX: [0, 45, 0] }}
                transition={{ duration: 6 + i * 3, repeat: Infinity, ease: "linear" }}
                className="absolute flex items-center justify-center pointer-events-none"
                style={{ width: `${280 + i * 80}px`, height: `${280 + i * 80}px` }}
              >
                  <div className="w-3 h-3 bg-[#e8e8e8] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] absolute top-0" />
              </motion.div>
            ))}

            {/* BTech CSE Floating Text */}
            {['Data Structures', 'Algorithms', 'DBMS', 'OS', 'CN', 'AI/ML', 'Cloud', 'Web Dev'].map((subject, i) => (
              <div
                key={subject}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '0px',
                  height: '0px',
                }}
              >
                <motion.div
                  className="absolute"
                  style={{
                    width: '440px',
                    height: '440px',
                    top: '-220px',
                    left: '-220px',
                    pointerEvents: 'none',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: -i * (50 / 8) }}
                >
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: -i * (50 / 8) }}
                            className="bg-black/60 border border-[#c9a961]/30 backdrop-blur-sm px-3 py-1 rounded-full text-[#c9a961] text-xs font-bold whitespace-nowrap shadow-[0_0_15px_rgba(201,169,97,0.3)]"
                        >
                            {subject}
                        </motion.div>
                    </div>
                </motion.div>
              </div>
            ))}

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,169,97,0.05)_0%,transparent_70%)] pointer-events-none" />

          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            ref={textContainerRef}
            className="flex flex-col space-y-6 text-center lg:text-left max-w-2xl lg:order-2"
            style={{
              opacity: 0,
              pointerEvents: scrollY > 50 ? 'auto' : 'none',
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl text-[#c9a961] font-semibold">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#e8e8e8]">
              Mausam <span className="text-gradient">Kumari</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-[#b8b8c8] font-medium">
              Web Developer & Problem Solver
            </h3>
            <p className="text-[#a8a8b8] text-base md:text-lg leading-relaxed">
              I design and build modern, scalable, and responsive web applications using technologies like React, JavaScript, and Node.js. I focus on creating clean, efficient, and maintainable code that delivers seamless user experiences across different devices and platforms. Passionate about turning ideas into real-world digital products, I enjoy solving complex problems, exploring new technologies, and continuously improving my development skills.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#c9a961] to-[#9b8b7e] text-[#0f0f1e] font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_20px_rgba(201,169,97,0.3)] hover:shadow-[0_4px_30px_rgba(201,169,97,0.4)]"
              >
                Download Resume <FiDownload />
              </a>

              <div className="flex items-center gap-4 text-2xl">
                <a href="https://github.com/Mausam465" target="_blank" rel="noreferrer" className="text-[#9b8b7e] hover:text-[#c9a961] transition-colors"><FaGithub /></a>
                <a href="https://linkedin.com/in/mausam-kumari" target="_blank" rel="noreferrer" className="text-[#9b8b7e] hover:text-[#c9a961] transition-colors"><FaLinkedin /></a>
                <a href="mailto:mausam@example.com" className="text-[#9b8b7e] hover:text-[#c9a961] transition-colors"><FaEnvelope /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
