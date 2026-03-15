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
    <section id="about" className="py-24 relative z-10 bg-[#242424]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#e8e8e8]"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#c9a961] mx-auto rounded-full shadow-[0_0_10px_rgba(201,169,97,0.3)]"></div>
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
            <p className="text-[#a8a8b8] text-lg leading-relaxed mb-8">
              Hi, I'm Mausam Kumari, a passionate Web Developer focused on building extremely performant, modern, and engaging user interfaces. I love combining robust logic with an eye for stunning design aesthetics.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-[#c9a961]">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <div className="w-24 font-bold text-[#c9a961] text-xl shrink-0">{item.year}</div>
                  <div className="text-[#a8a8b8] border-l-2 border-[#9b8b7e]/30 pl-4 py-1">{item.text}</div>
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
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#9b8b7e]/50 rounded-2xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9a961]/50 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative aspect-[4/5] bg-[#242424] rounded-2xl overflow-hidden glass z-10 flex flex-col p-1 shadow-[0_0_30px_rgba(201,169,97,0.1)] border-[#c9a961]/5">
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
