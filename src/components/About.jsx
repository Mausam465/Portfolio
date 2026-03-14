import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const journey = [
    { year: '2023', text: 'Started my web development journey with foundational HTML, CSS, and JS.' },
    { year: '2024', text: 'Mastered React.js and began building full-stack applications.' },
    { year: '2025', text: 'Won multiple hackathons and contributed significantly to Open Source.' },
    { year: 'Present', text: 'Creating immersive web experiences with modern toolings and 3D libraries.' }
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e2e8f0]"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Journey Path Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Hi, I'm Mausam Kumari, a passionate Web Developer focused on building extremely performant, modern, and engaging user interfaces. I love combining robust logic with an eye for stunning design aesthetics.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-[#38bdf8]">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <div className="w-24 font-bold text-[#38bdf8] text-xl shrink-0">{item.year}</div>
                  <div className="text-slate-400 border-l-2 border-[#0ea5e9]/30 pl-4 py-1">{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Photo Wrapper */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#0ea5e9]/50 rounded-2xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#38bdf8]/50 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative aspect-[4/5] bg-slate-800 rounded-2xl overflow-hidden glass z-10 flex flex-col p-1 shadow-[0_0_30px_rgba(56,189,248,0.1)] border-white/5">
                <img 
                  src="/images/profile.jpg" 
                  alt="Mausam Kumari" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
