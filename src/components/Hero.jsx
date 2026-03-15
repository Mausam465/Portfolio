import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import HeroMoonBackground from './HeroMoonBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-[#1a1a1a] overflow-hidden">
      
      <HeroMoonBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 md:col-span-1 md:translate-x-12 -translate-y-12"
        >
          <h2 className="text-xl md:text-2xl text-[#c9a961] font-semibold">Hello, I'm</h2>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#e8e8e8]">
            Mausam <span className="text-gradient">Kumari</span>
          </h1>
          <h3 className="text-xl md:text-2xl text-[#b8b8c8] font-medium h-[40px]">
            <span className="typewriter-text">Web Developer &amp; Problem Solver</span>
          </h3>
          <p className="text-[#a8a8b8] text-base md:text-lg leading-relaxed">
          I design and build modern, scalable, and responsive web <br>
          </br>applications using technologies like React, JavaScript, and <br></br>Node.js. I focus on creating clean, efficient, and maintainable <br>
          </br>code that delivers seamless user experiences across different <br></br>
          devices and platforms.Passionate about turning ideas into real-<br></br>
          world digital products, I enjoy solving complex problems, exploring <br>
          </br>new technologies, and continuously improving my development skills.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
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

        {/* Right: Robot Animation with Image Holder */}
        <div className="flex justify-center items-center md:col-span-1">
          {/* Image Holder - Static Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-80 h-96 rounded-lg overflow-hidden border-2 border-[#c9a961]/40 shadow-[0_0_40px_rgba(201,169,97,0.2)] flex items-center justify-center bg-gradient-to-br from-[#242424] to-[#1a1a1a] translate-x-48 -mt-20 z-10"
          >
            <img 
              src="https://ik.imagekit.io/vzxwc5boa/ac1a4c07-7ccc-4870-9f98-0668d6807b3f.jpg" 
              alt="Portfolio" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Robot Image - Moving Around Holder (Right Side, then Left Side, Looping) */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [1, 1, 1, 1, 1, 1, 1, 1],
              x: [0, 140, 140, 0, -140, -140, 0, 0],
              y: [0, 80, 150, 180, 150, 80, 0, 0]
            }}
            transition={{ 
              duration: 8,
              times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1],
              repeat: Infinity,
              delay: 0.5
            }}
            className="relative w-40 h-40 flex items-center justify-center z-20"
          >
            <img 
              src="https://ik.imagekit.io/vzxwc5boa/pngtree-whimsical-flying-mascot-drone-adventure-awaits-png-image_17840314.webp?updatedAt=1773521239635" 
              alt="Robot Mascot" 
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70"
      >
        <span className="text-sm mb-2 text-[#9b8b7e]">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-[#9b8b7e] rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#9b8b7e] rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
