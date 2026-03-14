import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Hero3D from './Hero3D';
import HeroProfile3D from './HeroProfile3D';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-black">
      <div className="absolute inset-0 z-0 opacity-50">
        <Hero3D />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-xl md:text-2xl text-[#38bdf8] font-semibold">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#e2e8f0]">
            Mausam <span className="text-gradient">Kumari</span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-300 font-medium h-[40px]">
            <span className="typewriter-text">Web Developer &amp; Innovator</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            I build modern, responsive, and beautifully interactive web experiences using cutting-edge technologies and creative design.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] hover:shadow-[0_4px_30px_rgba(56,189,248,0.6)]"
            >
              Download Resume <FiDownload />
            </a>
            
            <div className="flex items-center gap-4 text-2xl">
              <a href="https://github.com/Mausam465" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38bdf8] transition-colors"><FaGithub /></a>
              <a href="https://linkedin.com/in/mausam-kumari" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#38bdf8] transition-colors"><FaLinkedin /></a>
              <a href="mailto:mausam@example.com" className="text-slate-400 hover:text-[#38bdf8] transition-colors"><FaEnvelope /></a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: 3D Scene */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border border-[#38bdf8]/20 shadow-[0_0_60px_rgba(56,189,248,0.15)]">
            <HeroProfile3D />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70"
      >
        <span className="text-sm mb-2 text-slate-400">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
